import { Queue } from 'bullmq';
import { REDIS_CONFIG, QUEUE_NAME } from './config';

async function main() {
  const messageQueue = new Queue(QUEUE_NAME, {
    connection: REDIS_CONFIG.connection
  });

  async function sendMessage(content: string) {
    const job = await messageQueue.add('message', {
      content,
      timestamp: new Date().toISOString()
    });
    console.log(`Mensagem enviada: ${content} (Job ID: ${job.id})`);
  }

  //mensagens de teste
  try {
    await sendMessage("Primeira mensagem");
    await sendMessage("Segunda mensagem");
    await sendMessage("Terceira mensagem");

    setInterval(async () => {
      await sendMessage(`Mensagem periódica: ${new Date().toISOString()}`);
    }, 5000);
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
  }
}

main().catch(console.error);