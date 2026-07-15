import AdmissionBlog from "./notes/AdmissionBlog.md?raw"
import SummerCampsBlog from "./notes/SummerCampsBlog.md?raw"

const BlogNotes = [
    {
        title: "I got my offer of admission!",
        date: "April 29, 2026",
        readTime: "1 min read",
        brief: "After some time, I finally figured out my next step in life.",
        tag: "omscs",
        markdown: AdmissionBlog
    },
    {
        title: "Let the summer camps commence",
        date: "June 8, 2026",
        readTime: "1 min read",
        brief: "Minecraft & Roblox scripting, game development, advanced 3D Modeling with Blender, all that fun stuff.",
        tag: "work",
        markdown: SummerCampsBlog
    },
]

export { BlogNotes }