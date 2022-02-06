import BaseComponent from '../base-сomponent';

export default class MainBox {
  readonly mainBox: HTMLElement;

  constructor(private readonly root: HTMLElement, readonly text: string) {
    this.mainBox = document.createElement('div');
    this.text = text;
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainBox);
    this.mainBox.classList.add('main-box');

    new BaseComponent(this.mainBox, 'div', ['main__img']).render();
    new BaseComponent(this.mainBox, 'p', ['main__text'], `${this.text}`).render();

    return this.mainBox;
  }
}
