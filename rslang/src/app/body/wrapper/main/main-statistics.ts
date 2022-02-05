export default class MainStatistics {
  readonly mainStatistics: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainStatistics = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainStatistics);
    this.mainStatistics.classList.add('main__statistics');

    return this.mainStatistics;
  }
}
