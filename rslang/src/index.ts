import './style.css';
import App from './app/app';

const rootNode: HTMLElement | null = document.querySelector('.root');
if (rootNode) {
  new App(rootNode).render();
}
