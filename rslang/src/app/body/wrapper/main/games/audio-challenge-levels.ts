import BaseComponent from '../../../../utility/base-сomponent';
import AudioChallange from './audio-challenge';
import IWord from '../../../../interfaces/word';
import getWords from '../../../../utility/games/audio-challange/get-words';

export default class AudioChallangeLvl {
  readonly audioChallangeLvl: HTMLElement;

  readonly container: HTMLElement;

  public wordsInGroup: IWord[];

  constructor(private readonly root: HTMLElement) {
    this.audioChallangeLvl = document.createElement('div');
    this.container = document.createElement('section');
    this.wordsInGroup = [] as IWord[];
  }

  async addListenerToButtonLvl(target: HTMLElement | null): Promise<void> {
    if (target && target.tagName === 'DIV') {
      if (target.dataset.group) {
        const x: Promise<IWord[]>[] = [];
        for (let i = 0; i < 30; i += 1) {
          const y = getWords(target.dataset.group, `${i}`);
          x.push(y);
        }
        const y = await Promise.all(x);
        this.wordsInGroup = y.reduce((a, b) => a.concat(b));
        // ПЕРЕРИСОВКА
        const audioChallangeLvl: HTMLElement | null = document.querySelector('.main__games__audioChallange-levels');
        const main: HTMLElement | null = document.querySelector('.main');
        if (audioChallangeLvl && main) {
          audioChallangeLvl.remove();
          new AudioChallange(main, this.wordsInGroup).render();
        }
      }
    }
  }

  render(): HTMLElement {
    this.root.appendChild(this.audioChallangeLvl);
    this.audioChallangeLvl.classList.add('main__games__audioChallange-levels');

    new BaseComponent(this.audioChallangeLvl, 'h2', ['main__games__audioChallange-levels__head'], 'Audio challenge').render();
    new BaseComponent(this.audioChallangeLvl, 'h3', ['main__games__audioChallange-levels__title'], 'Select the Level').render();

    this.audioChallangeLvl.appendChild(this.container);
    this.container.classList.add('main__games__audioChallange-levels__container');
    new BaseComponent(this.container, 'div', ['main__games__audioChallange-levels-group', 'lvl-1'], '1').render().setAttribute('data-group', '0');
    new BaseComponent(this.container, 'div', ['main__games__audioChallange-levels-group', 'lvl-2'], '2').render().setAttribute('data-group', '1');
    new BaseComponent(this.container, 'div', ['main__games__audioChallange-levels-group', 'lvl-3'], '3').render().setAttribute('data-group', '2');
    new BaseComponent(this.container, 'div', ['main__games__audioChallange-levels-group', 'lvl-4'], '4').render().setAttribute('data-group', '3');
    new BaseComponent(this.container, 'div', ['main__games__audioChallange-levels-group', 'lvl-5'], '5').render().setAttribute('data-group', '4');
    new BaseComponent(this.container, 'div', ['main__games__audioChallange-levels-group', 'lvl-6'], '6').render().setAttribute('data-group', '5');

    new BaseComponent(this.audioChallangeLvl, 'div', ['main__games__audioChallange-levels__button'], 'BACK').render();

    this.container.addEventListener('click', ({ target }) => this.addListenerToButtonLvl(target as HTMLElement));

    return this.audioChallangeLvl;
  }
}
