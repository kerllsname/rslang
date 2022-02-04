// import BaseComponent from '../../utility/baseComponent';

export default class Footer {
  readonly footer: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.footer = document.createElement('footer');
  }

  render(): HTMLElement {
    this.root.appendChild(this.footer);
    this.footer.classList.add('footer');
    this.footer.innerHTML = '<h2>footer</h2>';

    return this.footer;
  }
}
