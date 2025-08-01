FROM node:18

WORKDIR /usr/src/app

# docker create layers, each command cached 

# install app dependencies
COPY package*.json ./
RUN npm install 

# Bundle app source 
COPY . .

CMD ["npm", "start"]