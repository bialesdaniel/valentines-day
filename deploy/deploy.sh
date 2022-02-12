#!/usr/bin/env bash

######## IMPORT VARIABLES ##########
source $(dirname $0)/variables.sh

############# BUILD ################
echo "Create Docker image via 'Cloud Build' ..."
gcloud builds submit \
  --tag "$IMAGE_NAME_VERSION" \
  --project $GCP_PROJECT
  $(dirname $0)/../Dockerfile

echo "Add tags '$IMAGE_NAME_LATEST' and '$IMAGE_NAME_VERSION' to docker image..."
gcloud container images add-tag "$IMAGE_NAME_VERSION" $IMAGE_NAME_LATEST --quiet

########### DEPLOYMENT #############
echo "Deploying Cloud Run Service '$SERVICE_NAME' to '$GCP_PROJECT' in '$REGION'  🚀 🍀"
gcloud run deploy $SERVICE_NAME \
  --image "$IMAGE_NAME_VERSION" \
  --project $GCP_PROJECT \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated