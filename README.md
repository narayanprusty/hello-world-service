# Getting Started

```
# Install dependencies
npm install

# Start development live-reload server
npm run dev

# Start production server:
npm start
```

# Docker Support

```
# Build your docker
docker build -t hello-world .

# run your docker
docker run -p 4000:4000 hello-world
```

# Kubernetes Deployment and Service

```
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: hello-world
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: hello-world
    spec:
      containers:
      - name: hello-world
        image: narayanprusty/hello-world-service
        imagePullPolicy: Always
        ports:
        - containerPort: 4000
---
kind: Service
apiVersion: v1
metadata:
  name: hello-world
spec:
  ports:
    - name: api
      port: 4000
  selector:
      app: hello-world
```