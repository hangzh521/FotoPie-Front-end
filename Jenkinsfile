pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    environment {
      ECR_REPO = 'fotopie-fed-uat'
      IMAGE_TAG = 'latest'
      SONARQUBE_PROJECTKEY = 'fotopie-front-end'
      CLUSTER_NAME = 'fotopie-fed-uat-cluster'
      SERVICE_NAME = 'fotopie-fed-uat-service'
      TASK_DEFINITION = 'fotopie-fed-uat'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']], userRemoteConfigs: [[url: 'https://github.com/Go-Husky-FotoPie/FotoPie-Front-end.git']]])
            }
        }

        
        stage('SonarQube Scan') {
            environment {
                sonarqube_token = credentials('sonarqube_token')
                sonarqube_url = credentials('sonarqube_url')
                }
            steps {
             script {
               def scannerHome = tool 'SonarScanner'
               withSonarQubeEnv('SonarQube Server') {
                sh "${scannerHome}/bin/sonar-scanner \
                      -Dsonar.projectKey=$SONARQUBE_PROJECTKEY \
                      -Dsonar.sources=. \
                      -Dsonar.host.url=$sonarqube_url \
                      -Dsonar.login=$sonarqube_token"
                  }
               }
            }
         }

        stage("Quality Gate") {
            steps {
              timeout(time: 2, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
            }
          }
        }

        stage('Build Docker Image') {
            environment {
                BACKEND_API = credentials('BACKEND_API')
                Get_Synonyms_API_Prefix = credentials('Get_Synonyms_API_Prefix')
            }
        
            steps {
              sh 'docker build --build-arg BACKEND_API=$BACKEND_API --build-arg Get_Synonyms_API_Prefix=$Get_Synonyms_API_Prefix -t $ECR_REPO:$IMAGE_TAG .'
            }
        }
        
        stage('Push Docker Image to ECR') {
            environment {
                AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
                AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
                AWS_DEFAULT_REGION = credentials('AWS_DEFAULT_REGION')
                ECR_REGISTRY = credentials('ECR_REGISTRY')
              }
           steps {
                    sh 'aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $ECR_REGISTRY'
                    sh 'docker tag $ECR_REPO:$IMAGE_TAG $ECR_REGISTRY/$ECR_REPO:$IMAGE_TAG'
                    sh 'docker push $ECR_REGISTRY/$ECR_REPO:$IMAGE_TAG'
              }
           }
        
        stage('Update ECS Service') {
            environment {
              AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
              AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
              AWS_DEFAULT_REGION = credentials('AWS_DEFAULT_REGION')
            }
           steps {
                   sh "aws ecs update-service --cluster $CLUSTER_NAME --service $SERVICE_NAME --task-definition $TASK_DEFINITION --force-new-deployment"
            }
         }
      }
    }
 



 