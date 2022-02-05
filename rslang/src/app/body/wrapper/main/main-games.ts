export default class MainGames {
  readonly mainGames: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainGames = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainGames);
    this.mainGames.classList.add('main__games');

    return this.mainGames;
  }
}
