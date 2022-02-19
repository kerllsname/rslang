import IStatistic from '../interfaces/statistic';

export default async function saveUserStatistics(
  id: string,
  token: string,
  storage: IStatistic,
) {
  const url = `http://127.0.0.1:8000/users/${id}/statistics`;

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
