const { createClient } = require("redis");

const client = createClient({
  url: "redis://127.0.0.1:6379",
});

client.on("error", (err) => {
  console.log("Erro Redis:", err);
});

async function connectRedis() {
  await client.connect();
  console.log("Conectado ao Redis ebaa");
}

module.exports = {
  client,
  connectRedis,
};