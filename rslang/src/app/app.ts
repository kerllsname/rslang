import Header from './body/header/header';
import Nav from './body/wrapper/nav/nav';
import Main from './body/wrapper/main/main';
import Footer from './body/footer/footer';

export default class App {
  private readonly page: HTMLElement;

  private readonly wrapper: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.page = document.createElement('div');
    this.page.classList.add('page');
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
  }

  render(): HTMLElement {
    this.root.appendChild(this.page);
    new Header(this.page).render();
    this.page.appendChild(this.wrapper);
    new Nav(this.wrapper).render();
    new Main(this.wrapper).render();
    new Footer(this.page).render();

    return this.page;
  }
}
