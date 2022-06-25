import getRandomInt from '../utils.js';

const condition = 'What number is missing in the progression?';
const progressionLength = getRandomInt(5, 10);

const getProgression = (step, first) => {
  let progression = [first];

  for (let i = 1; i < progressionLength; i += 1) {
    const current = progression[i - 1] + step;
    progression = [...progression, current];
  }
  return progression;
};

const genRoundData = () => {
  const step = getRandomInt(1, 10);
  const first = getRandomInt(1, 100);
  const progression = getProgression(step, first);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '...';
  const question = progression.join(', ');
  return [question, correctAnswer];
};

export const progressionData = { condition, genRoundData };
