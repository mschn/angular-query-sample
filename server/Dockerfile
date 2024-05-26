FROM node:20-alpine
WORKDIR /user/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
ENV ADDRESS=0.0.0.0 PORT=3000
CMD [ "node", "index" ]
