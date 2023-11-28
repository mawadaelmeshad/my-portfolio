import './css-components/about.css';
import healthy from "../images/healthy.png";
import elevate from "../images/elevate.png";
import mega from "../images/megaportfolio.png";
import edu from "../images/eduverse.png";
import './css-components/projects.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon from the correct package
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects(){

    return(
        <div className="projects" id="projects">
            <div className="title">Featured projects</div>
            <div className="contain">
                <div className="row-divide">
                    <div className="card">
                        <img src={healthy} alt="de" />
                        <div className="words">
                            <h2>Healthy</h2>
                            <p>Landing page</p>
                            <div class="projects-button"><a class="rn-btn" href="https://mawadaelmeshad.github.io/Landing_Page/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/Landing_Page" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a></div> 
                        </div>
                    </div>
                    <ul>
                                <li>Designed and developed a visually appealing healthy food landing page.
    </li>
    <li>Utilized HTML and CSS to create an interactive and engaging user experience. </li>
    <li>Implemented responsive design techniques using CSS media queries to ensure a seamless user experience across devices.</li>
                    </ul>
                </div>

                <div className="row-divide">
                    <ul>
                        <li>Designed and developed a self-awareness website aimed at helping users on their journey to self-discovery.</li>
                        <li>Utilized HTML, CSS, Bootstrap, and JavaScript to create an interactive and engaging user experience.</li>
                        <li>Integrated a range of helpful resources, including articles and exercises, to provide users with valuable insights.</li>
                    </ul>
                    <div className="card">
                        <img src={elevate} alt="de" />
                        <div className="words">
                            <h2>Elevate Yourself</h2>
                            <p>Website</p>
                            <div class="projects-button"><a class="rn-btn" href="https://mawadaelmeshad.github.io/Elevate-Yourself/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/Elevate-Yourself" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row-divide">
                    <div className="card">
                        <img src={mega} alt="de" />
                        <div className="words">
                            <h2>Mega portfolio</h2>
                            <p>website</p>
                            <div class="projects-button"><a class="rn-btn" href="https://megateam.netlify.app/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/mega" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a></div>
                        </div>
                    </div>
                    <ul>
                                    <li>Designed and developed a captivating portfolio website for my team (Mega).
        </li>
        <li>Utilized HTML, CSS, Bootstrap, and JavaScript to create an interactive and engaging user experience.</li>
        <li>Incorporated scroll animations and smooth scrolling functionalities using JavaScript to enhance navigation fluidity.</li>
                    </ul>
                </div>     

                <div className="row-divide">
                    <ul>
                                            <li>Designed and developed an e-learning website using HTML, CSS, and JavaScript.
                </li>
                <li>The website features interactive quizzes and progress tracking for learners.</li>
                <li>It also includes responsive design for seamless usage across various devices.</li>
                    </ul>
                    <div className="card">
                        <img src={edu} alt="de" />
                        <div className="words">
                            <h2>EduVerse</h2>
                            <p>website</p>
                            <div class="projects-button"><a class="rn-btn" href="https://mawadaelmeshad.github.io/Edu_Verse/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/Edu_Verse" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;