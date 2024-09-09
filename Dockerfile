# Stage 1: Build
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json /app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . /app

# Build the frontend application
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
