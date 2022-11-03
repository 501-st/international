FROM node:16-alpine as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install
# RUN npm install react-scripts@3.0.1 -g

COPY ./ /app/
RUN npm run build
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.19

COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/public/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
