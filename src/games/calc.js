import { StartEngine, getRandomInt } from '../utils.js';

const condition = 'What is the result of the expression?';
const operators = ['+', '-', '✕'];

const doMath = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '✕':
      return x * y;
    default:
      throw new Error('Math operator error. Please try again.');
  }
};

const genRoundData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = String(doMath(number1, operator, number2));
  const question = `${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};

export function startCalc () {
  return StartEngine(condition, genRoundData);
};
