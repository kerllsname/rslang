import BaseComponent from '../../utility/base-сomponent';

export default class Header {
  readonly header: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.header = document.createElement('header');
  }

  render(): HTMLElement {
    this.root.appendChild(this.header);
    this.header.classList.add('header');
    new BaseComponent(this.header, 'h2', ['header__logo'], 'RSLang').render();
    new BaseComponent(this.header, 'h2', ['header__currentTitle'], 'home').render();
    new BaseComponent(this.header, 'button', ['header__log-in'], 'log-in').render();

    return this.header;
  }
}
