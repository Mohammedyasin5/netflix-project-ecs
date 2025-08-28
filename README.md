# Netflix Clone - ECS Deployment Project

## Project Overview

This project is a **Netflix clone** deployed on **AWS ECS (Fargate)** using **Docker** and automated via **Jenkins CI/CD**. The frontend is served via **NGINX**, and the Docker image is stored in **AWS ECR**.

It demonstrates real-world CI/CD deployment of a containerized app on AWS using Jenkins, ECR, and ECS.

---

## Architecture

```
GitHub Repo -> Jenkins -> Docker Build -> Push to ECR -> ECS Fargate -> Browser
```

* **Jenkins:** Automates building Docker images and deploying to ECS.
* **ECR:** Stores Docker images.
* **ECS Fargate:** Runs containerized tasks.
* **Browser:** Accesses the deployed app via public IP or ALB.

---

## Prerequisites

1. **AWS Setup**

   * ECS cluster & service
   * ECR repository
   * IAM role for ECS tasks
   * Public subnets and security groups

2. **Jenkins Setup**

   * Installed with Docker plugin
   * AWS CLI configured
   * Permission to update ECS services

3. **Task Definition**

   * Must be created manually in AWS ECS console **before running Jenkins pipeline**.
   * Example: `netflix-task:v1` (revision number updated manually)

---

## Deployment Steps

1. **Fork or clone the repo**

```bash
git clone https://github.com/Mohammedyasin5/netflix-project-ecs.git
```

2. **Update Jenkinsfile**

   * Set the correct **task definition version** in the pipeline (`TASK_DEFINITION`).
   * Update AWS account ID, region, and ECR repository.

3. **Run Jenkins pipeline**

   * Builds Docker image
   * Pushes image to ECR
   * Updates ECS service with the new task definition (forces new deployment)

4. **Access application**

   * ECS Fargate tasks use dynamic public IPs.
   * Use **AWS ECS console** to check running tasks.
   * Or configure an **Application Load Balancer (ALB)** for a stable URL.

---

## Common Mistakes

* **Task Definition Not Updated:** If you fork the repo, the pipeline does **not create a new task definition automatically**. You must manually create or update it in ECS.
* **Dynamic Public IPs:** Fargate tasks get new public IPs each time. Use an **ALB** for stable access.
* **Security Groups & Subnets:** Must allow inbound traffic on port 80 for HTTP.

---

## Notes

* Each ECS deployment uses a **specific task definition revision**.
* To deploy a new version, increment the task definition revision in ECS and update the Jenkinsfile.
* The Jenkins pipeline automates Docker build and ECS deployment but does not handle task definition creation.

---

## References

* [AWS ECS Fargate](https://docs.aws.amazon.com/ecs/latest/userguide/what-is-fargate.html)
* [AWS ECR](https://docs.aws.amazon.com/ecr/)
* [Jenkins Pipeline](https://www.jenkins.io/doc/book/pipeline/)
