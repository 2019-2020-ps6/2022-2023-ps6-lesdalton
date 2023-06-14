# Use the official Node.js image as the base image
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the backend application listens
EXPOSE 8000

# Specify the command to run the backend application
CMD ["npm", "start"]
