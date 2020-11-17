/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gO64LtUPnA6GnKbngdU2/scores';

// Submit data to the Api
export const postScore = async (username, score) => {
  const data = {
    user: username,
    score,
  };

  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (response.status === 200) {
    return true;
  }

  return result.message;
};

// Get results from the Api
export const getScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};