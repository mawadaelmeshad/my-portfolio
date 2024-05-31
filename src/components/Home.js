import React, { useEffect } from 'react';
import myphoto from "../images/Mawadah 2.jpg";
import './css-components/home.css';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css';
import flower1 from '../images/flower.gif'
function Home(){
        useEffect(() => {
            const wow = new WOW();
            wow.init();
        }, []);
    return(
        <div className="home">
            <div className="contain">
                <div className="contain-words">
                    <p className="wow slideInLeft" data-wow-duration="1s" data-wow-delay=".2s">welcome to my world . . .</p>
                    <h4>Hi, I am <span>Mawadah Elmashad</span> <br></br><span>Front end developer</span><h4>I build websites.</h4></h4>
                    <div class="projects-button"><a class="rn-btn projects-btn" href='#projects'>My Projects</a></div>

                </div>
                <div className="contain-img">
                    <img src={myphoto} alt="myphoto"/>
                </div>
                    {/* <img src={flower1} alt="flower"className='myphoto' /> */}
            </div>
        </div>
    )
}
export default Home;