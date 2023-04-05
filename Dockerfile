# Use an official Node.js runtime as a parent image
FROM node:lts-alpine3.14

# Declare build-time variables    
ARG AWS_ACCESS_KEY_ID    
ARG AWS_SECRET_ACCESS_KEY    
ARG BACKEND_API
ARG BACKEND_PORT

# set environment variables 
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
ENV BACKEND_API=$BACKEND_API
ENV BACKEND_PORT=$BACKEND_PORT

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Start the application with the production build assets
CMD ["npm", "run"]
