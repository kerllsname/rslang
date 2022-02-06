import BaseComponent from '../base-сomponent';

export default class Card {
  readonly card: HTMLElement;

  readonly imageBlock: HTMLElement;

  readonly image: HTMLImageElement;

  readonly contentBlock: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.card = document.createElement('div');
    this.imageBlock = document.createElement('div');
    this.image = document.createElement('img');
    this.contentBlock = document.createElement('div');
  }

  render(): HTMLElement {
    this.root.appendChild(this.card);
    this.card.classList.add('cards-block__card');

    this.card.appendChild(this.imageBlock);
    this.imageBlock.classList.add('card-image');
    this.insertImage();

    this.card.appendChild(this.contentBlock);
    this.contentBlock.classList.add('card-content');
    this.insertContent();

    return this.card;
  }

  insertImage() {
    this.imageBlock.appendChild(this.image);
    this.image.classList.add('card-image__image');
    this.image.src = '../../../assets/images/img.bmp';
  }

  insertContent() {
    new BaseComponent(this.contentBlock, 'div', ['content__word-and-transcription'], 'adverse - [ædvɜU+02d0rs]').render();
    new BaseComponent(this.contentBlock, 'div', ['content__word-translate'], 'неблагоприятный').render();
    new BaseComponent(this.contentBlock, 'div', ['content__word-translate'], 'Something that has an adverse effect can be harmful, dangerous, or unfavorable.').render();
    new BaseComponent(this.contentBlock, 'div', ['content__word-translate'], 'То, что оказывает неблагоприятное воздействие, может быть вредным, опасным или неблагоприятным').render();
    new BaseComponent(this.contentBlock, 'div', ['content__word-translate'], 'I worry that the tornado will have an adverse effect on the farm.').render();
    new BaseComponent(this.contentBlock, 'div', ['content__word-translate'], 'Я беспокоюсь, что торнадо окажет неблагоприятное влияние на ферму').render();
  }
}
