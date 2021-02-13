import { menuCollapse } from "./components/menu-hamburguer.js";
import { heroeAnimation } from "./components/heroe-animations.js";
import { mediaQuery } from "./components/media-query.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  // Function to control my menu animation
  menuCollapse(".hamburger-icon", ".menu__list", ".icon-close");
  //Function to control my heroe animations
  heroeAnimation(".arrow-left", ".arrow-right", ".heroe__images", ".shop-info");
  mediaQuery();
});
