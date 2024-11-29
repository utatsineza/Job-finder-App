Job Finder App
A web-based job search app that fetches job listings through an external API (like Adzuna). The app is containerized with Docker and can be deployed on multiple web servers with a load balancer.

Features
Search jobs by keywords, location, etc.
Display job listings from an external API.
Responsive design.
Dockerized for easy deployment.

TECHOLOGIES
Frontend: HTML, CSS, JavaScript
API: Adzuna API (or similar)
Containerization: Docker
Load Balancer: NGINX

SETUP
Clone Repository

git clone https://github.com/yourusername/Job-finder-App.git
cd Job-finder-App

Build & Run Locally
1.Build Docker Image:
docker build -t job-finder-app .
2.Run Container:
docker run -d -p 80:80 --name job-finder-container job-finder-app
Access the App:
Open http://localhost in your browser.


Docker Image
You can view Image from DockerHub, DockerHub Image:https://hub.docker.com/r/utatsineza/job-finder-app/tags