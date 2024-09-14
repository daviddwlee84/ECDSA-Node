# Server Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --registry=https://registry.npmmirror.com

# Copy the rest of the application code
COPY . .

# Expose the port the server will run on
EXPOSE 3042

# Start the server
CMD ["node", "index.js"]
