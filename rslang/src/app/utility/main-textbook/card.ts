/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import getData from '../../request/get-data';
import BaseComponent from '../base-сomponent';
import IWord from '../../interfaces/word';

export default class Card {
  readonly card: HTMLElement;

  readonly imageBlock: HTMLElement;

  readonly contentBlock: HTMLElement;

  readonly wordAndSound: HTMLElement;

  readonly word: HTMLElement;

  readonly sound: HTMLImageElement;

  readonly wordExplanation: HTMLElement;

  readonly wordExample: HTMLElement;

  constructor(
    private readonly root: HTMLElement,
    private readonly count: number,
    private readonly group: number,
    private readonly page: number,
  ) {
    this.card = document.createElement('div');
    this.imageBlock = document.createElement('div');
    this.contentBlock = document.createElement('div');
    this.wordAndSound = document.createElement('div');
    this.word = document.createElement('div');
    this.sound = document.createElement('img');
    this.wordExplanation = document.createElement('div');
    this.wordExample = document.createElement('div');

    this.soundHandler = this.soundHandler.bind(this);
  }

  render() {
    this.root.appendChild(this.card);
    this.card.classList.add('cards-block__card');
    this.colorCards();

    this.card.appendChild(this.contentBlock);
    this.contentBlock.classList.add('card-content');

    this.card.appendChild(this.imageBlock);
    this.imageBlock.classList.add('card-image');

    this.contentBlock.appendChild(this.wordAndSound);
    this.wordAndSound.classList.add('card-content__word-and-sound');

    this.wordAndSound.appendChild(this.word);
    this.word.classList.add('card-content__word');

    this.wordAndSound.appendChild(this.sound);
    this.sound.classList.add('card-content__sound');
    this.sound.src = '../../../assets/svg/play-button.svg';

    this.contentBlock.appendChild(this.wordExplanation);
    this.wordExplanation.classList.add('card-content__word-explanation');

    this.contentBlock.appendChild(this.wordExample);
    this.wordExample.classList.add('card-content__word-example');

    this.insertHandler();
  }

  insertAudio(data: IWord[], wordNum: number) {
    this.sound.addEventListener('click', (button) => this.soundHandler(data, wordNum, button));
  }

  async insertHandler() {
    const data: IWord[] = await getData(`words?page=${this.page}&group=${this.group}`);

    this.insertContent(data, this.count);
  }

  async insertImage(data: IWord[], wordNum: number) {
    this.imageBlock.style.background = `url(http://localhost:8000/${data[wordNum].image})`;
  }

  async insertContent(data: IWord[], count: number) {
    new BaseComponent(this.word, 'div', ['word__word'], `<b>${data[count].word}</b>`).render();
    new BaseComponent(this.word, 'div', ['word__word-transcription'], `${data[count].transcription}`).render();
    new BaseComponent(this.word, 'div', ['word__word-translate'], `${data[count].wordTranslate}`).render();
    new BaseComponent(this.wordExplanation, 'div', ['word-explanation__explanation'], `${data[count].textMeaning}`).render();
    new BaseComponent(this.wordExplanation, 'div', ['word-explanation__explanation-translate'], `${data[count].textMeaningTranslate}`).render();
    new BaseComponent(this.wordExample, 'div', ['word-example__example'], `${data[count].textExample}`).render();
    new BaseComponent(this.wordExample, 'div', ['word-example__example-translate'], `${data[count].textExampleTranslate}`).render();

    this.insertImage(data, count);
    this.insertAudio(data, count);
  }

  colorCards() {
    const currentGroup = localStorage.getItem('group');

    this.contentBlock.classList.add(`cards-groups__group-button${currentGroup}`);
  }

  soundHandler(data: IWord[], count: number, { currentTarget: button }) {
    const wordAudio = document.createElement('audio');
    const meaningAudio = document.createElement('audio');
    const exampleAudio = document.createElement('audio');

    wordAudio.src = `http://localhost:8000/${data[count].audio}`;
    meaningAudio.src = `http://localhost:8000/${data[count].audioMeaning}`;
    exampleAudio.src = `http://localhost:8000/${data[count].audioExample}`;

    if (localStorage.getItem('play') !== 'true') {
      wordAudio.play();

      localStorage.setItem('play', 'true');
      button.src = '../../../assets/svg/pause-button.svg';
      button.style.cursor = 'default';

      wordAudio.onended = () => {
        meaningAudio.play();
        meaningAudio.onended = () => {
          exampleAudio.play();
          exampleAudio.onended = () => {
            localStorage.setItem('play', 'false');
            button.src = '../../../assets/svg/play-button.svg';
            button.style.cursor = 'pointer';
          };
        };
      };
    }
  }
}
