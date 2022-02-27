const express = require('express');
const redis = require('redis');

const app = express();

// Create connection to redis server
// Host is supposed to be the url where redis is hosted
// For local development, use redis-server
// Port for redis-server can be set. Default is 6379
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

// Initialize visits to 0
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);

    // Update visits number
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});