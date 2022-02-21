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

    this.kirillAvatar.src = '../../../../assets/images/igor.jpg';
    this.kirillBlock.appendChild(this.kirillAvatar);
    this.kirillAvatar.classList.add('about_avatar');

    const madeByKirill = ['textbook page', 'games page layout', 'about page', 'navigation and everything related to it', 'authorization'];

    new BaseComponent(this.kirillBlock, 'ul', ['about-kirill__description'], 'contribution to the development of this application:').render();

    const kirillsList = document.querySelector<HTMLElement>('.about-kirill__description');

    if (kirillsList) {
      for (let i = 0; i < madeByKirill.length; i += 1) {
        new BaseComponent(kirillsList, 'li', ['description__item'], `${madeByKirill[i]}`).render();
      }
    }

    const kirillName = 'kirill';
    const kirillGit = document.createElement('img');
    kirillGit.src = '../../../../assets/svg/git-logo.svg';
    this.kirillBlock.appendChild(kirillGit).addEventListener('click', () => this.linkHandler(kirillName));
    kirillGit.classList.add('about-kirill__git');

    this.mainAbout.appendChild(this.igorBlock);
    this.igorBlock.classList.add('about-igor');

    new BaseComponent(this.igorBlock, 'h2', ['about-igor__name'], 'Igor').render();

    this.igorAvatar.src = '../../../../assets/images/kirill.jpg';
    this.igorBlock.appendChild(this.igorAvatar);
    this.igorAvatar.classList.add('about_avatar');

    const madeByIgor = ['home page', 'audio challenge game', 'sprint game', 'statistics and everything related to it', 'website layout'];

    new BaseComponent(this.igorBlock, 'ul', ['about-igor__description'], 'contribution to the development of this application:').render();

    const igorsList = document.querySelector<HTMLElement>('.about-igor__description');

    if (igorsList) {
      for (let i = 0; i < madeByIgor.length; i += 1) {
        new BaseComponent(igorsList, 'li', ['description__item'], `${madeByIgor[i]}`).render();
      }
    }

    const igorName = 'igor';
    const igorGit = document.createElement('img');
    igorGit.src = '../../../../assets/svg/git-logo.svg';
    this.igorBlock.appendChild(igorGit).addEventListener('click', () => this.linkHandler(igorName));
    igorGit.classList.add('about-igor__git');

    return this.mainAbout;
  }

  linkHandler(name: string) {
    if (name === 'kirill') {
      const url = 'https://github.com/kerllsname';

      window.open(url, '_blank')?.focus();
    } else {
      const url = 'https://github.com/BromBom';

      window.open(url, '_blank')?.focus();
    }
  }
}
