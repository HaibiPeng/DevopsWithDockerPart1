#1.14
#docker build -t excercise1.14 .
#docker run -d --rm -p 3000:3000 exercise1.14

FROM ruby:2.6.0

EXPOSE 3000

COPY ./rails-example-project/ /usr/src/1.14

WORKDIR /usr/src/1.14

RUN bundle install
RUN apt-get update -y && apt-get -y install nodejs
RUN rails db:migrate

ENTRYPOINT ["rails"]
CMD ["s"]

