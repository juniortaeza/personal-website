import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import { NavLink, IconLink } from "../utils/HomeUtils.jsx"
import "../style/Home.css";
import "../style/index.css";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <div className="home-container">
      <div>
        <img src={Avatar} className="image-container" />
      </div>
      <div className="text-container">
        <h1>Hi! I'm <u>Junior</u>.</h1>
        <p>a <b>26</b> year old Backend & DevOps Engineer</p>
        <hr />
        <NavLink link={"/about"} name={"about"} />
        <NavLink link={"/blog"} name={"tech blog"} />
      </div>
      <div className="link-container">
        <IconLink link={"mailto:juniortaeza@gmail.com"} icon={EmailIcon} />
        <IconLink link={"https://www.linkedin.com/in/juniortaeza/"} icon={LinkedInIcon} />
        <IconLink link={"https://github.com/juniortaeza"} icon={GitHubIcon} />
      </div>
      <Link to="/about" className="nav-button next-button">
        Next <span>→</span>
      </Link>
    </div>
  );
}

export default Home;
