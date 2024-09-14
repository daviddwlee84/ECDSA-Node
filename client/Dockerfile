# Client Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --registry=https://registry.npmmirror.com

# Copy the rest of the application code
COPY . .

# Expose the port that Vite will use
EXPOSE 5173

# Start the Vite dev server
# CMD ["npm", "run", "dev"]
# Start the Vite dev server with the --host flag to expose it
# https://stackoverflow.com/questions/70012970/running-a-vite-dev-server-inside-a-docker-container
CMD ["npm", "run", "dev", "--", "--host"]
