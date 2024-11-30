# Job Finder App
A web-based job search app that fetches job listings through an external API (like Adzuna). The app is containerized with Docker and can be deployed on multiple web servers with a load balancer.

## FEATURES
 Search jobs by keywords and location.
 Display job listings from an external API.
 Responsive design.
 Dockerized for easy deployment.

## TECHOLOGIES
 Frontend: HTML, CSS, JavaScript
    API: Adzuna API (or similar)
        Containerization: Docker
            Load Balancer: NGINX

## SETUP
1. Clone Repository to your local machine:

``` bash
git clone https://github.com/utatsineza/Job-finder-App.git

## 2. Navigate to the project directory:
cd Job-finder-App

## 3. Build  Docker Image:
docker build -t job-finder-app .

## 4. Run Docker Container:
docker run -d -p 80:80 --name job-finder-container job-finder-app

## 5. Access the App:
Open http://localhost in your browser.


## Docker Image
You can view Image from DockerHub, DockerHub Image:https://hub.docker.com/r/utatsineza/job-finder-app/tags