//teste do sistema q vai enviar
const { createClient } = require("redis");

async function sendMessage() {
  const client = createClient({
    url: "redis://127.0.0.1:6379",
  });

  await client.connect();

  console.log("Enviando mensagem...");

  await client.publish(
    "pedido_status",
    "Pedido 1 foi preparado"
  );

  await client.publish(
    "pedido_status",
    "Pedido 1 foi enviado"
  );

  await client.publish(
    "pedido_status",
    "Pedido 1 foi entregue"
  );
}
  await cl