import "./styles.css";
import VectorLeft from "../Images/VectorLeft.png";
import VectorRight from "../Images/VectorRight.png";
export const Content = () => {
    return (
        <div>
        <div className="container banner">
        <div className="img1Div"></div>
        <div className="content1">
            <div className="childCont1">
                <p id="p1Cont1">Read Article</p>
                <p id="p2Cont1">The Best Way to Avoid Data Leaks and Privacy Scandals: Don't Own Consumer Data</p>
                <p id="p3Cont1">“These are companies, like intellicam, that are actually working to get our data onto personal servers so we own it, not the companies”</p>
            </div>
            <div className="icons">
                <div id="vectorL">
                <img src= {VectorLeft}  alt="" />
                </div>
                <div id="vectorR">
                <img src= {VectorRight} alt="" />
                </div>
            </div>
        </div>
        </div>

        <div className="container our_team">
            <div className="childCont2">
                <div >
                    <p id="paraOurT1">OUR TEAM</p>
                    <p id="paraOurT2">MEET THE TEAM OF BEST  DEVELOPERS:</p>
                </div>
                <div>
                    <p id="paraOurT3">
                    We have a team of skilled veteran developers who<br/> exhibit amazing efficiency in their performance.<br/>With MerkLabs, you are in safe hands.  We<br/>understand your needs and give out a <br /> performance that matches your expectations.
                    </p>
                </div>
                <div id="explrDiv">
                    <p>Explore More</p>
                </div>
            </div>
            <div className="childCont2">
                <div id="ourTCont2">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            <div id="overlapDiv">

            </div>
            </div>
            
        </div>

        </div>
    )
}