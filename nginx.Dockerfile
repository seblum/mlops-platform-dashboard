# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./vue-dashboard/package*.json ./
RUN npm install
COPY ./vue-dashboard/. .
RUN npm run build

ENV ML_PLATFORM_DOMAIN=mlplatform.seblum.me
# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/ /app/main/
# /usr/share/nginx/html
COPY ./vue-dashboard/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]