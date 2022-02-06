export default function deletePage() {
  const liItems = document.querySelectorAll('.nav__li');

  liItems.forEach((item) => {
    if (item.classList.contains('active')) {
      const page = document.querySelector(`.main__${item.classList[1]}`);

      page?.remove();

      item.classList.remove('active');
    }
  });
}
