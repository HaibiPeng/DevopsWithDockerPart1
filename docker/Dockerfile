FROM ubuntu:18.04 

WORKDIR /mydir 
RUN touch hello.txt 
COPY local.txt .
RUN apt-get update && apt-get install -y wget 
RUN wget http://example.com/index.html
RUN apt-get update && apt-get install -y curl python 
RUN curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl 
RUN chmod a+x /usr/local/bin/youtube-dl 
ENV LC_ALL=C.UTF-8 
ENTRYPOINT ["/usr/local/bin/youtube-dl"] 
