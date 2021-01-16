# pull official base image
FROM node:15.5.1-alpine3.10

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install react-scripts@4.0.1 -g
RUN npm audit fix --force

# add app
COPY . ./

# start app
CMD ["npm", "start"]