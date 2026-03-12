// quem recebe a notificação

import { createClient } from "redis";

const subscriber = createClient();

export default async function startSubscriber() {
  await subscriber.connect();

  console.log("Aguardando notificações...");

  await subscriber.subscribe("pedido_status", (message) => {
    console.log("Notificação recebida:", message);
  });
}