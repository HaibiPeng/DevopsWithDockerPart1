#How to run the image:
##1.pull the image: docker pull photograhb/note-docker
##2.run the image:
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    photograhb/note-docker
#3.visit: http://localhost:3001/
