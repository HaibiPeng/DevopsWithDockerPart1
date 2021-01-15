#1.15 a simple project based on deno
#docker-compose up --build
#docker image tag 115_app photograhb/deno-project
#docker image push photograhb/deno-project
# https://hub.docker.com/repository/docker/photograhb/deno-project

FROM hayd/alpine-deno:latest

EXPOSE 7777

WORKDIR /app

COPY app.js .

CMD [ "run", "--unstable", "--watch", "--allow-net", "--allow-env", "app.js" ]


