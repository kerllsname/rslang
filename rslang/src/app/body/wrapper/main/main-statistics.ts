import BaseComponent from '../../../utility/base-сomponent';

export default class MainStatistics {
  readonly mainStatistics: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainStatistics = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainStatistics);
    this.mainStatistics.classList.add('main__statistics');

    new BaseComponent(this.mainStatistics, 'h2', ['main__statistics-title'], "If you want to learn English, you've come to the right place.").render();

    return this.mainStatistics;
  }
}
