FROM node:18-alpine3.16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
COPY ./prisma ./prisma

COPY .env .

COPY tsconfig.json ./

COPY . /usr/src/app/

RUN npm install
RUN npx prisma generate

RUN chown -R node:node /usr/src/app/
USER node

CMD npx prisma migrate deploy && npm run start

