const apiScoresMock = (() => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2uxnCb3QMbmkeb6NKsmo/scores';

  const fetchScores = () => new Promise((resolve) => {
    fetch(url).then((result) => resolve(result.json()));
  });

  const submitScore = (username, score) => {
    const jsonObj = {
      user: username,
      score,
    };

    return new Promise((resolve) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonObj),
      }).then(result => resolve(result.json()));
    });
  };

  return { fetchScores, submitScore };
})();

export default apiScoresMock;