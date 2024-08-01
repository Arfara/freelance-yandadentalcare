# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Set the environment variable to serve on port 3000
ENV PORT 3000

# Expose port 3000 to the outside world
EXPOSE 3000

# Serve the built application
CMD ["serve", "-s", "build"]