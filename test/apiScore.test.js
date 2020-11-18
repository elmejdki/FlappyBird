import apiScoresMock from './mocks/apiScoreMock';

test('Test if scores are being fetched from scores storage service', () => {
  const scores = apiScoresMock.fetchScores();
  scores.then(json => {
    expect(json[0].user).toBe('user');
    expect(json[0].score).toBe(23);
  });
});

test('Test if score is submitted to the scores storage service', () => {
  const score = apiScoresMock.submitScore('Zack', 100);
  score.then(result => {
    expect(result.result).toBe('Leaderboard score created correctly.');
  });
});