export default () => {
  const fibonacci = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
    if (!e) return;
    postMessage(fibonacci(e.data));
  })
}
