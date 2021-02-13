const d = document,
  w = window;

const arrImgDataMobile = [
    "mobile-image-hero-1.jpg",
    "mobile-image-hero-2.jpg",
    "mobile-image-hero-3.jpg",
  ],
  arrImgDataDesktop = [
    "desktop-image-hero-1.jpg",
    "desktop-image-hero-2.jpg",
    "desktop-image-hero-3.jpg",
  ],
  url = "./assets/images/";

export const mediaQuery = () => {
  const media = matchMedia("(min-width: 1024px)");
  checkMediaQuery(media);
  checkContinueMediaQuery(media);
};

const checkMediaQuery = (e) => {
  const $imgContent = d.querySelector(".heroe__images");
  const $fragment = d.createDocumentFragment();
  if (!e.matches) {
    arrImgDataMobile.forEach((value) => {
      const $img = d.createElement("img");
      $img.src = `${url}${value}`;
      $fragment.appendChild($img);
    });
  } else {
    arrImgDataDesktop.forEach((value) => {
      const $img = d.createElement("img");
      $img.src = `${url}${value}`;
      $fragment.appendChild($img);
    });
  }
  $imgContent.appendChild($fragment);
};

const checkContinueMediaQuery = (media) => {
  const $imgContent = d.querySelector(".heroe__images");
  const $fragment = d.createDocumentFragment();
  media.addEventListener("change", (e) => {
    if (!e.matches) {
      arrImgDataMobile.forEach((value) => {
        const $img = d.createElement("img");
        $img.src = `${url}${value}`;
        $fragment.appendChild($img);
      });
    } else {
      arrImgDataDesktop.forEach((value) => {
        const $img = d.createElement("img");
        $img.src = `${url}${value}`;
        $fragment.appendChild($img);
      });
    }
    $imgContent.textContent = "";
    $imgContent.appendChild($fragment);
  });
};
