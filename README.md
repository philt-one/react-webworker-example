# react-worker-example

Because Javascript is single-threaded, running a script for a long time will block the main thread. In this example, we will use [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to offload compute expensive calculations to a new thread. 