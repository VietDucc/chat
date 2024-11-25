pipeline {
    agent any

    environment {
        // Đặt biến môi trường cho các dịch vụ, ví dụ: tên Docker image
        CLIENT_IMAGE = 'websocket-client'
        SERVER_IMAGE = 'websocket-server'
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clone mã nguồn từ Git
                git 'https://github.com/VietDucc/chat.git'
            }
        }
        
        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker image cho Client và Server
                    sh 'docker build -f Dockerfile.client -t $CLIENT_IMAGE .'
                    sh 'docker build -f Dockerfile.server -t $SERVER_IMAGE .'
                }
            }
        }
        
        stage('Run Docker Compose') {
            steps {
                script {
                    // Chạy Docker Compose để khởi động cả Client và Server
                    sh 'docker-compose up -d --build'
                }
            }
        }
        
        stage('Verify Deployment') {
            steps {
                script {
                    // Kiểm tra nếu server và client đã chạy thành công
                    // Bạn có thể thay thế lệnh này bằng kiểm tra thực tế
                    sh 'docker ps'
                }
            }
        }

        stage('Clean Up') {
            steps {
                script {
                    // Dừng và xóa các container Docker sau khi kiểm tra
                    sh 'docker-compose down'
                }
            }
        }
    }

    post {
        always {
            // Gửi thông báo hoặc cleanup nếu cần
            echo 'Pipeline execution complete!'
        }
    }
}
