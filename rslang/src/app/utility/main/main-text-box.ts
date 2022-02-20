import BaseComponent from '../base-сomponent';

export default class MainBox {
  readonly mainBox: HTMLElement;

  constructor(private readonly root: HTMLElement, readonly task: string, readonly text: string) {
    this.mainBox = document.createElement('section');
    this.text = text;
    this.task = task;
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainBox);
    this.mainBox.classList.add('main__home-box');

    new BaseComponent(this.mainBox, 'div', ['main__home-img', `main__home-img__${this.task}`]).render();
    new BaseComponent(this.mainBox, 'section', ['main__home-text'], `${this.text}`).render();

    return this.mainBox;
  }
}
