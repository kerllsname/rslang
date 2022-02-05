import BaseComponent from '../../../utility/baseComponent';

export default class Main {
  readonly main: HTMLElement;

  readonly container: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.main = document.createElement('main');
    this.container = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.main);
    this.main.classList.add('main');

    new BaseComponent(this.main, 'h1', ['main__title'], "If you want to learn English, you've come to the right place.").render();
    new BaseComponent(this.main, 'div', ['main__img', 'img-1']).render();
    this.main.appendChild(this.container);
    this.container.classList.add('main-container');
    new BaseComponent(this.container, 'p', ['main__text', 'text-1'], 'Learn words easily with textbook').render();
    new BaseComponent(this.container, 'div', ['main__img', 'img-2']).render();
    new BaseComponent(this.container, 'p', ['main__text', 'text-2'], 'Forgot a word - look in the dictionary').render();
    new BaseComponent(this.container, 'div', ['main__img', 'img-3']).render();
    new BaseComponent(this.container, 'p', ['main__text', 'text-3'], 'Fun learning English through games').render();
    new BaseComponent(this.container, 'div', ['main__img', 'img-4']).render();
    new BaseComponent(this.container, 'p', ['main__text', 'text-4'], "Don't forget to register to see statistics and track progress").render();
    return this.main;
  }
}
