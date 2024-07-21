export REGION=australia-southeast1
export PROJECT_ID=website-427022
export COMMON_PROJECT_ID=common-429401
export SERVICE_NAME=website
gcloud components update
gcloud config unset auth/access_token_file
gcloud auth application-default set-quota-project ${PROJECT_ID} 
gcloud auth application-default login
gcloud auth login

