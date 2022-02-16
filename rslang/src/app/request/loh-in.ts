export default async function signIn(user: object) {
  const response = await fetch('http://127.0.0.1:8000/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.status === 200) {
    const content = await response.json();

    return content;
  }

  if (response.status === 403) {
    return '403';
  }

  return 'false';
}
