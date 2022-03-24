import "./styles.css";
import VectorLeft from "../Images/VectorLeft.png";
import VectorRight from "../Images/VectorRight.png";
import btmpic from "../Images/btmpic.png";
import toppic from "../Images/toppic.png";
import VectorDown from "../Images/VectorDown.png";
import reviewpic from "../Images/reviewpic.png";
import Vector from "../Images/Vector.png";
import Vector1 from "../Images/Vector1.png";
import Vector2 from "../Images/Vector2.png";
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

        <div id="whyCont">
            <div id="whymainPara">
                <p>Why</p>
                <p>WHY WE ARE THE BEST?</p>
            </div>
            <div id="subParaswhy">
                <div className="subParasDiv">
                    <p>WE UNDERSTAND YOUR NEEDS</p>
                    <p>Merklabs totally relates to your concern and the significance<br/>, the security of smart contract carries , we comprehend the<br/>vulnerabilities and give out the promise of security through<br/>auditing it and removing all the errors of the smart contracts</p>
                </div>
                <div className="subParasDiv">
                <p>WE VERIFY AND RECTIFY</p>
                    <p>Verifying the vulnerabilities of the contract , we also provide<br/>the best suggestion for rectifications. Omitting out any bugs<br/>and making your smart contract error free .</p>
                </div>
                <div className="subParasDiv">
                <p>WE HAVE ALL</p>
                    <p>We not only provide you with security but also develop<br/>efficient smart contracts to suit your needs and<br/>requirements. Ranging from various categories we are here<br/>to assist the clients from creation of smart contracts to<br/>dApps and Defis.</p>
                </div>
                <div className="subParasDiv">
                <p>WE ADD VALUE TO YOUR IDEAS</p>
                    <p>Team Marklabs put in the best of its efforts to give out<br/>incredible results. We ensure and prioritize client satisfaction<br/>and exhibit results that match your expectations.Adding<br/>value to your projects is our ultimate goal.</p>
                </div>
            </div>
        </div>

        <div id="ourClient">
            <p>Our Clien Review</p>
            <p className="ourClienPara">Subscribe to our newsletter for daily/weekly</p> 
            <p className="ourClienPara">update of our products and services.</p>
        </div>
        
        <div id="reviewsDiv">
            <div className="reviewsubDiv">
                <p>01 FEB, 2019 | TECHNOLOGY</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <img src={reviewpic} alt="" />
                <p>JOHN SMITH</p>
                <p>Founder of Awesomeux Technology</p>
            </div>
            <div id="reviewsDiv2">
                <p>01 FEB, 2019 | TECHNOLOGY</p>
                <p>Lorem Ipsum is simply dummy text of the printing<br/>and typesetting  text ever since the 1500s, when an<br/> unknown printer took a galley of type and<br/>scrambled it to make a type specimen book.</p>
                <img src={reviewpic} alt="" />
                <p>JOHN SMITH</p>
                <p>Founder of Awesomeux Technology</p>
            </div>
            <div className="reviewsubDiv">
            <p>01 FEB, 2019 | TECHNOLOGY</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <img src={reviewpic} alt="" />
            </div>
        </div>
        <hr id="hr3"/>

        <div id="contactDiv">
            <div className="contact1">
                <p>CONTACT</p>
                <p>We love receiving messages<br/>from you, we are waiting for<br/>it.</p>
                <div className="callDiv">
                    <div>
                        <img src={Vector} alt=""/>
                    </div>
                    <div>
                        <p id="phone">Phone</p> <br />
                        <p id="num">+62 1234 8921</p>
                    </div>
                    <div className="msgDiv">
                        <div>
                            <img src={Vector1} alt="" />
                            <img src={Vector2} alt="" />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>support@MerkLabs.tld</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact2">
                <div>
                    <div>
                    <p>Name</p>
                    <p>Email</p>
                    </div>
                    <div>
                    <input type="text" />
                    <input type="text" />
                    </div>
                </div>
                <p>Subject</p>
                <input type="text" />
                <p>Message</p>
                <input id="msginp" type="text" />
                <div id="sendMsg" className="explrDiv">
                    <p>Send Messege</p>
                </div>
            </div>
        </div>

        <div className="askDiv">
            
        </div>
        </div>
    )
}