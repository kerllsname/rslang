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
    this.audioGame.classList.add('games__audio');
    new BaseComponent(this.audioGame, 'div', ['games__audio-title'], 'audio challenge').render();
    new BaseComponent(this.audioGame, 'div', ['games__audio-description'], 'audio challenge description').render();
    new BaseComponent(this.audioGame, 'button', ['games__audio-play'], 'play').render();

    this.mainGames.appendChild(this.sprintGame);
    this.sprintGame.classList.add('games__sprint');
    new BaseComponent(this.sprintGame, 'div', ['games__sprint-title'], 'sprint').render();
    new BaseComponent(this.sprintGame, 'div', ['games__sprint-description'], 'sprint description').render();
    new BaseComponent(this.sprintGame, 'button', ['games__sprint-play'], 'play').render();

    return this.mainGames;
  }
}
