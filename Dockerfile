FROM node:18

ENV NODE_ENV production
ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --legacy-peer-deps

# Copying source files
COPY . /usr/src/app
COPY ./.env.example /usr/src/app/.env

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "run", "start"]