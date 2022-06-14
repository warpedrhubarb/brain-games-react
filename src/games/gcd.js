import { StartEngine, getRandomInt } from '../utils.js';

const condition = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const genRoundData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const correctAnswer = String(gcd(number1, number2));
  const question = `${number1}, ${number2}`;
  return [question, correctAnswer];
};

export function startGcd () {
  return StartEngine(condition, genRoundData);
};
