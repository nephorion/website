gcloud storage rsync -r build/ gs://website-427022/
gcloud compute url-maps invalidate-cdn-cache hydra-urlmap --path "/*" --project=central-487706

