import MILogo from "../assets/project_logos/mi_logo.png";
import MULogo from "../assets/project_logos/mu_logo.png";
import ICLogo from "../assets/project_logos/ic_logo.png";
import COLogo from "../assets/project_logos/co_logo.png";

const ProjectInfo = [
    {
        title : "MoveIntel",
        date : "School Project • 2024",
        description: 
            "AI-powered movement analysis health app\n" +
            "Scaled backend using AWS microservices\n" +
            "Vue.js for dynamic frontend components",
        img: MILogo,
        skills: "Vue.js, AWS, Cloud Firestore",
        isSchool: false,
    },
    {
        title : "Munchies",
        date : "Personal Project • 2023",
        description: 
            "Tinder-like iOS app to find restaurants\n" +
            "Spoonacular API, UIKit, MapKit, Firebase\n",
        img: MULogo,
        skills: "Swift, Xcode, Apple Kits",
        isSchool: false,
    },
    {
        title : "Ichi",
        date : "School Project • 2022",
        description: 
            "Sibling game to UNO created with React\n" +
            "Constructed full backend game logic\n",
        img: ICLogo,
        skills: "React, Java",
        isSchool: false,
    },
    {
        title : "COVID-19 Bed Surge",
        date : "Personal Project • 2021",
        description: 
            "Data science analysis on COVID-19\n" +
            "Negative correlation (beds vs. patients)\n",
        img: COLogo,
        skills: "Pandas, Matplotlib, Seaborn",
        isSchool: false,
        connectorEnd: "true"
    }
]

export default ProjectInfo