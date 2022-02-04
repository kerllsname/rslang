// import BaseComponent from '../../utility/baseComponent';

export default class Nav {
  readonly nav: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.nav = document.createElement('nav');
  }

  render(): HTMLElement {
    this.root.appendChild(this.nav);
    this.nav.classList.add('nav');
    this.nav.innerHTML = '<h2>nav</h2>';

    return this.nav;
  }
}
