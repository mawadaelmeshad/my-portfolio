import myphoto from "../images/meinecpc-removebg-preview (5).png";
import './css-components/about.css';
import flower1 from "../images/flower.jpg";
import flower2 from "../images/ecpc.jpg";
import flower3 from "../images/gameofcoders.jpg";
import ImageSlider from "./ImageSlider";
function Projects(){
    const images = [
        flower1,
        flower2,
        flower3
    ];
    return(
        <div className="about" id="about">
            <div className="title">Projects</div>
            <div className="contain">
                <div className="contain-p">
                    <p>I am a passionate junior computer science student with a deep love for problem-solving and a strong interest in front-end development.</p>
                        <p>My journey in the field of technology has been a continuous exploration of learning and gaining valuable experiences. I thrive on the challenges of creating intuitive user interfaces and solving real-world problems through code.</p>  
                        <p>With an insatiable curiosity and a commitment to excellence, I am dedicated to furthering my knowledge, embracing new technologies, and making a meaningful impact in the world of web development. I'm excited to continue this incredible journey and see where it takes me.</p>
                    </div>
                {/* <ImageSlider images={images} /> */}
                <div className="contain-tech">
                    <h2>List of some technologies I have been engaged with:</h2>
                    <ul>
                        <li>React js</li>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                        <li>C++</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Projects;