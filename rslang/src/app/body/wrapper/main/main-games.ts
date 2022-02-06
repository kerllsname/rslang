import BaseComponent from '../../../utility/base-сomponent';

export default class MainGames {
  readonly mainGames: HTMLElement;

  readonly audioGame: HTMLElement;

  readonly sprintGame: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainGames = document.createElement('div');
    this.audioGame = document.createElement('div');
    this.sprintGame = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainGames);
    this.mainGames.classList.add('main__games');

    this.mainGames.appendChild(this.audioGame);
    this.audioGame.classList.add('main__games-audio');
    new BaseComponent(this.audioGame, 'div', ['game-audio__title'], 'audio challenge').render();
    new BaseComponent(this.audioGame, 'div', ['game-audio__description'], 'audio challenge description').render();
    new BaseComponent(this.audioGame, 'button', ['game-audio__play'], 'play').render();

    this.mainGames.appendChild(this.sprintGame);
    this.sprintGame.classList.add('main__games-sprint');
    new BaseComponent(this.sprintGame, 'div', ['game-sprint__title'], 'sprint').render();
    new BaseComponent(this.sprintGame, 'div', ['game-sprint__description'], 'sprint description').render();
    new BaseComponent(this.sprintGame, 'button', ['game-sprint__play'], 'play').render();

    return this.mainGames;
  }
}
