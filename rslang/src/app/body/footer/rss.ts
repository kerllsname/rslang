export default class RssLogo {
  readonly rssLogo: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.rssLogo = document.createElement('a');
    this.rssLogo.setAttribute('href', 'https://rs.school/js/');
    this.rssLogo.setAttribute('target', '_blank');
    this.rssLogo.innerHTML = '<img src="../../../assets/svg/rss-logo.svg" alt="RSSchool logo">';
  }

  render(): HTMLElement {
    this.root.appendChild(this.rssLogo);
    this.rssLogo.classList.add('footer__rss-logo');
    return this.rssLogo;
  }
}
