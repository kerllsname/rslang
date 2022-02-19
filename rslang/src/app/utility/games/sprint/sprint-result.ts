import BaseComponent from '../../base-сomponent';
import StatWordsWrong from '../audio-challange/result-wrong';
import StatWordsAnswer from '../audio-challange/result-answer';
import IStorage from '../../../interfaces/audio-challenge-storage';
import IStatistic from '../../../interfaces/statistic';
import saveUserStatistics from '../../../request/put-statistics';

export default class ResultSprint {
  readonly resultSprint: HTMLElement;

  readonly container: HTMLElement;

  readonly statisticBox: HTMLElement;

  constructor(private readonly root: HTMLElement, public storage: IStorage) {
    this.resultSprint = document.createElement('div');
    this.container = document.createElement('div');
    this.statisticBox = document.createElement('div');
  }

  async render() {
    this.root.appendChild(this.resultSprint);
    this.resultSprint.classList.add('result');

    new BaseComponent(this.resultSprint, 'h2', ['result__title'], 'Result').render();

    this.resultSprint.appendChild(this.container);
    this.container.classList.add('result__container');

    this.container.appendChild(this.statisticBox);
    this.statisticBox.classList.add('result__statistic-box');
    new BaseComponent(this.statisticBox, 'div', ['result__accuracy'], '<span clas = "result__num">Accuracy</span>').render();
    new BaseComponent(this.statisticBox, 'div', ['result__accuracyNum'], `<span clas = 'result__num'>${(Math.round((this.storage.countAnswerСorrect / (this.storage.countAnswerСorrect + this.storage.countAnswerWrong)) * 100) || '0')}</span> %`).render();
    new BaseComponent(this.statisticBox, 'div', ['result__correct'], `<span clas = 'result__num'>${this.storage.countAnswerСorrect}</span> - Right answers`).render();
    new BaseComponent(this.statisticBox, 'div', ['result__in-row'], `<span clas = 'result__num'>${this.storage.setInRow.size}</span> - In a row`).render();
    new BaseComponent(this.statisticBox, 'div', ['result__wrong'], `<span clas = 'result__num'>${this.storage.countAnswerWrong}</span> - Mistakes`).render();

    new StatWordsAnswer(this.container, this.storage).render();
    new StatWordsWrong(this.container, this.storage).render();

    const userToken: string | null = localStorage.getItem('token');
    const userID: string | null = localStorage.getItem('id');

    if (userToken && userID) {
      const storage: IStatistic = {
        learnedWords: this.storage.countAnswerСorrect,
        optional: {
          countAnswerСorrect: this.storage.countAnswerСorrect,
          countAnswerWrong: this.storage.countAnswerWrong,
          inRow: this.storage.inRow,
        },
      };
      await saveUserStatistics(userID, userToken, storage);
    }
  }
}
