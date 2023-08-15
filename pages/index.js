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

function rednerCard (arr, index) {
  image.src = arr[index].image;
  image.alt = arr[index].alt;
  city.innerHTML = arr[index].city;
  area.innerHTML = arr[index].area;
  time.innerHTML = arr[index].time;
  cost.innerHTML = arr[index].cost;
  navigationDots[index].classList.add("completed-projects__radio-button_type_selected")
  navigationLinks[index].classList.add("completed-projects__link_type_selected");
}

function hideStyle (index) {
  navigationLinks[index].classList.remove("completed-projects__link_type_selected");
  navigationDots[index].classList.remove("completed-projects__radio-button_type_selected")
}

rednerCard(cardsInfo, currentIndex);

navigationDots.forEach((item) => {
  item.addEventListener("click", () => {
    hideStyle(currentIndex);
    currentIndex = Number(item.dataset.index);
    rednerCard(cardsInfo, currentIndex)
  })
});

navigationLinks.forEach(item => {
  item.addEventListener("click", () => {
    hideStyle(currentIndex);
    currentIndex = Number(item.dataset.index);
    rednerCard(cardsInfo, currentIndex)
  })
})

leftButton.addEventListener('click', () => {
    hideStyle(currentIndex);
    if(currentIndex <= 0) {
    currentIndex = cardsInfo.length - 1;
    } else {
    currentIndex = currentIndex - 1;
}
rednerCard(cardsInfo, currentIndex)
});

rightButton.addEventListener('click', () => {
    hideStyle(currentIndex);
    if(currentIndex >= (cardsInfo.length - 1)) {
    currentIndex = 0;
    } else {
    currentIndex = currentIndex + 1;
}
rednerCard(cardsInfo, currentIndex)
});
