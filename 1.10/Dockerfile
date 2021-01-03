#1.10
#docker build -t excercise1.10 .
#docker run -d --rm -p 5000:5000 excercise1.10

FROM ubuntu:16.04 

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs

EXPOSE 5000

WORKDIR /usr/src/app
COPY ./frontend-example-docker/ ./
RUN node -v && npm -v
RUN npm install
RUN npm audit fix
RUN npm install -g serve

ENTRYPOINT ["npm"] 
CMD ["start"]
