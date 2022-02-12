import getData from '../../../request/get-data';
import IWord from '../../../interfaces/word';

export default async function getRandomWord(group: string): Promise<IWord> {
  const randomPage = Math.floor(Math.random() * 30);
  const randomWord = Math.floor(Math.random() * 20);
  const data = await getData(`words?group=${group}&page=${randomPage}`);
  return data[randomWord];
}
