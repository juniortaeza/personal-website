import CNLogo from "../assets/work_logos/cn_logo.png";
import MHLogo from "../assets/work_logos/mh_logo.png";
import CYLogo from "../assets/work_logos/cy_logo.png";
import AALogo from "../assets/work_logos/aa_logo.png";

const ExperienceInfo = [
    {
        title : "Code Ninjas",
        date : "Mar 2025 – Present",
        description: 
            "JavaScript & C# game development\n" +
            "STEM enrichment for student communities\n" +
            "Technical workshops in game scripting",
        img: CNLogo,
        width: "30%",
        height: "30%",
        skills: "JavaScript, C#, Lua, 3D CAD",
        isSchool: false
    },
    {
        title : "Career Break",
        date : "Jun 2024 – Feb 2025",
        description: 
            "Personal Development\n" +
            "Reconnecting with Family & Friends\n",
        img: MHLogo,
        isSchool: true
    },
    {
        title : "CyberArk",
        date : "Jul 2022 – May 2024",
        description: 
            "Conjur CLI with 100% test coverage\n" + 
            "Pipeline with 20% build time reduction\n" +
            "Snyk monitoring & incident response\n" +
            "SSO support for IAM & RBAC workflows\n" +
            "Open-source Kubernetes integrations",
        img: CYLogo,
        skills: "Go, Bash, Docker, Kubernetes, CI/CD",
        isSchool: false
    },
    {
        title : "AEVEX Aerospace",
        date : "May 2021 – Aug 2021",
        description: 
            "GeoFOCIS real-time map layer rendering\n" + 
            "JAXB serialization for CoT data\n" + 
            "C# network TCP/UDP test servers\n",
        img: AALogo,
        skills: "Java, C#, .NET",
        isSchool: false,
        connectorEnd: "true"
    }
]

export default ExperienceInfo