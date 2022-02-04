import BaseComponent from '../../utility/baseComponent';
import RssLogo from './rss';
import Author from './author';

export default class Footer {
  readonly footer: HTMLElement;

  readonly wrapper: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.footer = document.createElement('footer');
    this.wrapper = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.footer);
    this.footer.classList.add('footer');
    new BaseComponent(this.footer, 'div', ['date'], '&copy; <time>2022</time>').render();
    new Author(this.footer, 'Igor').render().setAttribute('href', 'https://github.com/BromBom');
    new Author(this.footer, 'Kirill').render().setAttribute('href', 'https://github.com/kerllsname');
    new RssLogo(this.footer).render();

    return this.footer;
  }
}
