import { createClient } from "redis";

const redis = createClient();

redis.on("error", (err) => console.log("Redis error:", err));

await redis.connect();

function delay(segundos) {
  return new Promise(resolve => setTimeout(resolve, segundos));
}

async function simularPedido(idPedido) {

  const statusPedido = [
    "PREPARANDO",
    "ENVIADO",
    "ENTREGUE"
  ];

  for (const status of statusPedido) {

    const evento = {
      idPedido,
      status,
      data: new Date().toISOString()
    };

    await redis.publish("pedido_status", JSON.stringify(evento));

    console.log(`Pedido ${idPedido} -> ${status}`);

    await delay(5000); 
  }

}

simularPedido(2);