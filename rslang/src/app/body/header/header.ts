// import BaseComponent from '../../utility/baseComponent';

export default class Header {
  readonly header: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.header = document.createElement('header');
  }

  render(): HTMLElement {
    this.root.appendChild(this.header);
    this.header.classList.add('header');
    this.header.innerHTML = '<h2>header</h2>';

    return this.header;
  }
}
