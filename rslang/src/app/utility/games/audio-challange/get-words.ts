import getData from '../../../request/get-data';
import IWord from '../../../interfaces/word';

export default async function getWords(group: string, page: string): Promise<IWord[]> {
  const data = await getData(`words?group=${group}&page=${page}`);
  return data;
}

// async function getAllWordsInGroup(group: string) {
//   const x: Promise<IWord[]>[] = [];
//   for (let i = 0; i < 30; i += 1) {
//     const y = getWords(group, `${i}`);
//     x.push(y);
//   }

//   const arr = await Promise.allSettled(x).then((results) => results);
//   console.log(arr);
//   return arr;
// }

// let x = await getAllWordsInGroup('1');
// x.reduce((a, b) => a.status)
