import myphoto from "../images/Mawadah 2.jpg";
import './css-components/home.css'
function Home(){
    return(
        <div className="home">
            <div className="contain">
                <div className="contain-words">
                    <p>welcome to my world . . .</p>
                    <h2>Hi, I am Mawadah Elmashad <br></br><span>Front end developer</span><h2>based in Mansoura.</h2></h2>
                </div>
            <img src={myphoto} alt="myphoto" className="myphoto"/>
            </div>
        </div>
    )
}
export default Home;