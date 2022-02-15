import BaseComponent from '../../base-сomponent';
import StatWordsWrong from './result-wrong';
import StatWordsAnswer from './result-answer';
import IStorage from '../../../interfaces/audio-challenge-storage';

export default class Result {
  readonly result: HTMLElement;

  readonly container: HTMLElement;

  readonly statisticBox: HTMLElement;

  constructor(private readonly root: HTMLElement, public storage: IStorage) {
    this.result = document.createElement('div');
    this.container = document.createElement('div');
    this.statisticBox = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.result);
    this.result.classList.add('result');

    new BaseComponent(this.result, 'h2', ['result__title'], 'Result').render();

    this.result.appendChild(this.container);
    this.container.classList.add('result__container');

    this.container.appendChild(this.statisticBox);
    this.statisticBox.classList.add('result__statistic-box');
    new BaseComponent(this.statisticBox, 'div', ['result__accuracy'], '<span clas = "result__num">Accuracy</span>').render();
    new BaseComponent(this.statisticBox, 'div', ['result__accuracyNum'], `<span clas = 'result__num'>${Math.round((this.storage.countAnswerСorrect / 20) * 100)}</span> %`).render();
    new BaseComponent(this.statisticBox, 'div', ['result__correct'], `<span clas = 'result__num'>${this.storage.countAnswerСorrect}</span> - Right answers`).render();
    new BaseComponent(this.statisticBox, 'div', ['result__in-row'], `<span clas = 'result__num'>${this.storage.setInRow.size}</span> - In a row`).render();
    new BaseComponent(this.statisticBox, 'div', ['result__wrong'], `<span clas = 'result__num'>${this.storage.countAnswerWrong}</span> - Mistakes`).render();

    new StatWordsAnswer(this.container, this.storage).render();
    new StatWordsWrong(this.container, this.storage).render();

    return this.result;
  }
}
