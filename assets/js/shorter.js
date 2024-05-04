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



const projects = [
  {
    name: "SnakeGameJAVA",
    imgBefore: "./assets/img/snakebefore.png",
    imgAfter: "./assets/img/snakeafter.png",
    tags: ["BACK-END", "JAVA", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Snake_Java_Advanced",
    link: "./projects/SnakeGameJAVA.html",  // New key
  },
  {
    name: "TextEditor",
    imgBefore: "./assets/img/texteditorbefore.png",
    imgAfter: "./assets/img/texteditorafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Text-Editor",
    link: "./projects/TextEditor.html",  // New key
  },
  {
    name: "Calculator",
    imgBefore: "./assets/img/calculatorbefore.png",
    imgAfter: "./assets/img/calculatorafter.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Calculator_simple",
    link: "./projects/Calculator.html",  // New key
  },
  {
    name: "TetrisJs",
    imgBefore: "./assets/img/tetrisbefore.png",
    imgAfter: "./assets/img/tetrisafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Tetris_Javascript",
    link: "./projects/TetrisJs.html",  // New key
  },
  {
    name: "MyPortfolio",
    imgBefore: "./assets/img/portfolio.png",
    imgAfter: "./assets/img/portfoliobefore.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Portfolio",
    link: "./projects/MyPortfolio.html",  // New key
  },
  {
    name: "FlappyBirdJAVA",
    imgBefore: "./assets/img/flappybird.png",
    imgAfter: "./assets/img/flappybird.png",
    tags: ["BACK-END", "JAVA", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/FlappyBirdJAVA",
    link: "./projects/FlappyBirdJAVA.html",  // New key
  },
  {
    name: "Tralivecom",
    imgBefore: "./assets/img/tralivebefore.png",
    imgAfter: "./assets/img/traliveafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/No-More-NoobSite",
    link: "./projects/Tralivecom.html",  // New key
  },
  {
    name: "conferencecom",
    imgBefore: "./assets/img/conb.png",
    imgAfter: "./assets/img/cona.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./projects/conferencecom.html",  // New key
  },
  {
    name: "bexercom",
    imgBefore: "./assets/img/bexerb.png",
    imgAfter: "./assets/img/bexera.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./projects/bexercom.html",  // New key
  },
  {
    name: "travelcom",
    imgBefore: "./assets/img/shipb.png",
    imgAfter: "./assets/img/shipa.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./projects/travelcom.html",  // New key
  },
  {
    name: "neoncarddesign",
    imgBefore: "./assets/img/neonb.png",
    imgAfter: "./assets/img/neona.png",
    tags: ["FRONT-END", "CSS", "HTML5", "UI/UX DESIGN", "ANIMATIONS"],
    github: "",
    link: "./projects/neoncarddesign.html",  // New key
  },
  {
    name: "apprucom",
    imgBefore: "./assets/img/apprub.png",
    imgAfter: "./assets/img/apprua.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "",
    link: "./projects/apprucom.html",  // New key
  },
  {
    name: "coffeeshopcom",
    imgBefore: "./assets/img/coffeeb.png",
    imgAfter: "./assets/img/coffeea.png",
    tags: ["FRONT-END", "BACK-END", "SCSS", "NODEJS", "REACTJS", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/CafeSite",
    link: "./projects/coffeeshopcom.html",  // New key
  },
];


const gridList = document.querySelector(".gridList");

for (let i = 0; i < projects.length; i++) {
  const project = projects[i];

  const li = document.createElement("li");
  li.classList.add("item");

  li.innerHTML = `
    <a href="${project.link}" target="_blank" class="screen">
      <div class="bar">
        <h2>${project.name}</h2>
        <i></i>
      </div>
      <div class="main">
        <div class="back">
          <img src="${project.imgBefore}" alt="${project.name}" />
        </div>
        <div class="tags">
          <div>
            <ul>
              ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="imgs">
          <img src="${project.imgAfter}" alt="${project.name}" />
        </div>
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


