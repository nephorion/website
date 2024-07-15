## Set the ENV variables
```
export REGION=australia-southeast1
export PROJECT_ID=common-429401
gcloud config set project ${PROJECT_ID}
```


## Create Service account in common project : This needs to be moved to common
```
gcloud iam service-accounts create website-sa \
  --display-name="website Service Account"
```