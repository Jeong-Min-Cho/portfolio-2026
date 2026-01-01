export const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
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

    // Projects Section
    projects: {
      title: "Featured Work",
      subtitle:
        "A selection of projects I've worked on, showcasing my skills and expertise",
      npmPackages: "NPM Packages",
      liveDemo: "Live Demo",
      source: "Source",
      viewDetails: "View Details",
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
            "Integrated third-party APIs including Telegram Bot for notifications and OCR services for text recognition",
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
        sdlcSenior: {
          title: "Fullstack Software Engineer",
          description:
            "Returned to lead development of enterprise applications with expanded responsibilities.",
          highlights: [
            "Led frontend development with React, building reusable components and implementing state management",
            "Developed and maintained RESTful APIs using Java and Spring Boot for enterprise client applications",
            "Deployed and managed applications on AWS using EC2, S3, and RDS for scalability",
            "Automated build and deployment pipelines with Jenkins and Docker, streamlining CI/CD workflow",
            "Collaborated with cross-functional teams in an Agile environment to deliver features on schedule",
          ],
        },
        sciencelogic: {
          title: "Software Engineer",
          description:
            "Built and enhanced dashboard features for enterprise monitoring platform.",
          highlights: [
            "Built and enhanced dashboard features using Next.js, React, and GraphQL",
            "Wrote unit and integration tests improving code reliability and reducing regression issues",
            "Maintained legacy PHP systems while supporting containerized deployments with Docker",
            "Identified and resolved bugs across the dashboard, improving UX and system stability",
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
      title: "Software Licensing & Distribution System",
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
      },
      deepDive: {
        title: "Technical Deep Dive",
        description: "Key implementation details showcasing the security and architecture decisions.",
      },
      challenges: {
        title: "Challenges & Solutions",
        description: "Complex problems encountered during development and how they were solved.",
      },
      learnings: {
        title: "Key Learnings",
        description: "Insights gained from building this production-ready system.",
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

    // Projects Section
    projects: {
      title: "주요 프로젝트",
      subtitle: "제가 작업한 프로젝트들을 소개합니다",
      npmPackages: "NPM 패키지",
      liveDemo: "라이브 데모",
      source: "소스 코드",
      viewDetails: "자세히 보기",
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
            "Telegram Bot 알림 및 OCR 텍스트 인식 서비스 등 서드파티 API 연동",
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
        sdlcSenior: {
          title: "풀스택 소프트웨어 엔지니어",
          description:
            "스타트업에서 책임감있게 애플리케이션 개발을 이끌었습니다.",
          highlights: [
            "React로 프론트엔드 개발 주도, 재사용 가능한 컴포넌트 및 상태 관리 구현",
            "Java와 Spring Boot를 사용하여 클라이언트용 RESTful API 개발 및 유지보수",
            "AWS EC2, S3, RDS를 활용한 애플리케이션 배포 및 관리",
            "Jenkins와 Docker로 빌드 및 배포 파이프라인 자동화, CI/CD 워크플로우 간소화",
            "Agile 환경에서 팀과 협업하여 일정에 맞춰 기능 개발",
          ],
        },
        sciencelogic: {
          title: "소프트웨어 엔지니어",
          description:
            "엔터프라이즈 모니터링 플랫폼의 대시보드 기능을 개발하고 개선했습니다.",
          highlights: [
            "Next.js, React, GraphQL을 사용하여 대시보드 기능 개발 및 개선",
            "유닛 테스트 및 통합 테스트 작성으로 코드 신뢰성 향상 및 회귀 문제 감소",
            "레거시 PHP 시스템 유지보수 및 Docker 컨테이너 배포 지원",
            "대시보드 전반의 버그 식별 및 해결, UX 및 시스템 안정성 개선",
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
      title: "소프트웨어 라이선싱 & 배포 시스템",
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
      },
      deepDive: {
        title: "기술 심층 분석",
        description: "보안 및 아키텍처 결정을 보여주는 핵심 구현 세부 사항입니다.",
      },
      challenges: {
        title: "도전과 해결",
        description: "개발 중 직면한 복잡한 문제들과 해결 방법입니다.",
      },
      learnings: {
        title: "핵심 교훈",
        description: "이 프로덕션 시스템을 구축하며 얻은 인사이트입니다.",
      },
    },
  },
};

export type Language = "en" | "ko";
export type TranslationKey = keyof typeof translations.en;
