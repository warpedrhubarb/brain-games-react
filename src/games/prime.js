import { StartEngine, getRandomInt } from '../utils.js';

const condition = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const genRoundData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export function startPrime () {
  return StartEngine(condition, genRoundData);
};
