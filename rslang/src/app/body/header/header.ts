import getUser from '../../request/is-token-valid';
import refresh from '../../request/refreshToken';
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
    this.isAuthorize();

    return this.header;
  }

  async isAuthorize() {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if (id && token && refreshToken) {
      const result = await getUser(id, token);

      if (result) {
        new Authorization(this.root).rebuildHeader(result.name);
      } else {
        refresh(id, refreshToken);
      }
    }
  }

  handler() {
    new Authorization(this.root).render();
  }
}
