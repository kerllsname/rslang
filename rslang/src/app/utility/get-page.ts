import MainHome from '../body/wrapper/main/main-home';
import MainTextbook from '../body/wrapper/main/main-textbook';
import MainDictionary from '../body/wrapper/main/main-dictionary';
import MainGames from '../body/wrapper/main/main-games';
import MainStatistics from '../body/wrapper/main/main-statistics';
import MainAbout from '../body/wrapper/main/main-about';

export default function getPage(name: string) {
  const mainBlock = document.querySelector('main');

  if (name === 'textbook') {
    new MainTextbook(mainBlock!).render();
  } else if (name === 'dictionary') {
    new MainDictionary(mainBlock!).render();
  } else if (name === 'games') {
    new MainGames(mainBlock!).render();
  } else if (name === 'statistics') {
    new MainStatistics(mainBlock!).render();
  } else if (name === 'about') {
    new MainAbout(mainBlock!).render();
  } else if (name === 'home') {
    new MainHome(mainBlock!).render();
  }
}
