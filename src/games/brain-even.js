import generateRandomInt from '../helper/random-int.js';
import { game, createQuestionPair } from '../main.js';

const YES = 'yes';
const NO = 'no';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => {
  if (isEven(num)) {
    return YES;
  }

  return NO;
};

const brainEvenQuestion = () => {
  const num = generateRandomInt(1, 100);
  const answer = getAnswer(num);
  return createQuestionPair(num, answer);
};

const brainEvenGame = () => game(description, brainEvenQuestion);

export default brainEvenGame;
