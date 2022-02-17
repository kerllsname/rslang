export default async function refresh(id: string, refreshToken: string) {
  const url = `http://127.0.0.1:8000/users/${id}/tokens`;

  const response = fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
      Accept: 'application/json',
    },
  });

  const answer = (await response).json();

  return answer;
}
