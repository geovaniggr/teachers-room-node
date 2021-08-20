FROM node:16-alpine
WORKDIR usr/src/app
ARG SERVER_PORT=8080

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE ${SERVER_PORT}

CMD npm start
