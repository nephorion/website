# Setup dev environment
```
source dev_setup.sh
```

```
npm run build
```

```
gcloud storage cp --recursive build/** gs://${PROJECT_ID}
```





# Set the project
gcloud config set project ${GOOGLE_CLOUD_PROJECT}

# Set the region
gcloud config set region ${GOOGLE_CLOUD_PROJECT}

# Create a bucket
gcloud storage buckets create gs://${GOOGLE_CLOUD_PROJECT}
gcloud storage buckets create gs://${GOOGLE_CLOUD_PROJECT} --location=${REGION}


# Copy the files to the bucket
gcloud storage cp *.html gs://${GOOGLE_CLOUD_PROJECT}

# Set the spacial pages
gcloud storage buckets update gs://${GOOGLE_CLOUD_PROJECT} --web-main-page-suffix=index.html --web-error-page=404.html

# Set the bucket to public visible
gcloud storage buckets add-iam-policy-binding gs://${GOOGLE_CLOUD_PROJECT} --member=allUsers --role=roles/storage.objectViewer