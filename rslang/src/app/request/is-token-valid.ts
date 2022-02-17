export default async function getUser(id: string, token: string) {
  const url = `http://127.0.0.1:8000/users/${id}`;

  const response = fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  const answer = (await response).json();

  return answer;
}
