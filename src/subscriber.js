//quem recebe a notificaão

const { createClient } = require("redis");

const subscriber = createClient();

async function startSubscriber() {
  await subscriber.connect();

  console.log("Aguardando notificações...");

  await subscriber.subscribe("pedido_status", (message) => {
    console.log("Notificação recebida:", message);
  });
}

module.exports = startSubscriber;