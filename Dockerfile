# Install node
# alpine is a tag --> stands for minimum package
FROM node:alpine

# Get work directory
# Copy package.json and index.js
# Run npm install according to package.json dependencies
WORKDIR / ./
COPY ./ ./
RUN npm install

# Tell the image what to do when it starts as a container
CMD ["npm", "start"]