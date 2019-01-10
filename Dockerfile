FROM node:4-alpine


WORKDIR /opt/nms-monitoring

COPY . /opt/nms-monitoring

RUN npm install

EXPOSE 3000

CMD npm start
