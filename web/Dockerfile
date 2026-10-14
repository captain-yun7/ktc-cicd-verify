FROM nginx:1.29-alpine
RUN apk upgrade --no-cache
COPY default.conf /etc/nginx/conf.d/default.conf
COPY index.html app.js /usr/share/nginx/html/
