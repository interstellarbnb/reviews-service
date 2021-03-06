FROM node:8.11.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run webpack

EXPOSE 80

CMD [ "npm", "run", "startdev" ]