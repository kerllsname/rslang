// В переменной path указать эндпоинт для доступа к нужному разделу БД (эндпоинты см. Swagger Doc)
import IWord from '../interfaces/word';

export default async function getData(path: string = ''): Promise<IWord[]> {
  const url = `http://127.0.0.1:8000/${path}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}
