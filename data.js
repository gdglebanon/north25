const devFestData = {
    sessions: [
        // {
        //     id: "1094958",
        //     title: "Build Your Tech Path: Skills, Stacks, and Certifications for 2026",
        //     description: "This session guides students through building a personalized tech career path by choosing a stack, identifying essential skills, and selecting relevant certifications. It breaks down major tech fields: Web, Mobile, AI, Cloud, Cybersecurity, and QA into beginner-friendly roadmaps. Attendees leave with a clear, practical plan tailored to their interests.",
        //     keyInsights: "Attendees will learn which skills matter most in 2026, which certifications are actually valuable, and how to choose a stack without feeling overwhelmed. The topic addresses the current gap in universities where students lack structured guidance on career direction, industry expectations, and job-ready skills. It empowers students to upskill with clarity and confidence.",
        //     format: "Talk (40 minutes)",
        //     level: "Beginner",
        //     targetAudience: "University students, fresh graduates, and early-career developers exploring tech career paths and looking for practical, structured guidance.",
        //     speakerId: "ad560724-c409-406a-908a-f33583684a21",
        //     room: "Auditorium 1",
        //     time: "10:00 AM - 10:40 AM",
        //     tags: ["Career", "Education", "Roadmap"]
        // },
        // {
        //     id: "mock-1",
        //     title: "The Future of AI in Web Development",
        //     description: "Explore how Artificial Intelligence is reshaping the landscape of web development, from automated coding assistants to AI-driven user experiences.",
        //     keyInsights: "Understanding AI tools, integrating AI APIs, and the future of frontend development.",
        //     format: "Talk (40 minutes)",
        //     level: "Intermediate",
        //     targetAudience: "Web Developers, AI Enthusiasts",
        //     speakerId: "mock-speaker-1",
        //     room: "Auditorium 2",
        //     time: "10:00 AM - 10:40 AM",
        //     tags: ["AI", "Web", "Future"]
        // },
        // {
        //     id: "mock-2",
        //     title: "Mastering Cloud Native Architectures",
        //     description: "A deep dive into building scalable, resilient, and manageable applications using cloud-native technologies and best practices.",
        //     keyInsights: "Microservices patterns, container orchestration, and observability.",
        //     format: "Talk (40 minutes)",
        //     level: "Advanced",
        //     targetAudience: "Backend Developers, Architects",
        //     speakerId: "mock-speaker-2",
        //     room: "Auditorium 3",
        //     time: "10:00 AM - 10:40 AM",
        //     tags: ["Cloud", "Architecture", "DevOps"]
        // },
        // {
        //     id: "mock-2",
        //     title: "Mastering Cloud Native Architectures",
        //     description: "A deep dive into building scalable, resilient, and manageable applications using cloud-native technologies and best practices.",
        //     keyInsights: "Microservices patterns, container orchestration, and observability.",
        //     format: "Talk (40 minutes)",
        //     level: "Advanced",
        //     targetAudience: "Backend Developers, Architects",
        //     speakerId: "mock-speaker-2",
        //     room: "Auditorium 3",
        //     time: "10:20 AM - 11:00 AM",
        //     tags: ["Cloud", "Architecture", "DevOps"]
        // },
        // {
        //     id: "mock-3",
        //     title: "Mobile UI/UX Trends for 2025",
        //     description: "Discover the latest trends in mobile application design and user experience that will dominate the market in the coming years.",
        //     keyInsights: "Gesture-based navigation, dark mode design, and accessibility.",
        //     format: "Talk (40 minutes)",
        //     level: "Beginner",
        //     targetAudience: "Mobile Developers, Designers",
        //     speakerId: "mock-speaker-3",
        //     room: "Auditorium 4",
        //     time: "10:00 AM - 10:40 AM",
        //     tags: ["Mobile", "UI/UX", "Design"]
        // },
        // {
        //     id: "mock-4",
        //     title: "Scaling with Kubernetes",
        //     description: "Learn how to scale your applications efficiently using Kubernetes.",
        //     keyInsights: "Scaling strategies, resource management, and best practices.",
        //     format: "Workshop (60 minutes)",
        //     level: "Advanced",
        //     targetAudience: "DevOps Engineers",
        //     speakerId: "mock-speaker-2",
        //     room: "Auditorium 1",
        //     time: "11:00 AM - 12:00 PM",
        //     tags: ["Kubernetes", "Scaling", "Infrastructure"]
        // },
        // {
        //     id: "mock-5",
        //     title: "React Server Components Deep Dive",
        //     description: "Understand the architecture and benefits of React Server Components.",
        //     keyInsights: "Performance, data fetching, and server-side rendering.",
        //     format: "Talk (40 minutes)",
        //     level: "Intermediate",
        //     targetAudience: "Frontend Developers",
        //     speakerId: "mock-speaker-4",
        //     room: "Auditorium 2",
        //     time: "11:20 AM - 12:00 PM",
        //     tags: ["React", "Frontend", "Web"]
        // },
        // {
        //     id: "mock-6",
        //     title: "Cybersecurity Essentials for Developers",
        //     description: "Protect your applications from common vulnerabilities and threats.",
        //     keyInsights: "OWASP Top 10, secure coding practices, and threat modeling.",
        //     format: "Talk (40 minutes)",
        //     level: "Beginner",
        //     targetAudience: "All Developers",
        //     speakerId: "mock-speaker-5",
        //     room: "Auditorium 3",
        //     time: "11:00 AM - 11:40 AM",
        //     tags: ["Security", "Cybersecurity", "Best Practices"]
        // },
        // {
        //     id: "mock-7",
        //     title: "Building Accessible Web Apps",
        //     description: "Ensure your web applications are usable by everyone, including people with disabilities.",
        //     keyInsights: "WCAG guidelines, ARIA attributes, and testing tools.",
        //     format: "Talk (40 minutes)",
        //     level: "Beginner",
        //     targetAudience: "Web Developers, Designers",
        //     speakerId: "mock-speaker-3",
        //     room: "Auditorium 4",
        //     time: "11:00 AM - 11:40 AM",
        //     tags: ["Accessibility", "Web", "Inclusion"]
        // },
        {
            id: "common-1",
            title: "Registration & Welcome Coffee ☕",
            description: "Check-in and get your badge and swag.",
            format: "Networking",
            isCommon: true,
            time: "08:30 AM - 09:30 AM",
            tags: []
        },
        {
            id: "common-2",
            title: "Keynote: GDG, BAU, H.E Minister Kamal Chehadi",
            description: "Opening remarks and keynote address.",
            format: "Keynote",
            isCommon: true,
            time: "09:30 AM - 10:30 AM",
            tags: ["Keynote"]
        },
        {
            id: "break-1",
            title: "Coffee Break ☕",
            description: "Networking and refreshments.",
            format: "Break",
            isCommon: true,
            time: "10:40 AM - 11:00 AM",
            tags: []
        }
    ],
    speakers: [
        // {
        //     id: "ad560724-c409-406a-908a-f33583684a21",
        //     firstName: "Nisrine",
        //     lastName: "Bou Ghannam",
        //     fullName: "Nisrine Bou Ghannam",
        //     tagLine: "CEO & Founder of Techlarious",
        //     company: "Techlarious",
        //     bio: "Nisrine Bou Ghannam is a passionate tech entrepreneur and educator, dedicated to empowering youth, women, and communities through innovative digital solutions and STEM education. She is the CEO of Techlarious and a STEM Certified™ Master Trainer. She completed an internship at Apple, Cupertino, USA in September 2024. Nisrine is also a TechWomen 2024 Alumna, MongoDB Creator & Community Lead, Tech & Education Strategist, Product Manager, and co-founder of the Lebanese TechWomen Council.",
        //     profilePicture: "https://sessionize.com/image/9829-400o400o1-KsKCtvA3PL8DYk1AS4se6K.jpg",
        //     socials: {
        //         linkedin: "https://www.linkedin.com/in/nisrine-bou-ghannam/",
        //         company: "https://www.techlarious.academy/"
        //     }
        // },
        // {
        //     id: "mock-speaker-1",
        //     firstName: "Alex",
        //     lastName: "Rivera",
        //     fullName: "Alex Rivera",
        //     tagLine: "Senior AI Engineer at Google",
        //     company: "Google",
        //     bio: "Alex is an AI enthusiast with over 10 years of experience in machine learning and web technologies. He loves sharing his knowledge with the community.",
        //     profilePicture: "assets/images/logo.png", // Placeholder
        //     socials: {
        //         linkedin: "#",
        //         twitter: "#"
        //     }
        // },
        // {
        //     id: "mock-speaker-2",
        //     firstName: "Sarah",
        //     lastName: "Chen",
        //     fullName: "Sarah Chen",
        //     tagLine: "Cloud Architect at AWS",
        //     company: "AWS",
        //     bio: "Sarah specializes in building large-scale distributed systems. She is a frequent speaker at cloud conferences and a strong advocate for open source.",
        //     profilePicture: "assets/images/logo.png", // Placeholder
        //     socials: {
        //         linkedin: "#",
        //         blog: "#"
        //     }
        // },
        // {
        //     id: "mock-speaker-3",
        //     firstName: "Mike",
        //     lastName: "Johnson",
        //     fullName: "Mike Johnson",
        //     tagLine: "Lead Designer at Creative Studio",
        //     company: "Creative Studio",
        //     bio: "Mike is a creative director who bridges the gap between design and development. He focuses on creating intuitive and accessible user interfaces.",
        //     profilePicture: "assets/images/logo.png", // Placeholder
        //     socials: {
        //         instagram: "#",
        //         linkedin: "#"
        //     }
        // },
        // {
        //     id: "mock-speaker-4",
        //     firstName: "Emily",
        //     lastName: "Davis",
        //     fullName: "Emily Davis",
        //     tagLine: "Frontend Lead at Meta",
        //     company: "Meta",
        //     bio: "Emily is a frontend expert passionate about React and modern web frameworks.",
        //     profilePicture: "assets/images/logo.png", // Placeholder
        //     socials: {
        //         twitter: "#",
        //         linkedin: "#"
        //     }
        // },
        // {
        //     id: "mock-speaker-5",
        //     firstName: "David",
        //     lastName: "Kim",
        //     fullName: "David Kim",
        //     tagLine: "Security Researcher",
        //     company: "CyberSec Inc.",
        //     bio: "David is a security researcher dedicated to making the web a safer place.",
        //     profilePicture: "assets/images/logo.png", // Placeholder
        //     socials: {
        //         linkedin: "#"
        //     }
        // }
    ],
    schedule: {
        timeSlots: [
            "08:30 AM - 09:30 AM",
            "09:30 AM - 10:30 AM",
            "10:00 AM - 10:40 AM",
            "10:40 AM - 11:00 AM"
            // "11:00 AM - 11:40 AM",
            // "01:00 PM - 01:40 PM",
            // "02:00 PM - 02:40 PM"
        ],
        auditoriums: ["Auditorium 1",
            //  "Auditorium 2", "Auditorium 3", "Auditorium 4"
        ]
    },
    sponsors: [
        {
            name: "Semicolon",
            logo: "assets/images/logo.png", // Placeholder
            tier: "Gold",
            url: "#",
            description: "Semicolon is a leading software development company...",
            socials: {
                linkedin: "#",
                website: "#"
            }
        },
        // {
        //     name: "Murex",
        //     logo: "assets/images/logo.png", // Placeholder
        //     tier: "Silver",
        //     url: "#",
        //     description: "Murex provides enterprise-wide, cross-asset financial technology solutions...",
        //     socials: {
        //         linkedin: "#",
        //         website: "#"
        //     }
        // },
        // {
        //     name: "Speedlane",
        //     logo: "assets/images/logo.png", // Placeholder
        //     tier: "Silver",
        //     url: "#",
        //     description: "Speedlane is a tech accelerator...",
        //     socials: {
        //         linkedin: "#",
        //         website: "#"
        //     }
        // },
        // {
        //     name: "Supportful",
        //     logo: "assets/images/logo.png", // Placeholder
        //     tier: "Bronze",
        //     url: "#",
        //     description: "Supportful is a support services company...",
        //     socials: {
        //         linkedin: "#",
        //         website: "#"
        //     }
        // },
        // {
        //     name: "Monty Holding",
        //     logo: "assets/images/logo.png", // Placeholder
        //     tier: "Bronze",
        //     url: "#",
        //     description: "Monty Holding offers telecom solutions...",
        //     socials: {
        //         linkedin: "#",
        //         website: "#"
        //     }
        // },
        // {
        //     name: "KDD",
        //     logo: "assets/images/logo.png", // Placeholder
        //     tier: "Bronze",
        //     url: "#",
        //     description: "KDD is a leading food and beverage company...",
        //     socials: {
        //         linkedin: "#",
        //         website: "#"
        //     }
        // },
        {
            name: "Beirut Arab University",
            logo: "https://alefliban.org/wp-content/uploads/2015/02/BAU.gif",
            tier: "Host",
            url: "https://www.bau.edu.lb/",
            description: "Beirut Arab University is a private Lebanese higher education institution...",
            socials: {
                linkedin: "#",
                website: "https://www.bau.edu.lb/"
            }
        },
        {
            name: "Google For Developers",
            logo: "https://devfest25.gdglebanon.com/img/sponsors/googlefordevelopers.png", // Placeholder
            tier: "Main Supporter",
            url: "#",
            description: "Google's official developer platform offering APIs, SDKs, tools, documentation, training, and support for software developers worldwide.",
            socials: {
                linkedin: "#",
                website: "https://developers.google.com"
            }
        },
        // {
        //     name: "DX Talks",
        //     logo: "assets/images/logo.png", // Placeholder
        //     tier: "Media Partner",
        //     url: "#",
        //     description: "DX Talks is a digital transformation platform...",
        //     socials: {
        //         linkedin: "#",
        //         website: "#"
        //     }
        // },
        // {
        //     name: "Network with Jean",
        //     logo: "assets/images/logo.png", // Placeholder
        //     tier: "Media Partner",
        //     url: "#",
        //     description: "Network with Jean is a networking community...",
        //     socials: {
        //         linkedin: "#",
        //         website: "#"
        //     }
        // }
    ]
};
