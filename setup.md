## Set the ENV variables
```
export REGION=australia-southeast1
export PROJECT_ID=website-427022
export COMMON_PROJECT_ID=common-429401
export SERVICE_NAME=website
gcloud auth application-default set-quota-project ${PROJECT_ID} 
gcloud config set project ${PROJECT_ID}
```

## Create the bucket
```
gcloud storage buckets create gs://${PROJECT_ID} \
  --location=${REGION} \
  --soft-delete-duration=0
gcloud storage buckets update gs://${PROJECT_ID} --web-main-page-suffix=index.html --web-error-page=index.html
gcloud storage cp --recursive build/** gs://${PROJECT_ID}
```

## Add common website-sa access to bucket 
```
gcloud storage buckets add-iam-policy-binding gs://${PROJECT_ID} \
  --member=allUsers \
  --role="roles/storage.objectViewer"
```



