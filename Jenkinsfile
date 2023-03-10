pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    environment {
        AWS_DEFAULT_REGION = "ap-southeast-2"
        BACKEND_API = credentials('BACKEND_API')
        BACKEND_PORT = credentials('BACKEND_PORT')
    }

    stages {
        stage('Checkout') {
            steps {
                 git branch: 'Do-06-Hang', url: 'https://github.com/hangzh521/FotoPie-Front-end.git'
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
        
        stage('Deploy') {
            steps {
                withAWS(region: "${env.AWS_DEFAULT_REGION}", credentials: 'my-aws-credentials') {
                    sh "aws s3 sync ./out s3://www.hangzh.click/"
             }
         }
      }
   }
}
