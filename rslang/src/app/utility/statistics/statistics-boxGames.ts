import BaseComponent from '../base-сomponent';

export default class StatisticsBoxGames {
  readonly statisticsBoxGames: HTMLElement;

  constructor(private readonly root: HTMLElement, readonly text: string) {
    this.statisticsBoxGames = document.createElement('div');
    this.text = text;
  }

  render(): HTMLElement {
    this.root.appendChild(this.statisticsBoxGames);
    this.statisticsBoxGames.classList.add('main__statistics__boxGames');

    new BaseComponent(this.statisticsBoxGames, 'div', ['main__statistics__boxGames-img']).render();
    new BaseComponent(this.statisticsBoxGames, 'div', ['main__statistics__boxGames-nameGame'], `${this.text}`).render();
    new BaseComponent(this.statisticsBoxGames, 'div', ['main__statistics__boxGames-row1'], '<span class="game-words">0</span><span>  words</span>').render();
    new BaseComponent(this.statisticsBoxGames, 'div', ['main__statistics__boxGames-row2'], '<span class="game-accuracy">0</span><span>% accuracy</span>').render();
    new BaseComponent(this.statisticsBoxGames, 'div', ['main__statistics__boxGames-row3'], '<span class="game-inRow">0</span><span>  in a row</span>').render();

    return this.statisticsBoxGames;
  }
}
