FROM nginx:1.17.1

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./app /usr/share/nginx/html

EXPOSE 80