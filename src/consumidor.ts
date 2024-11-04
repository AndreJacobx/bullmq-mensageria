import { Worker } from 'bullmq';
import { REDIS_CONFIG, QUEUE_NAME } from './config';

async function main() {
  const worker = new Worker(QUEUE_NAME, async (job) => {
    console.log('Processando mensagem:', {
      jobId: job.id,
      data: job.data,
      timestamp: new Date().toISOString()
    });

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(`Mensagem ${job.id} processada com sucesso!`);
  }, {
    connection: REDIS_CONFIG.connection
  });

  worker.on('completed', job => {
    console.log(`Job ${job.id} completado com sucesso`);
  });

  worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} falhou:`, err);
  });

  console.log('Consumidor iniciado e aguardando mensagens...');
}

main().catch(console.error);