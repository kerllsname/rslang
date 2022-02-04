// import BaseComponent from '../../utility/baseComponent';

export default class Main {
  readonly main: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.main = document.createElement('main');
  }

  render(): HTMLElement {
    this.root.appendChild(this.main);
    this.main.classList.add('main');

    return this.main;
  }
}
