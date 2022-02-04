import BaseComponent from '../../utility/baseComponent';

export default class Header {
  readonly header: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.header = document.createElement('header');
  }

  render(): HTMLElement {
    this.root.appendChild(this.header);
    this.header.classList.add('header');
    new BaseComponent(this.header, 'h2', ['logo'], 'RSLang').render();
    new BaseComponent(this.header, 'h2', ['curкentTitle'], 'Главная').render();
    new BaseComponent(this.header, 'button', ['log-in'], 'log-in').render();

    return this.header;
  }
}
