const cardsInfo = [
  {
    "city": "Rostov-on-Don LCD admiral",
    "area": "81 m2",
    "time": "3.5 months",
    "cost": "Upon request",
    "image": "./images/balcony_image.png",
    "alt": "balcony"
  },

  {
    "city": "Sochi Thieves",
    "area": "105 m2",
    "time": "4 months",
    "cost": "Upon request",
    "image": "./images/dining-room_image.png",
    "alt": "dining-room"
  },

  {
    "city": "Rostov-on-Don Patriotic",
    "area": "93 m2",
    "time": "3 months",
    "cost": "Upon request",
    "image": "./images/living-room_image.png",
    "alt": "living-room"
  }
];

const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
const image = document.querySelector("#image");
const city = document.querySelector("#city");
const area = document.querySelector("#area");
const time = document.querySelector("#time");
const cost = document.querySelector("#cost");
const navigationDots = document.querySelectorAll(".completed-projects__radio-button");
const navigationLinks = document.querySelectorAll(".completed-projects__link");

let currentIndex = 0;

function rednerCards (arr) {
  image.src = arr[currentIndex].image;
  image.alt = arr[currentIndex].alt;
  city.innerHTML = arr[currentIndex].city;
  area.innerHTML = arr[currentIndex].area;
  time.innerHTML = arr[currentIndex].time;
  cost.innerHTML = arr[currentIndex].cost;
  navigationDots[currentIndex].classList.add("completed-projects__radio-button_type_selected")
  navigationLinks[currentIndex].classList.add("completed-projects__link_type_selected");
}

rednerCards(cardsInfo);

function renderCard (item) {
  navigationLinks[currentIndex].classList.remove("completed-projects__link_type_selected");
  navigationDots[currentIndex].classList.remove("completed-projects__radio-button_type_selected")
  currentIndex = Number(item.dataset.index);
  image.src = cardsInfo[currentIndex].image;
  image.alt = cardsInfo[currentIndex].alt;
  city.innerHTML = cardsInfo[currentIndex].city;
  area.innerHTML = cardsInfo[currentIndex].area;
  time.innerHTML = cardsInfo[currentIndex].time;
  cost.innerHTML = cardsInfo[currentIndex].cost;
  navigationDots[currentIndex].classList.add("completed-projects__radio-button_type_selected");
  navigationLinks[currentIndex].classList.add("completed-projects__link_type_selected");
  return currentIndex;
}

navigationDots.forEach((item) => {
  item.addEventListener("click", () => {
    renderCard(item)
  })
});

navigationLinks.forEach(item => {
  item.addEventListener("click", () => {
    renderCard(item)
  })
})

leftButton.addEventListener('click', () => {
    navigationLinks[currentIndex].classList.remove("completed-projects__link_type_selected");
    navigationDots[currentIndex].classList.remove("completed-projects__radio-button_type_selected")
    if(currentIndex <= 0) {
    currentIndex = cardsInfo.length - 1;
    } else {
    currentIndex = currentIndex - 1;
}
    rednerCards(cardsInfo);
});

rightButton.addEventListener('click', () => {
    navigationLinks[currentIndex].classList.remove("completed-projects__link_type_selected");
    navigationDots[currentIndex].classList.remove("completed-projects__radio-button_type_selected")
    if(currentIndex >= (cardsInfo.length - 1)) {
    currentIndex = 0;
    } else {
    currentIndex = currentIndex + 1;
}
    rednerCards(cardsInfo);
});
