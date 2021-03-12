# ts-node-dev-error-example

Install deps: `yarn`

Run this example with ts-node

`yarn ts-node index.ts`

It finishes without any errors

Then run it with ts-node-dev 

`yarn tsnd index.ts`

And it fails with
```
TypeError: Unexpected response from worker: undefined
    at ChildProcessWorker._onMessage (/Users/<username>/username>/example-worker-error/node_modules/jest-worker/build/workers/ChildProcessWorker.js:264:15)
    at ChildProcess.emit (node:events:390:22)
    at emit (node:internal/child_process:920:12)
    at processTicksAndRejections (node:internal/process/task_queues:82:21)
```


If you change example.js to have `enableWorkerThreads: false` instead of `false`, both options run without any exceptions.
