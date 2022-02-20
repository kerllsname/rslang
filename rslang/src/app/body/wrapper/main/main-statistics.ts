import BaseComponent from '../../../utility/base-сomponent';
import StatisticsBoxGames from '../../../utility/statistics/statistics-boxGames';
import IStatistic from '../../../interfaces/statistic';
import StatisticStorage from '../../../utility/statistics/statistics-storage';
import saveUserStatistics from '../../../request/put-statistics';
import getUserStatistics from '../../../request/get-statistics';

export default class MainStatistics {
  readonly mainStatistics: HTMLElement;

  readonly container: HTMLElement;

  readonly containerWords: HTMLElement;

  readonly containerGames: HTMLElement;

  readonly boxWords: HTMLElement;

  readonly boxAccuracy: HTMLElement;

  constructor(private readonly root: HTMLElement) {
    this.mainStatistics = document.createElement('div');
    this.container = document.createElement('div');
    this.containerWords = document.createElement('div');
    this.containerGames = document.createElement('div');
    this.boxWords = document.createElement('div');
    this.boxAccuracy = document.createElement('div');
  }

  async render() {
    const userToken: string | null = localStorage.getItem('token');
    const userID: string | null = localStorage.getItem('id');

    if (userToken && userID) {
      let userData = StatisticStorage;
      if (await getUserStatistics(userID, userToken)) {
        userData = await getUserStatistics(userID, userToken);
      } else {
        const storage: IStatistic = {
          learnedWords: 0,
          optional: {
            AudioCountAnswerСorrect: 0,
            AudioCountAnswerWrong: 0,
            AudioInRow: 0,
            SprintCountAnswerСorrect: 0,
            SprintCountAnswerWrong: 0,
            SprintInRow: 0,
          },
        };
        await saveUserStatistics(userID, userToken, storage);
        userData = await getUserStatistics(userID, userToken);
      }
      const sumNewWords = userData.optional.AudioCountAnswerWrong
      + userData.optional.AudioCountAnswerСorrect
      + userData.optional.SprintCountAnswerWrong
      + userData.optional.SprintCountAnswerСorrect;

      this.root.appendChild(this.mainStatistics);
      this.mainStatistics.classList.add('main__statistics');

      new BaseComponent(this.mainStatistics, 'h2', ['main__statistics-title'], 'Today').render();
      this.mainStatistics.appendChild(this.container);
      this.container.classList.add('main__statistics__container');
      this.container.appendChild(this.containerWords);
      this.containerWords.classList.add('main__statistics__containerWords');
      this.containerWords.appendChild(this.boxWords);
      this.boxWords.classList.add('main__statistics__boxWords');
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-words-count'], `${sumNewWords}`).render();
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p1'], 'new words').render();

      this.boxWords.classList.add('main__statistics__boxWords');
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-words-count'], `${userData.learnedWords}`).render();
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p1'], 'words').render();
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p2'], 'were learned').render();

      this.containerWords.appendChild(this.boxAccuracy);
      this.boxAccuracy.classList.add('main__statistics__boxAccuracy');
      new BaseComponent(this.boxAccuracy, 'div', ['main__statistics__boxAccuracy-title'], 'Accuracy').render();
      new BaseComponent(this.boxAccuracy, 'div', ['main__statistics__boxAccuracy-percent'], `<span class="accuracy-percent">${Math.trunc((userData.learnedWords / sumNewWords) * 100) || '0'}</span>%`).render();

      this.container.appendChild(this.containerGames);
      this.containerGames.classList.add('main__statistics__containerGames');
      new StatisticsBoxGames(this.containerGames, 'Sprint', userData).render();
      new StatisticsBoxGames(this.containerGames, 'Audio Challenge', userData).render();
    } else {
      const sumNewWords = StatisticStorage.optional.AudioCountAnswerWrong
      + StatisticStorage.optional.AudioCountAnswerСorrect
      + StatisticStorage.optional.SprintCountAnswerWrong
      + StatisticStorage.optional.SprintCountAnswerСorrect;

      this.root.appendChild(this.mainStatistics);
      this.mainStatistics.classList.add('main__statistics');

      new BaseComponent(this.mainStatistics, 'h2', ['main__statistics-title'], 'Today').render();
      this.mainStatistics.appendChild(this.container);
      this.container.classList.add('main__statistics__container');
      this.container.appendChild(this.containerWords);
      this.containerWords.classList.add('main__statistics__containerWords');
      this.containerWords.appendChild(this.boxWords);
      this.boxWords.classList.add('main__statistics__boxWords');
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-words-count'], `${sumNewWords}`).render();
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p1'], 'new words').render();

      this.boxWords.classList.add('main__statistics__boxWords');
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-words-count'], `${StatisticStorage.learnedWords}`).render();
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p1'], 'words').render();
      new BaseComponent(this.boxWords, 'div', ['main__statistics__boxWords-p2'], 'were learned').render();

      this.containerWords.appendChild(this.boxAccuracy);
      this.boxAccuracy.classList.add('main__statistics__boxAccuracy');
      new BaseComponent(this.boxAccuracy, 'div', ['main__statistics__boxAccuracy-title'], 'Accuracy').render();
      new BaseComponent(this.boxAccuracy, 'div', ['main__statistics__boxAccuracy-percent'], `<span class="accuracy-percent">${Math.trunc((StatisticStorage.learnedWords / sumNewWords) * 100) || '0'}</span>%`).render();

      this.container.appendChild(this.containerGames);
      this.containerGames.classList.add('main__statistics__containerGames');
      new StatisticsBoxGames(this.containerGames, 'Sprint', StatisticStorage).render();
      new StatisticsBoxGames(this.containerGames, 'Audio Challenge', StatisticStorage).render();
    }
  }
}
