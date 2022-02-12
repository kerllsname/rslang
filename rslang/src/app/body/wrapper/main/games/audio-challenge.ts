import BaseComponent from '../../../../utility/base-сomponent';
import AnswerBox from '../../../../utility/games/audio-challange/answer-box';
import playSound from '../../../../utility/games/audio-challange/play-sound';
import IWord from '../../../../interfaces/word';

export default class AudioChallange {
  readonly audioChallange: HTMLElement;

  readonly containerPanel: HTMLElement;

  readonly currentWord: IWord;

  constructor(private readonly root: HTMLElement, public wordsInGroup: IWord[]) {
    this.audioChallange = document.createElement('div');
    this.containerPanel = document.createElement('div');
    this.wordsInGroup = wordsInGroup;
    this.currentWord = this.getRandomWordInGroup();
  }

  getRandomWordInGroup(): IWord {
    const randomWord = Math.floor(Math.random() * 600);
    return this.wordsInGroup[randomWord];
  }

  pushBtnSound = (): void => {
    playSound(this.currentWord);
  };

  render(): HTMLElement {
    this.root.appendChild(this.audioChallange);
    this.audioChallange.classList.add('main__games__audioChallange');

    new BaseComponent(this.audioChallange, 'img', ['main__games__audioChallange-img']).render().setAttribute('src', '../../../../../assets/svg/question.svg');
    new BaseComponent(this.audioChallange, 'div', ['main__games__audioChallange-buttonSound']).render();
    new BaseComponent(this.audioChallange, 'div', ['main__games__audioChallange-buttonSkip'], 'Skip &#10162').render();
    new AnswerBox(this.audioChallange, this.wordsInGroup, this.currentWord).render();

    this.audioChallange.appendChild(this.containerPanel);
    this.containerPanel.classList.add('main__games__audioChallange__containerPanel');
    new BaseComponent(this.containerPanel, 'div', ['main__games__audioChallange__containerPanel-buttonVolume']).render();
    new BaseComponent(this.containerPanel, 'div', ['main__games__audioChallange__containerPanel-counter'], '<span class="audioChallange__wordsCount">1</span>/<span class="audioChallange__wordsAll">20</span>').render();
    new BaseComponent(this.containerPanel, 'div', ['main__games__audioChallange__containerPanel-fullScreen']).render();

    playSound(this.currentWord);

    const btnSound = document.querySelector('.main__games__audioChallange-buttonSound');
    if (btnSound) {
      btnSound.addEventListener('click', this.pushBtnSound);
    }

    return this.audioChallange;
  }
}
