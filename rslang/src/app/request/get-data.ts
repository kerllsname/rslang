// В переменной path указать эндпоинт для доступа к нужному разделу БД (эндпоинты см. Swagger Doc)
import IWord from '../interfaces/word';

export default async function getData(path: string = ''): Promise<IWord[]> {
  const url = `https://rslang-learnwords-team20.herokuapp.com/${path}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}
