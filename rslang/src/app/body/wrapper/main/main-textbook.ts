// import BaseComponent from '../../../utility/baseComponent';

export default class MainTextbook {
  readonly mainTextbook: HTMLElement;

  // readonly gamesBlock: HTMLElement;

  // readonly pagesBlock: HTMLElement;

  // readonly pagesList: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainTextbook = document.createElement('div');
    // this.gamesBlock = document.createElement('div');
    // this.pagesBlock = document.createElement('div');
    // this.pagesList = document.createElement('ul');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainTextbook);
    this.mainTextbook.classList.add('main__textbook');
    // this.mainTextbook.appendChild(this.gamesBlock);

    // const gameOne = document.createElement('button'); // Поправить нейминги
    // const gameTwo = document.createElement('button'); // Поправить нейминги

    return this.mainTextbook;
  }
}
