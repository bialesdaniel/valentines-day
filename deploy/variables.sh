#!/usr/bin/env bash

########### VARIABLES ##############
GCP_PROJECT="valentines-day-341020"
SERVICE_NAME="valentines-day"
REGION="us-east1"

###### GENERATED VARIABLES #########
VERSION="$(npm run env | grep npm_package_version | sed 's/npm_package_version=//g')"
IMAGE_NAME="gcr.io/$GCP_PROJECT/$SERVICE_NAME"
IMAGE_NAME_VERSION="$IMAGE_NAME:$VERSION"
IMAGE_NAME_LATEST="$IMAGE_NAME:latest"