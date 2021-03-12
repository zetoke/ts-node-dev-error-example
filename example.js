import Worker from 'jest-worker';

export async function main() {
  const worker = new Worker(require.resolve('./Worker'), {
    enableWorkerThreads: false,
  });
  const result = await worker.hello('Alice');
  console.log('Result: ', result);
}
