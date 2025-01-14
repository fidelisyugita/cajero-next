# Use the latest Node.js 18 image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Expose the Next.js default port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]