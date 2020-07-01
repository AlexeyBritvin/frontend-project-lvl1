export const gameTypes = {
  brainCalc: 'brain-calc',
  brainEven: 'brain-even',
  brainGcd: 'brain-gcd',
};

export const gameIntros = [{
  type: gameTypes.brainCalc,
  text: 'What is the result of the expression?',
}, {
  type: gameTypes.brainEven,
  text: 'Answer "yes" if the number is even, otherwise answer "no".',
}, {
  type: gameTypes.brainGcd,
  text: 'Find the greatest common divisor of given numbers.',
}];

export const getIntro = (gameType) => {
  const intro = gameIntros.find(({ type }) => type === gameType);
  if (intro === undefined) {
    throw new Error(`Unexpected game type: ${gameType}`);
  }

  return intro.text;
};
