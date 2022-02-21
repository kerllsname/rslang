export default async function getUser(id: string, token: string) {
  const url = `https://rslang-learnwords-team20.herokuapp.com/users/${id}`;

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
