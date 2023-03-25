FROM node:19
WORKDIR /index
COPY ./ index
RUN npm install
CMD [ "node","index.js" ]
EXPOSE 3000