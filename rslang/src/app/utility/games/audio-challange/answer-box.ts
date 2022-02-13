import BaseComponent from '../../base-сomponent';
import IWord from '../../../interfaces/word';

export default class AnswerBox {
  readonly answerBox: HTMLElement;

  public isPush: boolean;

  constructor(
    private readonly root: HTMLElement,
    public wordsInGroup: IWord[],
    public currentWord: IWord,
  ) {
    this.answerBox = document.createElement('div');
    this.isPush = false;
  }

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * 600);
    return this.wordsInGroup[randomIndex].wordTranslate;
  }

  pushBtnAnswer(target: HTMLElement | null): void {
    if (target && target.tagName === 'DIV') {
      if (!this.isPush) {
        this.isPush = true;
        target.classList.add('answer');
        target.setAttribute('data-answer', 'yes');
        const img = document.querySelector('.main__games__audioChallange-img');
        img!.setAttribute('src', `http://localhost:8000/${this.currentWord.image}`);
        const sound = new Audio();
        sound.src = '../../../../assets/sounds/success.mp3';
        sound.autoplay = true;
        // ПЕРЕРИСОВКА
        const btnSkip: HTMLElement | null = document.querySelector('.main__games__audioChallange-buttonSkip');
        if (btnSkip) {
          btnSkip.classList.add('main__games__audioChallange-buttonNext');
          btnSkip.innerHTML = 'NEXT';
          const btnAnswer: HTMLElement = target;
          btnAnswer.innerHTML = `
          <p>${this.currentWord.word}</p>
          <p>${this.currentWord.transcription}</p>
          <p>${this.currentWord.wordTranslate}</p>
          `;
        }
      }
    }
  }

  pushBtnWrong(target: HTMLElement | null): void {
    if (target && target.tagName === 'DIV') {
      if (!this.isPush) {
        this.isPush = true;
        target.setAttribute('data-answer', 'no');
        const img = document.querySelector('.main__games__audioChallange-img');
        img!.setAttribute('src', `http://localhost:8000/${this.currentWord.image}`);
        const sound = new Audio();
        sound.src = '../../../../assets/sounds/fail.mp3';
        sound.autoplay = true;
      }
    }
  }

  render(): HTMLElement {
    this.root.appendChild(this.answerBox);
    this.answerBox.classList.add('main__games__audioChallange__answerBox');

    new BaseComponent(this.answerBox, 'div', ['main__games__audioChallange__buttonAnswer', 'answer-0']).render();
    new BaseComponent(this.answerBox, 'div', ['main__games__audioChallange__buttonAnswer', 'answer-1']).render();
    new BaseComponent(this.answerBox, 'div', ['main__games__audioChallange__buttonAnswer', 'answer-2']).render();
    new BaseComponent(this.answerBox, 'div', ['main__games__audioChallange__buttonAnswer', 'answer-3']).render();

    const randomNum = Math.floor(Math.random() * 4);
    const buttonsArray = document.querySelectorAll('.main__games__audioChallange__buttonAnswer');

    buttonsArray[0].innerHTML = this.getRandomWord();
    buttonsArray[1].innerHTML = this.getRandomWord();
    buttonsArray[2].innerHTML = this.getRandomWord();
    buttonsArray[3].innerHTML = this.getRandomWord();

    const btnAnswerRight: HTMLElement | null = document.querySelector(`.answer-${randomNum}`);
    if (btnAnswerRight) {
      btnAnswerRight.dataset.answer = '0';
      btnAnswerRight.innerHTML = this.currentWord.wordTranslate;
      btnAnswerRight.addEventListener('click', ({ target }) => this.pushBtnAnswer(target as HTMLElement));
    }

    buttonsArray.forEach((item) => {
      item.addEventListener('click', ({ target }) => this.pushBtnWrong(target as HTMLElement));
    });

    return this.answerBox;
  }
}
