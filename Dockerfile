FROM node:19
WORKDIR /index
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node","index.js" ]
