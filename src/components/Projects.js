import './css-components/about.css';
import healthy from "../images/healthy.png";
import elevate from "../images/elevate.png";
import mega from "../images/megaportfolio.png";
import career from "../images/careerhub.png";
import calculator from "../images/calculator.png";
import weather from "../images/weather.png";
import exclusive from "../images/exclusive.png";


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
                    <div className="card wow slideInLeft">
                        <img src={mega} alt="de" />
                        <div className="words">
                        <h2>Mega portfolio</h2>

        
                            <p>website</p>
                            <div class="projects-buttonn"><a class="rn-btn" href="https://mega-ecru.vercel.app/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/mega" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a></div>
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
                             
                                            <li>Created a website aimed at aiding users in their job search journey and utilized Netlify for hosting.
                </li>
                <li>Seamless Sign-in and User Authentication: Implemented token-based authentication to ensure secure access for users.</li>
                <li>Safeguarded routes from unauthorized access, allowing only authenticated users to view certain pages.</li>
                <li>Integrated email verification and password reset features to enhance account security and user experience.</li>
                <li>Enabled users to update their profiles easily and implemented a smooth logout feature for users.</li>
                    </ul>
                    <div className="card wow slideInRight">
                        <img src={career} alt="careerhub" />
                        <div className="words">
                        <h2>CareerHub</h2>
                            <p>website</p>
                            <div class="projects-buttonn"><a class="rn-btn" href="https://careerhub-sand.vercel.app/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/careerhub" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a></div>
                        </div>
                    </div>
                </div>

                <div className="row-divide">
                    <div className="card wow slideInLeft">
                        <img src={healthy} alt="de" />
                        <div className="words">
                            <h2>Healthy</h2>
                            <p>Landing page</p>
                            <div class="projects-buttonn"><a class="rn-btn" href="https://mawadaelmeshad.github.io/Landing_Page/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/Landing_Page" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a></div> 
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
                    <div className="card wow slideInRight">
                        <img src={elevate} alt="de" />
                        <div className="words">
                            <h2>Elevate Yourself</h2>
                            <p>Website</p>
                            <div class="projects-buttonn"><a class="rn-btn" href="https://mawadaelmeshad.github.io/Elevate-Yourself/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/Elevate-Yourself" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a>
                            </div>
                        </div>
                    </div>
                </div>

            
                <div className="row-divide">
                    <div className="card wow slideInLeft">
                        <img src={calculator} alt="de" />
                        <div className="words">
                            <h2>Calculator</h2>
                            <p>Website</p>
                            <div class="projects-buttonn"><a class="rn-btn" href="https://mawadah-calculator.netlify.app/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/Calculator" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>Designed and developed a calculator application using React to perform basic arithmetic operations.</li>
                        <li>Utilized modern React hooks and state management to ensure a responsive and dynamic user interface.</li>
                        <li>Integrated functionalities for addition, subtraction, multiplication, division, and decimal calculations, along with clear and delete options for efficient error handling.</li>
                    </ul>
                </div>

                <div className="row-divide">
                    <ul>
                        <li>Designed and developed a weather application using React to provide real-time weather information for any city.</li>
                        <li>City Search Functionality: Allows users to search for any city to quickly retrieve and display current weather conditions.</li>
                        <li>Provides real-time updates on temperature, humidity, and wind speed. </li>
                    </ul>
                    <div className="card wow slideInRight">
                        <img src={weather} alt="de" />
                        <div className="words">
                            <h2>Weather App</h2>
                            <p>Website</p>
                            <div class="projects-buttonn"><a class="rn-btn" href="https://main--wweatherrapp.netlify.app/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/weatherApp" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row-divide">
                    <div className="card wow slideInLeft">
                        <img src={exclusive} alt="de" />
                        <div className="words">
                            <h2>Exclusive</h2>
                            <p>Website</p>
                            <div class="projects-buttonn"><a class="rn-btn" href="https://exclusive-five.vercel.app/" target="_blank">View</a><a href="https://github.com/mawadaelmeshad/Exclusive" target="_blank"><FontAwesomeIcon icon={faGithub} className="github"/></a>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>Currently Developing an e-commerce website using React JS with a sleek design inspired by Figma.</li>
                        <li>Integrated with the Fake Store API to dynamically display products and manage inventory.</li>
                        <li>Ensured an intuitive and engaging shopping experience with responsive design and easy navigation.</li>
                    </ul>
                </div>

            
            </div>
        </div>
    )
}
export default Projects;