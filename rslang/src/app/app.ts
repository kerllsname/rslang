import Header from './body/header/header';
import Nav from './body/wrapper/aside/nav/nav';
import Main from './body/wrapper/main/main';
import Footer from './body/footer/footer';

export default class App {
  private readonly page: HTMLElement;

  private readonly wrapper: HTMLElement;

  private readonly aside: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.page = document.createElement('div');
    this.page.classList.add('page');
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.aside = document.createElement('aside');
    this.aside.classList.add('aside');
  }

  render(): HTMLElement {
    this.root.appendChild(this.page);
    new Header(this.page).render();
    this.page.appendChild(this.wrapper);
    this.wrapper.appendChild(this.aside);
    new Nav(this.aside).render();
    new Main(this.wrapper).render();
    new Footer(this.page).render();

    return this.page;
  }
}
