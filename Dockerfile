# Stage 1: Build
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
