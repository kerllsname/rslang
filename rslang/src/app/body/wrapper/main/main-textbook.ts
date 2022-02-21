/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import BaseComponent from '../../../utility/base-сomponent';
import Card from '../../../utility/main-textbook/card';
import deleteBlocks from '../../../utility/main-textbook/delete-cards';
import AudioChallangeLvl from './games/audio-challenge/audio-challenge-levels';
import SprintLvl from './games/sprint/sprint-levels';

export default class MainTextbook {
  readonly mainTextbook: HTMLElement;

  readonly gamesBlock: HTMLElement;

  readonly cardsBlock: HTMLElement;

  readonly cardsGroups: HTMLElement;

  readonly cardsPages: HTMLElement;

  readonly cardsGroupsList: HTMLElement;

  readonly cardsPagesList: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainTextbook = document.createElement('div');
    this.gamesBlock = document.createElement('div');
    this.cardsBlock = document.createElement('div');
    this.cardsGroups = document.createElement('div');
    this.cardsPages = document.createElement('div');
    this.cardsGroupsList = document.createElement('ul');
    this.cardsPagesList = document.createElement('ul');
    this.groupsHandler = this.groupsHandler.bind(this);
    this.pagesHandler = this.pagesHandler.bind(this);
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainTextbook);
    this.mainTextbook.classList.add('main__textbook');

    this.mainTextbook.appendChild(this.gamesBlock);
    this.gamesBlock.classList.add('textbook__games');
    this.insertGames();

    this.mainTextbook.appendChild(this.cardsGroups);
    this.cardsGroups.classList.add('textbook__cards-groups-block');

    this.cardsGroups.appendChild(this.cardsGroupsList);
    this.cardsGroupsList.classList.add('textbook__cards-groups');
    this.insertCardsGroupsList();
    this.colorGroupsButtons();

    this.mainTextbook.appendChild(this.cardsPages);
    this.cardsPages.classList.add('textbook__cards-pages-block');

    this.cardsPages.appendChild(this.cardsPagesList);
    this.cardsPagesList.classList.add('textbook__cards-pages');
    this.insertCardsPagesList();

    this.mainTextbook.appendChild(this.cardsBlock);
    this.cardsBlock.classList.add('textbook__cards-block');

    this.defaultGroupAndPage();

    return this.mainTextbook;
  }

  defaultGroupAndPage() {
    const group = Number(localStorage.getItem('group'));
    const page = Number(localStorage.getItem('page'));
    const rightArrow = document.querySelector('.page-arrow-right');
    const leftArrow = document.querySelector('.page-arrow-left');

    if (group && page) {
      this.setDefaultCurrentGroupButton(group);
      this.setDefaultCurrentPageButton(page);
    } else if (group) {
      this.setDefaultCurrentGroupButton(group);
      this.setDefaultCurrentPageButton(1);
    } else if (page) {
      this.setDefaultCurrentGroupButton(1);
      this.setDefaultCurrentPageButton(page);
    } else {
      localStorage.setItem('group', '1');
      localStorage.setItem('page', '1');

      this.setDefaultCurrentGroupButton(1);
      this.setDefaultCurrentPageButton(1);
      this.insertCards(1, 1);
    }

    if (page === 1) {
      leftArrow?.classList.add('page-un-button');
    } else if (page === 30) {
      rightArrow?.classList.add('page-un-button');
    }

    this.rebuildPagesList(page, group);
  }

  pushBtnPlayAudio(target: HTMLElement | null): void {
    if (target && target.tagName === 'BUTTON') {
      // ПЕРЕРИСОВКА
      this.mainTextbook.remove();
      new AudioChallangeLvl(this.root).render();
    }
  }

  pushBtnPlaySprint(target: HTMLElement | null): void {
    if (target && target.tagName === 'BUTTON') {
      // ПЕРЕРИСОВКА
      this.mainTextbook.remove();
      new SprintLvl(this.root).render();
    }
  }

  insertGames() {
    new BaseComponent(
      this.gamesBlock,
      'button',
      ['games__audio-challenge'],
      'audio challenge',
    ).render().addEventListener('click', ({ target }) => this.pushBtnPlayAudio(target as HTMLElement));

    new BaseComponent(
      this.gamesBlock,
      'button',
      ['games__sprint'],
      'sprint',
    ).render().addEventListener('click', ({ target }) => this.pushBtnPlaySprint(target as HTMLElement));
  }

  buttonCreate(place: string, subPlace: string, classOfButton: string, inner) {
    if (place === 'groups') {
      const cardsGroup = document.createElement('li');
      this.cardsGroupsList.appendChild(cardsGroup);
      cardsGroup.classList.add(`cards-${place}__${subPlace}`);

      new BaseComponent(cardsGroup, 'button', [`cards-${place}__${subPlace}-button`], `${inner}`)
        .render()
        .addEventListener('click', this.groupsHandler);
    } else {
      const cardsPage = document.createElement('li');
      this.cardsPagesList.appendChild(cardsPage);
      cardsPage.classList.add(`cards-${place}__${subPlace}`);

      if (inner === '>') {
        new BaseComponent(cardsPage, 'button', [`cards-${place}__${subPlace}-button`, `${classOfButton}`], `${inner}`)
          .render()
          .addEventListener('click', this.pagesHandler);
      } else if (inner === '<') {
        new BaseComponent(cardsPage, 'button', [`cards-${place}__${subPlace}-button`, `${classOfButton}`], `${inner}`)
          .render()
          .addEventListener('click', this.pagesHandler);
      } else if (inner === '...') {
        new BaseComponent(cardsPage, 'button', [`cards-${place}__${subPlace}-button`, `${classOfButton}`, `${subPlace}-un-button`], `${inner}`)
          .render()
          .addEventListener('click', this.pagesHandler);
      } else {
        new BaseComponent(cardsPage, 'button', [`cards-${place}__${subPlace}-button`, `${classOfButton}`], `${inner}`)
          .render()
          .addEventListener('click', this.pagesHandler);
      }
    }
  }

  insertCardsGroupsList() {
    for (let i = 1; i <= 7; i += 1) {
      this.buttonCreate('groups', 'group', '', i);
    }
  }

  colorGroupsButtons() {
    const buttons = document.querySelectorAll<HTMLButtonElement>('.cards-groups__group-button');

    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].classList.add(`cards-groups__group-button${i}`);
    }
  }

  groupsHandler({ currentTarget: button }) {
    if (button.innerHTML !== '7') {
      const page = Number(localStorage.getItem('page'));

      this.currentGroupButton(button, false);
      deleteBlocks();
      this.currentGroupButton(button, true);
      localStorage.setItem('group', button.innerHTML);
      this.insertCards(button.innerHTML, page);
    }
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
    const buttons = document.querySelectorAll<HTMLButtonElement>(
      '.cards-groups__group-button',
    );

    buttons.forEach((button) => {
      if (button.innerHTML === `${currentGroup}`) {
        this.currentGroupButton(button, true);
      }
    });
  }

  insertCardsPagesList() {
    for (let i = 1; i <= 9; i += 1) {
      if (i === 1) {
        this.buttonCreate('pages', 'page', 'page-arrow-left', '<');
      } else if (i === 9) {
        this.buttonCreate('pages', 'page', 'page-arrow-right', '>');
      } else if (i === 7) {
        this.buttonCreate('pages', 'page', 'page-number', '...');
      } else if (i === 8) {
        this.buttonCreate('pages', 'page', 'page-number', '30');
      } else {
        this.buttonCreate('pages', 'page', 'page-number', i - 1);
      }
    }
  }

  pagesHandler({ currentTarget: button }) {
    const group = Number(localStorage.getItem('group'));
    this.checkButton(button, group);
  }

  checkButton(button: Element, group: number) {
    const buttonNumber = Number(button.innerHTML);

    if (button.classList.contains('page-number')) {
      deleteBlocks();
      this.currentPageButton(button, false);
      this.rebuildPagesList(buttonNumber, group);
      this.unlockPageArrows();
    } else {
      this.pageArrowButtonBehavior(button, buttonNumber, group);
    }
  }

  pageArrowButtonBehavior(button: Element, buttonNumber: number, group: number) {
    const page = Number(localStorage.getItem('page'));
    const rightArrow = document.querySelector('.page-arrow-right');
    const leftArrow = document.querySelector('.page-arrow-left');

    if (button.classList.contains('page-arrow-left')) {
      if (page === 1) {
        button.classList.add('page-un-button');
      } else if (page !== 2) {
        this.currentPageButton(button, false);
        deleteBlocks();
        button.classList.remove('page-un-button');
        rightArrow?.classList.remove('page-un-button');
        this.rebuildPagesList(page - 1, group);
      } else if (page === 2) {
        this.currentPageButton(button, false);
        deleteBlocks();
        this.rebuildPagesList(page - 1, group);
      }
    } else if (button.classList.contains('page-arrow-right')) {
      if (page === 30) {
        button.classList.add('page-un-button');
      } else if (page !== 29) {
        this.currentPageButton(button, false);
        deleteBlocks();
        button.classList.remove('page-un-button');
        leftArrow?.classList.remove('page-un-button');
        this.rebuildPagesList(page + 1, group);
      } else if (page === 29) {
        this.currentPageButton(button, false);
        deleteBlocks();
        button.classList.add('page-un-button');
        this.rebuildPagesList(page + 1, group);
      }
    }
  }

  unlockPageArrows() {
    const rightArrow = document.querySelector('.page-arrow-right');
    const leftArrow = document.querySelector('.page-arrow-left');
    rightArrow?.classList.remove('page-un-button');
    leftArrow?.classList.remove('page-un-button');
  }

  rebuildPagesList(clickedButton: number, group: number) {
    const buttons = this.cardsPagesList.querySelectorAll('.page-number');
    const currentButtonNumber = clickedButton;
    let counter = 0;

    if (currentButtonNumber === 1) {
      buttons.forEach((button) => {
        counter += 1;

        if (counter === 1) {
          this.currentPageButton(button, true);
          localStorage.setItem('page', '1');
          this.insertCards(group, 1);
        } else if (counter === 2) {
          button.innerHTML = '2';
          button.classList.remove('page-un-button');
        } else if (counter === 3) {
          button.innerHTML = '3';
        } else if (counter === 4) {
          button.innerHTML = '4';
        } else if (counter === 5) {
          button.innerHTML = '5';
        } else if (counter === 6) {
          button.innerHTML = '...';
          button.classList.add('page-un-button');
        }
      });
    } else if (currentButtonNumber === 4) {
      buttons.forEach((button) => {
        counter += 1;

        if (counter === 2) {
          button.innerHTML = '2';
          button.classList.remove('page-un-button');
        } else if (counter === 3) {
          button.innerHTML = '3';
        } else if (counter === 4) {
          button.innerHTML = '4';

          this.currentPageButton(button, true);
          localStorage.setItem('page', '4');
          this.insertCards(group, 4);
        } else if (counter === 5) {
          button.innerHTML = '5';
        }
      });
    } else if (currentButtonNumber === 5) {
      buttons.forEach((button) => {
        counter += 1;

        if (counter === 2) {
          button.innerHTML = '...';
          button.classList.add('page-un-button');
        } else if (counter === 3) {
          button.innerHTML = '4';
        } else if (counter === 4) {
          button.innerHTML = '5';

          this.currentPageButton(button, true);
          localStorage.setItem('page', '5');
          this.insertCards(group, 5);
        } else if (counter === 5) {
          button.innerHTML = '6';
          button.classList.remove('active-page-button');
        } else if (counter === 6) {
          button.innerHTML = '...';
          button.classList.add('page-un-button');
        }
      });
    } else if (currentButtonNumber === 26) {
      buttons.forEach((button) => {
        counter += 1;
        if (counter === 2) {
          button.innerHTML = '...';
          button.classList.add('page-un-button');
        } else if (counter === 3) {
          button.innerHTML = '25';
        } else if (counter === 4) {
          button.innerHTML = '26';

          this.currentPageButton(button, true);
          localStorage.setItem('page', '26');
          this.insertCards(group, 26);
        } else if (counter === 5) {
          button.innerHTML = '27';
        } else if (counter === 6) {
          button.innerHTML = '...';
          button.classList.add('page-un-button');
        }
      });
    } else if (currentButtonNumber === 27) {
      this.unlockPageArrows();

      buttons.forEach((button) => {
        counter += 1;

        if (counter === 2) {
          button.innerHTML = '...';
          button.classList.add('page-un-button');
        } else if (counter === 3) {
          button.innerHTML = '26';
        } else if (counter === 4) {
          button.innerHTML = '27';

          this.currentPageButton(button, true);
          localStorage.setItem('page', '27');
          this.insertCards(group, 27);
        } else if (counter === 5) {
          button.innerHTML = '28';
        } else if (counter === 6) {
          button.innerHTML = '29';
          button.classList.remove('page-un-button');
        }
      });
    } else if (currentButtonNumber === 28
      || currentButtonNumber === 29
      || currentButtonNumber === 30) {
      buttons.forEach((button) => {
        counter += 1;

        if (counter === 2) {
          button.innerHTML = '...';
          button.classList.add('page-un-button');
        } else if (counter === 3) {
          button.innerHTML = '26';
        } else if (counter === 4) {
          button.innerHTML = '27';
        } else if (counter === 5 && currentButtonNumber === 28) {
          button.innerHTML = '28';

          this.currentPageButton(button, true);
          localStorage.setItem('page', '28');
          this.insertCards(group, 28);
        } else if (counter === 5) {
          button.innerHTML = '28';
        } else if (counter === 6 && currentButtonNumber === 29) {
          button.innerHTML = '29';
          button.classList.remove('page-un-button');

          this.currentPageButton(button, true);
          localStorage.setItem('page', '29');
          this.insertCards(group, 29);
        } else if (counter === 6) {
          button.innerHTML = '29';
          button.classList.remove('page-un-button');
        } else if (counter === 7 && currentButtonNumber === 30) {
          this.currentPageButton(button, true);
          localStorage.setItem('page', '30');
          this.insertCards(group, 30);
        }
      });
    } else if (currentButtonNumber > 4 && currentButtonNumber < 27) {
      buttons.forEach((button) => {
        counter += 1;
        if (counter === 2) {
          button.innerHTML = '...';
          button.classList.add('page-un-button');
        } else if (counter === 3) {
          button.innerHTML = `${currentButtonNumber - 1}`;
        } else if (counter === 4) {
          button.innerHTML = `${currentButtonNumber}`;

          this.currentPageButton(button, true);
          localStorage.setItem('page', `${currentButtonNumber}`);
          this.insertCards(group, currentButtonNumber);
        } else if (counter === 5) {
          button.innerHTML = `${currentButtonNumber + 1}`;
        }
      });
    } else {
      buttons.forEach((button) => {
        if (button.innerHTML === `${clickedButton}`) {
          this.currentPageButton(button, true);
          localStorage.setItem('page', button.innerHTML);
          this.insertCards(group, currentButtonNumber);
        }
      });
    }
  }

  currentPageButton(button: Element, state: boolean) {
    const unactiveButton = document.querySelector('.active-page-button');

    if (state) {
      button.classList.add('active-page-button');
    } else {
      unactiveButton?.classList.remove('active-page-button');
    }
  }

  setDefaultCurrentPageButton(currentPage: number) {
    const buttons = document.querySelectorAll<HTMLButtonElement>(
      '.cards-pages__page-button',
    );

    buttons.forEach((button) => {
      if (button.innerHTML === `${currentPage}`) {
        this.currentPageButton(button, true);
      }
    });
  }

  insertCards(group: number, page: number) {
    const correctGroup = group - 1;
    const correctPage = page - 1;

    for (let i = 0; i <= 19; i += 1) {
      new Card(this.cardsBlock, i, correctGroup, correctPage).render();
    }
  }
}
