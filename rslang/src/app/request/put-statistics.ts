import IStatistic from '../interfaces/statistic';

export default async function saveUserStatistics(
  id: string,
  token: string,
  storage: IStatistic,
) {
  const url = `https://rslang-learnwords-team20.herokuapp.com/users/${id}/statistics`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(storage),
  });

  const answer = await response.json();
  return answer;
}
