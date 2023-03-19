import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import LooksOneIcon from "@mui/icons-material/LooksOne";
// import LooksTwoIcon from "@mui/icons-material/LooksTwo";
// import Looks3Icon from "@mui/icons-material/Looks3";
// import Looks4Icon from "@mui/icons-material/Looks4";
// import Looks5Icon from "@mui/icons-material/Looks5";

const Result = ({result}) => {
    console.log(result)
    var sorted = []
    for(var q in result){
        sorted.push([q , result[q]])
    }
    sorted.sort((a,b)=>b[1]-a[1])
    console.log(sorted)
    var new_sorted = []
    for(var s of sorted){
        console.log(s)
        new_sorted.push(s[0])
    }
    console.log(new_sorted)
    const data = []
    for(var n of new_sorted){
        console.log(n)
        if(n==='web'){
            data.push({title : "Web" , avg_sal : "4L-6L INR"  , description : "Web development is a fast-paced and dynamic career that involves creating and maintaining websites and web applications.As more and more businesses move their operations online, the demand for web developers continues to grow. A career in web development can be both challenging and rewarding, offering opportunities to work on exciting projects, learn new skills, and make a significant impact on the digital landscape."})
        }
        else if(n==='bc'){
            data.push({title : "Block Chain Developer" , avg_sal : "7L-10L INR"  , description : "As a blockchain developer, you would be responsible for building and maintaining the codebase that underlies blockchain technology.This involves designing and developing smart contracts, decentralized applications (DApps), and other blockchain-based solutions.Proficiency in programming languages such as C++, Python, and Solidity: These languages are commonly used in blockchain development, and you'll need to have a good grasp of at least one of them."})

        }
        else if(n==='cc'){
            data.push({title : "Cloud Computing" , avg_sal : "6L-8L INR"  , description : "Cloud computing is an increasingly popular career path for professionals who are interested in working with cutting-edge technology and helping businesses to scale and grow their operations. In simple terms, cloud computing involves delivering computing services such as storage, servers, databases, networking, software, and analytics over the internet, instead of having them installed on a local machine or server."})

        }
        else if(n==='ml'){
            data.push({title : "Machine Learning Engineer" , avg_sal : "5.5L-6.5L INR"  , description : "Machine learning as a career can be a rewarding and exciting decision for those with a passion for data analysis and problem-solving.Machine learning is a rapidly growing field that is transforming industries such as healthcare, finance, and transportation, and has the potential to create significant social impact."})

        }
        else{
            data.push({title : "IOT development" , avg_sal : "8.65L-12L INR"  , description : "Internet of Things (IoT) is a rapidly growing field that has tremendous potential in terms of career opportunities.IoT involves connecting everyday devices and sensors to the internet, allowing them to collect and exchange data, and enabling users to monitor and control these devices remotely.A career in IoT can offer many exciting opportunities for growth and development, as well as the chance to work on cutting-edge technology that is changing the way we live and work. With the right skills and expertise, you can carve out a successful career in this exciting and dynamic field."})

        }


    }

  const id = 1;
  return (
    <VerticalTimeline>
      {id===1 && <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2011 - present"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<LooksOneIcon />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<LooksTwoIcon />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<Looks3Icon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<Looks4Icon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<Looks5Icon />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Result;