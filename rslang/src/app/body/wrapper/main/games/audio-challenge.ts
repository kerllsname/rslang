import BaseComponent from '../../../../utility/base-сomponent';
import AnswerBox from '../../../../utility/games/audio-challange/answer-box';
import getData from '../../../../request/get-data';

export default class AudioChallange {
  readonly audioChallange: HTMLElement;

  readonly containerPanel: HTMLElement;

  readonly dataSound: string;

  constructor(private readonly root: HTMLElement) {
    this.audioChallange = document.createElement('div');
    this.containerPanel = document.createElement('div');
    this.dataSound = await getData('');
  }

  playSound(): void {

  }

  render(): HTMLElement {
    this.root.appendChild(this.audioChallange);
    this.audioChallange.classList.add('main__games__audioChallange');

    new BaseComponent(this.audioChallange, 'img', ['main__games__audioChallange-img']).render().setAttribute('src', '../../../../../assets/svg/question.svg');
    new BaseComponent(this.audioChallange, 'div', ['main__games__audioChallange-buttonSound']).render();
    new BaseComponent(this.audioChallange, 'div', ['main__games__audioChallange-buttonSkip'], 'Skip &#10162').render();
    new AnswerBox(this.audioChallange).render();

    this.audioChallange.appendChild(this.containerPanel);
    this.containerPanel.classList.add('main__games__audioChallange__containerPanel');
    new BaseComponent(this.containerPanel, 'div', ['main__games__audioChallange__containerPanel-buttonVolume']).render();
    new BaseComponent(this.containerPanel, 'div', ['main__games__audioChallange__containerPanel-counter'], '<span class="audioChallange__wordsCount">1</span>/<span class="audioChallange__wordsAll">20</span>').render();
    new BaseComponent(this.containerPanel, 'div', ['main__games__audioChallange__containerPanel-fullScreen']).render();

    return this.audioChallange;
  }
}
