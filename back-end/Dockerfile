# Use the official Node.js image as the base image
FROM node:16.16.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --no-cache

# Copy the rest of the application code to the working directory

COPY --chown=node:node package.json /home/node/package.json


COPY --chown=node:node ./app app/
COPY --chown=node:node ./database database/

# Expose the port on which the backend application listens
EXPOSE 8000

# Specify the command to run the backend application
CMD ["npm", "start"]
