import generateRandomInt from './random-int.js';

const generateProgression = (size) => {
  const step = generateRandomInt(1, 5);
  const start = generateRandomInt(1, 100);
  const progression = [start];

  for (let i = 0; i < size; i += 1) {
    const next = step + progression[i];
    progression.push(next);
  }

  return progression;
};

export default generateProgression;
