/* eslint-disable class-methods-use-this */
import getData from '../../request/get-data';
import BaseComponent from '../base-сomponent';
import IWord from '../../interfaces/word';

export default class Card {
  readonly card: HTMLElement;

  readonly imageBlock: HTMLElement;

  readonly image: HTMLImageElement;

  readonly contentBlock: HTMLElement;

  readonly wordAndSound: HTMLElement;

  readonly word: HTMLElement;

  readonly sound: HTMLElement;

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
    this.image = document.createElement('img');
    this.contentBlock = document.createElement('div');
    this.wordAndSound = document.createElement('div');
    this.word = document.createElement('div');
    this.sound = document.createElement('div');
    this.wordExplanation = document.createElement('div');
    this.wordExample = document.createElement('div');

    this.soundHandler = this.soundHandler.bind(this);
  }

  render() {
    this.root.appendChild(this.card);
    this.card.classList.add('cards-block__card');

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

    this.contentBlock.appendChild(this.wordExplanation);
    this.wordExplanation.classList.add('card-content__word-explanation');

    this.contentBlock.appendChild(this.wordExample);
    this.wordExample.classList.add('card-content__word-example');

    this.insertHandler();
  }

  async insertHandler() {
    const data: IWord[] = await getData(`words?page=${this.page}&group=${this.group}`);

    this.insertContent(data, this.count);
  }

  async insertImage(data: IWord[], wordNum: number) {
    this.imageBlock.appendChild(this.image);
    this.image.classList.add('card-image__image');
    this.image.src = `http://localhost:8000/${data[wordNum].image}`;
  }

  async insertContent(data: IWord[], count: number) {
    new BaseComponent(this.word, 'div', ['word__word-transcription'], `${data[count].word} - ${data[count].transcription}`).render();
    new BaseComponent(this.word, 'div', ['word__word-translate'], `${data[count].wordTranslate}`).render();
    new BaseComponent(this.sound, 'button', ['word__word-sound'], 'play').render().addEventListener('click', () => this.soundHandler(data, count));
    new BaseComponent(this.wordExplanation, 'div', ['word-explanation__explanation'], `${data[count].textMeaning}`).render();
    new BaseComponent(this.wordExplanation, 'div', ['word-explanation__explanation-translate'], `${data[count].textMeaningTranslate}`).render();
    new BaseComponent(this.wordExample, 'div', ['word-example__example'], `${data[count].textExample}`).render();
    new BaseComponent(this.wordExample, 'div', ['word-example__example-translate'], `${data[count].textExampleTranslate}`).render();

    this.insertImage(data, count);
  }

  soundHandler(data: IWord[], count: number) {
    const wordAudio = document.createElement('audio');
    const meaningAudio = document.createElement('audio');
    const exampleAudio = document.createElement('audio');
    const buttons = document.querySelectorAll('.word__word-sound');

    wordAudio.src = `http://localhost:8000/${data[count].audio}`;
    meaningAudio.src = `http://localhost:8000/${data[count].audioMeaning}`;
    exampleAudio.src = `http://localhost:8000/${data[count].audioExample}`;

    wordAudio.play();

    buttons.forEach((button) => {
      button.setAttribute('disabled', 'true');
    });

    wordAudio.onended = () => {
      meaningAudio.play();
      meaningAudio.onended = () => {
        exampleAudio.play();
        exampleAudio.onended = () => {
          buttons.forEach((button) => {
            button.removeAttribute('disabled');
          });
        };
      };
    };
  }
}
