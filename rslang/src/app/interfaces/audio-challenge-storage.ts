export default interface IStorage {
  countAnswerСorrect: number,
  namesAnswerСorrect: string[],
  inRow: number,
  setInRow: Set<number>,
  countAnswerWrong: number,
  namesAnswerWrong: string[],
}
