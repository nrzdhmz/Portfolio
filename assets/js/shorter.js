// HTML SHORTEN

const filterList = document.getElementById("filterList");
const skills = [
  "Show All Projects",
  "FRONT-END",
  "BACK-END",
  "JAVA",
  "HTML5",
  "CSS",
  "SCSS",
  "JAVASCRIPT",
  "NODEJS",
  "REACTJS",
  "UI/UX DESIGN",
  "ANIMATIONS",
];

for (let i = 0; i < skills.length; i++) {
  const skill = skills[i];
  const li = document.createElement("li");
  li.id = skill.toLowerCase().replace(/[^a-z]/g, "");
  li.title = `Filter by ${skill}`;
  li.innerHTML = `<span>${skill.toLowerCase()}</span>`;
  filterList.appendChild(li);
}

// Dynamically generate project items
const projects = [
  {
    name: "Snake Game JAVA",
    imgBefore: "./assets/img/snakebefore.png",
    imgAfter: "./assets/img/snakeafter.png",
    tags: [
      "BACK-END",
      "JAVA",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],
    github: "https://github.com/nrzdhmz/Snake_Java_Advanced",
  },
  {
    name: "Text Editor",
    imgBefore: "./assets/img/texteditorbefore.png",
    imgAfter: "./assets/img/texteditorafter.png",
    tags: [
      "FRONT-END",
      "SCSS",
      "HTML5",
      "JAVASCRIPT",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],
    github: "https://github.com/nrzdhmz/Text-Editor",
  },
  {
    name: "Calculator",
    imgBefore: "./assets/img/calculatorbefore.png",
    imgAfter: "./assets/img/calculatorafter.png",
    tags: [
      "FRONT-END",
      "CSS",
      "HTML5",
      "JAVASCRIPT",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],
    github: "https://github.com/nrzdhmz/Calculator_simple",
  },  
  {
    name: "Tetris Js",
    imgBefore: "./assets/img/tetrisbefore.png",
    imgAfter: "./assets/img/tetrisafter.png",
    tags: [
      "FRONT-END",
      "SCSS",
      "HTML5",
      "JAVASCRIPT",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],
    github: "https://github.com/nrzdhmz/Tetris_Javascript",
  },
  {
    name: "My Portfolio",
    imgBefore: "./assets/img/portfolio.png",
    imgAfter: "./assets/img/portfoliobefore.png",
    tags: [
      "FRONT-END",
      "SCSS",
      "HTML5",
      "JAVASCRIPT",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],
    github: "https://github.com/nrzdhmz/Portfolio",
  },
  {
    name: "Flappy Bird JAVA",
    imgBefore: "./assets/img/flappybird.png",
    imgAfter: "./assets/img/flappybird.png",
    tags: [
      "BACK-END",
      "JAVA",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],  
    github: "https://github.com/nrzdhmz/Snake_Java_Advanced",
  },
  {
    name: "Tralive.com",
    imgBefore: "./assets/img/tralivebefore.png",
    imgAfter: "./assets/img/traliveafter.png",
    tags: [
      "FRONT-END",
      "SCSS",
      "HTML5",
      "JAVASCRIPT",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],
    github: "https://github.com/nrzdhmz/No-More-NoobSite",
  },
  {
    name: "conference.com",
    imgBefore: "./assets/img/conb.png",
    imgAfter: "./assets/img/cona.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
  },
  {
    name: "bexer.com",
    imgBefore: "./assets/img/bexerb.png",
    imgAfter: "./assets/img/bexera.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
  },
  {
    name: "travel.com",
    imgBefore: "./assets/img/shipb.png",
    imgAfter: "./assets/img/shipa.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
  },
  {
    name: "neon card design",
    imgBefore: "./assets/img/neonb.png",
    imgAfter: "./assets/img/neona.png",
    tags: ["FRONT-END", "CSS", "HTML5", "UI/UX DESIGN", "ANIMATIONS"],
    github: "",
  },
  {
    name: "appru.com",
    imgBefore: "./assets/img/apprub.png",
    imgAfter: "./assets/img/apprua.png",
    tags: [
      "FRONT-END",
      "CSS",
      "HTML5",
      "JAVASCRIPT",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],
    github: "",
  },
  {
    name: "coffeeshop.com",
    imgBefore: "./assets/img/coffeeb.png",
    imgAfter: "./assets/img/coffeea.png",
    tags: [
      "FRONT-END",
      "BACK-END",
      "SCSS",
      "NODEJS",
      "REACTJS",
      "CSS",
      "HTML5",
      "JAVASCRIPT",
      "UI/UX DESIGN",
      "ANIMATIONS",
    ],
    github: "https://github.com/nrzdhmz/CafeSite",
  },
];

const gridList = document.querySelector(".gridList");

for (let i = 0; i < projects.length; i++) {
  const project = projects[i];
  const li = document.createElement("li");
  li.classList.add("item");

  li.innerHTML = `
    <a href="${project.github}" target="_blank" class="screen">
      <div class="bar">
        <h2>${project.name}</h2>
        <i></i>
      </div>
      <div class="main">
        <div class="back">
          <img src="${project.imgBefore}" alt="back" />
        </div>
        <div class="tags">
          <div>
            <ul>
              ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="imgs">
          <img src="${project.imgAfter}" alt="hover" />
        </div>
        <em class="github">${project.github}</em>
      </div>
    </a>
  `;
  gridList.appendChild(li);
}

// FILTERING

document.addEventListener("DOMContentLoaded", function () {
  const filterList = document.getElementById("filterList");
  const gridList = document.querySelector(".gridList");
  const items = gridList.querySelectorAll(".item");

  function filterProjects(tag) {
    items.forEach((item) => {
      const tags = Array.from(item.querySelectorAll(".tags li")).map(
        (el) => el.textContent
      );

      if (tag === "show all projects" || tags.includes(tag.toUpperCase())) {
        item.style.display = "block"; 
      } else {
        item.style.display = "none"; 
      }
    });
  }

  filterList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI" || event.target.tagName === "SPAN") {
      const selectedFilter = event.target.textContent.trim();
      filterProjects(selectedFilter); 
    }
  });

  filterProjects("show all projects");
});
