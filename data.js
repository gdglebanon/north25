const devFestData = {
    sessions: [
        {
            "id": "reg-coffee-001",
            "title": "Registration & Welcome Coffee",
            "description": "Get your badge and enjoy some coffee before we start.",
            "format": "Networking",
            "level": "Everyone",
            "room": "Main Auditorium",
            "time": "08:30 AM - 09:30 AM",
            "tags": [],
            "isCommon": true,
            "targetAudience": "All Attendees"
        },
        {
            "id": "cf3d53f8-2f9b-456a-aab4-dfeb00f9df3f",
            "title": "Opening Keynote: Welcome to DevFest!",
            "description": "By GDG , BAU and Minister of State for Technology and AI Kamal Chehade",
            "format": "Keynote",
            "level": "Beginner",
            "room": "Main Auditorium",
            "time": "09:30 AM - 10:30 AM",
            "tags": [],
            "isCommon": true,
            "targetAudience": ""
        },
        {
            "id": "54ce966d-ef7a-4aec-824c-7b9181836dba",
            "title": "Cyber Resilience: A Multi-Sector Approach",
            "description": "",
            "format": "Panel",
            "level": "Everyone",
            "room": "Main Auditorium",
            "time": "10:30 AM - 11:10 AM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "",
            "speakerId": "6615d9d9-bed5-4446-bd21-cbe811ed9128",
            "speakers": [
                {
                    "id": "6615d9d9-bed5-4446-bd21-cbe811ed9128",
                    "name": "Robert Mansour"
                },
                {
                    "id": "fa16bb05-09ae-429b-90d1-178f20ed8e2e",
                    "name": "Bassel Al Ayoubi"
                }
            ]
        },
        {
            "id": "9fac61c0-3412-404f-93d7-866cb593b15b",
            "title": "Modular RAG with Spring AI",
            "description": "<strong>Key Insights:</strong><br/>-  Integrate LLM's and build intelligent features <br/>- Implement RAG pipeline<br/>- Empower LLM with Memory <br/>- Extend LLM capabilities with tools access<br/>- Monitor application using observability stack<br/><br/>Learn how to bring generative AI capabilities into your java based application using spring AI without the need for python expertise",
            "format": "Talk",
            "level": "Beginner",
            "room": "B1005",
            "time": "10:30 AM - 11:10 AM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Spring and java developers",
            "speakerId": "089bb622-9b5d-436f-b531-e1a653264f51",
            "speakers": [
                {
                    "id": "089bb622-9b5d-436f-b531-e1a653264f51",
                    "name": "Omar Chaaban"
                }
            ]
        },
        {
            "id": "3e5a0e5c-bdaa-471a-b92c-de41f7d70f7d",
            "title": "Kotlin Multiplatform + Compose Multiplatform: The Performance King of Cross-Platform.",
            "description": "Kotlin Multiplatform (KMP) and Compose Multiplatform (CMP) are reshaping how modern apps are built with one shared codebase powering Android, iOS, desktop, and even web. In this beginner-friendly session, we\u2019ll explore what makes this approach so powerful, why the industry is moving toward shared logic, and how teams save time by reusing code across platforms.<br/><br/>You\u2019ll see real data on performance and productivity, and a simple live demo showing how one Kotlin project can run on multiple devices without diving into complex code. This talk is perfect for CS students curious about modern, efficient, and scalable app development.",
            "format": "Talk",
            "level": "Beginner",
            "room": "B110",
            "time": "10:30 AM - 11:10 AM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Android Developers, iOS Developers, Students, Developers.",
            "speakerId": "3da1e85c-a7a9-4869-9a37-f355307cff2d",
            "speakers": [
                {
                    "id": "3da1e85c-a7a9-4869-9a37-f355307cff2d",
                    "name": "Mohyddine Al-lahham"
                }
            ]
        },
        {
            "id": "4ac4b08f-7c18-4b2b-9c6d-551de22f8ade",
            "title": "Ruby on Rails: The One-Man Framework",
            "description": "<strong>Key Insights:</strong><br/>- What Ruby on Rails is and why it remains one of the most productive frameworks for web apps development.<br/>- How Rails\u2019 conventions, generators, and built-in tooling allow you to ship in hours instead of weeks.<br/>- A practical walk-through of building and deploying a working Rails app from scratch.<br/>- Why Rails is a powerful, underused opportunity in Lebanon\u2019s tech ecosystem.<br/><br/>Ruby on Rails is the fastest way for a single developer to build and ship full-featured applications. In this session, I\u2019ll introduce Rails to an audience that may have never worked with it before, explain how it enables rapid development through convention over configuration, and live-build a small web app with authentication, authorization, and basic CRUD. We\u2019ll end by deploying the app to production to show how quickly a solo developer can go from idea to launch.",
            "format": "Workshop",
            "level": "Beginner",
            "room": "B112",
            "time": "10:30 AM - 11:30 AM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Developers",
            "speakerId": "1eaeee06-9ccd-4481-9c96-72fa05c2576e",
            "speakers": [
                {
                    "id": "1eaeee06-9ccd-4481-9c96-72fa05c2576e",
                    "name": "Roc Khalil"
                }
            ]
        },
        {
            "id": "54e715ea-21a1-4e92-8487-6e9ab7a4f854",
            "title": "GDE",
            "description": "Explore Gemma 3.",
            "format": "Talk",
            "level": "Beginner",
            "room": "Main Auditorium",
            "time": "11:10 AM - 11:50 AM",
            "tags": [],
            "isCommon": false,
            "targetAudience": ""
        },
        {
            "id": "3180598f-fb8d-4e46-b39f-bfc61deb20f0",
            "title": "On-Device Multimodal Assistants: Can We Fit GPT-Vision on Small Hardware?",
            "description": "<strong>Key Insights:</strong><br/>How multimodal intelligence works under the hood.<br/><br/>Practical constraints when moving GPT-level multimodality to devices.<br/><br/>Engineering tricks to reduce model size dramatically.<br/><br/>What hybrid on-device/cloud architectures look like.<br/><br/>Privacy, cost, and performance benefits of local AI.<br/><br/>This talk explores whether the next generation of multimodal assistants, capable of vision, speech, and language reasoning, can run locally on consumer hardware.<br/>We\u2019ll cover lightweight visual encoders, adapter-based multimodal fusion, 4-bit and 2-bit quantization, memory optimizations, and device-level acceleration.<br/>Includes a live demo of a local multimodal assistant running on small hardware.",
            "format": "Talk",
            "level": "Beginner",
            "room": "B1005",
            "time": "11:10 AM - 11:50 AM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Developers, AI engineers, makers, and anyone interested in local AI or device intelligence.",
            "speakerId": "0f0e7f44-cdab-4de7-a1e7-4f97a40b42e1",
            "speakers": [
                {
                    "id": "0f0e7f44-cdab-4de7-a1e7-4f97a40b42e1",
                    "name": "Rami Kronbi"
                }
            ]
        },
        {
            "id": "d95e013b-e6e2-4861-a304-fda37668027f",
            "title": "How ChatGPT Was Made: Behind the Scenes of a Large Language Model",
            "description": "<strong>Key Insights:</strong><br/>Attendees will gain a clear understanding of how large language models are built, scaled, and adapted for real-world use bridging the gap between research concepts and practical deployment. They\u2019ll learn what truly changes as AI systems grow in size and complexity, why alignment and scalability matter, and how these factors impact the reliability and ethics of AI tools. This topic is especially timely as developers across industries are rapidly integrating generative AI into their products but often lack clarity on how these systems actually work or how to scale them responsibly. The talk addresses a key need in the tech community: moving beyond the \u201cblack box\u201d perception of AI and empowering developers to make informed, technically grounded, and ethical design choices when building or extending AI-powered applications.<br/><br/>In this talk, we\u2019ll go behind the scenes of how large language models like ChatGPT are built, from massive training datasets and transformer architectures to fine-tuning and real-world deployment. You\u2019ll get a high-level tour of the model\u2019s lifecycle, including the key breakthroughs that made systems like ChatGPT possible. Whether you\u2019re curious about the tech, the training process, or what it takes to align AI with human intent, this session will unpack the magic, without getting lost in the math",
            "format": "Talk",
            "level": "Intermediate",
            "room": "B110",
            "time": "11:10 AM - 11:50 AM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Everyone",
            "speakerId": "4aa857c8-3ad6-46b5-a0a3-ef92db483a43",
            "speakers": [
                {
                    "id": "4aa857c8-3ad6-46b5-a0a3-ef92db483a43",
                    "name": "Mhamad El Itawi"
                }
            ]
        },
        {
            "id": "41198dc3-e01d-4cd2-8c68-7eec03823450",
            "title": "Deploy Like a Boss: Cloud and Containers",
            "description": "<strong>Key Insights:</strong><br/>Familiarity with the cloud<br/>Familiarity with linux<br/>Familiarity with containers<br/>Familiarity with deployment on windows<br/>And most importantly, dployment on the above systems, with a clear distinction of what is what<br/><br/>This hands-on workshop introduces beginner to intermediate developers to practical DevOps by guiding them and demonstrating the differences in deployments for the same application for the following environments. Locally on their laptops as a manual deployment. Locally on their laptops as a container deployment, on GCP as a manual deployment, on GCP as a container deployment<br/><br/>Participants will gain real-world experience with Docker, linux, and Google Cloud Platform. The workshop emphasizes on the deployment controlled changes, so that the learner clearly understands and removes the fear of containerized or cloud workloads. All tasks will be performed live, with guided instruction, collaborative debugging, and interactive exercises to ensure engagement and understanding. With some simple explanations to some topics such as containerization",
            "format": "Workshop",
            "level": "Intermediate",
            "room": "B112",
            "time": "11:30 AM - 12:30 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Senior students and above",
            "speakerId": "d5c60999-eb9c-4245-9d0d-6409c5a27a0d",
            "speakers": [
                {
                    "id": "d5c60999-eb9c-4245-9d0d-6409c5a27a0d",
                    "name": "Jaafar Nasrallah"
                }
            ]
        },
        {
            "id": "5b623f71-5504-43f1-bc93-d621da94492d",
            "title": "Semicolon",
            "description": "No description available.",
            "format": "Talk",
            "level": "Beginner",
            "room": "Main Auditorium",
            "time": "11:50 AM - 12:30 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": ""
        },
        {
            "id": "88206594-c6b4-4c27-8a85-c2a5eb40a7b5",
            "title": "Open Source Competition: Key Learnings & What's Next",
            "description": "<strong>Key Insights:</strong><br/>How top submissions approached common challenges in innovative ways<br/>Emerging patterns in open source tooling and collaboration models<br/>Key technical decisions that differentiated winning entries<br/>Actionable lessons for teams building open source projects<br/>What the competition revealed about current developer priorities and pain points<br/><br/>Join us for a comprehensive review of our Open Source Competition, where we'll share winner highlights, analyze standout submissions, and discuss emerging trends that shaped the entries. We'll explore what worked, what surprised us, and how these innovations are pushing the boundaries of open source development.",
            "format": "Talk",
            "level": "Beginner",
            "room": "B1005",
            "time": "11:50 AM - 12:30 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "",
            "speakerId": "75c1f6c6-22e4-4561-82d5-d26ef8862769",
            "speakers": [
                {
                    "id": "75c1f6c6-22e4-4561-82d5-d26ef8862769",
                    "name": "Omar Chouman"
                },
                {
                    "id": "843f8376-0c95-40cd-9b31-1e8b8939e59d",
                    "name": "Mohammad Omar"
                }
            ]
        },
        {
            "id": "f87c4342-a6b1-47a1-9ce3-cfa3c159014f",
            "title": "The Future of Tech: High-Impact Roles With Zero Coding",
            "description": "<strong>Key Insights:</strong><br/>How AI is reshaping tech roles and why coding is no longer the core competency for many future careers.<br/><br/>The non-coding roles that are increasingly in demand today and will become even more essential in the future.<br/><br/>Clear career paths, key responsibilities, and the critical skills required to succeed in these emerging roles.<br/><br/>Coding is becoming the easiest and often lowest-paid\u2014skill, while real demand is shifting toward non-coding roles that drive strategy, communication, and product impact. This session highlights the rising careers in tech, including UX/UI, Business Analysis, Scrum Mastery, Technical Project Management, and the increasingly important Product Manager role. It provides a clear overview of the skills that matter today and how to build a successful career in tech with zero coding skills.",
            "format": "Talk",
            "level": "Intermediate",
            "room": "B110",
            "time": "11:50 AM - 12:30 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Computer science and engineering students, developers, business people in tech sector ",
            "speakerId": "d8b7c739-047a-463f-afa0-270fcdab38ce",
            "speakers": [
                {
                    "id": "d8b7c739-047a-463f-afa0-270fcdab38ce",
                    "name": "Gardenia Homsi"
                }
            ]
        },
        {
            "id": "26b9e746-f352-406b-80cd-ab901112e987",
            "title": "Break",
            "description": "Snacks and Coffee Break.",
            "format": "Networking",
            "level": "Beginner",
            "room": "Main Auditorium",
            "time": "12:30 PM - 12:50 PM",
            "tags": [],
            "isCommon": true,
            "targetAudience": ""
        },
        {
            "id": "3620fb9d-29eb-4b26-a594-8982e320f7fe",
            "title": "Production-Ready Engineers",
            "description": "This session discusses what it takes to become a reliable, efficient, and production-ready engineer at any level and make an impact where it counts.",
            "format": "Talk",
            "level": "Beginner",
            "room": "Main Auditorium",
            "time": "12:50 PM - 01:25 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "",
            "speakerId": "7b455539-7556-477b-9d3b-bec814e5f8b8",
            "speakers": [
                {
                    "id": "7b455539-7556-477b-9d3b-bec814e5f8b8",
                    "name": "Nicolas El Khoury"
                }
            ]
        },
        {
            "id": "e78e4194-1f7c-489a-b07b-4f35ffc55560",
            "title": "Peeking Under The Hood: How eXplainable AI (XAI) changes everything",
            "description": "<strong>Key Insights:</strong><br/>Why Explainability Matters<br/>2. Black-box vs Interpretable Models<br/>3. Local vs Global Explanations<br/>4. Popular XAI Techniques & Tools<br/>5. Human-Centered AI Design<br/>6. Real-World Applications<br/>7. Limitations & Open Challenges<br/>8. The Future of XAI<br/><br/>This session introduces participants to the rapidly growing field of explainable AI , advantages challenges and real applications.",
            "format": "Talk",
            "level": "Intermediate",
            "room": "B1005",
            "time": "12:50 PM - 01:25 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Pregraduate as well as grad students ",
            "speakerId": "cb72b3d1-cfe4-49cc-b89f-85bbbd1fc364",
            "speakers": [
                {
                    "id": "cb72b3d1-cfe4-49cc-b89f-85bbbd1fc364",
                    "name": "Amani Raad"
                }
            ]
        },
        {
            "id": "345dab7b-69ac-4133-951c-c1cbf928aba9",
            "title": "AI Maturity Unlocked: Roadmap for Business Growth",
            "description": "<strong>Key Insights:</strong><br/>Learn a clear, action-oriented AI maturity model to assess and plan your company\u2019s adoption strategy in practical steps<br/><br/>Discover the urgent new expectations organizations face in 2025 as AI shifts from trend to productivity necessity.<br/><br/>Gain fail-proof techniques for developers and business leaders to collaborate, bridging the tech-business gap.<br/><br/>Unlock the steps every business should take to move from AI experimentation to real, scalable value. This talk simplifies the \u201cAI maturity journey\u201d and equips attendees with a practical framework to assess where they stand\u2014and how to level up. Whether you\u2019re a developer, founder, or tech lead, you\u2019ll leave knowing how to drive sustainable AI adoption and avoid common pitfalls in building data-driven, competitive organizations.",
            "format": "Lightning Talk",
            "level": "Intermediate",
            "room": "B110",
            "time": "12:50 PM - 01:25 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Developers and technical leads curious about AI strategy.  Founders and product managers in SaaS, consulting, or service companies.  Anyone moving from AI experiments to delivering outcomes.",
            "speakerId": "ce57780b-b2fd-4f06-8bd1-cdcf2c471e2b",
            "speakers": [
                {
                    "id": "ce57780b-b2fd-4f06-8bd1-cdcf2c471e2b",
                    "name": "Abed-R Ghaleb"
                }
            ]
        },
        {
            "id": "9c7d59ec-5d32-4251-8630-e1c24bddc4ca",
            "title": "Build Your Tech Path: Skills, Stacks, and Certifications for 2026",
            "description": "<strong>Key Insights:</strong><br/>Attendees will learn which skills matter most in 2026, which certifications are actually valuable, and how to choose a stack without feeling overwhelmed. The topic addresses the current gap in universities where students lack structured guidance on career direction, industry expectations, and job-ready skills. It empowers students to upskill with clarity and confidence.<br/><br/>This session guides students through building a personalized tech career path by choosing a stack, identifying essential skills, and selecting relevant certifications. It breaks down major tech fields: Web, Mobile, AI, Cloud, Cybersecurity, and QA into beginner-friendly roadmaps. Attendees leave with a clear, practical plan tailored to their interests.",
            "format": "Talk",
            "level": "Beginner",
            "room": "B112",
            "time": "12:50 PM - 01:20 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "University students, fresh graduates, and early-career developers exploring tech career paths and looking for practical, structured guidance.",
            "speakerId": "ad560724-c409-406a-908a-f33583684a21",
            "speakers": [
                {
                    "id": "ad560724-c409-406a-908a-f33583684a21",
                    "name": "Nisrine Bou Ghannam"
                }
            ]
        },
        {
            "id": "3e11bbe9-1681-4dc7-9251-af926683e27a",
            "title": "Think Like a Data Consultant: From Raw Data to Real Impact",
            "description": "<strong>Key Insights:</strong><br/>Ensure Actionable Impact<br/>Data storytelling<br/>Quantify the Value<br/><br/>This session aims to equip participants with the consultative mindset and structured process to translate raw data insights into actionable business strategies that deliver measurable, real-world impact.",
            "format": "Talk",
            "level": "Intermediate",
            "room": "B110",
            "time": "01:20 PM - 02:00 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Students and early-career professionals with strong quantitative backgrounds in Computer Science, Engineering, and Business Analytics seeking to elevate technical data skills into strategic business consultancy",
            "speakerId": "5c886983-8e34-423a-ae2a-a6c222657667",
            "speakers": [
                {
                    "id": "5c886983-8e34-423a-ae2a-a6c222657667",
                    "name": "Majd Chahine"
                },
                {
                    "id": "2bc79d2f-0b1d-4d69-9894-4e1deaff9482",
                    "name": "Nader Bakir"
                }
            ]
        },
        {
            "id": "5e9c19e6-acb8-45ce-805e-1113decabdbc",
            "title": "Vibe Coding: Build a solution for Lebanon in 35min",
            "description": "<strong>Key Insights:</strong><br/>Why Vibe Coding is emerging now: AI-native tooling, multi-agent workflows, and the collapse of app boundaries.<br/><br/>A new mental model for building: intent \u2192 prompt \u2192 prototype \u2192 live product.<br/><br/>How Vibe Coding empowers non-technical creators and accelerates technical teams.<br/><br/>Why this shifts product design, startup strategy, and personal problem-solving.<br/><br/>Real examples of people building tools for their personal or community needs in hours.<br/><br/>Vibe Coding is redefining how humans create software. Instead of building apps, people now build flows of intent. In this talk, I\u2019ll show how Vibe Coding flips the entire product cycle: from ideas to prototypes, from problems to working tools, without traditional code or heavy engineering overhead.<br/><br/>This is more than productivity. It changes how we perceive products, creativity, and innovation. When anyone can build what they need in minutes, the role of \u201cdeveloper\u201d evolves, and so does the way we solve the problems in our own lives. I\u2019ll present real examples from my work in AI-native systems, multi-agent OS design, and everyday builders using Vibe Coding to ship projects they never thought they could create.",
            "format": "Talk",
            "level": "Intermediate",
            "room": "Main Auditorium",
            "time": "01:25 PM - 02:00 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Developers, designers, founders, researchers, students, and anyone curious about AI-driven creation.",
            "speakerId": "d0523778-7fbc-41e4-b4a5-6122650a000e",
            "speakers": [
                {
                    "id": "d0523778-7fbc-41e4-b4a5-6122650a000e",
                    "name": "Stephane Boghossian"
                }
            ]
        },
        {
            "id": "00428915-f9a8-408e-b95c-97f7c808f1ef",
            "title": "Opportunities Beyond the Local Market",
            "description": "<strong>Key Insights:</strong><br/>- what you need to prepare for behavioral interviews in the global market<br/>- what you need to prepare on the technical side<br/>- what differentiates startups from big tech <br/>- the difference from applying to local jobs<br/><br/>I will talk about how I prepared for a global job in tech. I will also discuss how to prepare differently for big tech and startups. ",
            "format": "Talk",
            "level": "Beginner",
            "room": "B1005",
            "time": "01:25 PM - 02:00 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Junior emgineers",
            "speakerId": "e4072f71-75fe-45a0-8690-1450fe2e48ac",
            "speakers": [
                {
                    "id": "e4072f71-75fe-45a0-8690-1450fe2e48ac",
                    "name": "Judy Abi Nehme"
                }
            ]
        },
        {
            "id": "51909c77-69ea-4fec-8a1c-61f36fd26d99",
            "title": "Beyond Black Boxes: Building Explainable AI Systems with Knowledge Graphs",
            "description": "<strong>Key Insights:</strong><br/>Attendees will learn how Knowledge Graphs (KGs) can bring structure, logic, and transparency into AI systems that usually act as black boxes. They\u2019ll gain hands-on experience modeling real-world entities such as users, skills, and job requirements into a graph and will learn how to write queries that surface explicit reasoning paths.<br/>They\u2019ll also understand how KGs complement AI models by providing context, constraints, and explanations that today\u2019s statistical systems lack. By the end, they will know how to build a small but functional Explainable AI (XAI) layer that makes recommendations interpretable, visual, and grounded in real relationships.<br/><br/>AI now plays a major role in job platforms, career guidance, and talent matching  yet most systems still operate as black boxes, offering recommendations without explaining why. In this workshop, we bridge that gap by introducing participants to Explainable AI (XAI) through the power of Knowledge Graphs (KGs) and Neo4j.<br/><br/>The session begins with an accessible introduction to knowledge graphs, graph structures, and why KGs are becoming essential for AI transparency. Then, in a fully hands-on segment, participants will model users, skills, roles, and companies into a real knowledge graph using Neo4j\u2019s browser-based sandbox. They\u2019ll learn how to write graph queries that surface the exact skill matches, experience alignments, and interest connections that justify a job recommendation.<br/><br/>By the end of the workshop, attendees will have built a mini Explainable Job-Matching System capable of showing users why a particular job fits them  using clear, visual reasoning paths directly derived from the knowledge graph. Whether you're a student discovering AI or a developer exploring semantic technologies, you\u2019ll leave with practical skills in combining KGs + XAI to create transparent, trustworthy AI systems used in modern platforms like LinkedIn and Indeed.",
            "format": "Workshop",
            "level": "Intermediate",
            "room": "B112",
            "time": "01:15 PM - 02:10 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "University students and Professionals ",
            "speakerId": "261c2a2a-88cf-4821-b3a9-f5003eb66216",
            "speakers": [
                {
                    "id": "261c2a2a-88cf-4821-b3a9-f5003eb66216",
                    "name": "Sarah Rashidi"
                }
            ]
        },
        {
            "id": "935eac29-dbdb-4504-982c-06fd6aa26559",
            "title": "Are We There Yet? Live Al Coding Challenge Workshop",
            "description": "<strong>Key Insights:</strong><br/>- Master your tools: know which AI coding tools to use, when, and how to stack them so they actually ship features for you.<br/>- Use AI properly, not timidly: let it write, refactor, and test most of the code so you focus on architecture, edge cases, and product decisions.<br/>- Stop asking \u201cshould we use AI?\u201d while others are already building multi-million dollar products and working fewer hours because they use it right.<br/>- Don\u2019t just copy-paste from a web chat window or avoid AI to \u201clook smarter\u201d \u2013 the smarter person is the one using AI correctly right now.<br/>- Do now, learn from doing, reflect and improve later: adopt a fast loop of try \u2192 ship \u2192 review \u2192 upgrade your prompts and workflows.<br/>- Walk out with a concrete, aggressive way to let AI do high-quality work for you instead of treating it like a fancy autocomplete.<br/><br/>AI coding tools are everywhere now, but most developers still treat them like a smarter autocomplete.<br/><br/>In this live workshop, we\u2019ll ask the audience for a simple app/feature idea, agree on one together, and then build it live using AI tools. We\u2019ll go from idea \u2192 tiny spec \u2192 code \u2192 debug \u2192 polish, all on stage.<br/><br/>I\u2019ll show exactly how I use AI day-to-day as a CTO: turning messy ideas into clear prompts, feeding the right context, handling hallucinations, and keeping control of architecture and quality. You\u2019ll see the full thought process, not just the perfect edited demo.",
            "format": "Talk",
            "level": "Intermediate",
            "room": "Main Auditorium",
            "time": "02:00 PM - 02:35 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "- Developers who want to seriously adopt AI in their workflow, not just \u201cplay with it\u201d - Tech leads and managers defining AI guidelines for their teams - Students and juniors who want healthy, future-proof habits around AI-assisted coding",
            "speakerId": "cc489475-0a10-4c0b-8e6d-9878e83c84d8",
            "speakers": [
                {
                    "id": "cc489475-0a10-4c0b-8e6d-9878e83c84d8",
                    "name": "Rayan Salhab"
                }
            ]
        },
        {
            "id": "3fa56143-4351-4b0c-9c94-e05515014726",
            "title": "Modern Cloud Strategies: From Monitoring to Resilience",
            "description": "<strong>Key Insights:</strong><br/>Talk Key Insights: Attendees will learn how to design resilient cloud systems, avoid vendor lock-in, and implement proactive monitoring and backup strategies. This addresses the urgent need for secure, scalable infrastructure in today\u2019s hybrid environments.<br/><br/> A practical talk on building secure, scalable cloud environments using Zabbix, Acronis, and Nextcloud. Covers monitoring, disaster recovery, vendor independence, and real-world deployment insights",
            "format": "Talk",
            "level": "Intermediate",
            "room": "B1005",
            "time": "02:00 PM - 02:35 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Developers, IT Professionals, Students, University IT Teams",
            "speakerId": "ffc51179-bbaf-4e96-8101-1a770db74061",
            "speakers": [
                {
                    "id": "ffc51179-bbaf-4e96-8101-1a770db74061",
                    "name": "Mohamad Tabikh"
                }
            ]
        },
        {
            "id": "83b01760-b565-4fab-8238-c8d514070eab",
            "title": "AI in the Real World - Stories & Case Studies from Leading Lebanese Companies",
            "description": "<strong>Key Insights:</strong><br/>- Generative AI business model<br/>- How GenAI is being adopted by real-world clients<br/>- What are the main hurdles we face as GenAI solution providers<br/>- and what are the qualities and personalities that we look for when hiring AI Engineers.<br/><br/>My really will take generative AI beyond the hype. As the CEO/CTO of the leading company in generative AI in Lebanon, I will be relaying the reality of the GenAI work landscape to these young minds, and offering advice on what companies like us look for in AI engineers<br/><br/>I will be talking about real-world AI implementations in some of the leading Lebanese companies. Some stories are humorous, others are lessons we learned that helped us shape the generative AI business model in Lebanon.",
            "format": "Talk",
            "level": "Beginner",
            "room": "B110",
            "time": "02:00 PM - 02:35 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Literally. everyone who uses a computer in their work",
            "speakerId": "08589cfa-0867-493b-b32b-66882fb54314",
            "speakers": [
                {
                    "id": "08589cfa-0867-493b-b32b-66882fb54314",
                    "name": "Elias Atik"
                }
            ]
        },
        {
            "id": "b9f400f0-fa73-4ede-9689-a48d492cf366",
            "title": "Vibe Coding with Google Antigravity",
            "description": "<strong>Key Insights:</strong><br/>- How AI is transforming traditional coding into a creative, collaborative workflow.<br/>- Practical methods for using AI to generate high-quality code for web and mobile apps.<br/>- How to guide AI with the right prompts to design UI components, animations, and app architecture.<br/>- Real examples of using AI to automate repetitive tasks, debug issues, optimize logic, and speed up development cycles.<br/>- Best practices for \u201cvibe coding\u201d: turning ideas into working features through natural language guidance.<br/><br/>Vibe Coding is a modern approach to web and mobile development where creativity, intuition, and AI-powered assistance blend to accelerate innovation. Instead of writing code the traditional way, developers now collaborate with AI tools to generate components, refactor logic, design UI flows, and even build full features with conversational prompts.<br/><br/>In this workshop, we will explore how AI\u2014powered by Google\u2019s latest technologies\u2014can amplify your development process, unlock faster prototyping, and help you build more expressive and fluid digital experiences.<br/>Attendees will learn how to \u201cvibe-code\u201d: guiding AI models to write clean code, generate UI layouts, craft animations, fix bugs, design APIs, and improve performance across both web and mobile platforms.<br/><br/>This session is practical, hands-on, and focused on building real features with AI as your coding partner\u2014showing you how to code smarter, ship faster, and create more polished products with less friction.",
            "format": "Workshop",
            "level": "Beginner",
            "room": "B112",
            "time": "02:10 PM - 03:10 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Developers, designers, students, frontend engineers and mobile developers.",
            "speakerId": "3a70a459-beb6-4c10-af2f-9958d49b2793",
            "speakers": [
                {
                    "id": "3a70a459-beb6-4c10-af2f-9958d49b2793",
                    "name": "Ibrahim Zakaria"
                },
                {
                    "id": "b17b7459-ef0f-45d1-b4c0-df52cc7cc691",
                    "name": "Ahmad Kharma"
                }
            ]
        },
        {
            "id": "6ead55ea-328c-4bfb-b97b-31cc436fd040",
            "title": "Panel 2",
            "description": "No description available.",
            "format": "Talk",
            "level": "Beginner",
            "room": "Main Auditorium",
            "time": "02:35 PM - 03:10 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": ""
        },
        {
            "id": "ac985037-a69c-4755-89f7-3f20991ea42b",
            "title": "Business-Mindset for Tech Talent",
            "description": "<strong>Key Insights:</strong><br/>-Understanding the business matters as much as writing the code.<br/><br/>-Engineers often rush into building \u2014 great products start with understanding the problem.<br/><br/>-Asking why before building ensures solutions address the real need.<br/><br/>-Empathetic listening is a core skill in product creation.<br/><br/>-Asking the right questions drives clarity.<br/><br/>-Pain points are the compass for meaningful solutions.<br/><br/>-Business outcomes define the success of a solution, not the complexity of the technology.<br/><br/>-Innovation happens when problems are understood, not assumed.<br/><br/>-Tech is the tool, business context is the guide.<br/><br/>-Purpose-first thinking leads to more effective and scalable solutions.<br/><br/>A workshop designed to help students especially those in tech, become familiar with the business side of building products. Many engineers jump straight into coding and creating solutions, but the real impact comes from understanding the purpose, business outcome, and problem behind the solution.<br/><br/>In this session, participants will learn to think beyond features and technology. They will explore how businesses operate, what challenges they face, and why identifying the right problem matters more than rushing into development. Through a practical scenario, students will analyze a business workflow, uncover pain points, and then propose a tech solution that aligns with real business goals.",
            "format": "Case Study",
            "level": "Beginner",
            "room": "B110",
            "time": "02:35 PM - 03:10 PM",
            "tags": [],
            "isCommon": false,
            "targetAudience": "Tech Professionals - University Students",
            "speakerId": "b31b6747-781b-44d0-8189-cb4b222240be",
            "speakers": [
                {
                    "id": "b31b6747-781b-44d0-8189-cb4b222240be",
                    "name": "Aisha Harrash"
                }
            ]
        },
        {
            "id": "0a9293da-449f-47cd-bad8-ba48df440535",
            "title": "Lunch",
            "description": "End your day with a delicious lunch and a chance to network with other attendees.",
            "format": "Networking",
            "level": "Beginner",
            "room": "Main Auditorium",
            "time": "03:10 PM - 03:50 PM",
            "tags": [],
            "isCommon": true,
            "targetAudience": ""
        }
    ],
    speakers: [
        {
            "id": "6615d9d9-bed5-4446-bd21-cbe811ed9128",
            "firstName": "Robert",
            "lastName": "Mansour",
            "fullName": "Robert Mansour",
            "tagLine": "Commander of Signal Corps | Brigadier General Engineer PhD",
            "company": "Lebanese Armed Forces",
            "bio": "Experienced Communications Specialist and researcher in International Strategy, Technology, & Security, with a demonstrated history of working in the Telecom applications, Mission Critical Networks, Military Communications & Services. Skilled in Private Mobile Radio (PMR) & Universal Mobile Telecommunications System (UMTS), Project Management, Business Support System (BSS), Defense Acquisition Systems, and Network Design, Technology Evolution & Security, and Domain Awareness. Entrepreneurship competencies & engineering professional with a PhD focused in Cyber Security & Cyber Deterrence within International Relations and Diplomacy from CEDS - Centre d'\u00c9tudes Diplomatiques et Strat\u00e9giques- Paris, part of OMNES Education",
            "profilePicture": "https://sessionize.com/image/9932-400o400o1-WtsBarwP68FLgG7CtjhRdJ.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/bgen-robert-mansour-phd-7847a715"
            }
        },
        {
            "id": "fa16bb05-09ae-429b-90d1-178f20ed8e2e",
            "firstName": "Bassel",
            "lastName": "Al Ayoubi",
            "fullName": "Bassel Al Ayoubi",
            "tagLine": "General Director of Investment and Maintenance",
            "company": "Ministry of Telecommunication",
            "bio": "General Director of Investment and Maintenance- Ministry of Telecommunication",
            "profilePicture": "https://sessionize.com/image/ebe1-400o400o1-HJXGZRVQDXP8E3NtjJux9K.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/bayoubi/"
            }
        },
        {
            "id": "089bb622-9b5d-436f-b531-e1a653264f51",
            "firstName": "Omar",
            "lastName": "Chaaban",
            "fullName": "Omar Chaaban",
            "tagLine": "Senior Software Engineer",
            "company": "DTP",
            "bio": "Senior software engineer with 15+ years of experience developing and architecting enterprise-grade applications using the Java ecosystem. Skilled in leading technical teams, designing complex distributed systems, and driving end-to-end solution delivery.",
            "profilePicture": "https://sessionize.com/image/3d6c-400o400o1-Qru82oMapiiNwdniQxeQAX.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/omarchaaban",
                "website": "https://dtp.ae/"
            }
        },
        {
            "id": "3da1e85c-a7a9-4869-9a37-f355307cff2d",
            "firstName": "Mohyddine",
            "lastName": "Al-lahham",
            "fullName": "Mohyddine Al-lahham",
            "tagLine": "Senior Android Developer",
            "company": "Code With Mehyo",
            "bio": "Senior Android developer\nKotlin Multiplatform Developer \nGDG Android/Kotlin Speaker \nYouTube Content Creator ",
            "profilePicture": "https://sessionize.com/image/6b9f-400o400o1-KQkJHUgHanV5n5k7j3k4wo.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/mohyddine-lahham",
                "website": "www.codewithmehyo.com"
            }
        },
        {
            "id": "1eaeee06-9ccd-4481-9c96-72fa05c2576e",
            "firstName": "Roc",
            "lastName": "Khalil",
            "fullName": "Roc Khalil",
            "tagLine": "VP of Engineering",
            "company": "HAQQ",
            "bio": "With over 12 years of experience in web development and team leadership, I specialize in building scalable applications, optimizing deployment workflows, and introducing innovative solutions. I\u2019m passionate about helping startups and developers discover tools and frameworks that can accelerate productivity and open up global opportunities.",
            "profilePicture": "https://sessionize.com/image/d45b-400o400o1-GgqRcwcx8hDtCC46fDuiv1.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/rockhalil/",
                "website": "https://haqq.ai"
            }
        },
        {
            "id": "0f0e7f44-cdab-4de7-a1e7-4f97a40b42e1",
            "firstName": "Rami",
            "lastName": "Kronbi",
            "fullName": "Rami Kronbi",
            "tagLine": "Computer Vision Engineer",
            "company": "Oreyeon",
            "bio": "Computer Vision Engineer and Edge AI Developer working on vision models, embedded AI, and embedded software design. A lifelong robotics enthusiast with several national competition wins, I\u2019m driven by impact-focused solutions and leadership in the AI field. Outside of work, I\u2019m passionate about space and exploration.",
            "profilePicture": "https://sessionize.com/image/1125-400o400o1-XynJB2xi41cDbCi11rpDWn.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/rami-kronbi/",
                "website": "https://www.oreyeon.com/"
            }
        },
        {
            "id": "4aa857c8-3ad6-46b5-a0a3-ef92db483a43",
            "firstName": "Mhamad",
            "lastName": "El Itawi",
            "fullName": "Mhamad El Itawi",
            "tagLine": "Tech lead and Senior Software Engineer",
            "company": "Eddress",
            "bio": "Hi, I\u2019m Mhamad El-Itawi , a Tech Lead and Senior Software Engineer with over 8 years of experience building scalable systems, leading engineering teams, and driving digital transformation.\n\nI specialize in backend architecture, cloud infrastructure, Ai systems, DevOps practices, and legacy system modernization. Over the years, I\u2019ve led major cloud migrations, optimized backend systems for performance and cost-efficiency, and delivered impactful solutions across Europe and the Middle East. I\u2019m certified in Kubernetes and AWS, and hold an MBA in International Business  which helps me bridge the gap between technology and business strategy.\n\nAs a speaker, I focus on real-world lessons from the field, including:\n\n- Designing scalable, cloud-native architectures\n- Leading technical teams through change\n- Applying AI to create smarter systems\n- Transforming legacy codebases\n- Building efficient DevOps pipelines\n\nI\u2019m passionate about sharing knowledge, building communities, and helping teams deliver software that truly makes a difference. If you're organizing an event or panel around engineering, cloud, or leadership in tech I\u2019d love to connect.",
            "profilePicture": "https://sessionize.com/image/65f8-400o400o1-RdmRPqXwd4eSYev2puQGd1.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/mhamadelitawi/",
                "twitter": "https://x.com/mhamadelitawi",
                "website": "http://eddress.co/"
            }
        },
        {
            "id": "d5c60999-eb9c-4245-9d0d-6409c5a27a0d",
            "firstName": "Jaafar",
            "lastName": "Nasrallah",
            "fullName": "Jaafar Nasrallah",
            "tagLine": "Senior DevOps Engineer",
            "company": "Cardinal Health",
            "bio": "I\u2019m a Google-certified DevOps engineer with over 10 years of experience across systems administration, cloud infrastructure, CI/CD, and backend development. I\u2019m passionate about breaking down complex DevOps concepts into clear, hands-on learning experiences that empower others to build, automate, and deploy with confidence",
            "profilePicture": "https://sessionize.com/image/be2d-400o400o1-U6MN4u9SbdoadfDUA67hqt.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/jaafarnasrallah",
                "website": "Cardinalhealth.com"
            }
        },
        {
            "id": "75c1f6c6-22e4-4561-82d5-d26ef8862769",
            "firstName": "Omar",
            "lastName": "Chouman",
            "fullName": "Omar Chouman",
            "tagLine": "Senior Software Engineer | AWS Certified",
            "company": "Aspire Software",
            "bio": "Omar is a self-taught, dynamic, highly motivated individual with a passion for learning and solving problems. I work in teams and individually, driving quality and consistency throughout all phases of software development projects. Partner with developers, analysts, QA, and support engineers throughout the product lifecycle to produce high-quality, user-friendly, scalable, and bug-free software.\n\nOmar has worked on a diverse range of projects, from building scalable microservices to integrating AI and machine learning models into production environments. His expertise spans various cloud platforms, with a particular focus on AWS, where he has implemented numerous serverless applications that are both cost-effective and highly scalable.\n\nWhen he's not coding or speaking at events, Omar enjoys exploring the latest advancements in tech, mentoring aspiring developers, and contributing to open-source projects.",
            "profilePicture": "https://sessionize.com/image/b90e-400o400o1-H8uVDSn3oNFpSnE175bLKJ.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/omarchouman/",
                "twitter": "https://twitter.com/OmarChouman5",
                "website": "https://www.aspiresoftware.com/"
            }
        },
        {
            "id": "843f8376-0c95-40cd-9b31-1e8b8939e59d",
            "firstName": "Mohammad",
            "lastName": "Omar",
            "fullName": "Mohammad Omar",
            "tagLine": " Technology Executive | CTO | Cloud & DevOps Leader",
            "company": "Drive Terra",
            "bio": "As Chief Technology Officer at Drive Terra, I focus on leveraging cloud and DevOps expertise to drive technological innovation and operational efficiency. My role builds on prior experience as Digital Transformation Manager at TEC-Tripoli Entrepreneurs Club, where I developed IT policies, customized software, and migrated technical operations to the cloud. \n\nWith a Master's degree in Computer Science from Arizona State University, I bring a strong foundation to roles requiring IT strategy and interpersonal communication. Passionate about aligning technology with organizational goals, I aim to foster innovation while enabling teams and stakeholders to thrive.",
            "profilePicture": "https://sessionize.com/image/9e00-400o400o1-KwNz8QdhoAfMUaMJkJE2MD.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/mohammad0omar/",
                "twitter": "https://twitter.com/mohamad0omar",
                "website": "driveterra.com"
            }
        },
        {
            "id": "d8b7c739-047a-463f-afa0-270fcdab38ce",
            "firstName": "Gardenia",
            "lastName": "Homsi",
            "fullName": "Gardenia Homsi",
            "tagLine": "Tech Product Manager",
            "company": "Wakilni",
            "bio": "Gardenia Al Homsi is a Technical Product Manager at Wakilni, bringing over six years of experience across software development and product management. With a background in computer engineering and PMI-certified expertise in Agile methodologies, she specializes in digital transformation, cross-functional team leadership, and delivering scalable, business-driven technology solutions. Gardenia has worked with companies both locally and internationally on building in-house and SaaS products. She is known for her ability to create products that customers love while aligning with strategic business objectives.",
            "profilePicture": "https://sessionize.com/image/2de6-400o400o1-VHS7HAoRuxwbjTbo6oeEGh.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/gardenia-homsi",
                "website": "wakilni.com"
            }
        },
        {
            "id": "7b455539-7556-477b-9d3b-bec814e5f8b8",
            "firstName": "Nicolas",
            "lastName": "El Khoury",
            "fullName": "Nicolas El Khoury",
            "tagLine": "Technology Consultant | Lecturer",
            "company": "Lebanese American University",
            "bio": "With 11 years of international experience, I specialize in designing and delivering reliable, and scalable web-based systems. My work has empowered startups, enterprises, and everything in between to grow faster, scale smarter, and operate more effectively.\n\nWhat sets me apart is my ability to bridge the gap between business, product, and technology. Having played many roles, including being an engineer, consultant, team leader, manager, and university lecturer, I bring both strategic vision and execution power to the table.\n\nToday I work independently, offering expertise and experience to anyone who wants to turn technology into a strategic advantage without the jargon or vendor lock\u2011in.\n\nI believe in building long-term relationships based on trust, transparency, and mutual respect.",
            "profilePicture": "https://sessionize.com/image/18a5-400o400o1-hYi16Tq9gZNwxSSw3Vuadi.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/nicolas-el-khoury/",
                "website": "https://devopsbeyondlimits.com/"
            }
        },
        {
            "id": "cb72b3d1-cfe4-49cc-b89f-85bbbd1fc364",
            "firstName": "Amani",
            "lastName": "Raad",
            "fullName": "Amani Raad",
            "tagLine": "Associate professor",
            "company": "Lebanese University engineering faculty branch I",
            "bio": "Amani RAAD obtained her PhD in Information Technology and Systems from the University of Technology of Compiegne in France. After graduation, she was a Research and teaching Assistant in the Heudyasic Laboratory in France. She has been a part-time Assistant Professor in the Electrical and Electronics Engineering Department, Lebanese University, engineering faculty. Since July 2014, she has been a full-time assistant professor at the same department. Her research interests include mainly Digital Signal Processing and Artificial Intelligence for several applications and mainly for predictive maintenance. She received the award of the distinguished professor from the Lebanese University in 2019.",
            "profilePicture": "https://sessionize.com/image/0b02-400o400o1-WuN4JSxYEF1P1JbiTsffRt.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/amani-raad-60738384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                "website": "ul.edu.lb"
            }
        },
        {
            "id": "ce57780b-b2fd-4f06-8bd1-cdcf2c471e2b",
            "firstName": "Abed-R",
            "lastName": "Ghaleb",
            "fullName": "Abed-R Ghaleb",
            "tagLine": "Co-founder & CEO",
            "company": "Khawarizme Community & SILNI AI",
            "bio": "Dr. Abed-R Ghaleb is the CEO and founder of SILNI, an AI-powered B2B sales platform, and an organizational strategist with over 15 years\u2019 experience in business development, SaaS solutions, and executive training across the MENA region. Passionate about turning AI potential into practical business wins, \n\nDr. Abed-R Ghaleb empowers companies to bridge the gap between technology and strategy. Whether working with startups or established enterprises, he brings a proven record in AI adoption, market analysis, and sales enablement that drives meaningful results for organizations at every stage.",
            "profilePicture": "https://sessionize.com/image/5063-400o400o1-UDpSa2Ax8Y4DTWoomV1tFr.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/abed-r-ghaleb-8b000653/",
                "website": "https://www.silni.ai/en"
            }
        },
        {
            "id": "ad560724-c409-406a-908a-f33583684a21",
            "firstName": "Nisrine",
            "lastName": "Bou Ghannam",
            "fullName": "Nisrine Bou Ghannam",
            "tagLine": "CEO & Founder",
            "company": "Techlarious",
            "bio": "Nisrine Bou Ghannam is a passionate tech entrepreneur and educator, dedicated to empowering youth, women, and communities through innovative digital solutions and STEM education. She is the CEO of Techlarious and a STEM Certified\u2122 Master Trainer. She completed an internship at Apple, Cupertino, USA in September 2024. Nisrine is also a TechWomen 2024 Alumna, MongoDB Creator & Community Lead, Tech & Education Strategist, Product Manager, and co-founder of the Lebanese TechWomen Council.",
            "profilePicture": "https://sessionize.com/image/9829-400o400o1-KsKCtvA3PL8DYk1AS4se6K.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/nisrine-bou-ghannam/",
                "website": "https://www.techlarious.academy/"
            }
        },
        {
            "id": "5c886983-8e34-423a-ae2a-a6c222657667",
            "firstName": "Majd",
            "lastName": "Chahine",
            "fullName": "Majd Chahine",
            "tagLine": "Founder/ Manager",
            "company": "CBI  / Forvis Mazars",
            "bio": "Manager - Business Intelligence & Data Analysis . Founder of CBI (Corporate Business Intelligence)",
            "profilePicture": "https://sessionize.com/image/81c7-400o400o1-YYtjyrv97iPAV46AheWqhT.png",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/majdchahine/",
                "website": "https://www.rcl-group.com/en/cBI-Business-intelligence/"
            }
        },
        {
            "id": "2bc79d2f-0b1d-4d69-9894-4e1deaff9482",
            "firstName": "Nader",
            "lastName": "Bakir",
            "fullName": "Dr Nader Bakir",
            "tagLine": "Assistant professor",
            "company": "BAU",
            "bio": "Nader Bakir earned his Ph.D. in Image Processing and Artificial Intelligence (AI) from INSA Rennes (IETR-France) in 2020. Combining his robust academic foundation with over five years of industry experience, he is a specialist in key technological areas such as Deep Learning, Data Analysis, and ERP. He currently serves as an Assistant Professor at BAU University in Lebanon, focusing his research primarily on the fields of Deep Learning and Image Processing.",
            "profilePicture": "https://sessionize.com/image/be8e-400o400o1-G4kEVhftBMePdAG7hSDeN1.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/nader-b-09a1aa72/"
            }
        },
        {
            "id": "d0523778-7fbc-41e4-b4a5-6122650a000e",
            "firstName": "Stephane",
            "lastName": "Boghossian",
            "fullName": "Stephane Boghossian",
            "tagLine": "Head of Customer Success, AI Builder & Vibe Coding Advocate",
            "company": "Lovable.dev / Vibemind",
            "bio": "Stephane Boghossian is an AI-native product builder working at the intersection of design, multi-agent systems, and rapid prototyping. He has helped hundreds of founders and creators build and ship products using Vibe Coding methods. He co-develops Vibemind, an AI operating system built around multi-agent automation and intent-driven creation.",
            "profilePicture": "https://sessionize.com/image/ed6f-400o400o1-Hx6emiLNXVJUNmBr36goHx.png",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/stephboghossian/",
                "website": "https://vibemind.space"
            }
        },
        {
            "id": "e4072f71-75fe-45a0-8690-1450fe2e48ac",
            "firstName": "Judy",
            "lastName": "Abi Nehme",
            "fullName": "Judy Abi Nehme",
            "tagLine": "Software engineer",
            "company": "Upwork",
            "bio": "Judy started his career as an electrical engineer in smart homes and electrical installations before shifting into software engineering. He is currently a software engineer at Upwork, a data structures and algorithms teacher. Occasionally, he helps talent with mock interviews. ",
            "profilePicture": "https://sessionize.com/image/59c4-400o400o1-URnqw6nkqFD6oAsyoHsbBw.png",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/judyabinehme/",
                "website": "www.upwork.com"
            }
        },
        {
            "id": "261c2a2a-88cf-4821-b3a9-f5003eb66216",
            "firstName": "Sarah",
            "lastName": "Rashidi",
            "fullName": "Sarah Rashidi",
            "tagLine": "AI Architect & Researcher | University Instructor | Community Builder",
            "company": "RHU",
            "bio": "Sarah is a University Instructor at Rafik Hariri University (RHU), where she teaches computer science and helps students bridge theory with practical applications. She is also an AI Researcher, Engineer, and Architect with over three years of experience building scalable AI systems, with a focus on MLOps, generative AI, and applied machine learning. Holding dual master\u2019s degrees in Computer Science and Data Intelligence, she works at the intersection of research and engineering to design solutions that connect innovation with real-world impact.\n\nBeyond her professional work, Sarah is an active community leader. She joined Google Developer Groups (GDG) as an organizer earlier this year and is the founder of Code with Serah, a STEAM community at the crossroads of technology and creativity. Through these initiatives, she creates inclusive spaces for young people to learn, collaborate, and bring their ideas to life.\n\n",
            "profilePicture": "https://sessionize.com/image/37fc-400o400o1-Hso6XV5NdmPJWaaMUZQvTd.png",
            "socials": {
                "linkedin": "linkedin.com/in/serahrashidi/",
                "website": "https://www.rhu.edu.lb/home"
            }
        },
        {
            "id": "cc489475-0a10-4c0b-8e6d-9878e83c84d8",
            "firstName": "Rayan",
            "lastName": "Salhab",
            "fullName": "Rayan Salhab",
            "tagLine": "CTO",
            "company": "AIY Expert Solutions",
            "bio": "Rayan Salhab is the CTO at AIY Expert Solutions, leading a 40+ person team building automation and software products used by customers around the world.\n\nHe works across engineering, cloud infrastructure, and product, with a strong focus on developer experience and reliability. Inside AIY, he runs continuous education programs and internal workshops on AI tools, modern development practices, and engineering culture.\n\nRayan is obsessed with turning buzzwords into working systems: testing new technologies like AI in real products, then sharing the lessons, failures, and playbooks with the community.",
            "profilePicture": "https://sessionize.com/image/92c7-400o400o1-Ky8tH6jBLxVJ5umDDvJ1cF.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/rayan-salhab",
                "website": "https://www.aiyexpertsolutions.com/"
            }
        },
        {
            "id": "ffc51179-bbaf-4e96-8101-1a770db74061",
            "firstName": "Mohamad",
            "lastName": "Tabikh",
            "fullName": "Mohamad Tabikh",
            "tagLine": "Co-founder - IT Consultant",
            "company": "Netwatch",
            "bio": "Mohamad \u2013 Strategic IT Consultant, Netwatch  \nMohamad is a Strategic IT Consultant specializing in cloud computing, MSP solutions, and digital transformation. He advises hospitals, universities, and enterprises on building secure, scalable, and vendor\u2011independent infrastructures. At DevFest, he bridges technical depth with practical impact, showcasing real\u2011world tools like Zabbix, Acronis, and Nextcloud alongside Google services to empower developers, students, and institutions.",
            "profilePicture": "https://sessionize.com/image/9707-400o400o1-9pDgCXeZt5G5XrJak3XNcp.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/mohamad-tabikh-a907b329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                "website": "www.netwatchlb.com"
            }
        },
        {
            "id": "08589cfa-0867-493b-b32b-66882fb54314",
            "firstName": "Elias",
            "lastName": "Atik",
            "fullName": "Elias Atik",
            "tagLine": "Co-founder and CEO/CTO",
            "company": "Webspot",
            "bio": "Co-founder and CEO of Webspot, Lebanon\u2019s leading Generative AI solutions firm, Elias has spent more than a decade building and deploying end-to-end AI systems. A passionate instructor and speaker, he delivers practical AI education to both non-specialists and technical teams across sectors. He is driven by a mission to make AI accessible to every company, organization, and individual.",
            "profilePicture": "https://sessionize.com/image/09dc-400o400o1-Q6ee5cXhvGRy6at28qRB7m.png",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/eliasatik/",
                "website": "https://webspot me"
            }
        },
        {
            "id": "3a70a459-beb6-4c10-af2f-9958d49b2793",
            "firstName": "Ibrahim",
            "lastName": "Zakaria",
            "fullName": "Ibrahim Zakaria",
            "tagLine": "Innovation Team Lead, Mentor at Winners Academy",
            "company": "NavyBits",
            "bio": "Ibrahim Zakaria is a software engineer and AI-driven product builder with experience designing and scaling modern web and mobile applications. He specializes in blending creative problem-solving with advanced development workflows, using tools like AI assistants, NestJS, Prisma, PostgreSQL, and cloud-based architectures to build efficient, user-centered digital products.",
            "profilePicture": "https://sessionize.com/image/e185-400o400o1-a97RKuSTDi6fZHvdiVBg1R.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/ibrahim-zakaria/",
                "website": "https://www.navybits.com"
            }
        },
        {
            "id": "b17b7459-ef0f-45d1-b4c0-df52cc7cc691",
            "firstName": "Ahmad",
            "lastName": "Kharma",
            "fullName": "Ahmad Kharma",
            "tagLine": "Ai Solution Developer & Winners Academy Leadership",
            "company": "Navybits",
            "bio": "Full\u2011stack Developer with ~3 years of experience, delivering scalable frontend and backend solutions. Skilled\nin Next.js, React, Node.js, Laravel, Directus, MongoDB/MySQL. Passionate about shipping real product value,\nmentoring students, and integrating AI models and MCP\u2011based tools to automate workflows and unlock new\ncapabilities.",
            "profilePicture": "https://sessionize.com/image/4a74-400o400o1-DtkNbrSNmBXJdUbip7S1V6.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/ahmad-kharma-098596268/",
                "website": "https://www.navybits.com/"
            }
        },
        {
            "id": "b31b6747-781b-44d0-8189-cb4b222240be",
            "firstName": "Aisha",
            "lastName": "Harrash",
            "fullName": "Aisha Harrash",
            "tagLine": "Tech Business Analyst",
            "company": "Namou Properties",
            "bio": "A Tech BA, helping startups use technology to increase the business impact and team productivity",
            "profilePicture": "https://sessionize.com/image/caeb-400o400o1-3FyGpt12XhCM9afEyj1mGC.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/aichaharrach/",
                "website": "Not Launched yet"
            }
        },
        {
            "id": "f109efe6-7497-44b7-81a4-e5ae2ec4aee8",
            "firstName": "Eman",
            "lastName": "Elrefai",
            "fullName": "Eman Elrefai",
            "tagLine": "NLP Engineer | AI Researcher | MSc",
            "company": "NadSoft",
            "bio": "Eman Elrefai is a Machine Learning Engineer and Data Scientist with a Master\u2019s degree in Artificial Intelligence and Data Science from Queen\u2019s University. She is a TensorFlow Certified Developer and has published multiple research papers in Natural Language Processing and AI. Eman is passionate about bridging the gap between research and real-world applications through practical, accessible AI solutions.",
            "profilePicture": "https://sessionize.com/image/36f1-400o400o1-3ekLpdTLmgJpCupksMi1qX.jpg",
            "socials": {
                "linkedin": "https://www.linkedin.com/in/eman-elrefai/"
            }
        }
    ],
    schedule: {
        "timeSlots": [
            "08:30 AM - 09:30 AM",
            "01:15 PM - 02:10 PM",
            "01:20 PM - 02:00 PM",
            "01:25 PM - 02:00 PM",
            "02:00 PM - 02:35 PM",
            "02:10 PM - 03:10 PM",
            "02:35 PM - 03:10 PM",
            "03:10 PM - 03:50 PM",
            "09:30 AM - 10:30 AM",
            "10:30 AM - 11:10 AM",
            "10:30 AM - 11:30 AM",
            "11:10 AM - 11:50 AM",
            "11:30 AM - 12:30 PM",
            "11:50 AM - 12:30 PM",
            "12:30 PM - 12:50 PM",
            "12:50 PM - 01:20 PM",
            "12:50 PM - 01:25 PM"
        ],
        "auditoriums": [
            "Main Auditorium",
            "B1005",
            "B110",
            "B112"
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

