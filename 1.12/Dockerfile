#1.12
#docker build -f Dockerfile_backend -t excercise1.12backend .
#docker run -d --rm -p 8000:8000 excercise1.12backend


FROM ubuntu:16.04 

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs 

EXPOSE 8000
ENV FRONT_URL=http://localhost:5000

WORKDIR /usr/src/app
COPY ./backend-example-docker/ ./
RUN npm install
RUN node -v && npm -v
RUN npm audit fix
RUN npm install -g serve
 
ENTRYPOINT ["npm"] 
CMD ["start"]
