export default function deletePage() {
  const liItems = document.querySelectorAll('.nav__li');

  liItems.forEach((item) => {
    if (item.classList.contains('active')) {
      const page = document.querySelector('.main');
      if (page) {
        while (page.firstChild) {
          page.removeChild(page.firstChild);
        }
      }

      item.classList.remove('active');
    }
  });
}
