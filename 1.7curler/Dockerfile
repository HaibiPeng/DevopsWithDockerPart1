# 1.7 curler
# (base) jdszsl722:1.6docker-clock jdszsl$ docker build -t curler .
# (base) jdszsl722:1.6docker-clock jdszsl$ docker run curler

FROM ubuntu:16.04

WORKDIR /mydir

RUN apt-get update -y && apt-get -y install curl


COPY scripts.sh .

CMD ["bash", "./scripts.sh"]

