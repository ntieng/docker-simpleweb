# Install node
# alpine is a tag --> stands for minimum package
FROM node:alpine

# Get work directory
WORKDIR '/app'

# Copy package.json
# Run npm install according to package.json dependencies
# Copy all the files --> to prevent rebuilding when index.js is updated
COPY package.json .
RUN npm install
COPY . .

# Tell the image what to do when it starts as a container
CMD ["npm", "start"]