import generateRandomInt from '../helper/random-int.js';
import startGame from '../main.js';
import { createQuestionPair } from '../helper/create-question.js';

const YES = 'yes';
const NO = 'no';
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswer = (num) => (isEven(num) ? YES : NO);

const genGameRoundData = () => {
  const question = generateRandomInt(1, 100);
  const answer = getAnswer(question);
  return createQuestionPair(question, answer);
};

const runBrainEvenGame = () => startGame(description, genGameRoundData);

export default runBrainEvenGame;
