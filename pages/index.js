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
console.log(navigationLinks)

let currentIndex = 0;

function rednerInitialCard (arr) {
  image.src = arr[currentIndex].image;
  image.alt = arr[currentIndex].alt;
  city.innerHTML = arr[currentIndex].city;
  area.innerHTML = arr[currentIndex].area;
  time.innerHTML = arr[currentIndex].time;
  cost.innerHTML = arr[currentIndex].cost;
  navigationDots[currentIndex].classList.add("completed-projects__radio-button_type_selected")
}

rednerInitialCard(cardsInfo);

leftButton.addEventListener('click', () => {
    navigationDots[currentIndex].classList.remove("completed-projects__radio-button_type_selected")
    if(currentIndex <= 0) {
    currentIndex = cardsInfo.length - 1;
    } else {
    currentIndex = currentIndex - 1;
}
    image.src = cardsInfo[currentIndex].image;
    image.alt = cardsInfo[currentIndex].alt;
    city.innerHTML = cardsInfo[currentIndex].city;
    area.innerHTML = cardsInfo[currentIndex].area;
    time.innerHTML = cardsInfo[currentIndex].time;
    cost.innerHTML = cardsInfo[currentIndex].cost;
    navigationDots[currentIndex].classList.add("completed-projects__radio-button_type_selected")
});

rightButton.addEventListener('click', () => {
    navigationDots[currentIndex].classList.remove("completed-projects__radio-button_type_selected")
    if(currentIndex >= (cardsInfo.length - 1)) {
    currentIndex = 0;
    } else {
    currentIndex = currentIndex + 1;
}
    image.src = cardsInfo[currentIndex].image;
    image.alt = cardsInfo[currentIndex].alt;
    city.innerHTML = cardsInfo[currentIndex].city;
    area.innerHTML = cardsInfo[currentIndex].area;
    time.innerHTML = cardsInfo[currentIndex].time;
    cost.innerHTML = cardsInfo[currentIndex].cost;
    navigationDots[currentIndex].classList.add("completed-projects__radio-button_type_selected")
});

navigationDots.forEach((item) => {
  item.addEventListener("click", () => {
    navigationDots[currentIndex].classList.remove("completed-projects__radio-button_type_selected")
    currentIndex = item.id;
    image.src = cardsInfo[currentIndex].image;
    image.alt = cardsInfo[currentIndex].alt;
    city.innerHTML = cardsInfo[currentIndex].city;
    area.innerHTML = cardsInfo[currentIndex].area;
    time.innerHTML = cardsInfo[currentIndex].time;
    cost.innerHTML = cardsInfo[currentIndex].cost;
    navigationDots[currentIndex].classList.add("completed-projects__radio-button_type_selected")
    return currentIndex;
  })
})

