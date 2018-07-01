# express-app-docker
Express App on Docker

[![Open in Cloud Shell](http://gstatic.com/cloudssh/images/open-btn.svg)](https://console.cloud.google.com/cloudshell/open?git_repo=https%3A%2F%2Fgithub.com%2FPaganWinter%2Fexpress-app-docker&page=shell)

### Build Docker Image:
`docker build -t gcr.io/<project-name>/<image-name:version> .`

### Test Docker Image:
`docker run -it --rm -p 8080:8080 gcr.io/<project-name>/<image-name:version>`

### Push Docker Image to GCR:
`gcloud docker -- push gcr.io/<project-name>/<image-name:version>`

### Create Kubernetes Cluster, and connect:
`gcloud container clusters create <cluster-name>`
`gcloud container clusters get-credentials <cluster-name>`

### Run Kubernetes Deployment:
`kubectl run <deployment-name> --image gcr.io/<project-name>/<image-name:version> --port 8080`

### Expose Kubernetes Service:
`kubectl expose deployment <deployment-name> --type "LoadBalancer"`

### View Kubernetes Deployment/Service (to get ext IP):
`kubectl get service <deployment-name>`

### Delete Kubernetes Deployment and Service:
`kubectl delete deployment <deployment-name>`
`kubectl delete svc <deployment-name>`


### References:
- https://medium.com/google-cloud/deploying-your-nodejs-app-with-docker-and-kubernetes-on-gcp-5dee8df5d896
- https://medium.com/google-cloud/introduction-to-google-container-builder-dbe6645f9421
- https://console.cloud.google.com/cloudshell/


