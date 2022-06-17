FROM nginx:latest

LABEL maintainer="Oodles Technologies"

RUN  mkdir /opt/test 
RUN  rm /etc/nginx/conf.d/*

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/conf.d/ /etc/nginx/conf.d/

COPY dist/ /usr/share/nginx/html/
