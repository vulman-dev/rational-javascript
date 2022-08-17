const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const makeRational = (numerator, denominator) => {
  const commonDenominator = getGcd(numerator, denominator);
  if (denominator < 0) {
    return `${-(numerator / commonDenominator)}/${-(denominator / commonDenominator)}`;
  }
  return `${numerator / commonDenominator}/${denominator / commonDenominator}`;
};

const getNumer = (rational) => Number(rational.split('/')[0]);
const getDenom = (rational) => Number(rational.split('/')[1]);

const add = (rational1, rational2) => {
  const commonDenominator = getDenom(rational1) * getDenom(rational2);
  const numeratorRational1 = getNumer(rational1) * getDenom(rational2);
  const numeratorRational2 = getNumer(rational2) * getDenom(rational1);
  const sumNumerator = numeratorRational1 + numeratorRational2;

  return makeRational(sumNumerator, commonDenominator);
};

const sub = (rational1, rational2) => {
  const commonDenominator = getDenom(rational1) * getDenom(rational2);
  const numeratorRational1 = getNumer(rational1) * getDenom(rational2);
  const numeratorRational2 = getNumer(rational2) * getDenom(rational1);
  const subNumerator = numeratorRational1 - numeratorRational2;

  return makeRational(subNumerator, commonDenominator);
};


