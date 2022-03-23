import "./styles.css";
import VectorLeft from "../Images/VectorLeft.png";
import VectorRight from "../Images/VectorRight.png";
import btmpic from "../Images/btmpic.png";
import toppic from "../Images/toppic.png";
import VectorDown from "../Images/VectorDown.png";
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
                <div className="explrDiv">
                    <p>Explore More</p>
                </div>
            </div>
            <div className="childCont2">
                <div id="ourTCont2">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            <div id="bottomCircle">
                <img src={btmpic} alt=""/>
            </div>
            <div id="overlapDiv">
                    <div id="topCircle">
                        <img src={toppic} alt="" />
                    </div>
            </div>
            </div>
        </div>

        <div id="projectSec">
        
        <div id="prjParas">

        <div id="leftPrj">
            <p>PROJECTS</p>
            <p>We have completed many<br/>amazing projects that you<br/>will not believe</p>
        </div>
        <div id="rightPrj">
            <div id="dropDown">
                <p>Technology</p>
                <img src={VectorDown} alt="" />
            </div>
        </div>
        </div>
        <hr id="hr1"/>

        <div id="projectCardCont">
            <div className="projectsCard">
                <div className="subPrjDiv">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p id="paraPrj1">The Desktop App Landing Page</p>
                <p id="paraPrj2">A landing page for desktop app</p>
                <div id="prjBtn1" className="explrDiv">
                    <p>Explore More</p>
                </div>
            </div>


            <div className="projectsCard">
            <div className="subPrjDiv">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p id="paraPrj3">The Desktop App Landing Page</p>
                <p id="paraPrj4">A landing page for desktop app</p>
                <div id="prjBtn2" className="explrDiv">
                    <p>Explore More</p>
                </div>
            </div>


            <div className="projectsCard">
            <div className="subPrjDiv">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p id="paraPrj5">The Desktop App Landing Page</p>
                <p id="paraPrj6">A landing page for desktop app</p>
                <div id="prjBtn3" className="explrDiv">
                    <p>Explore More</p>
                </div>
            </div>


            <div className="projectsCard">
            <div className="subPrjDiv">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p id="paraPrj7">The Desktop App Landing Page</p>
                <p id="paraPrj8">A landing page for desktop app</p>
                <div id="prjBtn4" className="explrDiv">
                    <p>Explore More</p>
                </div>
            </div>
        </div>

        </div>

        <div id="joinUsCont">
            <div>
                <div id="hr2"></div>
                <p>Join Us</p>
                <p id="para2JoinUs">BE A PART OF OUR<br/>HAPPY COMMUNITY</p>
                <p id="para3JoinUs">We take immense pride in our<br/>achievements and have a happy and<br/>satisfied community that trusts our work<br/>wholeheartedly. Then what are you waiting<br/> for ,come and be a part of the merklabs<br/> family, because we are here always for you.</p>
                <div id="JoinUsBtn1" className="explrDiv">
                    <p>Explore More</p>
                </div>
            </div>
            <div>
                <div id="joinUSnav">
                    <p>Node</p>
                    <p>Java</p>
                    <p>Curl</p>
                </div>
                <div id="codeJoinUs">
                <p>response = stub.PostModelOutputs(<br/>
                    service_pb2.PostModelOutputsRequest(<br/>
                    model_id="{"THE_MODEL_ID"}",<br/>
                    inputs=[<br/>
                    resources_pb2.Input(<br/>
                    data=resources_pb2.Data(<br/>
                    image=resources_pb2.Image(<br/>
                        url="https://samples.clarifai.com/metro-north.jpg"<br/>
                    )<br/>
                    )<br/>
                    )<br/>
                    ]<br/>
                    ),<br/>
                    metadata=metadata<br/>
                    )<br/>
                    print("Predicted concepts:")<br/>
                    for concept in response.outputs[0].data.concepts:<br/>
                    print(concept.name + " " + str(concept.value))</p>
                </div>
            </div>
        </div>
        </div>
    )
}