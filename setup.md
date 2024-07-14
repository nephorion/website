## Set the ENV variables
```
export REGION=australia-southeast1
export PROJECT_ID=website-427911
export SERVICE_NAME=website
```

## Create the bucket
```
gcloud storage buckets create gs://${PROJECT_ID} \
  --location=${REGION} \
  --soft-delete-duration=0
gcloud storage buckets update gs://${PROJECT_ID} --web-main-page-suffix=index.html --web-error-page=index.html
gcloud storage cp --recursive build/ gs://${PROJECT_ID}
```