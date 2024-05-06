const projects = [
  {
    link : "../portfolio.html"
  },
  {
    name: "SnakeGameJAVA",
    about: "This is a SnakeGame made in Java, it has unique features new apple ideas, an apple which runs from the snake and tries to dodge it, level designs and more other exciting features.",
    imgAfter: "./assets/img/snakebefore.png",
    imgBefore: "./assets/img/snakeafter.png",
    tags: ["BACK-END", "JAVA", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Snake_Java_Advanced",
    link: "./SnakeGameJAVA.html",  
  },
  {
    name: "TextEditor",
    about: "A web-based text editor built with JavaScript that mimics the functionality of Microsoft Word. Create, edit, and format text with ease, offering all the essential tools for a seamless writing experience.",
    imgBefore: "./assets/img/texteditorbefore.png",
    imgAfter: "./assets/img/texteditorafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Text-Editor",
    link: "./TextEditor.html",  
  },
  {
    name: "Calculator",
    about : "A web-based calculator built with JavaScript that replicates the functionality of a standard PC calculator. Perform basic arithmetic and complex calculations with a familiar interface.",
    imgBefore: "./assets/img/calculatorbefore.png",
    imgAfter: "./assets/img/calculatorafter.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Calculator_simple",
    link: "./Calculator.html",  
  },
  {
    name: "TetrisJs",
    about: "A web-based Tetris game with unique features like block speeding, block holding for future turns, and best score tracking. Enjoy classic gameplay with enhanced controls and a dynamic experience.",
    imgBefore: "./assets/img/tetrisbefore.png",
    imgAfter: "./assets/img/tetrisafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Tetris_Javascript",
    link: "./TetrisJs.html",  
  },
  {
    name: "MyPortfolio",
    about: "A portfolio page showcasing my projects, where you can explore my work, send me emails, and leave comments on each project. A one-stop site for engaging with my creations and providing feedback.",
    imgBefore: "./assets/img/portfoliobefore.png",
    imgAfter: "./assets/img/portfolio.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/Portfolio",
    link: "./MyPortfolio.html",  
  },
  {
    name: "FlappyBirdJAVA",
    about: "A Flappy Bird game built in Java with best score tracking and more. Tap or click to navigate your bird through obstacles, aiming for a high score in this classic arcade-style game.",
    imgBefore: "./assets/img/flappybird.png",
    imgAfter: "./assets/img/flappybird.png",
    tags: ["BACK-END", "JAVA", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/FlappyBirdJAVA",
    link: "./FlappyBirdJAVA.html",  
  },
  {
    name: "Tralivecom",
    about: "This is a travel company website template, fell free to use it",
    imgBefore: "./assets/img/tralivebefore.png",
    imgAfter: "./assets/img/traliveafter.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/No-More-NoobSite",
    link: "./Tralivecom.html",  
  },
  {
    name: "conferencecom",
    about: "This is a website template, fell free to use it",
    imgBefore: "./assets/img/conb.png",
    imgAfter: "./assets/img/cona.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./conferencecom.html",  
  },
  {
    name: "bexercom",
    about: "This is a busines planning company, where you can find profecionals for developing your business ideas.",
    imgBefore: "./assets/img/bexerb.png",
    imgAfter: "./assets/img/bexera.png",
    tags: ["FRONT-END", "SCSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./bexercom.html",  
  },
  {
    name: "travelcom",
    about:"This is a travel template site, you can get the code and implement your app, fell free to use.",
    imgBefore: "./assets/img/shipb.png",
    imgAfter: "./assets/img/shipa.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "ANIMATIONS"],
    github: "",
    link: "./travelcom.html",  
  },
  {
    name: "apprucom",
    about: "This is a website template, fell free to use it",
    imgBefore: "./assets/img/apprub.png",
    imgAfter: "./assets/img/apprua.png",
    tags: ["FRONT-END", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "",
    link: "./apprucom.html",  
  },
  {
    name: "coffeeshopcom",
    about: "This is a cooffe shop website template",
    imgBefore: "./assets/img/coffeeb.png",
    imgAfter: "./assets/img/coffeea.png",
    tags: ["FRONT-END", "BACK-END", "SCSS", "NODEJS", "REACTJS", "CSS", "HTML5", "JAVASCRIPT", "UI/UX DESIGN", "ANIMATIONS"],
    github: "https://github.com/nrzdhmz/CafeSite",
    link: "./coffeeshopcom.html",  
  },
  {
    link : "../portfolio.html"
  }
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
                <button class="submit submit-available"><a target="_blank" href="${project.github}" class="submit">GET THE SOURCE CODE</a></button>
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
              <p>${project.about}</p>
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

  const currentIndex = projects.findIndex(p => p.name === currentTitle);

  if (currentIndex !== -1) {
    const project = projects[currentIndex];

    const projectHTML = generateProjectHTML(project);

    const mainElement = document.querySelector('main');
    mainElement.innerHTML = projectHTML;

    let prevLink = "#"; 
    let nextLink = "#"; 

    if (currentIndex > 0) {
      prevLink = projects[currentIndex - 1].link; 
    }

    if (currentIndex < projects.length - 1) {
      nextLink = projects[currentIndex + 1].link;
    }

    const prevElement = document.querySelector('.pageControl .prev');
    const nextElement = document.querySelector('.pageControl .next');

    if (prevElement) {
      prevElement.href = prevLink; 
    }

    if (nextElement) {
      nextElement.href = nextLink; 
    }
  } else {
    console.error("Project not found for title:", currentTitle);
  }
});
