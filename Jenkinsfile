pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = "${env.AWS_DEFAULT_REGION}"
        BACKEND_API = "${env.BACKEND_API}"
        BACKEND_PORT = "${env.BACKEND_PORT}"
    }

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Checkout') {
            steps {
                // Get source code from  GitHub repository
                git branch:'Do-06-Hang', url:'https://github.com/hangzh521/FotoPie-Front-end.git'
            }
        }

        stage('Install Dependencies') {
            steps {
               sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Export') {
            steps {
                sh 'npm run export'
                sh 'ls -l out'
            }
        }

        stage('Deploy to S3') {
            steps {
                withAWS(credentials: 'my-aws-credentials',
                        string(credentialsId: 'AWS_DEFAULT_REGION', variable: 'AWS_DEFAULT_REGION'),
                        string(credentialsId: 'BACKEND_API', variable: 'BACKEND_API'),
                        string(credentialsId: 'BACKEND_PORT', variable: 'BACKEND_PORT')) {
                    sh "aws s3 cp /var/lib/jenkins/workspace/aws-p3/out s3://www.hangzh.click/ --recursive"

                }
            }
        }
    }
}