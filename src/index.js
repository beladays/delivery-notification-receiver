import { connectRedis } from "./redisClient.js";
import startSubscriber from "./subscriber.js";
import "./server.js";

async function start() {
  await connectRedis();
  await startSubscriber();
}

start();