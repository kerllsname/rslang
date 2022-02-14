import BaseComponent from '../../../utility/base-сomponent';
import StatisticsBoxGames from '../../../utility/statistics/statistics-boxGames';

export default class MainStatistics {
  readonly mainStatistics: HTMLElement;

  readonly container: HTMLElement;

  readonly containerWords: HTMLElement;

  readonly containerGames: HTMLElement;

  readonly boxWords: HTMLElement;

  readonly boxAccuracy: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainStatistics = document.createElement('div');
    this.container = document.createElement('div');
    this.containerWords = document.createElement('div');
    this.containerGames = document.createElement('div');
    this.boxWords = document.createElement('div');
    this.boxAccuracy = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainStatistics);
    this.mainStatistics.classList.add('main__statistics');

    new BaseComponent(this.mainStatistics, 'h2', ['main__statistics-title'], 'Today').render();
    this.mainStatistics.appendChild(this.container);
    this.container.classList.add('main__statistics__container');
    this.container.appendChild(this.containerWords);
    this.containerWords.classList.add('main__statistics__containerWords');
    this.containerWords.appendChild(this.boxWords);
    this.boxWords.classList.add('main__statistics__boxWords');
    new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-words-count'], '0').render();
    new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p1'], 'new words').render();

    this.boxWords.classList.add('main__statistics__boxWords');
    new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-words-count'], '0').render();
    new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p1'], 'words').render();
    new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p2'], 'were learned').render();

    this.containerWords.appendChild(this.boxAccuracy);
    this.boxAccuracy.classList.add('main__statistics__boxAccuracy');
    new BaseComponent(this.boxAccuracy, 'div', ['main__statistics__boxAccuracy-title'], 'Accuracy').render();
    new BaseComponent(this.boxAccuracy, 'div', ['main__statistics__boxAccuracy-percent'], '<span class="accuracy-percent">0</span>%').render();

    this.container.appendChild(this.containerGames);
    this.containerGames.classList.add('main__statistics__containerGames');
    new StatisticsBoxGames(this.containerGames, 'Sprint').render();
    new StatisticsBoxGames(this.containerGames, 'Audio Challenge').render();

    return this.mainStatistics;
  }
}
