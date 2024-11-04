# Sistema de Mensageria com BullMQ
Sistema básico de mensageria implementado usando BullMQ e Redis. O sistema consiste em um produtor que envia mensagens para uma fila e um consumidor que processa essas mensagens.

## Instale as dependências
npm install bullmq typescript ts-node <br>
npm install @types/node --save-dev

## Inicie o Redis
docker-compose up -d

## Abra dois terminais diferentes e execute no primeiro terminal:
npm run start:produtor

## Execute no segundo terminal:
npm run start:consumidor

## Como parar a execução
Para parar produtor/consumidor: Ctrl + C no terminal
Para parar o Redis: docker compose down
