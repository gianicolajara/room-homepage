const d = document;
/*
    Constructor of my animation menu export function
    hamburguerIcon = icon hamburger menu
    context = menu list
    iconClose = icon close menu
*/
export const menuCollapse = (hamburguerIcon, context, iconClose) => {
  const $hamburguerIcon = d.querySelector(hamburguerIcon),
    $context = d.querySelector(context),
    $iconClose = iconClose;

  //Dark screen

  const $darkScreen = d.querySelector(".dark-screen");

  handleCollapse($hamburguerIcon, $context, $iconClose, $darkScreen);
};

/*
    Handle of my event click
*/
const handleCollapse = ($hamburguerIcon, $context, $iconClose, $darkScreen) => {
  d.addEventListener("click", (e) => {
    if (
      e.target === $hamburguerIcon ||
      e.target.matches(`${$iconClose} *`) ||
      e.target.matches($iconClose)
    ) {
      //Toggle list menu
      $context.classList.toggle("show");

      //Toggle Dark screen
      $darkScreen.classList.toggle("d-none");

      //Toggle scroll in body
      d.body.classList.toggle("no-scroll");

      //Toggle icon Close
      d.querySelector($iconClose).classList.toggle("visibility");
    }
  });
};
