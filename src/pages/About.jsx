import { Link } from "react-router-dom";
import EducationInfo from "../data/EducationInfo.js";
import ExperienceInfo from "../data/ExperienceInfo.js";
import ProjectInfo from "../data/ProjectInfo.js";
import { CustomTimelineItem, CustomTimeline } from "../utils/AboutUtils.jsx";

import "../style/index.css";
import "../style/About.css";

function About() {
  return (
    <div className="about-container">
      <Link to="/" className="nav-button back-button">
        <span>←</span> Back
      </Link>

      <div className="panel-container">
        <p>about</p>
        <h1>Backend & DevOps Engineer</h1>
        <h2>entry-level with <u>2</u> years of experience</h2>
        <p>seeking</p>
        <h2>full-time roles in <u>Backend, DevOps, Security, Infrastructure</u>, and <u>Platform</u> engineering</h2>
        <p>based in</p>
        <h1>California</h1>
        <p>exceptional in</p>
        <h2>go, java, <u>spring boot</u>, <u>docker</u>, <u>kubernetes</u>, terraform, ansible, vmware, <u>postgresql</u>, <u>mongodb</u>, elk</h2>
        <p>incoming</p>
        <h2>MSCS at <u>Georgia Institute of Technology</u> – Specializing in Computing Systems</h2>
      </div>

      <div className="panel-container">
        <p><u>education</u></p>
        <CustomTimeline customTimelineItems={EducationInfo} />
        <p><u>professional experience</u></p>
        <CustomTimeline customTimelineItems={ExperienceInfo} />
        <p><u>favorite projects</u></p>
        <CustomTimeline customTimelineItems={ProjectInfo} />
      </div>

      <Link to="/blog" className="nav-button next-button">
        Next <span>→</span>
      </Link>
    </div>
  );
}

export default About;
