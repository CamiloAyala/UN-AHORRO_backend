FROM node:18-alpine3.16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . /usr/src/app/
RUN chown -R node:node /usr/src/app/
USER node

EXPOSE 4000

CMD npm run start

