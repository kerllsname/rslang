import BaseComponent from '../../../utility/base-сomponent';
import MainBox from '../../../utility/main/main-text-box';

export default class MainHome {
  readonly mainHome: HTMLElement;

  readonly container: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainHome = document.createElement('div');
    this.container = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainHome);
    this.mainHome.classList.add('main__home');

    new BaseComponent(this.mainHome, 'h1', ['main__home-title'], "If you want to learn English, you've come to the right place.").render();
    this.mainHome.appendChild(this.container);
    this.container.classList.add('main__home-container');
    new MainBox(this.container, 'textbook', 'Learn words easily with textbook').render().addEventListener();
    new MainBox(this.container, 'dictionary', 'Forgot a word - look in the dictionary').render();
    new MainBox(this.container, 'games', 'Fun learning English through games').render();
    new MainBox(this.container, 'statistics', "Don't forget to register to see statistics and track progress").render();

    return this.mainHome;
  }
}
