/* eslint-disable class-methods-use-this */
import BaseComponent from '../../../utility/base-сomponent';
import Card from '../../../utility/main-textbook/card';
import deleteBlocks from '../../../utility/main-textbook/delete-cards';

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
    this.handler = this.handler.bind(this);
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainTextbook);
    this.mainTextbook.classList.add('main__textbook');

    this.mainTextbook.appendChild(this.gamesBlock);
    this.gamesBlock.classList.add('textbook__games');
    this.insertGames();

    this.mainTextbook.appendChild(this.cardsPagesList);
    this.cardsPagesList.classList.add('textbook__cards-pages');
    this.insertCardsPagesList(1);

    this.mainTextbook.appendChild(this.cardsBlock);
    this.cardsBlock.classList.add('textbook__cards-block');
    this.insertCards(1);

    return this.mainTextbook;
  }

  insertGames() {
    new BaseComponent(
      this.gamesBlock,
      'button',
      ['games__audio-challenge'],
      'audio challenge',
    ).render();

    new BaseComponent(
      this.gamesBlock,
      'button',
      ['games__sprint'],
      'sprint',
    ).render();
  }

  insertCardsPagesList(currentGroup: number) {
    for (let i = 1; i <= 6; i += 1) {
      const cardsPage = document.createElement('li');

      this.cardsPagesList.appendChild(cardsPage);
      cardsPage.classList.add('cards-pages__page');

      new BaseComponent(
        cardsPage,
        'button',
        ['cards-pages__page-button'],
        `${i}`,
      )
        .render()
        .addEventListener('click', this.handler);
    }

    this.setDefaultCurrentGroupButton(currentGroup);
  }

  insertCards(group: number) {
    const correctGroup = group - 1;

    for (let i = 0; i <= 19; i += 1) {
      new Card(this.cardsBlock, i, correctGroup).render();
    }
  }

  handler({ currentTarget: button }) {
    this.currentGroupButton(button, false);
    deleteBlocks();
    this.currentGroupButton(button, true);
    this.insertCards(button.innerHTML);
  }

  currentGroupButton(button: HTMLElement, state: boolean) {
    const unactiveButton = document.querySelector('.active-group-button');

    if (state) {
      button.classList.add('active-group-button');
    } else {
      unactiveButton?.classList.remove('active-group-button');
    }
  }

  setDefaultCurrentGroupButton(currentGroup: number) {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.cards-pages__page-button');

    buttons.forEach((button) => {
      if (button.innerHTML === `${currentGroup}`) {
        this.currentGroupButton(button, true);
      }
    });
  }
}
