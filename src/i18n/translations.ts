export const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      achievements: "Recognition",
      contact: "Contact",
      blog: "Blog",
      letsTalk: "Let's Talk",
    },

    // Hero Section
    hero: {
      badge: "Fullstack Software Engineer",
      greeting: "Hello, I'm",
      name: "Jeong Min Cho",
      role: "I build scalable web applications",
      description:
        "A Fullstack Software Engineer with 3+ years of experience building scalable web applications using React, Next.js, Java, and Python across enterprise and startup environments.",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
      scroll: "Scroll to explore",
      badges: {
        shipFast: "Ship Fast",
        cleanCode: "Clean Code",
        problemSolver: "Problem Solver",
      },
    },

    // About Section
    about: {
      title: "Building Scalable Solutions",
      paragraph1:
        "I'm a Fullstack Software Engineer based in Seoul, South Korea, with 3+ years of experience building scalable web applications. I specialize in React, Next.js, Java, and Python, working across both enterprise and startup environments.",
      paragraph2:
        "I graduated Magna Cum Laude from George Mason University with a BS in Computer Science. My experience spans from building dashboard features at ScienceLogic to developing fullstack SaaS platforms with secure authentication systems.",
      paragraph3:
        "I'm passionate about clean architecture, CI/CD automation, and building products that solve real problems. Whether it's designing RESTful APIs, containerizing services with Docker, or crafting responsive UIs, I focus on delivering high-quality, maintainable code.",
      downloadResume: "Download Resume",
      stats: {
        experience: "Years Experience",
        companies: "Companies",
        gpa: "GPA",
        technologies: "Technologies",
      },
    },

    // Achievements Section
    achievements: {
      title: "Awards & Recognition",
      subtitle: "Recognized for innovation and excellence",
      items: {
        newspaper: {
          title: "Featured in a Newspaper",
          description:
            "Interviewed with George Mason University newspaper about my web browser extension (Chrome, Firefox, Edge)",
        },
        bestFinancial: {
          title: "Best Financial Hack",
          description: "Winner at PatriotHack2021 - George Mason University",
        },
        secondPlace: {
          title: "2nd Place Hackathon",
          description: "Winner at StudentHack2020 - University of Manchester",
        },
        firstPlace: {
          title: "1st Place Hackathon",
          description:
            "Winner at SkyHacks2020 - University of Tennessee at Martin",
        },
        thirdPlace: {
          title: "3rd Place Hackathon",
          description: "Winner at ProfHacks2020 - Rowan University",
        },
      },
    },

    // Projects Section
    projects: {
      title: "Featured Work",
      subtitle:
        "A selection of projects I've worked on, showcasing my skills and expertise",
      npmPackages: "NPM Packages",
      liveDemo: "Live Demo",
      source: "Source",
      viewDetails: "View Details",
      blogPost: "Blog Post",
      items: {
        licensingSystem: {
          description:
            "A comprehensive full-stack software licensing platform with hardware-based protection, featuring web dashboard, user portal, and secure Windows desktop client. 82,000+ lines of code across Python, TypeScript, and C++.",
        },
        unicode: {
          description:
            "A web utility for encoding and decoding Unicode characters, built to showcase the unicode-escaper npm package. Convert text to various Unicode formats with an intuitive interface.",
        },
        rateMyGmu: {
          description:
            "A platform for George Mason University students to discover and rate professors. Search, filter, and share reviews to help fellow students make informed course decisions.",
        },
        sdlc: {
          description:
            "A modern, responsive landing page built for a client. Features smooth animations, clean design, and optimized performance for lead generation.",
        },
        bdoKorean: {
          description:
            "A desktop application for installing Korean language patches for Black Desert Online. Features font installation, patch management, and a user-friendly installer interface.",
        },
        loveLetter: {
          description:
            "An interactive and fun web experience built with vanilla technologies. Features playful animations and engaging interactions without any framework overhead.",
        },
        unicodeEscaper: {
          description:
            "A lightweight npm package for encoding and decoding Unicode escape sequences. Supports multiple formats including \\uXXXX, \\u{X}, \\xNN, HTML entities, and U+XXXX notation.",
        },
        isThenable: {
          description:
            "A tiny, zero-dependency npm package to check if a value is thenable (Promise-like). Useful for handling both Promises and synchronous values in async code.",
        },
        isCron: {
          description:
            "A lightweight npm package for validating cron expressions. Check if a string is a valid cron schedule with support for standard and extended cron syntax.",
        },
      },
    },

    // Skills Section
    skills: {
      title: "Technical Expertise",
      subtitle: "Technologies and tools I use to bring ideas to life",
      techTitle: "Technologies I Work With",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        cloudDevops: "Cloud & DevOps",
      },
    },

    // Experience Section
    experience: {
      title: "Work Experience",
      subtitle: "My professional journey and the companies I've worked with",
      educationTitle: "Education",
      education: {
        degree: "Bachelor of Science in Computer Science",
        description: "GPA: 3.8/4.0 - Dean's List | Graduated Magna Cum Laude",
      },
      items: {
        founder: {
          title: "Founder & Fullstack Software Engineer",
          description:
            "Building a fullstack SaaS platform with secure authentication and desktop client application.",
          highlights: [
            "Built fullstack SaaS platform with Next.js 14, TypeScript frontend backed by FastAPI and PostgreSQL",
            "Developed secure license management system with HWID binding, JWT authentication, and AES-256 encryption",
            "Created Windows desktop client in C++17 with ImGui, featuring auto-updates and server-based authentication",
          ],
        },
        army: {
          title: "Network Management and Operations Specialist",
          description:
            "Maintained and secured intranet infrastructure supporting mission-critical military operations.",
          highlights: [
            "Maintained and secured intranet infrastructure supporting 1,000+ personnel with 99%+ uptime",
            "Implemented security protocols and conducted regular system audits for classified communications",
            "Troubleshot and resolved network issues under time-sensitive conditions",
          ],
        },
        ustigers: {
          title: "Fullstack Software Engineer",
          description:
            "Developed fullstack web applications with React and Spring Boot in an Agile environment.",
          highlights: [
            "Developed responsive user interfaces with React.js and JavaScript, improving application usability and performance",
            "Designed and built RESTful APIs using Java and Spring Boot to enable seamless frontend-backend communication",
            "Deployed and managed applications on AWS, leveraging services such as EC2, S3, and RDS for scalability",
            "Automated build and deployment pipelines with Jenkins and Docker, streamlining the CI/CD workflow",
            "Collaborated with cross-functional teams in an Agile environment to deliver features on schedule",
          ],
        },
        sciencelogic: {
          title: "Software Engineer",
          description:
            "Built and enhanced dashboard features for enterprise monitoring platform.",
          highlights: [
            "Built and enhanced dashboard features using Next.js, React, and GraphQL, collaborating with senior engineers to deliver production-ready code",
            "Wrote unit and integration tests that improved code reliability and reduced regression issues",
            "Maintained and updated legacy PHP systems while supporting containerized deployments with Docker",
            "Identified and resolved bugs across the dashboard, improving overall user experience and system stability",
          ],
        },
        sdlcJunior: {
          title: "Junior Software Engineer",
          description:
            "First tenure developing responsive user interfaces and backend APIs for enterprise clients.",
          highlights: [
            "Developed responsive user interfaces with React.js and JavaScript, improving usability and performance",
            "Designed and built RESTful APIs using Java and Spring Boot for seamless frontend-backend communication",
          ],
        },
      },
    },

    // Contact Section
    contact: {
      title: "Let's Work Together",
      subtitle: "Have a project in mind? Let's discuss how we can collaborate",
      getInTouch: "Get in Touch",
      description:
        "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll get back to you!",
      connectWithMe: "Connect with me",
      info: {
        email: {
          label: "Email",
        },
        location: {
          label: "Location",
          value: "Seoul, South Korea",
        },
        availability: {
          label: "Availability",
          value: "Open to opportunities",
        },
      },
      form: {
        name: "Name",
        namePlaceholder: "John Doe",
        email: "Email",
        emailPlaceholder: "john@example.com",
        subject: "Subject",
        subjectPlaceholder: "Project Inquiry",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
      },
      footer: {
        text: "Designed & Built with passion",
        copyright: "© 2025 Jeong Min Cho. All rights reserved.",
      },
    },

    // Licensing System Project Page
    licensingSystem: {
      backToProjects: "Back to Projects",
      title: "ShieldMod",
      links: {
        saas: "Live SaaS",
        blogPost: "Blog Post",
      },
      subtitle:
        "A comprehensive full-stack software licensing platform with hardware-based protection, featuring web dashboard, user portal, and secure Windows desktop client.",
      meta: {
        type: "Project Type",
        typeValue: "Full-Stack Platform",
        codebase: "Total Codebase",
        role: "Role",
        roleValue: "Full-Stack Developer",
      },
      architecture: {
        title: "System Architecture",
        description:
          "The platform consists of four major components working together to provide secure software licensing and distribution.",
      },
      componentsTitle: "Components",
      components: {
        backend: { title: "Backend API" },
        frontend: { title: "Admin Dashboard & User Portal" },
        desktop: { title: "Windows Desktop Client" },
        module: { title: "Client Module" },
      },
      techStack: "Tech Stack",
      keyFeatures: "Key Features",
      metrics: "Metrics",
      authFlow: {
        title: "Authentication Flows",
        description:
          "Dual authentication system supporting both web dashboard sessions and desktop client JWT tokens.",
      },
      encryption: {
        title: "File Encryption Flow",
        description:
          "Secure file delivery with AES-256-GCM encryption and per-user HKDF-derived keys.",
      },
      security: {
        title: "Security Architecture",
        description:
          "Defense in depth approach with multiple security layers protecting the platform.",
      },
      deployment: {
        title: "Deployment Architecture",
        description:
          "Containerized deployment using Docker Compose for easy scaling and management.",
      },
      stats: {
        title: "Code Statistics",
        component: "Component",
        language: "Language",
        loc: "Lines of Code",
        total: "Total",
      },
      techOverview: {
        title: "Technology Overview",
        whyTitle: "Why These Technologies?",
        backend: {
          title: "Backend: Python + FastAPI",
          description:
            "FastAPI's async-first design handles concurrent API requests efficiently. Type hints with Pydantic provide automatic validation and documentation. SQLAlchemy 2.0's async support ensures non-blocking database operations.",
        },
        frontend: {
          title: "Frontend: Next.js 14 + TypeScript",
          description:
            "App Router enables server components for optimal performance. TypeScript catches errors at compile time. TanStack Query handles server state with automatic caching and refetching.",
        },
        desktop: {
          title: "Desktop: C++17 with DirectX/ImGui",
          description:
            "Native performance for cryptographic operations. Direct hardware access for HWID generation. ImGui provides immediate-mode rendering with minimal overhead.",
        },
        infrastructure: {
          title: "Infrastructure: PostgreSQL + Redis + Docker",
          description:
            "PostgreSQL handles complex queries and ACID transactions. Redis provides sub-millisecond caching and session storage. Docker ensures consistent deployment across environments.",
        },
      },
      architectureDetails: {
        title: "How It All Works Together",
        step1: {
          title: "Admin creates a license key",
          description:
            "Through the Next.js web dashboard, administrators generate license keys with customizable expiration dates and activation limits.",
        },
        step2: {
          title: "User downloads the desktop client",
          description:
            "End users receive their license key and download the C++ Windows client application.",
        },
        step3: {
          title: "Client authenticates with hardware binding",
          description:
            "The desktop client sends credentials along with a hardware ID (HWID) to the FastAPI backend, which registers and binds the device.",
        },
        step4: {
          title: "Secure file delivery",
          description:
            "The client downloads AES-256-GCM encrypted files, decrypts them in memory using HKDF-derived keys, and validates the license periodically via heartbeats.",
        },
        step5: {
          title: "Real-time monitoring",
          description:
            "All actions are logged to PostgreSQL, cached in Redis, and admins can monitor everything in real-time through the dashboard.",
        },
      },
      authDetails: {
        web: {
          title: "Web Dashboard (Session-based)",
          flow: "Browser → POST /auth/login → Set HTTP-only cookie → Done",
          items: [
            "HTTP-only cookies prevent XSS token theft",
            "Session stored in Redis for fast validation",
            "Automatic CSRF protection",
          ],
        },
        desktop: {
          title: "Desktop Client (JWT-based)",
          flow: "Client → POST /auth/client/login (with HWID) → JWT tokens",
          items: [
            "Short-lived access tokens (15 minutes)",
            "Long-lived refresh tokens (7 days)",
            "Hardware ID binding for device verification",
            "Proactive token refresh before expiry",
          ],
        },
        multiDeviceLabel: "Multi-device Support:",
        multiDevice:
          "Users can register up to a configurable number of devices. Each device is tracked independently with nickname, first seen date, and last activity timestamp.",
      },
      encryptionDetails: {
        step1: {
          title: "Server-Side Encryption",
          description:
            "Files are encrypted with AES-256-GCM using a master key. The encrypted format includes a 12-byte nonce, variable-length ciphertext, and 16-byte authentication tag.",
        },
        step2: {
          title: "HKDF Key Derivation",
          description:
            "When a user requests a download, a unique decryption key is derived using HKDF-SHA256 with the user's ID and access token. Keys are derived, not stored—reducing attack surface.",
        },
        step3: {
          title: "In-Memory Decryption",
          description:
            "The desktop client decrypts files entirely in memory. Plaintext never touches the disk, ensuring stolen encrypted files are useless without valid credentials.",
        },
        whyMattersLabel: "Why This Matters:",
        whyMatters:
          "Each user gets a unique decryption key. Even if an attacker intercepts the encrypted file, they cannot decrypt it without the user's valid access token and user ID.",
      },
      deploymentDetails: {
        postgres: {
          title: "PostgreSQL",
          description:
            "Primary database with persistent volume for data durability. Stores users, licenses, sessions, and audit logs.",
        },
        redis: {
          title: "Redis",
          description:
            "In-memory cache for session storage, rate limiting counters, and frequently accessed data.",
        },
        fastapi: {
          title: "FastAPI Backend",
          description:
            "Async Python API server running on Uvicorn with auto-reload in development mode.",
        },
        nextjs: {
          title: "Next.js Frontend",
          description:
            "React-based dashboard with server-side rendering for optimal performance.",
        },
        volumesLabel: "Persistent Volumes:",
        volumes:
          "postgres_data, redis_data, and file_storage volumes ensure data survives container restarts. All services communicate over an internal Docker network.",
      },
      labels: {
        why: "Why:  ",
      },
      deepDive: {
        title: "Technical Deep Dive",
        description:
          "Key implementation details showcasing the security and architecture decisions.",
      },
      challenges: {
        title: "Challenges & Solutions",
        description:
          "Complex problems encountered during development and how they were solved.",
      },
      learnings: {
        title: "Key Learnings",
        description:
          "Insights gained from building this production-ready system.",
      },
      securityLayers: {
        layer: "Layer",
        network: {
          title: "Network Security",
          items: [
            "HTTPS/TLS for all communications",
            "Rate limiting (Redis token bucket)",
            "IP blocklist middleware",
            "CORS configuration",
          ],
        },
        auth: {
          title: "Authentication",
          items: [
            "JWT tokens (15 min access, 7 day refresh)",
            "HTTP-only session cookies",
            "HWID binding",
            "Multi-device limits",
          ],
        },
        data: {
          title: "Data Protection",
          items: [
            "Argon2id password hashing",
            "AES-256-GCM file encryption",
            "ECDSA signature verification",
            "HKDF key derivation",
          ],
        },
        app: {
          title: "Application Security",
          items: [
            "Input validation (Pydantic/Zod)",
            "SQL injection prevention",
            "XSS prevention (React)",
            "CSRF protection",
          ],
        },
      },
      codeExamples: {
        auth: {
          title: "Dual Authentication System",
          description:
            "Supporting both web sessions and desktop JWT tokens with hardware binding",
        },
        encryption: {
          title: "AES-256-GCM File Encryption",
          description:
            "Server-side file encryption with authenticated encryption",
        },
        decryption: {
          title: "In-Memory Decryption (C++)",
          description:
            "Files decrypted entirely in memory - plaintext never touches disk",
        },
        hwid: {
          title: "Hardware ID Generation",
          description:
            "Stable device identification from multiple hardware components",
        },
      },
      challengeLabels: {
        problem: "Problem",
        solution: "Solution",
      },
      challengeItems: {
        tokenRefresh: {
          title: "Concurrent Token Refresh",
          problem:
            "Multiple API calls could trigger simultaneous token refreshes, causing race conditions.",
          solution:
            "Implemented a request queue that pauses all requests during refresh, then releases them once the new token is available.",
        },
        session: {
          title: "Cross-Platform Session Management",
          problem:
            "Web sessions use cookies, but desktop clients cannot use cookies.",
          solution:
            "Implemented parallel authentication systems with a shared session model that handles both session types.",
        },
        hwid: {
          title: "Hardware ID Stability",
          problem:
            'Some HWID components (like MAC addresses) change frequently, causing false "new device" detections.',
          solution:
            "Use only stable components (CPU ID, motherboard serial) and implement similarity checking with 70% threshold.",
        },
      },
      learningItems: {
        security: {
          title: "Security is Architecture",
          description:
            "Security isn't something you add at the end—it must be designed in from the start. Every layer needs consideration.",
        },
        async: {
          title: "Async is Essential",
          description:
            "For any system handling concurrent users, blocking I/O is a bottleneck. 100% async architecture eliminates this.",
        },
        typeSafety: {
          title: "Type Safety Saves Time",
          description:
            "The hours spent defining types are repaid in fewer bugs and easier refactoring. TypeScript + Pydantic + Zod.",
        },
        crossPlatform: {
          title: "Cross-Platform is Hard",
          description:
            "Web and desktop have fundamentally different models. Abstracting the differences requires careful design.",
        },
        monitoring: {
          title: "Monitoring is Not Optional",
          description:
            "Without comprehensive logs, debugging production issues is nearly impossible. Log everything.",
        },
      },
    },
  },

  ko: {
    // Navigation
    nav: {
      about: "소개",
      projects: "프로젝트",
      skills: "기술",
      experience: "경력",
      achievements: "수상",
      contact: "연락처",
      blog: "블로그",
      letsTalk: "연락하기",
    },

    // Hero Section
    hero: {
      badge: "풀스택 소프트웨어 엔지니어",
      greeting: "안녕하세요,",
      name: "개발자 조정민",
      role: "확장 가능한 어플리케이션을 개발합니다",
      description:
        "React, Next.js, Java, Python을 활용하여 3년 이상 확장 가능한 웹 어플리케이션을 개발해온 풀스택 소프트웨어 엔지니어입니다. 엔터프라이즈 환경과 스타트업에서 다양한 경험을 쌓았습니다.",
      viewWork: "프로젝트 보기",
      getInTouch: "연락하기",
      scroll: "스크롤하여 탐색",
      badges: {
        shipFast: "빠른 개발속도",
        cleanCode: "클린 코드",
        problemSolver: "문제 해결능력",
      },
    },

    // About Section
    about: {
      title: "확장성을 추구하는 개발의 힘",
      paragraph1:
        "안녕하세요, 한국에 거주하는 풀스택 소프트웨어 엔지니어로, 3년 이상 확장 가능한 웹 어플리케이션을 개발해왔습니다. React, Next.js, Java, Python을 전문으로 하며, 미국 엔터프라이즈와 스타트업 환경 모두에서 일한 경험이 있습니다.",
      paragraph2:
        "미국 George Mason University에서 컴퓨터 과학 학사 학위를 Magna Cum Laude로 졸업했습니다. 스타트업, 중견기업에서 대시보드 기능 개발부터 보안 인증 시스템을 갖춘 풀스택 SaaS 플랫폼 개발까지 다양한 경험을 쌓았습니다.",
      paragraph3:
        "클린 아키텍처, CI/CD 자동화, 그리고 실제 문제를 해결하는 제품 개발에 열정을 가지고 있습니다. RESTful API 설계, Docker를 이용한 서비스 컨테이너화, 반응형 UI 개발 등 고품질의 유지보수 가능한 코드를 제공하는 데 집중합니다.",
      downloadResume: "이력서 다운로드",
      stats: {
        experience: "년 경력",
        companies: "개 회사",
        gpa: "학점",
        technologies: "개 이상 기술",
      },
    },

    // Achievements Section
    achievements: {
      title: "수상내역",
      subtitle: "혁신과 우수성으로 인정받은 경력",
      items: {
        newspaper: {
          title: "신문에 소개됨",
          description:
            "George Mason University 신문사와의 인터뷰 - 웹 브라우저 익스텐션(Chrome, Firefox, Edge)에 대해",
        },
        bestFinancial: {
          title: "최우수 금융 해킹",
          description: "PatriotHack2021 우승 - George Mason University",
        },
        secondPlace: {
          title: "2위 해커톤",
          description: "StudentHack2020 우승 - University of Manchester",
        },
        firstPlace: {
          title: "1위 해커톤",
          description: "SkyHacks2020 우승 - University of Tennessee at Martin",
        },
        thirdPlace: {
          title: "3위 해커톤",
          description: "ProfHacks2020 우승 - Rowan University",
        },
      },
    },

    // Projects Section
    projects: {
      title: "주요 프로젝트",
      subtitle: "제가 작업한 프로젝트들을 소개합니다",
      npmPackages: "NPM 패키지",
      liveDemo: "라이브 데모",
      source: "소스 코드",
      viewDetails: "자세히 보기",
      blogPost: "블로그 포스트",
      items: {
        licensingSystem: {
          description:
            "하드웨어 기반 보호 기능을 갖춘 풀스택 소프트웨어 라이선싱 플랫폼입니다. 웹 대시보드, 사용자 포털, 보안 Windows 데스크톱 클라이언트를 포함하며, Python, TypeScript, C++로 82,000줄 이상의 코드로 구성되어 있습니다.",
        },
        unicode: {
          description:
            "unicode-escaper npm 패키지를 활용한 유니코드 인코딩/디코딩 웹 유틸리티입니다. 직관적인 인터페이스로 다양한 유니코드 형식으로 텍스트를 변환할 수 있습니다.",
        },
        rateMyGmu: {
          description:
            "George Mason University 학생들을 위한 교수 평가 플랫폼입니다. 검색, 필터링, 리뷰 공유 기능을 통해 학생들의 수강 결정을 돕습니다.",
        },
        sdlc: {
          description:
            "클라이언트를 위해 제작한 모던하고 반응형인 랜딩 페이지입니다. 부드러운 애니메이션, 깔끔한 디자인, 최적화된 성능이 특징입니다.",
        },
        bdoKorean: {
          description:
            "검은사막 온라인의 한국어 패치 설치를 위한 데스크톱 애플리케이션입니다. 폰트 설치, 패치 관리, 사용자 친화적인 인터페이스를 제공합니다.",
        },
        loveLetter: {
          description:
            "바닐라 기술로 만든 인터랙티브하고 재미있는 웹 경험입니다. 프레임워크 없이 사랑스러운 러브레터 애니메이션과 상호작용을 구현했습니다.",
        },
        unicodeEscaper: {
          description:
            "유니코드 이스케이프 시퀀스를 인코딩/디코딩하는 경량 npm 패키지입니다. \\uXXXX, \\u{X}, \\xNN, HTML 엔티티, U+XXXX 등 다양한 형식을 지원합니다.",
        },
        isThenable: {
          description:
            "값이 thenable(Promise와 유사)인지 확인하는 초경량 npm 패키지입니다. Promise와 동기 값을 모두 처리할 때 유용합니다.",
        },
        isCron: {
          description:
            "cron 표현식의 유효성을 검사하는 경량 npm 패키지입니다. 표준 및 확장 cron 구문을 지원합니다.",
        },
      },
    },

    // Skills Section
    skills: {
      title: "기술 전문성",
      subtitle: "아이디어를 현실로 만드는 기술과 도구들",
      techTitle: "사용 기술",
      categories: {
        frontend: "프론트엔드",
        backend: "백엔드",
        cloudDevops: "클라우드 & DevOps",
      },
    },

    // Experience Section
    experience: {
      title: "경력 사항",
      subtitle: "제 전문적인 여정과 함께한 회사들",
      educationTitle: "학력",
      education: {
        degree: "컴퓨터 과학 학사",
        description: "학점: 3.8/4.0 - 우등생 명단 | Magna Cum Laude 졸업",
      },
      items: {
        founder: {
          title: "풀스택 소프트웨어 엔지니어",
          description:
            "보안 인증 시스템과 데스크톱 클라이언트를 갖춘 풀스택 SaaS 플랫폼을 개발하고 있습니다.",
          highlights: [
            "Next.js 14, TypeScript 프론트엔드와 FastAPI, PostgreSQL 백엔드로 풀스택 SaaS 플랫폼 구축",
            "HWID 바인딩, JWT 인증, AES-256 암호화를 적용한 보안 라이선스 관리 시스템 개발",
            "ImGui를 활용한 C++17 Windows 데스크톱 클라이언트 제작, 자동 업데이트 및 서버 기반 인증 구현",
          ],
        },
        army: {
          title: "네트워크 관리/운용병",
          description:
            "여단내에서 군사 작전을 지원하는 인트라넷 인프라를 유지 관리하고 보안을 담당했습니다.",
          highlights: [
            "1,000명 이상의 인원을 지원하는 인트라넷 인프라 유지 관리, 99% 이상 가동률 달성",
            "기밀 통신 보호를 위한 보안 프로토콜 구현 및 정기 시스템 감사 수행",
            "시간에 민감한 상황에서 네트워크 문제 해결 및 장애 조치",
          ],
        },
        ustigers: {
          title: "풀스택 소프트웨어 엔지니어",
          description:
            "Agile 환경에서 React와 Spring Boot를 활용한 풀스택 웹 애플리케이션 개발.",
          highlights: [
            "React.js와 JavaScript로 반응형 UI 개발, 애플리케이션 사용성 및 성능 향상",
            "Java와 Spring Boot를 사용하여 프론트엔드-백엔드 원활한 통신을 위한 RESTful API 설계 및 구축",
            "AWS EC2, S3, RDS 등 서비스를 활용한 애플리케이션 배포 및 관리로 확장성 확보",
            "Jenkins와 Docker로 빌드 및 배포 파이프라인 자동화, CI/CD 워크플로우 간소화",
            "Agile 환경에서 여러 팀과 협업하여 일정에 맞춰 기능 개발",
          ],
        },
        sciencelogic: {
          title: "소프트웨어 엔지니어",
          description:
            "엔터프라이즈 모니터링 플랫폼의 대시보드 기능을 개발하고 개선했습니다.",
          highlights: [
            "Next.js, React, GraphQL을 사용하여 대시보드 기능 개발 및 개선, 시니어 엔지니어와 협업하여 프로덕션 레벨 코드 제공",
            "유닛 테스트 및 통합 테스트 작성으로 코드 신뢰성 향상 및 회귀 문제 감소",
            "레거시 PHP 시스템 유지보수 및 업데이트, Docker 컨테이너 배포 지원",
            "대시보드 전반의 버그 식별 및 해결, 전반적인 사용자 경험 및 시스템 안정성 개선",
          ],
        },
        sdlcJunior: {
          title: "주니어 소프트웨어 엔지니어",
          description:
            "엔터프라이즈 클라이언트를 위한 반응형 UI와 백엔드 API를 개발했습니다.",
          highlights: [
            "React.js와 JavaScript로 반응형 UI 개발, 사용성 및 성능 개선",
            "Java와 Spring Boot로 프론트엔드-백엔드 원활한 통신을 위한 RESTful API 설계 및 구축",
          ],
        },
      },
    },

    // Contact Section
    contact: {
      title: "연락하기",
      subtitle:
        "흥미로운 프로젝트가 있으신가요? 어떻게 협업할 수 있을지 이야기해요",
      getInTouch: "연락하기",
      description:
        "새로운 프로젝트와 기회에 항상 관심이 있습니다. 질문이 있거나 인사를 나누고 싶으시면 연락주세요!",
      connectWithMe: "소셜 미디어",
      info: {
        email: {
          label: "이메일",
        },
        location: {
          label: "위치",
          value: "대한민국",
        },
        availability: {
          label: "상태",
          value: "조율후 연락 가능합니다",
        },
      },
      form: {
        name: "이름",
        namePlaceholder: "홍길동",
        email: "이메일",
        emailPlaceholder: "your@email.com",
        subject: "제목",
        subjectPlaceholder: "프로젝트 문의",
        message: "메시지",
        messagePlaceholder: "프로젝트에 대해 알려주세요...",
        send: "메시지 보내기",
      },
      footer: {
        text: "열정이 담긴 개발자가 한 디자인 & 개발",
        copyright: "© 2025 Jeong Min Cho. All rights reserved.",
      },
    },

    // Licensing System Project Page
    licensingSystem: {
      backToProjects: "프로젝트로 돌아가기",
      title: "ShieldMod",
      links: {
        saas: "라이브 SaaS",
        blogPost: "블로그 포스트",
      },
      subtitle:
        "하드웨어 기반 보호 기능을 갖춘 풀스택 소프트웨어 라이선싱 플랫폼입니다. 웹 대시보드, 사용자 포털, 보안 Windows 데스크톱 클라이언트를 포함합니다.",
      meta: {
        type: "프로젝트 유형",
        typeValue: "풀스택 플랫폼",
        codebase: "전체 코드베이스",
        role: "역할",
        roleValue: "풀스택 개발자",
      },
      architecture: {
        title: "시스템 아키텍처",
        description:
          "이 플랫폼은 안전한 소프트웨어 라이선싱과 배포를 제공하기 위해 함께 작동하는 4개의 주요 컴포넌트로 구성되어 있습니다.",
      },
      componentsTitle: "컴포넌트",
      components: {
        backend: { title: "백엔드 API" },
        frontend: { title: "관리자 대시보드 & 사용자 포털" },
        desktop: { title: "Windows 데스크톱 클라이언트" },
        module: { title: "클라이언트 모듈" },
      },
      techStack: "기술 스택",
      keyFeatures: "주요 기능",
      metrics: "지표",
      authFlow: {
        title: "인증 플로우",
        description:
          "웹 대시보드 세션과 데스크톱 클라이언트 JWT 토큰을 모두 지원하는 이중 인증 시스템입니다.",
      },
      encryption: {
        title: "파일 암호화 플로우",
        description:
          "AES-256-GCM 암호화와 사용자별 HKDF 파생 키를 사용한 안전한 파일 배포입니다.",
      },
      security: {
        title: "보안 아키텍처",
        description:
          "플랫폼을 보호하는 다중 보안 레이어를 갖춘 심층 방어 접근 방식입니다.",
      },
      deployment: {
        title: "배포 아키텍처",
        description:
          "쉬운 확장과 관리를 위해 Docker Compose를 사용한 컨테이너화된 배포입니다.",
      },
      stats: {
        title: "코드 통계",
        component: "컴포넌트",
        language: "언어",
        loc: "코드 라인 수",
        total: "합계",
      },
      techOverview: {
        title: "기술 개요",
        whyTitle: "왜 이 기술들을 선택했나?",
        backend: {
          title: "백엔드: Python + FastAPI",
          description:
            "FastAPI의 비동기 우선 설계는 동시 API 요청을 효율적으로 처리합니다. Pydantic과 함께 타입 힌트는 자동 검증과 문서화를 제공합니다. SQLAlchemy 2.0의 비동기 지원은 논블로킹 데이터베이스 작업을 보장합니다.",
        },
        frontend: {
          title: "프론트엔드: Next.js 14 + TypeScript",
          description:
            "App Router는 최적의 성능을 위한 서버 컴포넌트를 가능하게 합니다. TypeScript는 컴파일 시점에 오류를 잡아냅니다. TanStack Query는 자동 캐싱과 리페칭으로 서버 상태를 처리합니다.",
        },
        desktop: {
          title: "데스크톱: C++17 with DirectX/ImGui",
          description:
            "암호화 연산을 위한 네이티브 성능. HWID 생성을 위한 직접적인 하드웨어 접근. ImGui는 최소한의 오버헤드로 즉각적인 렌더링을 제공합니다.",
        },
        infrastructure: {
          title: "인프라: PostgreSQL + Redis + Docker",
          description:
            "PostgreSQL은 복잡한 쿼리와 ACID 트랜잭션을 처리합니다. Redis는 밀리초 이하의 캐싱과 세션 저장소를 제공합니다. Docker는 환경 간 일관된 배포를 보장합니다.",
        },
      },
      architectureDetails: {
        title: "전체 동작 방식",
        step1: {
          title: "관리자가 라이선스 키 생성",
          description:
            "Next.js 웹 대시보드를 통해 관리자는 맞춤형 만료 날짜와 활성화 제한이 있는 라이선스 키를 생성합니다.",
        },
        step2: {
          title: "사용자가 데스크톱 클라이언트 다운로드",
          description:
            "최종 사용자는 라이선스 키를 받고 C++ Windows 클라이언트 애플리케이션을 다운로드합니다.",
        },
        step3: {
          title: "클라이언트가 하드웨어 바인딩으로 인증",
          description:
            "데스크톱 클라이언트는 하드웨어 ID(HWID)와 함께 자격 증명을 FastAPI 백엔드로 전송하고, 백엔드는 기기를 등록하고 바인딩합니다.",
        },
        step4: {
          title: "보안 파일 배달",
          description:
            "클라이언트는 AES-256-GCM 암호화된 파일을 다운로드하고, HKDF 파생 키를 사용해 메모리에서 복호화하며, 하트비트를 통해 주기적으로 라이선스를 검증합니다.",
        },
        step5: {
          title: "실시간 모니터링",
          description:
            "모든 작업은 PostgreSQL에 로깅되고, Redis에 캐싱되며, 관리자는 대시보드를 통해 모든 것을 실시간으로 모니터링할 수 있습니다.",
        },
      },
      authDetails: {
        web: {
          title: "웹 대시보드 (세션 기반)",
          flow: "브라우저 → POST /auth/login → HTTP-only 쿠키 설정 → 완료",
          items: [
            "HTTP-only 쿠키로 XSS 토큰 탈취 방지",
            "빠른 검증을 위해 Redis에 세션 저장",
            "자동 CSRF 보호",
          ],
        },
        desktop: {
          title: "데스크톱 클라이언트 (JWT 기반)",
          flow: "클라이언트 → POST /auth/client/login (HWID 포함) → JWT 토큰",
          items: [
            "수명이 짧은 액세스 토큰 (15분)",
            "수명이 긴 리프레시 토큰 (7일)",
            "기기 확인을 위한 하드웨어 ID 바인딩",
            "만료 전 사전 토큰 갱신",
          ],
        },
        multiDeviceLabel: "다중 기기 지원:",
        multiDevice:
          "사용자는 설정 가능한 수만큼의 기기를 등록할 수 있습니다. 각 기기는 닉네임, 처음 확인 날짜, 마지막 활동 타임스탬프와 함께 독립적으로 추적됩니다.",
      },
      encryptionDetails: {
        step1: {
          title: "서버 측 암호화",
          description:
            "파일은 마스터 키를 사용하여 AES-256-GCM으로 암호화됩니다. 암호화된 형식에는 12바이트 논스, 가변 길이 암호문, 16바이트 인증 태그가 포함됩니다.",
        },
        step2: {
          title: "HKDF 키 파생",
          description:
            "사용자가 다운로드를 요청하면 사용자 ID와 액세스 토큰을 사용하여 HKDF-SHA256으로 고유한 복호화 키가 파생됩니다. 키는 저장되지 않고 파생되어 공격 표면을 줄입니다.",
        },
        step3: {
          title: "인메모리 복호화",
          description:
            "데스크톱 클라이언트는 파일을 완전히 메모리에서 복호화합니다. 평문은 디스크에 닿지 않아, 도난당한 암호화 파일은 유효한 자격 증명 없이는 쓸모가 없습니다.",
        },
        whyMattersLabel: "왜 중요한가:",
        whyMatters:
          "각 사용자는 고유한 복호화 키를 받습니다. 공격자가 암호화된 파일을 가로채더라도 사용자의 유효한 액세스 토큰과 사용자 ID 없이는 복호화할 수 없습니다.",
      },
      deploymentDetails: {
        postgres: {
          title: "PostgreSQL",
          description:
            "데이터 내구성을 위한 영구 볼륨이 있는 기본 데이터베이스. 사용자, 라이선스, 세션, 감사 로그를 저장합니다.",
        },
        redis: {
          title: "Redis",
          description:
            "세션 저장, 속도 제한 카운터, 자주 접근하는 데이터를 위한 인메모리 캐시.",
        },
        fastapi: {
          title: "FastAPI 백엔드",
          description:
            "개발 모드에서 자동 리로드가 있는 Uvicorn에서 실행되는 비동기 Python API 서버.",
        },
        nextjs: {
          title: "Next.js 프론트엔드",
          description:
            "최적의 성능을 위한 서버 사이드 렌더링이 있는 React 기반 대시보드.",
        },
        volumesLabel: "영구 볼륨:",
        volumes:
          "postgres_data, redis_data, file_storage 볼륨은 컨테이너 재시작 시에도 데이터를 보존합니다. 모든 서비스는 내부 Docker 네트워크를 통해 통신합니다.",
      },
      labels: {
        why: "이유:",
      },
      deepDive: {
        title: "기술 심층 분석",
        description:
          "보안 및 아키텍처 결정을 보여주는 핵심 구현 세부 사항입니다.",
      },
      challenges: {
        title: "도전과 해결",
        description: "개발 중 직면한 복잡한 문제들과 해결 방법입니다.",
      },
      learnings: {
        title: "핵심 교훈",
        description: "이 프로덕션 시스템을 구축하며 얻은 인사이트입니다.",
      },
      securityLayers: {
        layer: "레이어",
        network: {
          title: "네트워크 보안",
          items: [
            "모든 통신에 HTTPS/TLS 적용",
            "속도 제한 (Redis 토큰 버킷)",
            "IP 차단 목록 미들웨어",
            "CORS 설정",
          ],
        },
        auth: {
          title: "인증",
          items: [
            "JWT 토큰 (15분 액세스, 7일 리프레시)",
            "HTTP-only 세션 쿠키",
            "HWID 바인딩",
            "다중 기기 제한",
          ],
        },
        data: {
          title: "데이터 보호",
          items: [
            "Argon2id 비밀번호 해싱",
            "AES-256-GCM 파일 암호화",
            "ECDSA 서명 검증",
            "HKDF 키 파생",
          ],
        },
        app: {
          title: "애플리케이션 보안",
          items: [
            "입력 검증 (Pydantic/Zod)",
            "SQL 인젝션 방지",
            "XSS 방지 (React)",
            "CSRF 보호",
          ],
        },
      },
      codeExamples: {
        auth: {
          title: "이중 인증 시스템",
          description:
            "웹 세션과 데스크톱 JWT 토큰을 하드웨어 바인딩과 함께 지원",
        },
        encryption: {
          title: "AES-256-GCM 파일 암호화",
          description: "인증된 암호화를 사용한 서버 측 파일 암호화",
        },
        decryption: {
          title: "인메모리 복호화 (C++)",
          description:
            "파일을 완전히 메모리에서 복호화 - 평문이 디스크에 닿지 않음",
        },
        hwid: {
          title: "하드웨어 ID 생성",
          description: "여러 하드웨어 컴포넌트로부터 안정적인 기기 식별",
        },
      },
      challengeLabels: {
        problem: "문제",
        solution: "해결",
      },
      challengeItems: {
        tokenRefresh: {
          title: "동시 토큰 갱신",
          problem:
            "여러 API 호출이 동시에 토큰 갱신을 트리거하여 경쟁 조건을 발생시킬 수 있습니다.",
          solution:
            "갱신 중 모든 요청을 일시 중지하고 새 토큰이 준비되면 해제하는 요청 큐를 구현했습니다.",
        },
        session: {
          title: "크로스 플랫폼 세션 관리",
          problem:
            "웹 세션은 쿠키를 사용하지만 데스크톱 클라이언트는 쿠키를 사용할 수 없습니다.",
          solution:
            "두 세션 유형을 모두 처리하는 공유 세션 모델로 병렬 인증 시스템을 구현했습니다.",
        },
        hwid: {
          title: "하드웨어 ID 안정성",
          problem:
            '일부 HWID 구성 요소(예: MAC 주소)는 자주 변경되어 잘못된 "새 기기" 감지를 발생시킵니다.',
          solution:
            "안정적인 구성 요소(CPU ID, 메인보드 시리얼)만 사용하고 70% 임계값으로 유사도 검사를 구현합니다.",
        },
      },
      learningItems: {
        security: {
          title: "보안은 아키텍처다",
          description:
            "보안은 마지막에 추가하는 것이 아니라 처음부터 설계에 포함되어야 합니다. 모든 레이어에 대한 고려가 필요합니다.",
        },
        async: {
          title: "비동기는 필수다",
          description:
            "동시 사용자를 처리하는 모든 시스템에서 블로킹 I/O는 병목입니다. 100% 비동기 아키텍처가 이를 해결합니다.",
        },
        typeSafety: {
          title: "타입 안전성이 시간을 절약한다",
          description:
            "타입 정의에 투자한 시간은 더 적은 버그와 쉬운 리팩토링으로 보답받습니다. TypeScript + Pydantic + Zod.",
        },
        crossPlatform: {
          title: "크로스 플랫폼은 어렵다",
          description:
            "웹과 데스크톱은 근본적으로 다른 모델을 가지고 있습니다. 차이점을 추상화하려면 신중한 설계가 필요합니다.",
        },
        monitoring: {
          title: "모니터링은 선택이 아니다",
          description:
            "포괄적인 로그 없이는 프로덕션 문제 디버깅이 거의 불가능합니다. 모든 것을 로깅하세요.",
        },
      },
    },
  },
};

export type Language = "en" | "ko";
export type TranslationKey = keyof typeof translations.en;
