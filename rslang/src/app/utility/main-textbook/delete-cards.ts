export default function deleteBlocks() {
  const blocks = document.querySelectorAll('.cards-block__card');

  blocks.forEach((block) => {
    block.remove();
  });
}
