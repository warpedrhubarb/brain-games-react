import getRandomInt from '../utils.js';

const condition = 'Answer Yes if the number is even, otherwise answer No.';

const isEven = (num) => num % 2 === 0;

const genRoundData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = (isEven(question)) ? 'Yes' : 'No';
  return [question, correctAnswer];
};

export const evenData = { condition, genRoundData };
