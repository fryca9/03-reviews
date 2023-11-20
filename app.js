// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const photo = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const text = document.querySelector("#info");

const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
const surpriseButton = document.querySelector(".random-btn");

let index = 0;

function changePerson(i) {
  const person = reviews[i];

  author.textContent = person.name;
  job.textContent = person.job;
  text.textContent = person.text;
  photo.src = person.img;
}

nextButton.addEventListener("click", (e) => {
  index++;
  if (index >= reviews.length) {
    index = 0;
  }

  changePerson(index);
});

prevButton.addEventListener("click", (e) => {
  index--;
  if (index < 0) {
    index = reviews.length - 1;
  }

  changePerson(index);
});

surpriseButton.addEventListener("click", (e) => {
  const currentIndex = index;
  index = Math.floor(Math.random() * reviews.length);

  do {
    index = Math.floor(Math.random() * reviews.length);
  } while (index === currentIndex);

  changePerson(index);
});

changePerson(index);
