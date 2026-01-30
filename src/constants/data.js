import { Code2, Globe, Layout, Database, Terminal, Smartphone, Github, Linkedin, Instagram, MessageCircle, Download } from 'lucide-react';
import aotechImg from '../assets/aotech.png';
import medlinkImg from '../assets/medlink.png';
import heloxImg from '../assets/helox.png';

export const SOCIAL_LINKS = [
    {
        icon: Github,
        href: "https://github.com/cedev2",
        label: "GitHub"
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/nibishaka-cedrick-13450634b/",
        label: "LinkedIn"
    },
    {
        icon: Instagram,
        href: "https://www.instagram.com/cetone_5/",
        label: "Instagram"
    },
    {
        icon: MessageCircle,
        href: "https://wa.me/1234567890",
        label: "WhatsApp"
    },
    {
        icon: Download,
        href: "/my-cv.pdf",
        label: "Download CV",
        download: "Cedrick_CV.pdf"
    }
];

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: "Senior Frontend Developer",
        company: "Helox Tech.",
        description: "Leading the frontend team in building scalable React applications. Implemented micro-frontends architecture and improved performance by 40%."
    },
    {
        year: "2021 - 2023",
        role: "Full Stack Developer",
        company: "Helox Tech",
        description: "Developed and maintained full-stack web applications using MERN stack. Collaborated with UX designers to implement responsive designs."
    },
    {
        year: "2019 - 2021",
        role: "Junior Web Developer",
        company: "Helox Tech",
        description: "Built responsive websites for various clients. Specialized in custom WordPress themes and React-based interactive components."
    }
];

export const SKILLS = [
    {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "vue.js"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Php", "Frameworks", "MongoDB", "Mysql"]
    },
    {
        category: "Tools",
        items: ["Git", "Docker", "AWS", "Figma", "Jest"]
    }
];

export const PROJECTS = [
    {
        title: "Auto Oil TECH",
        description: "A Done on the emdeded project for the station for selfserve.",
        tags: ["C++", "Arduin", "Recharts", "Node.js"],
        links: {
            demo: "#",
            github: "#"
        },
        image: aotechImg
    },
    {
        title: "MedLink System",
        description: "People Many Times Spend alot of Time which was solved by this system.",
        tags: ["node.js", "React", "Mysql", "tailwind"],
        links: {
            demo: "#",
            github: "#"
        },
        image: medlinkImg
    },
    {
        title: "Helox Tech  ",
        description: "Management of the employement for this company for tech.",
        tags: ["Node.js", "boostrap", "vue.js", "Prisma"],
        links: {
            demo: "#",
            github: "#"
        },
        image: heloxImg
    }
];

export const SERVICES = [
    {
        icon: Layout,
        title: "Frontend Development",
        description: "Building responsive, performant, and accessible user interfaces using modern React ecosystem."
    },
    {
        icon: Database,
        title: "Backend Development",
        description: "Designing robust APIs and database architectures for scalable applications."
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Ensuring perfect experience across all devices from mobile to desktop."
    }
];
