# Netflix Clone

This project aims to demonstrate various microservices/distributed system concepts by simulating a simplified version of Netflix.
The long-term goal of the project is to exhibit:
- **Microservices architecture**:
    -  Communication protocols:
        - REST
        - Websockets
        - Message Broker (queues)
        - Protobuffs/Streaming
        - gRPC
    - Persistence:
        - SQL/NoSQL/Cloud Storage
        - Database per service
        - Sagas
    - Deployment:
        - Docker
        - Kubernetes
        - ECS
        - Serverless (FaaS)
        - API GW
        - CDN
    - Testing:
        - Unit tests/Interation/e2e tests
        - Performance testing
        - Resliency testing
- **Clean Architecture Principles**
- **CI/CD**
- **Logging/Monitoring/Tracing**
- **Java, Python and TS best practices** 
- **Fully reusable, modern Reactive frontend components**
- **Authentication (oAuth/Cognito)**
- **Emails/Notifications**
- **Payments (via Stripe)**

The app is built using **Java Spring Boot**, **Python FastAPI**, and **TypeScript Node.js**. The app is containerized with Docker and will utilise various deployment methods.

## **Table of Contents**
- [App Overview](#app-overview)
- [Architecture](#architecture)
- [Deploying the Application](#deploying-the-application)
- [Local Backend Deployment](#local-backend-deployment)
- [Frontend Setup](#frontend-setup)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

---

## **App Overview**

Simplified version of netflix...

---

## **Architecture**

The application consists of three backend microservices with REST APIs. Inter-serivce communication will occur over message brokers. Each service is currently deployed as a Kubernetes pod and can scale independently. The services include:
- **User Service** (Java): Handles user management, login, and subscription data.
- **Content Service** (Python): Provides metadata about movies and shows.
- **Streaming Service** (Node.js): Manages video streaming sessions and streaming history.

**Frontend** (NextJS): The frontend interacts with all three services to display user data, content, and handle subscriptions.

### **Diagram**

To do...

---

## **Deploying the Application (Locally)**
 **Pre-requisites**:
   - MacOS/Linux (no Windows instructions yet)
   - Docker installed on your machine.
   
The deployment process is broken into two parts:
1. **Backend Deployment** (via Kubernetes): Refer to the README in the `k8s` directory to deploy the backend locally using Kind (Kubernetes in Docker).
Backend deployment documentation: [K8s README](./k8s/README.md)
2. **Frontend Deployment** (React-based): Steps for setting up the frontend are provided below.

## **Frontend Local Deployment**

The frontend is built using **NextJS** and interacts with the backend microservices. You can run it locally to interact with the backend services deployed in the local K8s cluster.

### **Steps**:
1. Navigate to the **`frontend/`** directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the frontend in your browser:
   ```
   http://localhost:3000
   ```

---

## **Technologies Used**

- **Java Spring Boot**: For the User Service (Java-based backend).
- **Python FastAPI**: For the Content Service (Python-based backend).
- **TypeScript (Node.js)**: For the Streaming Service (Node.js-based backend).
- **React**: Frontend framework for the user interface.
- **Docker**: Containerization of microservices.
- **Kubernetes (Kind)**: Orchestration platform for deploying services.
- **NGINX Ingress**: For handling traffic routing between the frontend and backend services.

---

## **Contributing**

 To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request with a detailed description of your changes.


---

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---
