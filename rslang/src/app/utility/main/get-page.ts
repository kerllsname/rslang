import MainHome from '../../body/wrapper/main/main-home';
import MainTextbook from '../../body/wrapper/main/main-textbook';
import MainDictionary from '../../body/wrapper/main/main-dictionary';
import MainGames from '../../body/wrapper/main/main-games';
import MainStatistics from '../../body/wrapper/main/main-statistics';
import MainAbout from '../../body/wrapper/main/main-about';

export default function getPage(name: string) {
  const mainBlock = document.querySelector('main');

  if (name === 'textbook') {
    new MainTextbook(mainBlock!).render();
    localStorage.setItem('currentPage', 'textbook');
  } else if (name === 'dictionary') {
    new MainDictionary(mainBlock!).render();
    localStorage.setItem('currentPage', 'dictionary');
  } else if (name === 'games') {
    new MainGames(mainBlock!).render();
    localStorage.setItem('currentPage', 'games');
  } else if (name === 'statistics') {
    new MainStatistics(mainBlock!).render();
    localStorage.setItem('currentPage', 'statistics');
  } else if (name === 'about') {
    new MainAbout(mainBlock!).render();
    localStorage.setItem('currentPage', 'about');
  } else if (name === 'home') {
    new MainHome(mainBlock!).render();
    localStorage.setItem('currentPage', 'home');
  }
}
