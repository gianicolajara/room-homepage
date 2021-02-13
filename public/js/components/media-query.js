const d = document,
  w = window;

export const mediaQuery = () => {
  const media = matchMedia("(min-width: 1024px)");
  checkMediaQuery(media);
  checkContinueMediaQuery(media);
};

const checkMediaQuery = (e) => {
  const $imgContent = d.querySelector(".heroe__images");
  if (!e.matches) {
    Array.from($imgContent.children).forEach((value, index) => {
      value.src = `./assets/images/mobile-image-hero-${index + 1}.jpg`;
    });
  } else {
    Array.from($imgContent.children).forEach((value, index) => {
      value.src = `./assets/images/desktop-image-hero-${index + 1}.jpg`;
    });
  }
};

const checkContinueMediaQuery = (media) => {
  const $imgContent = d.querySelector(".heroe__images");
  media.addEventListener("change", (e) => {
    if (!e.matches) {
      Array.from($imgContent.children).forEach((value, index) => {
        value.src = `./assets/images/mobile-image-hero-${index + 1}.jpg`;
      });
    } else {
      Array.from($imgContent.children).forEach((value, index) => {
        value.src = `./assets/images/desktop-image-hero-${index + 1}.jpg`;
      });
    }
  });
};
