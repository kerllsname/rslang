export default class MainAbout {
  readonly mainAbout: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainAbout = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainAbout);
    this.mainAbout.classList.add('main__about');

    return this.mainAbout;
  }
}
