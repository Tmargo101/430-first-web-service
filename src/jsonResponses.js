const randomNumberJSON = (max = 1) => {
  let newMax = Number(max);
  newMax = !newMax ? 1 : newMax;
  newMax = newMax < 1 ? 1 : newMax;
  const number = Math.random() * newMax;
  const responseObj = {
    timestamp: new Date(),
    number,
  };
  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(`${randomNumberJSON(params.max)}`);
  response.end();
};

module.exports.getRandomNumberResponse = getRandomNumberResponse;
