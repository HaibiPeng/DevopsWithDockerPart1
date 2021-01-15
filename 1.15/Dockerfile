#1.15
#docker build -t deno-project .
#docker run -d --rm -p 7777:7777 deno-project

FROM hayd/alpine-deno:latest

EXPOSE 7777

WORKDIR /app

COPY app.js .

CMD [ "run", "--unstable", "--watch", "--allow-net", "--allow-env", "app.js" ]


