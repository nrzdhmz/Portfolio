const projects = [
  {
    name: "SnakeGameJAVA",
    imgBefore: "./assets/img/snakebefore.png",
    imgAfter: "./assets/img/snakeafter.png",
    tags: ["BACK-END", "JAVA", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Snake_Java_Advanced",
    link: "./SnakeGameJAVA.html",  // New key
  },
  {
    name: "TextEditor",
    imgBefore: "./assets/img/texteditorbefore.png",
    imgAfter: "./assets/img/texteditorafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Text-Editor",
    link: "./TextEditor.html",  // New key
  },
  {
    name: "Calculator",
    imgBefore: "./assets/img/calculatorbefore.png",
    imgAfter: "./assets/img/calculatorafter.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Calculator_simple",
    link: "./Calculator.html",  // New key
  },
  {
    name: "TetrisJs",
    imgBefore: "./assets/img/tetrisbefore.png",
    imgAfter: "./assets/img/tetrisafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Tetris_Javascript",
    link: "./TetrisJs.html",  // New key
  },
  {
    name: "MyPortfolio",
    imgBefore: "./assets/img/portfoliobefore.png",
    imgAfter: "./assets/img/portfolio.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Portfolio",
    link: "./MyPortfolio.html",  // New key
  },
  {
    name: "FlappyBirdJAVA",
    imgBefore: "./assets/img/flappybird.png",
    imgAfter: "./assets/img/flappybird.png",
    tags: ["BACK-END", "JAVA", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/FlappyBirdJAVA",
    link: "./FlappyBirdJAVA.html",  // New key
  },
  {
    name: "Tralivecom",
    imgBefore: "./assets/img/tralivebefore.png",
    imgAfter: "./assets/img/traliveafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/No-More-NoobSite",
    link: "./Tralivecom.html",  // New key
  },
  {
    name: "conferencecom",
    imgBefore: "./assets/img/conb.png",
    imgAfter: "./assets/img/cona.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./conferencecom.html",  // New key
  },
  {
    name: "bexercom",
    imgBefore: "./assets/img/bexerb.png",
    imgAfter: "./assets/img/bexera.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./bexercom.html",  // New key
  },
  {
    name: "travelcom",
    imgBefore: "./assets/img/shipb.png",
    imgAfter: "./assets/img/shipa.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./travelcom.html",  // New key
  },
  {
    name: "neoncarddesign",
    imgBefore: "./assets/img/neonb.png",
    imgAfter: "./assets/img/neona.png",
    tags: ["FRONT-END", "CSS", "HTML5", "UI/UX DESIGN", "ANIMATIONS"],
    github: "",
    link: "./neoncarddesign.html",  // New key
  },
  {
    name: "apprucom",
    imgBefore: "./assets/img/apprub.png",
    imgAfter: "./assets/img/apprua.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "",
    link: "./apprucom.html",  // New key
  },
  {
    name: "coffeeshopcom",
    imgBefore: "./assets/img/coffeeb.png",
    imgAfter: "./assets/img/coffeea.png",
    tags: ["FRONT-END", "BACK-END", "SCSS", "NODEJS", "REACTJS", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/CafeSite",
    link: "./coffeeshopcom.html",  // New key
  },
];  



function generateProjectHTML(project) {
  return `
    <main>
      <div class="testpage">
        <section class="centered">
          <div class="wrapper">
            <div class="headerMe">
              <h1 id="name">${project.name}</h1>
              <h3>
                This project uses a combination of various technologies, including ${
                  project.tags.join(", ")
                }. Check out the source code, and find out more about the project below.
              </h3>
              <div class="test">
                <button class="submit submit-available">GET THE SOURCE CODE</button>
                <div class="socialBtns">
                  <a target="_blank" href="${project.github}" class="icon github submit"><img src="../assets/svg/github-mark.svg" alt="github"></a>
                  <a target="_blank" href="https://github.com/nrzdhmz" class="icon insta submit"><img src="../assets/svg/insta.svg" alt="insta"></a>
                  <a target="_blank" href="https://www.linkedin.com/in/hamza-nuruzade-a90531297/" class="icon linkedin submit"><img src="../assets/svg/linkedin.svg" alt="linkedin"></a>
                </div>
              </div>
            </div>
            <div class="imgcontainer">
              <img id="imgBefore" src=".${project.imgBefore}" alt="${project.name} Before">
            </div>
            <div class="test-content">
              <h2>About this project</h2>
              <hr>
              <br>
              <p>This project is a demonstration of my skills in various technologies. It features interactive design elements, animations, and a strong emphasis on UI/UX.</p>
              <br>
              <h2>Technical Sheet</h2>
              <p>Technologies used in this project:</p>
              <br>
              <ul itemprop="keywords" id="tags" class="keywords">
                ${project.tags.map(tag => `<li>${tag}</li>`).join("")}
              </ul>
              <br>
              <h2>Github</h2>
              <hr>
              <br>
              <ul class="keywords">
                <li>Get the code
                  <div class="texture hovering"><a id="github" href="${project.github}">Link</a></div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="pageControl">
          <a href="#" class="next" title="Web Development Portfolio">
            <span>Next Project</span>
            <em></em>
          </a>
          <a href="#" class="prev" title="Web Development Portfolio">
            <span>Previous Project</span>
            <em></em>
          </a>
          <div class="lent">
            <a
              target="_blank"
              href="https://github.com/nrzdhmz"
              title="Follow on Github"
            >Follow on Github</a>
          </div>
        </div>
      </div>
    </main>
  `;
}



document.addEventListener('DOMContentLoaded', function() {
  const currentTitle = document.title;

  // Find the current project based on the title
  const currentIndex = projects.findIndex(p => p.name === currentTitle);

  if (currentIndex !== -1) {
    const project = projects[currentIndex];

    // Generate project HTML content
    const projectHTML = generateProjectHTML(project);

    // Insert project HTML into the main element
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = projectHTML;

    // Determine the previous and next project links
    let prevLink = "#"; // Default to a placeholder
    let nextLink = "#"; // Default to a placeholder

    if (currentIndex > 0) {
      prevLink = projects[currentIndex - 1].link; // Previous project
    }

    if (currentIndex < projects.length - 1) {
      nextLink = projects[currentIndex + 1].link; // Next project
    }

    // Update the Page Control links
    const prevElement = document.querySelector('.pageControl .prev');
    const nextElement = document.querySelector('.pageControl .next');

    if (prevElement) {
      prevElement.href = prevLink; // Set the Previous Project link
    }

    if (nextElement) {
      nextElement.href = nextLink; // Set the Next Project link
    }
  } else {
    console.error("Project not found for title:", currentTitle);
  }
});
