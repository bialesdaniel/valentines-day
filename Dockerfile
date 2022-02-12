FROM node:17-alpine AS builder

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --production

COPY . .
RUN npm run build

FROM nginx:alpine

# Copy our nginx configuration
COPY nginx.conf /etc/nginx/conf.d/configfile.template

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets.
RUN rm -rf *

COPY --from=builder /app/build .

# Define environment variables for Cloud Run
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

# Substitute $PORT variable in config file with the one passed via "docker run"
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
