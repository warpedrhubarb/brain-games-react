import { StartEngine, getRandomInt } from '../utils.js';

const condition = 'Answer \'yes\' if the number is even, otherwise answer \'no\'.';

const isEven = (num) => num % 2 === 0;

const genRoundData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export function startEven () {
  return StartEngine(condition, genRoundData);
};
