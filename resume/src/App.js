import React from "react";
// import logo from './logo.svg';
import './App.css';
const img ="./img/nayaks.jpg"

function App() {
  return (
    <>
      <div className="raj">
        <div className="container">
          <div className="leftside">
            <div className="profileText">
              <div className="imgBx">
                <img src={img}></img>
              </div>
              <div className="profileText">
                <h2>Subhankar Nayak<br></br><span>Front End Developer</span></h2>
              </div>
              <div className="contactInfo">
                <h3 className="title">Contect Info</h3>
                <ul>
                  <li>
                    <span className="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <span className="text">+918388035198</span>
                  </li>
                  <li>
                    <span className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <span className="text">nayaksnu1998@gmail.com</span>
                  </li>
                  <li>
                    <span className="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
                    <span className="text">Github</span>
                  </li>
                  <li>
                    <span className="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span className="text">Baligeria, Egra, Purba Medinipur</span>
                  </li>
              </ul>
              </div>

              <div className="contactInfo education">
                <h3 className="title">Education</h3>
                <ul>
                  <li>
                    <h6>2019-2022</h6>
                    <h5>Bachelor of Technology</h5> 
                    <h5>Sister Nivedita University</h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h6>2016-2019</h6>
                    <h5>Diploma in Engineering</h5> 
                    <h5>Sheikhpara A.R.M Polytechnic</h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h6>2013-2016</h6>
                    <h5>Higher Secondary Education</h5> 
                    <h5>Depal Baneswar Charubala Vidya Mandir</h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h6>2012-2013</h6>
                    <h5>Secondary Education</h5> 
                    <h5>Baligeria Madan Mohan Adarsha Vidyapith</h5>
                  </li>
                </ul>
              </div>

              <div className="contactInfo language">
                <h3 className="title">Language</h3>
                <ul>
                  <li>
                    <span className="text">English</span>
                    <span className="percent">
                      <div className="ram_eng"></div>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="text">Hindi</span>
                    <span className="percent">
                      <div className="ram_hin"></div>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="text">Bengali</span>
                    <span className="percent">
                      <div className="ram_ben"></div>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className="text">Odia</span>
                    <span className="percent">
                      <div className="ram_odi"></div>
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className="rightside">
            <div className="about">
              <h2 className="title2">Profile</h2>
              <p>To I want to build a career with leading corporate which will help me to 
                  explore myself fully and realize my Potentiality. I also want to work as 
                  team Player and lead wherever necessary. I do here by declare that the 
                  information provided by me is true and best of my knowledge.</p>
            </div>
            <div className="about">
              <h2 className="title2">Internship</h2>
              <div className="box">
                <div className="date_company">
                  <h6>07/2022 - 02/2023 </h6>
                  <h6>Newton School</h6>
                </div>
                <div className="text">
                  <h5>Full Stack Web Development</h5>
                  <p>Project </p>
                </div>
              </div>
            </div>
            <div className="about">
              <h2 className="title2">PERSONAL PROJECTS</h2>
              <ul>
                  <li>
                    <h5>Food Delivery System (Diploma Final year Project)</h5>
                    <h6>Using Python</h6>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Crypto trading Bot (B-Tech Final year Project)</h5>
                    <h6>Using Java Script</h6>
                  </li>
                </ul>
            </div>
            <div className="about skills">
              <h2 className="title2">Professioal Skills</h2>
              <div className="box">
                <h5>HTML</h5>
                <div className="percentage">
                  <div className="sam_a"></div>
                </div>
              </div>
              <div className="box">
                <h5>CSS</h5>
                <div className="percentage">
                <div className="sam_b"></div>
                </div>
              </div>
              <div className="box">
                <h5>Javascript</h5>
                <div className="percentage">
                <div className="sam_c"></div>
                </div>
              </div>
              <div className="box">
                <h5>React</h5>
                <div className="percentage">
                <div className="sam_d"></div>
                </div>
              </div>
              <div className="box">
                <h5>MongoDB</h5>
                <div className="percentage">
                <div className="sam_e"></div>
                </div>
              </div>
              <div className="box">
                <h5>Java</h5>
                <div className="percentage">
                <div className="sam_f"></div>
                </div>
              </div>
            </div>
            <div className="about interest">
              <h2 className="title2">Interest</h2>
              <ul>
                <li><i class="fa fa-plane" aria-hidden="true"></i>TRAVELING</li>
                <li><i class="fa fa-music" aria-hidden="true"></i>LISTENING TO MUSIC</li>
                <li><i class="fa fa-gamepad" aria-hidden="true"></i>Play Online Game</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
