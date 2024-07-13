

Cloud Native. AI Augmented. Code Fluent. Human First.

In the neon-drenched corridors of the digital sprawl, we fuse the relentless power of cloud architecture with the ethereal whispers of AI, sculpting code that's both elegant and enigmatic. Every line, every function is designed with the human experience at its core, bridging the divide between cold silicon and warm flesh. This isn't just technology—it's a revolution. Plug in, sync up, and let’s co-create the future. Hit us up, and let's craft the extraordinary.





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