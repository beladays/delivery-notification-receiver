#  Delivery Notification Receiver

Projeto desenvolvido para recebimento e processamento de notificações em aplicações distribuídas.

O sistema simula um serviço responsável por receber notificações/eventos enviados por outros sistemas, permitindo integração entre serviços e comunicação assíncrona em arquiteturas modernas.

---

# 📌 Objetivo do Projeto

Desenvolver um serviço de recebimento de notificações para aplicações distribuídas, aplicando conceitos de:

- Comunicação entre serviços
- APIs REST
- Processamento de eventos
- Arquitetura distribuída
- Recebimento de notificações em tempo real

---

# 🛠 Tecnologias Utilizadas

- Node.js
- Express
- JavaScript
- APIs REST
- JSON

---

# 🚀 Funcionalidades

## ✅ Recebimento de Notificações
O sistema recebe notificações enviadas por outros serviços através de requisições HTTP.

---

## ✅ Processamento de Eventos
As notificações recebidas podem ser processadas e registradas pelo sistema.

---

## ✅ API REST
Implementação de endpoints REST para comunicação entre aplicações.

---

## ✅ Arquitetura Distribuída
Simulação de comunicação entre microsserviços/sistemas distribuídos.

---

# 🏗 Arquitetura do Sistema

```text
Serviço Externo
      ↓
API Notification Receiver
      ↓
Processamento da Notificação
      ↓
Resposta da API
```

---

# 📂 Estrutura do Projeto

```text
delivery-notification-receiver/
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── app.js
│
├── package.json
└── README.md
```

---

# ⚙ Instalação do Projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/beladays/delivery-notification-receiver.git
```

---

## 2️⃣ Acessar pasta do projeto

```bash
cd delivery-notification-receiver
```

---

## 3️⃣ Instalar dependências

```bash
npm install
```

---

## 4️⃣ Executar aplicação

```bash
npm start
```

Servidor iniciado em:

```text
http://localhost:3000
```

---

# 🌐 Exemplo de Endpoint

## 🔔 Receber Notificação

```http
POST /notifications
```

### Exemplo de Body

```json
{
  "type": "DELIVERY_UPDATE",
  "status": "ENTREGUE",
  "pedidoId": 12345
}
```

---

# 💻 Fluxo da Aplicação

```text
1. Serviço envia notificação
          ↓
2. API recebe requisição
          ↓
3. Sistema processa evento
          ↓
4. Resposta é retornada
```

---

# 📚 Conceitos Aplicados

| Conceito | Implementação |
|---|---|
| API REST | Comunicação HTTP |
| Arquitetura Distribuída | Integração entre serviços |
| Processamento de Eventos | Recebimento de notificações |
| JSON | Troca de dados |
| Backend Node.js | Servidor da aplicação |

---
