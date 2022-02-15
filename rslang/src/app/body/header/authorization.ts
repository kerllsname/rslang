import BaseComponent from '../../utility/base-сomponent';

export default class Authorization {
  readonly authWrapper: HTMLElement;

  readonly authBody: HTMLElement;

  readonly authContent: HTMLElement;

  readonly exitBlock: HTMLElement;

  readonly fields: HTMLElement;

  readonly regField : HTMLElement;

  readonly signField: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.authWrapper = document.createElement('div');
    this.authBody = document.createElement('div');
    this.authContent = document.createElement('div');

    this.exitBlock = document.createElement('div');
    this.fields = document.createElement('div');

    this.regField = document.createElement('div');
    this.signField = document.createElement('div');
  }

  render() {
    this.root.appendChild(this.authWrapper);
    this.authWrapper.classList.add('authorization-wrapper');

    this.authWrapper.appendChild(this.authBody);
    this.authBody.classList.add('authorization-wrapper__authorization-body');

    this.authBody.appendChild(this.authContent);
    this.authContent.classList.add('authorization-body__content');

    this.authContent.appendChild(this.exitBlock);
    this.exitBlock.classList.add('content__exit');
    this.exitBlock.innerHTML = 'X';

    this.authContent.appendChild(this.fields);
    this.fields.classList.add('content__fields');

    this.fields.appendChild(this.regField);
    this.regField.classList.add('fields__registration');

    this.fields.appendChild(this.signField);
    this.signField.classList.add('fields__authorization');

    new BaseComponent(this.regField, 'div', ['registration__title'], 'Registration').render();
    new BaseComponent(this.regField, 'div', ['registration__login-title'], 'login').render();
    new BaseComponent(this.regField, 'input', ['registration__login']).render();
    new BaseComponent(this.regField, 'div', ['registration__password-title'], 'password').render();
    new BaseComponent(this.regField, 'input', ['registration__password']).render();
    new BaseComponent(this.regField, 'button', ['registration__submit'], 'sign up').render();

    new BaseComponent(this.signField, 'div', ['authorization__title'], 'Log in').render();
    new BaseComponent(this.signField, 'div', ['authorization__login-title'], 'login').render();
    new BaseComponent(this.signField, 'input', ['authorization__login']).render();
    new BaseComponent(this.signField, 'div', ['authorization__password-title'], 'login').render();
    new BaseComponent(this.signField, 'input', ['authorization__password']).render();
    new BaseComponent(this.signField, 'button', ['authorization__submit'], 'sign in').render();
  }
}
