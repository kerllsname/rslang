import BaseComponent from '../../../../utility/base-сomponent';
import deletePage from '../../../../utility/main/delete-page';
import getPage from '../../../../utility/main/get-page';

export default class Nav {
  readonly nav: HTMLElement;

  readonly ul: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.nav = document.createElement('nav');
    this.ul = document.createElement('ul');
  }

  navListener() {
    const liItems = this.ul.querySelectorAll('li');

    liItems.forEach((item) => {
      item.addEventListener('click', this.handler);
    });
  }

  handler({ currentTarget: item }) {
    const headerTitle = document.querySelector<HTMLElement>('.header__currentTitle');
    if (headerTitle) {
      if (!item.classList.contains('active')) {
        headerTitle.innerHTML = `${item.classList[1]}`;
        deletePage();
        item.classList.toggle('active');
        getPage(item.classList[1]);
      }
    }
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

    this.navListener();

    return this.nav;
  }
}
