FROM node:current-alpine3.13

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm typescript && npm install -D nodemon && npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "run", "dev" ]