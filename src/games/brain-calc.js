import generateRandomInt from '../helper/random-int.js';
import startGame from '../main.js';
import { createQuestionPair } from '../helper/create-question.js';

const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getAnswer = (num1, num2, operation) => {
  const [addition, substraction, multiplication] = operations;
  let answer;

  switch (operation) {
    case addition:
      answer = num1 + num2;
      break;

    case substraction:
      answer = num1 - num2;
      break;

    case multiplication:
      answer = num1 * num2;
      break;

    default:
      throw new Error('Unexpected operation');
  }

  return answer.toString();
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
