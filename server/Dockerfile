# Use the official Node.js 21 Alpine image as the base image
FROM node:21-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies defined in package.json
RUN npm install

# Copy all the files from the current directory on the host to the working directory in the container
COPY . .

# Expose port 8000 to allow external access to the application
EXPOSE 8000

# Define the command to run the application in development mode
CMD ["npm", "run", "dev"]