import BaseComponent from '../../../utility/base-сomponent';
import MainBox from '../../../utility/main/main-text-box';
import MainTextbook from './main-textbook';
import MainDictionary from './main-dictionary';
import MainGames from './main-games';
import MainStatistics from './main-statistics';

export default class MainHome {
  readonly mainHome: HTMLElement;

  readonly container: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainHome = document.createElement('div');
    this.container = document.createElement('div');
  }

  pushBtnTextbook(target: HTMLElement | null): void {
    if (target && target.tagName === 'DIV') {
      const menuTextbook = document.querySelector('.textbook');
      const menuHome = document.querySelector('.home');
      this.mainHome.remove();
      menuHome!.classList.toggle('active');
      menuTextbook!.classList.toggle('active');
      new MainTextbook(this.root).render();
    }
  }

  pushBtnDictionary(target: HTMLElement | null): void {
    if (target && target.tagName === 'DIV') {
      const menuDictionary = document.querySelector('.dictionary');
      const menuHome = document.querySelector('.home');
      this.mainHome.remove();
      menuHome!.classList.toggle('active');
      menuDictionary!.classList.toggle('active');
      new MainDictionary(this.root).render();
    }
  }

  pushBtnGames(target: HTMLElement | null): void {
    if (target && target.tagName === 'DIV') {
      const menuGames = document.querySelector('.games');
      const menuHome = document.querySelector('.home');
      this.mainHome.remove();
      menuHome!.classList.toggle('active');
      menuGames!.classList.toggle('active');
      new MainGames(this.root).render();
    }
  }

  pushBtnStatistics(target: HTMLElement | null): void {
    if (target && target.tagName === 'DIV') {
      const menuStatistics = document.querySelector('.statistics');
      const menuHome = document.querySelector('.home');
      this.mainHome.remove();
      menuHome!.classList.toggle('active');
      menuStatistics!.classList.toggle('active');
      new MainStatistics(this.root).render();
    }
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainHome);
    this.mainHome.classList.add('main__home');

    new BaseComponent(this.mainHome, 'h1', ['main__home-title'], "If you want to learn English, you've come to the right place.").render();
    this.mainHome.appendChild(this.container);
    this.container.classList.add('main__home-container');
    new MainBox(this.container, 'textbook', 'Learn words easily with textbook').render();
    new MainBox(this.container, 'dictionary', 'Forgot a word - look in the dictionary').render();
    new MainBox(this.container, 'games', 'Fun learning English through games').render();
    new MainBox(this.container, 'statistics', "Don't forget to register to see statistics and track progress").render();

    const btnTextbook: HTMLElement | null = document.querySelector('.main__home-img__textbook');
    if (btnTextbook) {
      btnTextbook.addEventListener('click', ({ target }) => this.pushBtnTextbook(target as HTMLElement));
    }

    const btnDictionary: HTMLElement | null = document.querySelector('.main__home-img__dictionary');
    if (btnDictionary) {
      btnDictionary.addEventListener('click', ({ target }) => this.pushBtnDictionary(target as HTMLElement));
    }

    const btnGames: HTMLElement | null = document.querySelector('.main__home-img__games');
    if (btnGames) {
      btnGames.addEventListener('click', ({ target }) => this.pushBtnGames(target as HTMLElement));
    }

    const btnStatistics: HTMLElement | null = document.querySelector('.main__home-img__statistics');
    if (btnStatistics) {
      btnStatistics.addEventListener('click', ({ target }) => this.pushBtnStatistics(target as HTMLElement));
    }

    return this.mainHome;
  }
}
