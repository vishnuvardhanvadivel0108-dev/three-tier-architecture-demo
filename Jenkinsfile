pipeline {
    agent any

    stages {

        stage('Build Docker Containers') {
            steps {
                docker compose down
                docker compose up --build -d
            }
        }

        stage('Check Running Containers') {
            steps {
                sh 'docker ps'
            }
        }

    }
}