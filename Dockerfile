FROM node:8-alpine

EXPOSE 2633
WORKDIR /app

COPY ./bin /app/bin
COPY ./public /app/public
COPY ./routes /app/routes
COPY ./views /app/views
COPY ./app.js /app/
COPY ./package.json /app/

RUN ["npm", "install"]
CMD ["npm", "start"]
