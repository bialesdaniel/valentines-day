#!/usr/bin/env bash

######## IMPORT VARIABLES ##########
source $(dirname $0)/variables.sh

########## CLEANUP GCR #############
gcloud container images delete "$IMAGE_NAME_LATEST" \
   --force-delete-tags \
   --quiet

####### CLEANUP Cloud RUn ##########
gcloud run services delete $SERVICE_NAME \
  --project $GCP_PROJECT \
  --platform managed \
  --region $REGION