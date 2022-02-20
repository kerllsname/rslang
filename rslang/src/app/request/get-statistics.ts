import IStatistic from '../interfaces/statistic';

export default async function getUserStatistics(
  id: string,
  token: string,
): Promise<IStatistic> {
  const url = `http://127.0.0.1:8000/users/${id}/statistics`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  const answer = await response.json();

  return answer;
}
