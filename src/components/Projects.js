import myphoto from "../images/meinecpc-removebg-preview (5).png";
import './css-components/about.css';
import flower1 from "../images/flower.jpg";
import flower2 from "../images/ecpc.jpg";
import flower3 from "../images/gameofcoders.jpg";
import './css-components/projects.css';
import ImageSlider from "./ImageSlider";
function Projects(){
    const images = [
        flower1,
        flower2,
        flower3
    ];
    return(
        <div className="projects" id="projects">
            <div className="title">Projects</div>
            <div className="contain">
                <div className="card">
                    <img src={flower2} alt="de" />
                    <div className="words">
                        <h2>grfg</h2>
                        <p>rfghhjjjutjt</p>
                    </div>
                </div>
                <div className="card">
                    <img src={flower2} alt="de" />
                    <div className="words">
                        <h2>grfg</h2>
                        <p>rfghhjjjutjt</p>
                    </div>
                </div>
                <div className="card">
                    <img src={flower2} alt="de" />
                    <div className="words">
                        <h2>grfg</h2>
                        <p>rfghhjjjutjt</p>
                    </div>
                </div>
                <div className="card">
                    <img src={flower2} alt="de" />
                    <div className="words">
                        <h2>grfg</h2>
                        <p>rfghhjjjutjt</p>
                    </div>
                </div>
                <div className="card">
                    <img src={flower2} alt="de" />
                    <div className="words">
                        <h2>grfg</h2>
                        <p>rfghhjjjutjt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;