FROM node:10-alpine

# Install git
RUN apk add --no-cache git

# Create app directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package.json ./
COPY yarn.lock ./

# Copy app files
COPY . .

# Install dependencies
RUN yarn install

# Build the server
RUN yarn build

# Run the server
CMD [ "node", "build/main.js" ]
