# Job Finder App
A web-based job search app that fetches job listings through an external API (like Adzuna) especially based in UK. The app is containerized with Docker and can be deployed on multiple web servers with a load balancer.

## FEATURES
1. Search jobs by keywords and location.
2. Display job listings from an external API.
3. Responsive design.
4. Dockerized for easy deployment.

## TECHOLOGIES
1. Frontend: HTML, CSS, JavaScript
2. API: Adzuna API (or similar)
3. Containerization: Docker
4. Load Balancer: NGINX

## SETUP
1. Clone Repository to your local machine:

```bash
git clone https://github.com/utatsineza/Job-finder-App.git
```

2. Navigate to the project directory:

```bash
cd Job-finder-App
```
3. Build  Docker Image:

```bash
docker build -t job-finder-app .
```
4. Run Docker Container:

```bash
docker run -d -p 80:80 --name job-finder-container job-finder-app
```
5. Access the App:
Open 
https://www.webhenriette.tech 
in your browser.

## Docker Image
You can view Image from DockerHub, DockerHub Image:https://hub.docker.com/r/utatsineza/job-finder-app/tags

## Demo video 
 this is the vide that explains how my App works 
 https://screenrec.com/share/alfewtOosY