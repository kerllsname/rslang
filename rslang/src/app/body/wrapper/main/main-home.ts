import BaseComponent from '../../../utility/baseComponent';

export default class MainHome {
  readonly mainHome: HTMLElement;

  readonly container: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainHome = document.createElement('div');
    this.container = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainHome);
    this.mainHome.classList.add('main__home');

    new BaseComponent(this.mainHome, 'h1', ['main__title'], "If you want to learn English, you've come to the right place.").render();
    new BaseComponent(this.mainHome, 'div', ['main__img', 'img-1']).render();
    this.mainHome.appendChild(this.container);
    this.container.classList.add('main-container');
    new BaseComponent(this.container, 'p', ['main__text', 'text-1'], 'Learn words easily with textbook').render();
    new BaseComponent(this.container, 'div', ['main__img', 'img-2']).render();
    new BaseComponent(this.container, 'p', ['main__text', 'text-2'], 'Forgot a word - look in the dictionary').render();
    new BaseComponent(this.container, 'div', ['main__img', 'img-3']).render();
    new BaseComponent(this.container, 'p', ['main__text', 'text-3'], 'Fun learning English through games').render();
    new BaseComponent(this.container, 'div', ['main__img', 'img-4']).render();
    new BaseComponent(this.container, 'p', ['main__text', 'text-4'], "Don't forget to register to see statistics and track progress").render();

    return this.mainHome;
  }
}
