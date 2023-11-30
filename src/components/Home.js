import React, { useEffect } from 'react';
import myphoto from "../images/Mawadah 2.jpg";
import './css-components/home.css';
import WOW from 'wow.js';
import 'wow.js/css/libs/animate.css';
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
                    <h2>Hi, I am Mawadah Elmashad <br></br><span>Front end developer</span><h2>based in Mansoura.</h2></h2>
                </div>
                    <img src={myphoto} alt="myphoto" className="myphoto"/>
            </div>
        </div>
    )
}
export default Home;