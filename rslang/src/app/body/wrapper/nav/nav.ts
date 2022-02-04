import BaseComponent from '../../../utility/baseComponent';

export default class Nav {
  readonly nav: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.nav = document.createElement('nav');
  }

  render(): HTMLElement {
    this.root.appendChild(this.nav);
    this.nav.classList.add('nav');
    new BaseComponent(this.nav, 'button', ['home'], 'Главная').render();
    new BaseComponent(this.nav, 'button', ['home'], 'Учебник').render();
    new BaseComponent(this.nav, 'button', ['home'], 'Словарь').render();
    new BaseComponent(this.nav, 'button', ['home'], 'Игры').render();
    new BaseComponent(this.nav, 'button', ['home'], 'Статистика').render();
    new BaseComponent(this.nav, 'button', ['home'], 'О команде').render();

    return this.nav;
  }
}
