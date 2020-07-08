import generateRandomInt from '../helper/random-int.js';
import startGame from '../main.js';
import { createQuestionPair } from '../helper/create-question.js';

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const calcResult = (num1, num2, operation) => {
  const [addition, substraction, multiplication] = operations;

  switch (operation) {
    case addition:
      return num1 + num2;

    case substraction:
      return num1 - num2;

    case multiplication:
      return num1 * num2;

    default:
      throw new Error('Unexpected operation');
  }
};

const getAnswer = (num1, num2, operation) => {
  const result = calcResult(num1, num2, operation);
  return result.toString();
};

const genGameRoundData = () => {
  const num1 = generateRandomInt(1, 10);
  const num2 = generateRandomInt(1, 10);
  const operation = operations[generateRandomInt(0, 2)];
  const question = `${num1} ${operation} ${num2}`;
  const answer = getAnswer(num1, num2, operation);
  return createQuestionPair(question, answer);
};

const runBrainCalcGame = () => startGame(description, genGameRoundData);

export default runBrainCalcGame;
