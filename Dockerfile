
FROM node:9.2.0-alpine
LABEL maintainer="PAUL,CHEN<b10207146@mail.ntust.edu.tw>" 
COPY . /app
WORKDIR /app
RUN mkdir -p coverage
RUN npm install && npm cache clean --force
EXPOSE 8080
CMD ["npm","start"]