import BaseComponent from '../../../utility/base-сomponent';

export default class MainAbout {
  readonly mainAbout: HTMLElement;

  readonly kirillBlock: HTMLElement;

  readonly kirillAvatar: HTMLImageElement;

  readonly igorBlock: HTMLElement;

  readonly igorAvatar: HTMLImageElement;

  constructor(private readonly root: HTMLElement) {
    this.mainAbout = document.createElement('div');
    this.kirillBlock = document.createElement('div');
    this.kirillAvatar = document.createElement('img');
    this.igorBlock = document.createElement('div');
    this.igorAvatar = document.createElement('img');
  }

  render(): HTMLElement {
    this.root.appendChild(this.mainAbout);
    this.mainAbout.classList.add('main__about');

    this.mainAbout.appendChild(this.kirillBlock);
    this.kirillBlock.classList.add('about-kirill');

    new BaseComponent(this.kirillBlock, 'h2', ['about-kirill__name'], 'Kirill').render();

    this.kirillAvatar.src = '../../../../assets/images/kirill.jpg';
    this.kirillBlock.appendChild(this.kirillAvatar);
    this.kirillAvatar.classList.add('about_avatar');

    new BaseComponent(this.kirillBlock, 'div', ['about-kirill__description'], 'about description').render();

    const kirillGit = document.createElement('img');
    kirillGit.src = '../../../../assets/svg/git-logo.svg';
    this.kirillBlock.appendChild(kirillGit);
    kirillGit.classList.add('about-kirill__git');

    this.mainAbout.appendChild(this.igorBlock);
    this.igorBlock.classList.add('about-igor');

    new BaseComponent(this.igorBlock, 'h2', ['about-igor__name'], 'Igor').render();

    this.igorAvatar.src = '../../../../assets/images/igor.jpg';
    this.igorBlock.appendChild(this.igorAvatar);
    this.igorAvatar.classList.add('about_avatar');

    new BaseComponent(this.igorBlock, 'div', ['about-igor__description'], 'about description').render();

    const igorGit = document.createElement('img');
    igorGit.src = '../../../../assets/svg/git-logo.svg';
    this.igorBlock.appendChild(igorGit);
    igorGit.classList.add('about-igor__git');

    return this.mainAbout;
  }
}
