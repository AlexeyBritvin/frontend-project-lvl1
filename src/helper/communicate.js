import readlineSync from 'readline-sync';

export const askQuestion = (expression) => {
  console.log(`Question: ${expression}`);
  return readlineSync.question('Your answer: ');
};

export const getName = () => readlineSync.question('May I have your name? ');

export const giveFeedback = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    return console.log('Correct!');
  }

  return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
};
