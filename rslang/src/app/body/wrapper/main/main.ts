import BaseComponent from '../../../utility/baseComponent';
import MainBox from './main-text-box';

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
    this.main.appendChild(this.container);
    this.container.classList.add('main-container');
    new MainBox(this.container, 'Learn words easily with textbook').render();
    new MainBox(this.container, 'Forgot a word - look in the dictionary').render();
    new MainBox(this.container, 'Fun learning English through games').render();
    new MainBox(this.container, "Don't forget to register to see statistics and track progress").render();

    return this.main;
  }
}
