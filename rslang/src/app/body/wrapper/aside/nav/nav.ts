import BaseComponent from '../../../../utility/baseComponent';

export default class Nav {
  readonly nav: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.nav = document.createElement('nav');
  }

  render(): HTMLElement {
    this.root.appendChild(this.nav);
    this.nav.classList.add('nav');
    new BaseComponent(this.nav, 'button', ['nav__home'], 'home').render();
    new BaseComponent(this.nav, 'button', ['nav__textbook'], 'textbook').render();
    new BaseComponent(this.nav, 'button', ['nav__dictionary'], 'dictionary').render();
    new BaseComponent(this.nav, 'button', ['nav__games'], 'games').render();
    new BaseComponent(this.nav, 'button', ['nav__statistics'], 'statistics').render();
    new BaseComponent(this.nav, 'button', ['nav__about'], 'about Us').render();

    return this.nav;
  }
}
