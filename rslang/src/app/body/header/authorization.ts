/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import IUser from '../../interfaces/user';
import registarion from '../../request/registration';
import signIn from '../../request/loh-in';
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

    this.registarionHandler = this.registarionHandler.bind(this);
    this.exitHandler = this.exitHandler.bind(this);
    this.logInHandler = this.logInHandler.bind(this);
  }

  render() {
    this.root.appendChild(this.authWrapper);
    this.authWrapper.classList.add('authorization-wrapper');

    this.authWrapper.appendChild(this.authBody);
    this.authBody.classList.add('authorization-wrapper__authorization-body');

    this.authBody.appendChild(this.authContent);
    this.authContent.classList.add('authorization-body__content');

    this.authContent.appendChild(this.exitBlock).addEventListener('click', this.exitHandler);
    this.exitBlock.classList.add('content__exit');
    this.exitBlock.innerHTML = 'X';

    this.authContent.appendChild(this.fields);
    this.fields.classList.add('content__fields');

    this.fields.appendChild(this.regField);
    this.regField.classList.add('fields__registration');

    this.fields.appendChild(this.signField);
    this.signField.classList.add('fields__authorization');

    new BaseComponent(this.regField, 'div', ['registration__title'], 'Registration').render();
    new BaseComponent(this.regField, 'div', ['registration__nickname-title'], 'nickname').render();
    new BaseComponent(this.regField, 'input', ['registration__name'], 'name').render();
    new BaseComponent(this.regField, 'div', ['registration__email-title'], 'email').render();
    new BaseComponent(this.regField, 'input', ['registration__email']).render();
    new BaseComponent(this.regField, 'div', ['registration__password-title'], 'password').render();
    new BaseComponent(this.regField, 'input', ['registration__password']).render();
    new BaseComponent(this.regField, 'div', ['registration__notification']).render();
    new BaseComponent(this.regField, 'button', ['registration__submit'], 'sign up').render().addEventListener('click', this.registarionHandler);

    new BaseComponent(this.signField, 'div', ['authorization__title'], 'Log in').render();
    new BaseComponent(this.signField, 'div', ['authorization__email-title'], 'email').render();
    new BaseComponent(this.signField, 'input', ['authorization__email']).render();
    new BaseComponent(this.signField, 'div', ['authorization__password-title'], 'password').render();
    new BaseComponent(this.signField, 'input', ['authorization__password']).render();
    new BaseComponent(this.signField, 'div', ['authorization__notification']).render();
    new BaseComponent(this.signField, 'button', ['authorization__submit'], 'sign in').render().addEventListener('click', this.logInHandler);
  }

  exitHandler() {
    const wrapper = document.querySelector<HTMLElement>('.authorization-wrapper');

    if (wrapper) {
      wrapper.remove();
    }
  }

  async logInHandler() {
    const email = document.querySelector<HTMLInputElement>('.authorization__email');
    const password = document.querySelector<HTMLInputElement>('.authorization__password');

    if (email && password) {
      const user: object = {
        email: email.value,
        password: password.value,
      };

      const answer = await this.logInUser(user);
      this.logInNotification(answer, email, password);
    }
  }

  async logInUser(user: object) {
    const answer = await signIn(user);

    return answer;
  }

  logInNotification(state: any, email: HTMLElement, password: HTMLElement) {
    const notification = document.querySelector<HTMLElement>('.authorization__notification');

    if (notification) {
      if (typeof state === 'object') {
        email.style.borderBlockColor = 'unset';
        password.style.borderBlockColor = 'unset';
        notification.style.display = 'block';
        notification.innerHTML = 'Success';
        this.exitHandler();
        this.rebuildHeader(state.name);
      } else if (state === '403') {
        email.style.borderBlockColor = 'red';
        password.style.borderBlockColor = 'red';
        notification.style.display = 'block';
        notification.innerHTML = 'Check password or email';
      } else if (state === 'false') {
        email.style.borderBlockColor = 'red';
        password.style.borderBlockColor = 'red';
        notification.style.display = 'block';
        notification.innerHTML = 'This user is not exist';
      }
    }
  }

  async registarionHandler() {
    const name = document.querySelector<HTMLInputElement>('.registration__name');
    const email = document.querySelector<HTMLInputElement>('.registration__email');
    const password = document.querySelector<HTMLInputElement>('.registration__password');

    if (name && email && password) {
      const user: IUser = {
        name: name.value,
        email: email.value,
        password: password.value,
      };

      const answer = await this.createUser(user);
      this.registrationNotification(answer, name, email, password);
    }
  }

  async createUser(user: IUser) {
    const answer: string = await registarion(user);

    return answer;
  }

  registrationNotification(
    state: string,
    name: HTMLInputElement,
    email: HTMLInputElement,
    password:HTMLInputElement,
  ) {
    const notification = document.querySelector<HTMLElement>('.registration__notification');

    if (notification) {
      if (state === '200') {
        email.style.borderBlockColor = 'unset';
        password.style.borderBlockColor = 'unset';
        name.value = '';
        email.value = '';
        password.value = '';
        notification.style.display = 'block';
        notification.innerHTML = 'Success';
      } else if (state === '422') {
        email.style.borderBlockColor = 'red';
        password.style.borderBlockColor = 'red';
        notification.style.display = 'block';
        notification.innerHTML = 'Check password or email';
      } else if (state === '417') {
        password.style.borderBlockColor = 'unset';
        email.style.borderBlockColor = 'red';
        notification.style.display = 'block';
        notification.innerHTML = 'This user is already exist';
      }
    }
  }

  rebuildHeader(name: string) {
    const logButton = document.querySelector('.header__log-in');
    const header = document.querySelector<HTMLElement>('.header');

    if (header && logButton) {
      logButton.remove();
      new BaseComponent(header, 'div', ['header__account-title'], `${name}`).render();
    }
  }
}
