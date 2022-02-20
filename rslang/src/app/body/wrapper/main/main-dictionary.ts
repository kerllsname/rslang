import BaseComponent from '../../../utility/base-сomponent';

export default class MainDictionary {
  readonly mainDictionary: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainDictionary = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainDictionary);
    this.mainDictionary.classList.add('main__dictionary');

    new BaseComponent(this.mainDictionary, 'div', ['main__dictionary-oops'], '<b>Unfortunately there will be nothing here</b>').render();

    return this.mainDictionary;
  }
}
