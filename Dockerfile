FROM node:14-alpine

ENV TZ=Amercia/Sao_Paulo
RUN mkdir -p /home/node/gym

WORKDIR /home/node/gym

COPY ./package.json ./
COPY ./src ./src

RUN npm install

EXPOSE 3000

CMD [ "node", "./src/services/swagger.js"]
CMD [ "node", "./src/index.js" ]