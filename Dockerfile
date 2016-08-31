<<<<<<< HEAD
FROM mhart/alpine-node
 
RUN apk add --update python build-base

# Create app directory
RUN mkdir -p /usr/src/app && echo "Samarth Webapp"
COPY package.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
COPY . /usr/src/app/

EXPOSE 8080

WORKDIR /usr/src/app
=======
FROM mhart/alpine-node
 
RUN apk add --update python build-base

# Create app directory
RUN mkdir -p /usr/src/app && echo "Samarth Webapp"
COPY package.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install
COPY . /usr/src/app/

EXPOSE 8080

WORKDIR /usr/src/app
>>>>>>> ca1cd9d72ec3916dc23d28b3a4130634e9c7e4c1
CMD ["npm", "start"]