import getData from '../../request/get-data';
import BaseComponent from '../base-сomponent';
import IWord from '../../interfaces/word';

export default class Card {
  readonly card: HTMLElement;

  readonly imageBlock: HTMLElement;

  readonly image: HTMLImageElement;

  readonly contentBlock: HTMLElement;

  readonly word: HTMLElement;

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
    this.word = document.createElement('div');
    this.wordExplanation = document.createElement('div');
    this.wordExample = document.createElement('div');
  }

  render() {
    this.root.appendChild(this.card);
    this.card.classList.add('cards-block__card');

    this.card.appendChild(this.contentBlock);
    this.contentBlock.classList.add('card-content');

    this.card.appendChild(this.imageBlock);
    this.imageBlock.classList.add('card-image');

    this.contentBlock.appendChild(this.word);
    this.word.classList.add('card-content__word');

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
    new BaseComponent(this.wordExplanation, 'div', ['word-explanation__explanation'], `${data[count].textMeaning}`).render();
    new BaseComponent(this.wordExplanation, 'div', ['word-explanation__explanation-translate'], `${data[count].textMeaningTranslate}`).render();
    new BaseComponent(this.wordExample, 'div', ['word-example__example'], `${data[count].textExample}`).render();
    new BaseComponent(this.wordExample, 'div', ['word-example__example-translate'], `${data[count].textExampleTranslate}`).render();

    await this.insertImage(data, count);
  }
}
