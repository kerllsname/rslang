import BaseComponent from '../../../../utility/baseComponent';

export default class Nav {
  readonly nav: HTMLElement;

  readonly ul: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.nav = document.createElement('nav');
    this.ul = document.createElement('nav');
  }

  render(): HTMLElement {
    this.root.appendChild(this.nav);
    this.nav.classList.add('nav');
    this.nav.appendChild(this.ul);
    this.ul.classList.add('nav__ul');
    new BaseComponent(this.ul, 'li', ['nav__li', 'home', 'active'], 'home').render();
    new BaseComponent(this.ul, 'li', ['nav__li', 'textbook'], 'textbook').render();
    new BaseComponent(this.ul, 'li', ['nav__li', 'dictionary'], 'dictionary').render();
    new BaseComponent(this.ul, 'li', ['nav__li', 'games'], 'games').render();
    new BaseComponent(this.ul, 'li', ['nav__li', 'statistics'], 'statistics').render();
    new BaseComponent(this.ul, 'li', ['nav__li', 'about'], 'about').render();

    return this.nav;
  }
}
