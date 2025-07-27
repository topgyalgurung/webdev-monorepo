# 🚀 Serverless Architecture with AWS Lambda

This project demonstrates how to deploy a Dockerized Express app on **AWS Lambda** using a **serverless** architecture, **AWS ECR**, and **Lambda container image support**.

---

## 📌 What is Serverless?

- Serverless ≠ no servers. It means **developers don’t manage infrastructure** – cloud providers (like AWS) do.
- Example: Instead of running a kitchen (server), you place an order (function) and a chef (AWS Lambda) prepares it on-demand.
- AWS Lambda is a prime example – your code runs only when needed, reducing costs and scaling automatically.

---

## 🧠 Cloud Hosting Models

| Model      | Description                                                               |
|------------|---------------------------------------------------------------------------|
| IaaS       | Infrastructure as a Service: You manage everything except hardware (e.g., EC2) |
| PaaS       | Platform as a Service: Provider manages infra and OS (e.g., Heroku, Beanstalk) |
| Serverless | No servers to manage, only pay per execution (e.g., Lambda, Firebase Functions) |

---

## ⚙️ How Serverless Apps Work

- **Trigger-based Execution**: Functions wake up in response to **events** (HTTP, S3 upload, schedule, etc.)
- **Cost-efficient**: Pay only for usage – ideal for microservices and event-driven apps.

# 🚀 Deploying to Lambda vs Other Serverless Platforms

When deploying serverless applications, it's important to understand how **AWS Lambda** differs from platforms like **Vercel** or **Netlify**.

---

## 🌐 Vercel / Netlify Style Deployment

- You package your **web server** (e.g., Express or Next.js API routes).
- The platform deploys it as a **microservice** or **mini-container**.
- The server is **always ready** to handle incoming traffic (usually with automatic scaling).

✅ Ideal for:
- Full web frameworks (Next.js, Nuxt, etc.)
- Applications expecting traditional server behavior

---

## ☁️ AWS Lambda Model

- Lambda expects your code to be organized as **individual functions**, not full web servers.
- There’s **no always-on server**. Each function **spins up when triggered** (HTTP request, cron, S3 event, etc.).
- Think of Lambda as a **chef** who:
  - Shows up **only when an order comes in**
  - **Cooks the dish**
  - **Disappears** immediately after the job is done

✅ Ideal for:
- Event-driven systems
- Cost efficiency (pay-per-invocation)
- Fine-grained scalability

---

####  🚀 Using `serverless-http` to Deploy Express on AWS Lambda

When deploying Express apps to **AWS Lambda**, use the `serverless-http` library to bridge the gap between traditional servers and Lambda's function-based model.

## 🛠 Key Concepts

- `serverless-http` wraps your Express app for Lambda:


```js
// lambda.js
const serverless = require("serverless-http");
const app = require("./app");

const handler = serverless(app);
module.exports.handler = handler;
```
In a normal deployment (Render, Google Cloud Run, DigitalOcean, or your own server), you’d start the server using `app.listen(PORT)` at the bottom of this file.
But since we’re deploying to Lambda, you don’t directly start the server here.
This way, your application stays “server-agnostic” – it’s not hardcoded to run on a traditional server. 

- only tweak the entry point (via `lambda.js`) to fit AWS Lambda’s expectations.
  

#### 🐳 Docker Setup

```docker
# dockerfile
FROM node:18-slim AS builder
WORKDIR /app
COPY package.json .
RUN npm i -f
COPY . .

FROM --platform=linux/amd64 amazon/aws-lambda-nodejs
ENV PORT=5000
COPY --from=builder /app/ ${LAMBDA_TASK_ROOT}
COPY --from=builder /app/node_modules ${LAMBDA_TASK_ROOT}/node_modules
COPY --from=builder /app/package.json ${LAMBDA_TASK_ROOT}
COPY --from=builder /app/package-lock.json ${LAMBDA_TASK_ROOT}
EXPOSE 5000
CMD [ "lambda.handler" ]
```

Build the Image
```bash
$ docker build -t demo-lambda-project:latest .
```

Docker will now follow the instructions in your Dockerfile step-by-step. It starts by building your Node.js app (using the lightweight Node 18 image), installs the dependencies, and then copies everything over to an AWS Lambda-ready image. Once done, you have a neat image tagged as demo-lambda-project:latest that’s ready for deployment.

#### 🗃️ Create AWS ECR Repository
	1.	Go to AWS Console → ECR
	2.	Create a repo: lambda-practice
	3.	Make the repo mutable
	4.	Copy the URI:
<account_id>.dkr.ecr.us-east-1.amazonaws.com/lambda-practice

#### 🔐 IAM User & AWS CLI Configuration
	1.	Create IAM user: lambda-practice
	2.	Attach: AmazonEC2ContainerRegistryPowerUser policy
	3.	Create Access Key (save it!)
	4.	Configure CLI:
    
```bash
aws configure --profile lambda
# Enter Access Key, Secret, Region: us-east-1
```
Verify:
```bash
aws sts get-caller-identity --profile lambda
```
#### Authorize local PC to publish images to AWS ECR 
If you haven’t installed the AWS CLI on your machine yet, download and install it using the official guide here:

- [Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
- configure aws cli credentials
  ```bash
  % aws configure --profile lambda  
    ```

  
#### 🔁 Push Docker Image to ECR

- Authenticate
```
aws ecr get-login-password --region us-east-1 --profile lambda | \
docker login --username AWS --password-stdin 785316066410.dkr.ecr.us-east-1.amazonaws.com
```
- build image with correct tag: 
```bash
# Build with correct platform (for Apple Silicon)
docker build --platform=linux/amd64 -t 785316066410.dkr.ecr.us-east-1.amazonaws.com/lambda-practice:latest .
```
-  Push to ECR: 
```
docker push 785316066410.dkr.ecr.us-east-1.amazonaws.com/lambda-practice:latest
```

#### ☁️ Deploy Container Image to AWS Lambda from Image on AWS ECR
- several ways to deploy your function on AWS Lambda:
  - zip file upload
  - direct editing on console
  - container image

##### Container image steps: 
	1.	Go to Lambda Console
	2.	Click Create Function
	3.	Choose Container Image
	4.	Name: lambda-practice
	5.	Select image from ECR
	6.	Configure memory, timeout, and env vars as needed

🌍 Make Lambda Public (Function URL)

To test your app via HTTP:
	1.	Go to Lambda function settings
	2.	Enable Function URL
	3.	Copy the public HTTPS URL

### Enable Access to Your Lambda Function
To make sure your function is up and running and can be triggered properly.

Several ways to invoke a lambda function: 🚀 Triggering Lambda
	•	API Gateway (for REST APIs)
	•	CloudWatch Events (scheduling)
	•	S3 / DynamoDB Events
	•	Function URLs (simple HTTPS endpoints)
	•	AWS CLI / SDK (manual invocation)


Summary

You’re now running a Dockerized Express app on AWS Lambda via ECR — fully serverless, event-driven, and cost-efficient.

🧾 Resources
	•	FreeCodeCamp Article
	•	AWS Lambda Docs
	•	AWS CLI Installation