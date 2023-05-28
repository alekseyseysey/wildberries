import { compileRe } from "picomatch";
import {
  slider,
  sliderLine,
  img1,
  img2,
  img3,
  img4,
  buttonNext,
  buttonBack,
  buttonWrapper,
  buttonCircle,
  wrapper,
} from "./wrap.js";

const images = sliderLine.childNodes;
let count = 0;
let width;

function init() {
  width = slider.offsetWidth;
  sliderLine.style.width = width * images.lenght + "px";
  slider.style.width = width * images.lenght + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
}

window.addEventListener("resize", init);

init();

document.addEventListener("DOMContentLoaded", circle);

buttonNext.addEventListener("click", function ({ target }) {
  count++;
  if (count >= images.length) {
    count = 0;
  }

  rollSlider(target);
  circle(target);
});

buttonBack.addEventListener("click", function ({ target }) {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  
  rollSlider(target);
  circle(target);
});

function rollSlider(get) {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
  if (get.classList.contains("buttonNext")) {
    images[count].classList.toggle("acti");
    if (count - 1 === -1) {
      images[3].classList.remove("acti");
    } else {
      images[count - 1].classList.remove("acti");
    }
  } else if (get.classList.contains("buttonBack")) {
    images[count].classList.toggle("acti");

    if (count + 1 === 4) {
      images[0].classList.remove("acti");
    } else {
      images[count + 1].classList.remove("acti");
    }
  }
}

const clickCicle = buttonCircle.childNodes;

buttonCircle.addEventListener("click", clickCicleFunc);

function clickCicleFunc({ target }) {
  clickCicle.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      clickCicle.forEach((item) => {
        if (target === item) {
          item.classList.toggle("active");
        }
      });
    // } else {
    //   clickCicle.forEach((item) => {
    //     if (target === item) {
    //       item.classList.toggle("active");
    //     }
    //   });
    }
  });
}

function circle(target) {
//   clickCicle.forEach((item) => {
//     if (item.classList.contains("active")) {
//       item.classList.remove("active");
//       clickCicle.forEach((item) => {
//         if (target === item) {
//           item.classList.toggle("active");
//         }
//       });
//     }
//   });

  images.forEach((elem) => {
    if (elem.classList.contains("acti")) {
      switch (count) {
        case 0:
          clickCicle[3].classList.remove("active");
          clickCicle[1].classList.remove("active");
          clickCicle[0].classList.toggle("active");
          break;
        case 1:
          clickCicle[0].classList.remove("active");
          clickCicle[2].classList.remove("active");
          clickCicle[1].classList.toggle("active");
          break;
        case 2:
          clickCicle[1].classList.remove("active");
          clickCicle[3].classList.remove("active");
          clickCicle[2].classList.toggle("active");
          break;
        case 3:
          clickCicle[2].classList.remove("active");
          clickCicle[0].classList.remove("active");
          clickCicle[3].classList.toggle("active");
          break;
      }
    }
  });
}
