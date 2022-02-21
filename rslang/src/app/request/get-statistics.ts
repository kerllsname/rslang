import IStatistic from '../interfaces/statistic';

export default async function getUserStatistics(
  id: string,
  token: string,
): Promise<boolean | IStatistic> {
  const url = `https://rslang-learnwords-team20.herokuapp.com/users/${id}/statistics`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  if (response.status === 404) {
    return false;
  }

  const answer = await response.json();

  return answer;
}
