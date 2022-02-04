export default class Author {
  readonly author: HTMLElement;

  constructor(private readonly root: HTMLElement, readonly name: string) {
    this.author = document.createElement('a');
    this.name = name;
    this.author.innerHTML = this.name;
    this.author.setAttribute('target', '_blank');
  }

  render(): HTMLElement {
    this.root.appendChild(this.author);
    this.author.classList.add('author');
    return this.author;
  }
}
