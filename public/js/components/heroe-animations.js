import data from "../services/shop-data.js";

const d = document;

// Constrol the sequence
let controller = 0;

/*
    Function construct of animation heroe
    $leftArrow is the left arrow of the heroe
    $leftRight is the right arrow of the heroe
    $context contain the images
    $section section to modify the title and paragraph
*/
export const heroeAnimation = (leftArrow, rightArrow, context, section) => {
  const $leftArrow = leftArrow,
    $rightArrow = rightArrow,
    $context = d.querySelector(context),
    $section = d.querySelector(section);
  handleController($leftArrow, $rightArrow, $context, $section);
};

/*
    Handle controller depending on the arrows
*/
const handleController = ($leftArrow, $rightArrow, $context, $section) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches($leftArrow) || e.target.matches(`${$leftArrow} *`)) {
      controller++;
      if (controller >= 1) {
        controller = -2;
      }
      handleAnimationImage($context, controller, $section);
    } else if (
      e.target.matches($rightArrow) ||
      e.target.matches(`${$rightArrow} *`)
    ) {
      controller--;
      if (controller <= -3) {
        controller = 0;
      }
      handleAnimationImage($context, controller, $section);
    }
  });
};

/*
    Handle the animation data
*/
const handleAnimationData = ($section, controllerLocal) => {
  const $title = $section.children[0].children[0],
    $paragraph = $section.children[1].children[0],
    { title, paragraph } = data[Math.abs(controllerLocal)];
  $title.textContent = title;
  $paragraph.textContent = paragraph;
};

/*
    Handle the animation of the image depending on the controller value
*/
const handleAnimationImage = ($context, controllerLocal, $section) => {
  $context.style.transform = `translateX(${controllerLocal * 100}%)`;
  handleAnimationData($section, controllerLocal);
};
