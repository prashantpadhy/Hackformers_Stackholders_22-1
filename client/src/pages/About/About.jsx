import React from 'react'
import "./about.css"

const About = () => {
  return (
   <>
   <div className="about-1">
         <h1> ABOUT US </h1>
     </div>
     <div id="about-2">
     <div className="content-box-lg">
         <div className="container">
             <div className="row">
                 <div className="col-md-4">
                    <div className="about-item text-center">
                     <i className="fa fa-book"></i>
                     <h3>MISSION</h3>
                     <hr/>
                     <p> 
                        Our mission is rooted in the belief that everyone deserves the opportunity to pursue a career that aligns with their passions and values. By providing access to valuable resources and expert guidance, we hope to empower individuals to take control of their career paths and achieve their professional goals
  
                        </p>
                     </div>
                 </div>
                 <div className="col-md-4">
                    <div className="about-item text-center">
                     <i className="fa fa-globe"></i>
                     <h3>VISION</h3>
                     <hr/>
                     <br/>
                     <p>We believe that by helping individuals find fulfilling and rewarding careers, we can contribute to a more prosperous and equitable society. We will provide you with the top 5 career
                        options based on your interests with their
                        average salary.  </p>
                     </div>
                 </div>
                 <div className="col-md-4">
                    <div className="about-item text-center">
                     <i className="fa fa-pencil"></i>
                     <h3>TEAM MEMBERS</h3>
                     <hr/>
                     <br />
                     <p><ul>
                        <li>
                          Pratham Rangras
                        </li>
                        <br />
                        <li>
                         Prashant Padhy
                        </li><br />
                        <li>
                           Nabeel Parve
                        </li>
                     </ul></p>
                     </div>
                  </div>
              </div>
            </div>
         </div>
      </div> 
      <footer className="text-center">
    <p>Copyright &copy; 2023 All rights reserved by Team Stackholders.</p>
</footer> 
   </>
  )
}

export default About