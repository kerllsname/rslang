import IUser from '../interfaces/user';

export default async function registarion(user: IUser) {
  const response = await fetch(
    'https://rslang-learnwords-team20.herokuapp.com/users',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );

  if (response.status === 200) {
    await response.json();

    return '200';
  }

  if (response.status === 417) {
    return '417';
  }

  if (response.status === 422) {
    return '422';
  }

  return 'false';
}
