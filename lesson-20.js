const PROMPT_DELAY = 1000;
const MAX_PROMPT = 3;

let prompCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
  if (prompCounter === MAX_PROMPT || hasSubscribed) {
    console.log('Остановити');
    clearInterval(intervalId);
    return;
  }
  console.log('Підпишись!');
  prompCounter += 1;
}, PROMPT_DELAY);
