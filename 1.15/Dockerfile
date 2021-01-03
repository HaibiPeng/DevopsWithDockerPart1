#1.15
#docker build -t deno-chat .
#docker run -d --rm -p 7777:7777 deno-chat

FROM debian:stable-slim

ENV DENO_VERSION=1.6.2
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -qq update \
 && apt-get -qq install -y --no-install-recommends curl ca-certificates unzip \
 && curl -fsSL https://github.com/denoland/deno/releases/download/v${DENO_VERSION}/deno-x86_64-unknown-linux-gnu.zip \
         --output deno.zip \
 && unzip deno.zip \
 && rm deno.zip \
 && chmod 755 deno \
 && mv deno /usr/bin/deno \
 && apt-get -qq remove --purge -y curl ca-certificates unzip \
 && apt-get -y -qq autoremove \
 && apt-get -qq clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN useradd --uid 1993 --user-group deno \
 && mkdir /deno-dir/ \
 && chown deno:deno /deno-dir/

ENV DENO_DIR /deno-dir/
ENV DENO_INSTALL_ROOT /usr/local

COPY ./deno-docker-master/_entry.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod 755 /usr/local/bin/docker-entrypoint.sh

EXPOSE 7777

COPY ./deno-names-hb-main/errornamesdploy /usr/src/1.15

WORKDIR /usr/src/1.15

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["run", "app.js"]


