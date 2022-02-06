import BaseComponent from '../../../utility/base-сomponent';
import Card from '../../../utility/main-textbook/card';

export default class MainTextbook {
  readonly mainTextbook: HTMLElement;

  readonly gamesBlock: HTMLElement;

  readonly cardsBlock: HTMLElement;

  readonly cardsPagesList: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainTextbook = document.createElement('div');
    this.gamesBlock = document.createElement('div');
    this.cardsBlock = document.createElement('div');
    this.cardsPagesList = document.createElement('ul');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainTextbook);
    this.mainTextbook.classList.add('main__textbook');

    this.mainTextbook.appendChild(this.gamesBlock);
    this.gamesBlock.classList.add('textbook__games');
    this.insertGames();

    this.mainTextbook.appendChild(this.cardsPagesList);
    this.cardsPagesList.classList.add('textbook__cards-pages');
    this.insertCardsPagesList();

    this.mainTextbook.appendChild(this.cardsBlock);
    this.cardsBlock.classList.add('textbook__cards-block');
    new Card(this.cardsBlock).render();

    return this.mainTextbook;
  }

  insertGames() {
    new BaseComponent(this.gamesBlock, 'button', ['games__audio-challenge'], 'audio challenge').render();
    new BaseComponent(this.gamesBlock, 'button', ['games__sprint'], 'sprint').render();
  }

  insertCardsPagesList() {
    for (let i = 1; i <= 6; i += 1) {
      const cardsPage = document.createElement('li');

      this.cardsPagesList.appendChild(cardsPage);
      cardsPage.classList.add('cards-pages__page', `page${i}`);
      new BaseComponent(cardsPage, 'button', ['cards-pages__page-button', `button${i}`], `${i}`).render();
    }
  }
}
