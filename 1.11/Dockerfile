#1.11
#docker build -t excercise1.11 .
#docker run -d --rm -p 8000:8000 excercise1.11
#(base) jdszsl722:1.11 jdszsl$ docker exec -it zealous_mayer bash
#root@b8304b0a4d09:/usr/src/app# ls
#README.md  config.js  index.js  logs.txt  node_modules  package-lock.json  package.json  prettier.config.js  server
#root@b8304b0a4d09:/usr/src/app# cat logs.txt
#
#1/3/2021, 1:30:08 PM: Connection received in root
#1/3/2021, 1:32:46 PM: Connection received in root
#(base) jdszsl722:1.11 jdszsl$ docker cp "zealous_mayer://usr/src/app/logs.txt" .

FROM ubuntu:16.04 

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs 

EXPOSE 8000

WORKDIR /usr/src/app
COPY ./backend-example-docker/ ./
RUN npm install
RUN node -v && npm -v
RUN npm audit fix
RUN npm install -g serve
 
ENTRYPOINT ["npm"] 
CMD ["start"]
