import MainHome from './main-home';
import AudioChallange from './games/audio-challenge';

export default class Main {
  readonly main: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.main = document.createElement('main');
  }

  render(): HTMLElement {
    this.root.appendChild(this.main);
    this.main.classList.add('main');

    new MainHome(this.main).render();
    // new AudioChallange(this.main).render();

    return this.main;
  }
}
