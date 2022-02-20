import MainHome from './main-home';

export default class Main {
  readonly main: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.main = document.createElement('main');
  }

  render(): HTMLElement {
    this.root.appendChild(this.main);
    this.main.classList.add('main');

    new MainHome(this.main).render();
    this.restorePage();

    return this.main;
  }

  restorePage() {
    const currentPage = localStorage.getItem('currentPage');

    if (currentPage) {
      const liItems = document.querySelectorAll<HTMLElement>('.nav__li');

      liItems.forEach((item) => {
        if (item.classList[1] === currentPage) {
          item.dispatchEvent(new MouseEvent('click', { shiftKey: true }));
        }
      });
    }
  }
}
