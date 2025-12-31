<img width="1920" height="1008" alt="Screenshot 2025-12-31 224036" src="https://github.com/user-attachments/assets/6a559b0c-4aa1-4628-9e0b-96813af91e17" />
<img width="2992" height="1244" alt="image" src="https://github.com/user-attachments/assets/f2182495-8316-46c3-8a84-3304f3d15ec4" />

# Full-Stack Application on Kubernetes

**React (Frontend) + Java Spring Boot (Backend)**

This project demonstrates how a **React frontend** communicates with a **Java Spring Boot backend** deployed on **Kubernetes**, using **Docker images** and **NodePort services**.

---

## 📌 Project Overview

* **Frontend**: React (Vite)
* **Backend**: Java Spring Boot REST API
* **Containerization**: Docker
* **Orchestration**: Kubernetes
* **Service Type**: NodePort
* **Communication**: Axios (HTTP REST)

---

## 🧱 Architecture

```
Browser
   |
   |  (NodePort)
   v
React Frontend Pod
   |
   |  HTTP POST (Axios)
   v
Backend NodePort Service
   |
   v
Spring Boot Backend Pod
```

---

## 🔧 Backend (Java Spring Boot)

### What I did:

1. Created a **Spring Boot REST API**
2. Exposed a POST endpoint (`/test`)
3. Configured the app to listen on port `8080`
4. Enabled CORS for frontend communication
5. Dockerized the application
6. Deployed it on Kubernetes
7. Exposed it using a **NodePort service**

### Key points:

* Backend runs inside a Kubernetes Pod
* NodePort exposes backend to external traffic
* Endpoint is accessible via:

  ```
  
  http://<NODE-IP>:<NODE-PORT>/test
  ```

---

## 🎨 Frontend (React + Vite)

### What I did:

1. Created a React app using Vite
2. Installed Axios for API calls
3. Built UI to send POST request to backend
4. Dockerized the React app
5. Deployed it on Kubernetes
6. Exposed it using NodePort

### Axios configuration:

* Frontend makes a **POST request** to backend NodePort URL
* Example:

  ```
  http://<NODE-IP>:30001/test
  ```

---

## 🔗 Communication Between Frontend & Backend

* **Frontend runs in browser**
* **Backend is exposed using NodePort**
* Axios sends HTTP requests directly to Node IP + NodePort
* Kubernetes Service routes traffic to backend pod

⚠️ **Important Note**
ClusterIP service names work **only inside the cluster**.
Since React runs in the browser, backend must be exposed using **NodePort or Ingress**.

---

## 🐳 Docker Strategy

### Frontend:

* Dependencies installed at **image build time**
* Application started using `npm run dev -- --host`

### Backend:

* Java JAR packaged using Maven
* JAR executed inside container

⚠️ No dependency installation happens inside running containers.

---

## ☸️ Kubernetes Concepts Used

* **Deployment**

  * Manages Pods
  * Handles restarts and scaling
* **Service (NodePort)**

  * Exposes application externally
* **Labels & Selectors**

  * Connect Services to Pods
* **Pod Networking**

  * Internal pod-to-pod communication
  * External access via NodePort

---

## 🧪 Debugging & Verification

### Backend health check:

```bash
curl -X POST http://<NODE-IP>:30001/test
```

### Inside pod verification:

```bash
curl localhost:8080/test
```

### Kubernetes checks:

```bash
kubectl get pods
kubectl get svc
kubectl describe svc <service-name>
kubectl logs <pod-name>
```

---

## 🧠 Key Learnings

* NodePort is required for browser → backend access
* Service selectors must match pod labels
* TargetPort must match containerPort
* POST vs GET mismatch leads to `405 Method Not Allowed`
* `ERR_NETWORK` usually means backend is not reachable
* Dependencies must be installed during Docker image build

---

## ✅ Final Outcome

✔ React frontend successfully communicates with Java backend
✔ Kubernetes handles deployment and networking
✔ Application accessible from browser
✔ Clean separation of frontend and backend

---

## 📎 Notes

* YAML manifests are already included in the repository
* This project focuses on **learning Kubernetes networking and deployment**
* Can be extended using **Ingress**, **NGINX**, or **LoadBalancer**

