const { connectRedis } = require("./redisClient");
const startSubscriber = require("./subscriber");
require("./server");

async function start() {
  await connectRedis();
  await startSubscriber();
}

start();