export default class MainDictionary {
  readonly mainDictionary: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainDictionary = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainDictionary);
    this.mainDictionary.classList.add('main__dictionary');

    return this.mainDictionary;
  }
}
