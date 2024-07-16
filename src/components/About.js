import './css-components/about.css';
import flower1 from "../images/flower.gif";
import flower2 from "../images/ecpc.jpg";
import flower3 from "../images/gameofcoders.jpg";
import myphoto from "../images/Mawadah 2.jpg";

function About(){
    const images = [
        flower1,
        flower2,
        flower3
    ];
    return(
        <div className="about" id="about">
            <div className="title">about me</div>
            <div className="contain-about">
                <div className="contain">
                    <div className="contain-p">
                        <p><span className="dash">-</span> I am a passionate girl with a deep love for problem-solving and a strong interest in front-end development.</p>
                            <p id="removed"><span className="dash">-</span> My journey in the field of technology has been a continuous exploration of learning and gaining valuable experiences. I thrive on the challenges of creating intuitive user interfaces and solving real-world problems through code.</p>  
                            <p><span className="dash">-</span> With an insatiable curiosity and a commitment to excellence, I am dedicated to furthering my knowledge, embracing new technologies, and making a meaningful impact in the world of web development. I'm excited to continue this incredible journey and see where it takes me.</p>
                    </div>
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
                <img src={flower1} alt="flower" />
                   {/* <div className="myphoto">
                   <    img src={myphoto} alt="myphoto" />I am a passionate professional with a deep love for problem-solving and a strong interest in front-end development. My journey in the field of technology has been a continuous exploration of learning and gaining valuable experiences. I thrive on the challenges of creating intuitive user interfaces and solving real-world problems through code.
                   </div> */}

            </div>
        </div>
    )
}
export default About;
