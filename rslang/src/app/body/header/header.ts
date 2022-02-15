import BaseComponent from '../../utility/base-сomponent';
import Authorization from './authorization';

export default class Header {
  readonly header: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.header = document.createElement('header');
    this.handler = this.handler.bind(this);
  }

  render(): HTMLElement {
    this.root.appendChild(this.header);
    this.header.classList.add('header');
    new BaseComponent(this.header, 'h2', ['header__logo'], 'RSLang').render();
    new BaseComponent(this.header, 'h2', ['header__currentTitle'], 'home').render();
    new BaseComponent(this.header, 'button', ['header__log-in'], 'log-in').render().addEventListener('click', this.handler);

    return this.header;
  }

  handler({ currentTarget: button }) {
    new Authorization(this.root).render();
  }
}
