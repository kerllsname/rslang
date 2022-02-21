export default async function refresh(id: string, refreshToken: string) {
  const url = `https://rslang-learnwords-team20.herokuapp.com/users/${id}/tokens`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
      Accept: 'application/json',
    },
  });

  const answer = await response.json();

  return answer;
}
