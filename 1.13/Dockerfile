#1.13
#docker build -t excercise1.13 .
#docker run -d --rm -p 8080:8080 excercise1.13

FROM openjdk:8

EXPOSE 8080

COPY ./spring-example-project/ /usr/src/1.13

WORKDIR /usr/src/1.13

RUN ./mvnw package

ENTRYPOINT ["java", "-jar"] 
CMD ["./target/docker-example-1.1.3.jar"]

