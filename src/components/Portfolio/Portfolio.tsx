import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/BustamanteFlocer/Attendance-Management-System" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Attendance Management System with QR Code Scanner</h3>
            <img className="image-fluid" src="https://i.imgur.com/VjRMtK7.gif"  alt="GitHub" />
            <p>Developed a web-based attendance management system with QR code scanner to automate and make the process of monitoring attendance easier and more efficient.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Php</li>
              <li>Mysql</li>
              <li>Javascript</li>
              <li>SCSS</li>
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/BustamanteFlocer/Food-Garage-Website-Prototype" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Food Garage</h3>
              <img className="image-fluid" src="https://i.imgur.com/mw5dxfe.gif" alt="GitHub" />
              <p>Planned and created a CMS website for a restaurant in Bayugan City.
             </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              
             
            </div>
            </header>
            <div className="body">
              <h3>Scrapcycle</h3>
              <img className="image-fluid" src="https://i.imgur.com/BEGlp5b.gif" alt="GitHub" />
              <p>
                Scrapcycle is a startup idea that landed us a contract for a startup incubation with Navigatu.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/BustamanteFlocer/QuizGame_3DResponsiveBackground" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitsite" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Quiz Game</h3>
              <img className="image-fluid" src="https://i.imgur.com/hiTCBiA.gif" alt="GitHub" />
              <p>A programming quiz game with local storage using javascipt and three.js
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>Three.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/joaotuliojt/dtmoney-trilha-reactjs" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Codepen Clone</h3>
              <img className="image-fluid" src="https://i.imgur.com/VQqJldg.gif" alt="GitHub" />
              <p>A simple codepen clone using React.js
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>JavaScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/BustamanteFlocer/CCIS-Homepage-Prototype" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visit site" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>CCIS Homepage Using Wordpress</h3>
              <img className="image-fluid" src="https://i.imgur.com/yJGUwQX.gif" alt="GitHub" />
              <p> This is a project in my IT111 subject. The task is to create a CMS version of the CCIS Homepage of Caraga State University. 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}
