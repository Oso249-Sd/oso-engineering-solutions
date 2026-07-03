import {
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarClock,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  FileBarChart2,
  FileCheck2,
  FileText,
  GraduationCap,
  HardHat,
  HeartPulse,
  Home,
  Landmark,
  Layers3,
  MapPinned,
  NotebookPen,
  Ruler,
  ShieldCheck,
  Sparkles,
  Timer,
  UsersRound
} from "lucide-react";
import type {Locale} from "@/i18n/routing";

export type IconName =
  | "BadgeCheck"
  | "Blocks"
  | "BriefcaseBusiness"
  | "Building2"
  | "Calculator"
  | "CalendarClock"
  | "ClipboardCheck"
  | "DraftingCompass"
  | "Factory"
  | "FileBarChart2"
  | "FileCheck2"
  | "FileText"
  | "GraduationCap"
  | "HardHat"
  | "HeartPulse"
  | "Home"
  | "Landmark"
  | "Layers3"
  | "MapPinned"
  | "NotebookPen"
  | "Ruler"
  | "ShieldCheck"
  | "Sparkles"
  | "Timer"
  | "UsersRound";

export const iconMap = {
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarClock,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  FileBarChart2,
  FileCheck2,
  FileText,
  GraduationCap,
  HardHat,
  HeartPulse,
  Home,
  Landmark,
  Layers3,
  MapPinned,
  NotebookPen,
  Ruler,
  ShieldCheck,
  Sparkles,
  Timer,
  UsersRound
} satisfies Record<IconName, typeof BadgeCheck>;

export const serviceSlugs = [
  "civil-engineering",
  "structural-drafting",
  "2d-cad-drawings",
  "3d-modeling",
  "revit-bim",
  "quantity-surveying",
  "boq-preparation",
  "cost-estimation",
  "material-takeoff",
  "construction-documentation",
  "project-planning",
  "project-scheduling",
  "engineering-consulting",
  "hse-documentation",
  "technical-reports"
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

const content = {
  en: {
    localeName: "English",
    dir: "ltr",
    brand: "OSO Engineering Solutions",
    shortBrand: "OSO",
    nav: [
      {label: "Home", href: "/"},
      {label: "About", href: "/about"},
      {label: "Services", href: "/services"},
      {label: "Portfolio", href: "/portfolio"},
      {label: "Industries", href: "/industries"},
      {label: "Blog", href: "/blog"},
      {label: "Careers", href: "/careers"},
      {label: "Contact", href: "/contact"}
    ],
    actions: {
      quote: "Request a Quote",
      exploreServices: "Explore Services",
      viewPortfolio: "View Portfolio",
      contactUs: "Contact Us",
      applyNow: "Apply Now",
      readMore: "Read More",
      submit: "Submit",
      sendMessage: "Send Message",
      backHome: "Back to Home",
      all: "All",
      search: "Search insights",
      newsletter: "Join the newsletter",
      backToTop: "Back to top",
      acceptCookies: "Accept",
      declineCookies: "Decline",
      live: "Live",
      minRead: "min read"
    },
    home: {
      heroKicker: "Civil Engineering Consultancy",
      heroTitle: "Engineering Solutions That Build the Future",
      heroText:
        "OSO Engineering Solutions partners with builders, architects, developers, and public organizations to deliver precise drawings, reliable quantities, intelligent models, and documentation that moves projects forward.",
      stats: [
        {label: "Projects Completed", value: 320, suffix: "+"},
        {label: "Years of Experience", value: 12, suffix: "+"},
        {label: "Countries Served", value: 8, suffix: "+"},
        {label: "Client Satisfaction", value: 98, suffix: "%"}
      ],
      sections: {
        servicesTitle: "Specialized Engineering Services",
        servicesText:
          "From early feasibility to closeout documentation, our teams bring disciplined engineering thinking to every project stage.",
        whyTitle: "Why Clients Choose OSO",
        whyText:
          "A consultancy model built around clarity, accountable delivery, and technical review.",
        portfolioTitle: "Selected Work",
        industriesTitle: "Industries We Support",
        testimonialsTitle: "Trusted by Project Teams",
        processTitle: "A Clear Delivery Process",
        ctaTitle: "Have drawings, quantities, or documentation to deliver?",
        ctaText:
          "Share the project brief and we will respond with a practical scope, timeline, and quotation."
      }
    },
    why: [
      {
        title: "Engineering review at every milestone",
        text: "Senior checks are built into each delivery stage so documentation is coordinated before it reaches the site."
      },
      {
        title: "Cost and quantity clarity",
        text: "Structured takeoffs, bill formats, and assumptions help teams make procurement and tender decisions with confidence."
      },
      {
        title: "Bilingual, international collaboration",
        text: "We support remote teams, consultant workflows, and cross-border documentation requirements."
      },
      {
        title: "Responsive delivery culture",
        text: "Clear communication, realistic schedules, and rapid issue resolution keep momentum high."
      }
    ],
    process: [
      {
        title: "Consultation",
        text: "We clarify scope, standards, available drawings, project risks, and the required output format."
      },
      {
        title: "Planning",
        text: "A delivery plan defines milestones, responsibilities, review gates, and coordination needs."
      },
      {
        title: "Design",
        text: "Engineers, modelers, and quantity teams produce coordinated technical deliverables."
      },
      {
        title: "Delivery",
        text: "Final packages are issued with clean naming, revision control, and practical documentation."
      },
      {
        title: "Support",
        text: "We stay available for clarifications, tender responses, construction queries, and revisions."
      }
    ],
    services: [
      {
        slug: "civil-engineering",
        icon: "Building2",
        title: "Civil Engineering",
        summary:
          "Practical engineering support for buildings, infrastructure, and development works.",
        overview:
          "We provide civil engineering input that balances constructability, code alignment, and project economics. Our work supports design teams, contractors, and owners with clear technical deliverables.",
        benefits: [
          "Reliable technical direction for complex project stages",
          "Constructability-focused review before drawings move to site",
          "Documentation suited for consultants, contractors, and authorities"
        ]
      },
      {
        slug: "structural-drafting",
        icon: "DraftingCompass",
        title: "Structural Drafting",
        summary:
          "Clean structural plans, sections, details, and schedules prepared for review and construction.",
        overview:
          "Our drafting team converts engineering intent into coordinated structural drawings with disciplined layers, references, dimensions, and revision control.",
        benefits: [
          "Clear drawing packages that reduce ambiguity",
          "Consistent standards across plans, sections, and details",
          "Fast coordination with engineers and architects"
        ]
      },
      {
        slug: "2d-cad-drawings",
        icon: "Ruler",
        title: "2D CAD Drawings",
        summary:
          "Accurate two-dimensional CAD drawings for design, tender, approval, and construction use.",
        overview:
          "We produce precise CAD documentation for architectural, civil, structural, and infrastructure requirements with careful file organization.",
        benefits: [
          "Layered, editable CAD files",
          "Drawing standards aligned with project requirements",
          "Efficient conversion from sketches, PDFs, or legacy files"
        ]
      },
      {
        slug: "3d-modeling",
        icon: "Layers3",
        title: "3D Modeling",
        summary:
          "Coordinated three-dimensional models that help teams visualize and resolve project complexity.",
        overview:
          "Our 3D modeling support improves coordination, presentation, and early issue discovery across structural and architectural interfaces.",
        benefits: [
          "Better spatial understanding for stakeholders",
          "Early detection of coordination issues",
          "Models suitable for visualization and technical review"
        ]
      },
      {
        slug: "revit-bim",
        icon: "Blocks",
        title: "Revit BIM",
        summary:
          "Building information modeling for coordinated design, documentation, and quantity workflows.",
        overview:
          "We build information-rich models that support design coordination, documentation extraction, quantity review, and multidisciplinary collaboration.",
        benefits: [
          "Coordinated model-based documentation",
          "Improved clash awareness and revision control",
          "Model data ready for schedules and quantity workflows"
        ]
      },
      {
        slug: "quantity-surveying",
        icon: "Calculator",
        title: "Quantity Surveying",
        summary:
          "Commercially aware quantity services for tendering, procurement, and cost control.",
        overview:
          "Our quantity surveying support gives project teams dependable measurements, assumptions, and cost-sensitive insights.",
        benefits: [
          "Transparent measurement methodology",
          "Tender-ready quantities and summaries",
          "Support for value engineering decisions"
        ]
      },
      {
        slug: "boq-preparation",
        icon: "ClipboardCheck",
        title: "BOQ Preparation",
        summary:
          "Structured bills of quantities for tender, comparison, procurement, and contract administration.",
        overview:
          "We prepare itemized bills with clear descriptions, units, quantities, and notes so teams can price work consistently.",
        benefits: [
          "Tender comparison made easier",
          "Clear item descriptions and scope boundaries",
          "Consistent formats for consultants and contractors"
        ]
      },
      {
        slug: "cost-estimation",
        icon: "FileBarChart2",
        title: "Cost Estimation",
        summary:
          "Concept, budget, and detailed estimates that help teams make informed financial decisions.",
        overview:
          "We develop cost estimates using quantities, market logic, and disciplined assumptions appropriate to the project phase.",
        benefits: [
          "Budget visibility before major commitments",
          "Clear exclusions and assumptions",
          "Support for alternatives and value options"
        ]
      },
      {
        slug: "material-takeoff",
        icon: "NotebookPen",
        title: "Material Takeoff",
        summary:
          "Accurate material quantities extracted from drawings, models, and project documentation.",
        overview:
          "We generate organized material takeoffs that support procurement, tendering, logistics planning, and cost control.",
        benefits: [
          "Traceable quantities by element or package",
          "Reduced procurement uncertainty",
          "Outputs suited for spreadsheets and tender systems"
        ]
      },
      {
        slug: "construction-documentation",
        icon: "FileCheck2",
        title: "Construction Documentation",
        summary:
          "Coordinated drawing and document packages prepared for real construction workflows.",
        overview:
          "We assemble construction documentation that is clear, coordinated, revision-controlled, and practical for site teams.",
        benefits: [
          "Clear issue packages for contractors",
          "Coordinated references and drawing numbering",
          "Improved handover between design and execution"
        ]
      },
      {
        slug: "project-planning",
        icon: "CalendarClock",
        title: "Project Planning",
        summary:
          "Structured planning support that turns project scope into milestones, dependencies, and actions.",
        overview:
          "We help teams define deliverables, sequencing, resourcing logic, risk items, and practical planning frameworks.",
        benefits: [
          "Project milestones translated into actionable work",
          "Better alignment between design, procurement, and site activity",
          "Practical planning documents for stakeholder review"
        ]
      },
      {
        slug: "project-scheduling",
        icon: "Timer",
        title: "Project Scheduling",
        summary:
          "Program and schedule support for tracking progress, dependencies, and delivery risk.",
        overview:
          "We prepare and review project schedules that support realistic coordination, progress reporting, and recovery planning.",
        benefits: [
          "Clear dependencies and critical activities",
          "Progress tracking aligned with deliverables",
          "Schedule narratives for client and consultant review"
        ]
      },
      {
        slug: "engineering-consulting",
        icon: "UsersRound",
        title: "Engineering Consulting",
        summary:
          "Technical advisory support for owners, consultants, contractors, and multidisciplinary teams.",
        overview:
          "Our consulting work helps teams evaluate options, resolve technical questions, and improve the quality of project decisions.",
        benefits: [
          "Independent engineering perspective",
          "Practical recommendations grounded in project constraints",
          "Support for reviews, tender queries, and technical meetings"
        ]
      },
      {
        slug: "hse-documentation",
        icon: "ShieldCheck",
        title: "HSE Documentation",
        summary:
          "Health, safety, and environmental documents prepared for organized project compliance.",
        overview:
          "We develop HSE documentation that supports site readiness, method planning, risk communication, and client submissions.",
        benefits: [
          "Clear safety documents for project teams",
          "Structured risk and method information",
          "Submission-ready formatting and revision control"
        ]
      },
      {
        slug: "technical-reports",
        icon: "FileText",
        title: "Technical Reports",
        summary:
          "Professional reports for analysis, review, decisions, claims, and project communication.",
        overview:
          "We prepare technical reports that organize evidence, engineering reasoning, visuals, conclusions, and recommendations.",
        benefits: [
          "Clear argument structure and executive summaries",
          "Evidence-led technical communication",
          "Professional formatting for stakeholders"
        ]
      }
    ],
    servicePage: {
      heroLabel: "Service",
      benefitsTitle: "Benefits",
      workflowTitle: "Workflow",
      galleryTitle: "Project Gallery",
      faqTitle: "Frequently Asked Questions",
      relatedTitle: "Related Services",
      ctaTitle: "Need this service for an active project?",
      ctaText:
        "Send the drawings, scope, and deadline. We will map the fastest clean route to delivery.",
      workflow: [
        "Brief and document review",
        "Scope confirmation and standards alignment",
        "Production with internal technical checks",
        "Client review, revisions, and final issue"
      ],
      faqs: [
        {
          question: "Can OSO work from incomplete drawings?",
          answer:
            "Yes. We can start with sketches, PDFs, models, or partial information and clearly record assumptions before production."
        },
        {
          question: "Do you support international clients?",
          answer:
            "Yes. We work remotely with clients in multiple countries and can align outputs to the required standards and file formats."
        },
        {
          question: "How quickly can you start?",
          answer:
            "For urgent scopes, we can usually review the brief and confirm a delivery plan within one business day."
        }
      ]
    },
    industries: [
      {
        icon: "HardHat",
        title: "Construction",
        text: "Documentation, quantities, and coordination support for live construction teams."
      },
      {
        icon: "MapPinned",
        title: "Infrastructure",
        text: "Support for roads, utilities, bridges, and public realm delivery."
      },
      {
        icon: "Home",
        title: "Residential",
        text: "Drawing, quantity, and reporting services for villas, apartments, and private homes."
      },
      {
        icon: "BriefcaseBusiness",
        title: "Commercial",
        text: "Technical documentation for offices, retail, hospitality, and mixed-use projects."
      },
      {
        icon: "Factory",
        title: "Industrial",
        text: "Planning and documentation support for plants, warehouses, and technical facilities."
      },
      {
        icon: "Landmark",
        title: "Public Sector",
        text: "Organized deliverables for authorities, institutions, and public procurement."
      },
      {
        icon: "Sparkles",
        title: "Oil & Gas",
        text: "Controlled documentation and quantity support for demanding technical environments."
      },
      {
        icon: "GraduationCap",
        title: "Education",
        text: "Engineering packages for schools, campuses, and learning facilities."
      },
      {
        icon: "HeartPulse",
        title: "Healthcare",
        text: "Precise coordination for clinics, hospitals, and specialist healthcare spaces."
      }
    ],
    portfolio: [
      {
        slug: "urban-bridge-corridor",
        category: "Infrastructure",
        title: "Urban Bridge Corridor",
        summary:
          "Coordinated drawings and quantity support for a bridge corridor linking mixed-use districts.",
        software: ["Revit", "AutoCAD", "Excel"],
        challenge:
          "The client needed rapid coordination between structural layouts, temporary works notes, and tender quantities.",
        solution:
          "OSO built a structured drawing register, produced coordinated drafting outputs, and aligned quantities with tender packages.",
        outcome:
          "The package reduced review comments and helped the contractor issue tender clarifications faster.",
        image: "/images/infrastructure-portfolio.png"
      },
      {
        slug: "residential-tower-documentation",
        category: "Residential",
        title: "Residential Tower Documentation",
        summary:
          "Construction documentation and model coordination for a high-rise residential development.",
        software: ["Revit", "Navisworks", "AutoCAD"],
        challenge:
          "Architecture and structural updates were moving quickly and drawing revisions needed tighter control.",
        solution:
          "We created a coordinated revision workflow and extracted drawing packages directly from the reviewed model.",
        outcome:
          "Site teams received clearer packages with better traceability and fewer duplicate queries.",
        image: "/images/engineering-hero.png"
      },
      {
        slug: "commercial-fitout-quantities",
        category: "Commercial",
        title: "Commercial Fit-Out Quantities",
        summary:
          "Detailed takeoff and bill preparation for a premium office fit-out tender.",
        software: ["Bluebeam", "Excel", "AutoCAD"],
        challenge:
          "The tender deadline was tight and the drawing information had several scope gaps.",
        solution:
          "OSO produced traceable takeoff sheets, noted assumptions, and structured the bill for pricing comparison.",
        outcome:
          "The client compared contractor pricing with greater confidence and fewer scope disputes.",
        image: "/images/infrastructure-portfolio.png"
      }
    ],
    portfolioLabels: {
      challenge: "Client challenge",
      solution: "Solution",
      outcome: "Outcome",
      software: "Software used",
      caseStudy: "Case study"
    },
    testimonials: [
      {
        quote:
          "OSO brought order to a very compressed documentation program. Their drawings were clean, coordinated, and easy for site teams to use.",
        name: "Project Director",
        role: "Regional Contractor"
      },
      {
        quote:
          "The quantity package was transparent and traceable. It helped us tender with fewer assumptions and a better commercial position.",
        name: "Commercial Manager",
        role: "Real Estate Developer"
      },
      {
        quote:
          "Their communication is a real advantage. They understand what consultants need and respond with practical technical clarity.",
        name: "Design Lead",
        role: "Architecture Studio"
      }
    ],
    blog: [
      {
        slug: "better-boq-structure",
        category: "Quantity Surveying",
        title: "How Better BOQ Structure Reduces Tender Risk",
        excerpt:
          "A well-organized bill of quantities does more than count work. It clarifies scope, assumptions, and pricing logic.",
        body:
          "Tender risk often hides in vague item descriptions, inconsistent units, and missing assumptions. A disciplined BOQ structure gives contractors a shared pricing basis and gives clients a cleaner comparison path. The strongest bills connect drawings, specifications, measurement logic, and exclusions in one readable commercial story.",
        published: "2026-05-08"
      },
      {
        slug: "bim-for-construction-documentation",
        category: "BIM",
        title: "Using BIM to Improve Construction Documentation",
        excerpt:
          "Model-based documentation helps project teams coordinate faster when the model is governed with the right standards.",
        body:
          "BIM improves documentation when teams define model purpose, naming, levels of detail, and review gates early. The value is not only in a three-dimensional view. It is in consistent schedules, coordinated sections, and a single source that helps teams detect change before it becomes site confusion.",
        published: "2026-04-17"
      },
      {
        slug: "technical-reports-that-get-decisions",
        category: "Technical Reports",
        title: "Writing Technical Reports That Lead to Decisions",
        excerpt:
          "Engineering reports are most useful when they convert evidence into clear options and next steps.",
        body:
          "A strong technical report has a clear question, evidence that supports the answer, and conclusions that are practical for the project team. Visuals, assumptions, limitations, and recommendations should be easy to find. Decision-makers need enough technical depth to trust the report without having to decode the structure.",
        published: "2026-03-28"
      }
    ],
    careers: {
      title: "Careers at OSO",
      text:
        "Join a team that values precision, clear communication, and practical engineering judgment.",
      labels: {
        culture: "Company culture",
        openings: "Open positions",
        application: "Application form"
      },
      culture: [
        "Remote-friendly collaboration",
        "Technical mentorship",
        "Respect for deep work",
        "International project exposure"
      ],
      openings: [
        {
          title: "Structural CAD Technician",
          location: "Remote / Hybrid",
          type: "Full-time"
        },
        {
          title: "Quantity Surveyor",
          location: "Remote",
          type: "Contract"
        },
        {
          title: "BIM Modeler",
          location: "Remote / Project-based",
          type: "Contract"
        }
      ]
    },
    about: {
      title: "Engineering clarity for ambitious project teams",
      intro:
        "OSO Engineering Solutions is a civil engineering consultancy built for teams that need dependable technical production without losing strategic control.",
      mission:
        "To make complex engineering documentation clearer, faster, and more reliable for every stakeholder.",
      vision:
        "To become a trusted international engineering partner known for precision, responsiveness, and practical innovation.",
      values: ["Precision", "Accountability", "Innovation", "Integrity"],
      labels: {
        mission: "Mission",
        vision: "Vision",
        values: "Values",
        story: "Company Story",
        leadership: "Leadership",
        timeline: "Timeline",
        trust: "Why Clients Trust Us"
      },
      story:
        "OSO was created to close the gap between design ambition and delivery pressure. We combine drafting, modeling, quantity, planning, and reporting expertise so clients can move from uncertainty to coordinated action.",
      leadership: [
        {
          name: "Senior Engineering Leadership",
          role: "Delivery, QA, and client coordination"
        },
        {
          name: "Technical Production Leads",
          role: "Drawings, models, quantities, and reports"
        }
      ],
      timeline: [
        "Founded around practical engineering production",
        "Expanded into BIM and quantity workflows",
        "Built remote delivery systems for international clients",
        "Developing integrated consultancy packages for complex projects"
      ]
    },
    forms: {
      name: "Full name",
      email: "Email address",
      phone: "Phone number",
      company: "Company",
      country: "Country",
      message: "Message",
      service: "Service",
      budget: "Budget range",
      timeline: "Timeline",
      description: "Project description",
      upload: "Upload drawings, PDFs, or ZIP files",
      role: "Role",
      portfolio: "Portfolio or profile link",
      budgetOptions: ["Under 5k", "5k - 20k", "20k+"],
      timelineOptions: ["Urgent", "2 - 4 weeks", "Flexible"],
      success: "Thank you. Your request has been prepared for OSO's team.",
      required: "This field is required",
      invalidEmail: "Enter a valid email address",
      step: "Step",
      next: "Next",
      previous: "Previous"
    },
    contact: {
      title: "Talk to an engineering consultant",
      text:
        "Send your scope, drawings, or question. We will respond with a clear next step.",
      phone: "+1 555 012 4080",
      email: "hello@osoengineering.com",
      address: "International remote consultancy serving clients worldwide",
      hours: "Monday to Friday, 9:00 AM - 6:00 PM",
      whatsapp: "WhatsApp"
    },
    footer: {
      tagline:
        "Premium civil engineering consultancy for teams that need precision, pace, and accountability.",
      company: "Company",
      resources: "Resources",
      legal: "Legal",
      socials: ["LinkedIn", "X", "Instagram"],
      newsletterText:
        "Monthly insights on engineering documentation, quantities, planning, and delivery."
    },
    cookie:
      "We use essential cookies and preference storage to remember language, theme, and consent choices.",
    legal: {
      privacyTitle: "Privacy Policy",
      termsTitle: "Terms & Conditions",
      privacy:
        "OSO Engineering Solutions collects only the information needed to respond to enquiries, prepare quotations, and communicate about project services. Uploaded files are treated as confidential project material.",
      terms:
        "Website content is provided for general information. Project services are governed by the agreed proposal, scope, schedule, exclusions, and commercial terms issued for each engagement."
    },
    notFound: {
      title: "Page not found",
      text: "The page you are looking for may have moved or does not exist."
    }
  },
  ar: {
    localeName: "العربية",
    dir: "rtl",
    brand: "أوسو للحلول الهندسية",
    shortBrand: "أوسو",
    nav: [
      {label: "الرئيسية", href: "/"},
      {label: "من نحن", href: "/about"},
      {label: "الخدمات", href: "/services"},
      {label: "الأعمال", href: "/portfolio"},
      {label: "القطاعات", href: "/industries"},
      {label: "المدونة", href: "/blog"},
      {label: "الوظائف", href: "/careers"},
      {label: "تواصل معنا", href: "/contact"}
    ],
    actions: {
      quote: "اطلب عرض سعر",
      exploreServices: "استكشف الخدمات",
      viewPortfolio: "شاهد الأعمال",
      contactUs: "تواصل معنا",
      applyNow: "قدّم الآن",
      readMore: "اقرأ المزيد",
      submit: "إرسال",
      sendMessage: "إرسال الرسالة",
      backHome: "العودة للرئيسية",
      all: "الكل",
      search: "ابحث في المقالات",
      newsletter: "اشترك في النشرة",
      backToTop: "العودة للأعلى",
      acceptCookies: "موافقة",
      declineCookies: "رفض",
      live: "نشط",
      minRead: "دقائق قراءة"
    },
    home: {
      heroKicker: "استشارات هندسية مدنية",
      heroTitle: "حلول هندسية تبني المستقبل",
      heroText:
        "تتعاون أوسو للحلول الهندسية مع شركات البناء والمعماريين والمطورين والجهات العامة لتقديم رسومات دقيقة وكميات موثوقة ونماذج ذكية ووثائق تدفع المشاريع إلى الأمام.",
      stats: [
        {label: "مشروع مكتمل", value: 320, suffix: "+"},
        {label: "سنة خبرة", value: 12, suffix: "+"},
        {label: "دول نخدمها", value: 8, suffix: "+"},
        {label: "رضا العملاء", value: 98, suffix: "%"}
      ],
      sections: {
        servicesTitle: "خدمات هندسية متخصصة",
        servicesText:
          "من دراسة الجدوى الأولى إلى وثائق التسليم، نضيف تفكيرا هندسيا منضبطا في كل مرحلة.",
        whyTitle: "لماذا يختار العملاء أوسو",
        whyText:
          "نموذج استشاري قائم على الوضوح والتسليم المسؤول والمراجعة الفنية.",
        portfolioTitle: "نماذج من أعمالنا",
        industriesTitle: "القطاعات التي نخدمها",
        testimonialsTitle: "ثقة فرق المشاريع",
        processTitle: "منهجية تسليم واضحة",
        ctaTitle: "هل لديك رسومات أو كميات أو وثائق تحتاج إلى إنجاز؟",
        ctaText:
          "شاركنا موجز المشروع وسنرد عليك بنطاق عملي وجدول زمني وعرض سعر."
      }
    },
    why: [
      {
        title: "مراجعة هندسية عند كل مرحلة",
        text: "ندمج فحوصات فنية عليا داخل كل مرحلة حتى تصل الوثائق إلى الموقع وهي منسقة وواضحة."
      },
      {
        title: "وضوح في التكلفة والكميات",
        text: "حصر منظم وصيغ بنود وافتراضات واضحة تساعد الفرق على قرارات الشراء والمناقصات."
      },
      {
        title: "تعاون دولي ثنائي اللغة",
        text: "ندعم الفرق البعيدة وسير عمل الاستشاريين ومتطلبات الوثائق العابرة للحدود."
      },
      {
        title: "ثقافة تسليم سريعة الاستجابة",
        text: "تواصل واضح وجداول واقعية وحل سريع للملاحظات للحفاظ على تقدم المشروع."
      }
    ],
    process: [
      {
        title: "الاستشارة",
        text: "نوضح النطاق والمعايير والرسومات المتاحة ومخاطر المشروع وصيغة المخرجات المطلوبة."
      },
      {
        title: "التخطيط",
        text: "تحدد خطة التسليم المراحل والمسؤوليات ونقاط المراجعة واحتياجات التنسيق."
      },
      {
        title: "التصميم",
        text: "ينتج المهندسون والنمذجون وفرق الكميات مخرجات فنية منسقة."
      },
      {
        title: "التسليم",
        text: "تصدر الحزم النهائية بتسمية واضحة وتحكم في المراجعات ووثائق عملية."
      },
      {
        title: "الدعم",
        text: "نستمر في دعم الاستفسارات وردود المناقصات وأسئلة التنفيذ والتعديلات."
      }
    ],
    services: [
      {
        slug: "civil-engineering",
        icon: "Building2",
        title: "الهندسة المدنية",
        summary:
          "دعم هندسي عملي للمباني والبنية التحتية وأعمال التطوير.",
        overview:
          "نقدم مدخلات هندسية مدنية توازن بين قابلية التنفيذ والالتزام بالمعايير واقتصاديات المشروع، مع مخرجات فنية واضحة للفرق المالكة والاستشارية والتنفيذية.",
        benefits: [
          "توجيه فني موثوق للمراحل المعقدة",
          "مراجعة تركز على قابلية التنفيذ قبل انتقال الرسومات إلى الموقع",
          "وثائق مناسبة للاستشاريين والمقاولين والجهات الرسمية"
        ]
      },
      {
        slug: "structural-drafting",
        icon: "DraftingCompass",
        title: "الرسم الإنشائي",
        summary:
          "مخططات ومقاطع وتفاصيل وجداول إنشائية واضحة للمراجعة والتنفيذ.",
        overview:
          "يحول فريق الرسم لدينا الفكرة الهندسية إلى رسومات إنشائية منسقة بطبقات ومراجع وأبعاد وتحكم واضح في المراجعات.",
        benefits: [
          "حزم رسومات تقلل الغموض",
          "معايير ثابتة للمخططات والمقاطع والتفاصيل",
          "تنسيق سريع مع المهندسين والمعماريين"
        ]
      },
      {
        slug: "2d-cad-drawings",
        icon: "Ruler",
        title: "رسومات ثنائية الأبعاد بالحاسوب",
        summary:
          "رسومات دقيقة للاستخدام في التصميم والمناقصات والاعتمادات والتنفيذ.",
        overview:
          "ننتج وثائق ثنائية الأبعاد دقيقة للمتطلبات المعمارية والمدنية والإنشائية والبنية التحتية مع تنظيم واضح للملفات.",
        benefits: [
          "ملفات قابلة للتحرير ومنظمة الطبقات",
          "معايير رسم متوافقة مع متطلبات المشروع",
          "تحويل فعال من الاسكتشات أو الملفات القديمة أو المستندات المصورة"
        ]
      },
      {
        slug: "3d-modeling",
        icon: "Layers3",
        title: "النمذجة ثلاثية الأبعاد",
        summary:
          "نماذج منسقة تساعد الفرق على تصور التعقيد وحل التداخلات مبكرا.",
        overview:
          "تحسن خدمات النمذجة ثلاثية الأبعاد لدينا التنسيق والعرض واكتشاف الملاحظات مبكرا بين العناصر الإنشائية والمعمارية.",
        benefits: [
          "فهم مكاني أفضل لأصحاب المصلحة",
          "اكتشاف مبكر لمشكلات التنسيق",
          "نماذج مناسبة للعرض والمراجعة الفنية"
        ]
      },
      {
        slug: "revit-bim",
        icon: "Blocks",
        title: "نمذجة معلومات البناء عبر ريفت",
        summary:
          "نماذج معلوماتية للتصميم المنسق والتوثيق وحصر الكميات.",
        overview:
          "نبني نماذج غنية بالمعلومات تدعم تنسيق التصميم واستخراج الوثائق ومراجعة الكميات والتعاون بين التخصصات.",
        benefits: [
          "وثائق قائمة على نموذج منسق",
          "وعي أفضل بالتداخلات والتحكم في المراجعات",
          "بيانات نموذج جاهزة للجداول والكميات"
        ]
      },
      {
        slug: "quantity-surveying",
        icon: "Calculator",
        title: "حصر الكميات",
        summary:
          "خدمات كميات ذات وعي تجاري للمناقصات والشراء وضبط التكلفة.",
        overview:
          "يوفر دعم حصر الكميات لدينا قياسات وافتراضات ورؤى مرتبطة بالتكلفة يمكن الاعتماد عليها.",
        benefits: [
          "منهجية قياس شفافة",
          "كميات وملخصات جاهزة للمناقصات",
          "دعم قرارات الهندسة القيمية"
        ]
      },
      {
        slug: "boq-preparation",
        icon: "ClipboardCheck",
        title: "إعداد جداول الكميات",
        summary:
          "جداول كميات منظمة للمناقصات والمقارنة والشراء وإدارة العقود.",
        overview:
          "نعد جداول مفصلة بأوصاف ووحدات وكميات وملاحظات واضحة حتى يتم تسعير الأعمال على أساس موحد.",
        benefits: [
          "مقارنة أسهل لعروض المناقصات",
          "أوصاف بنود وحدود نطاق واضحة",
          "صيغ متسقة للاستشاريين والمقاولين"
        ]
      },
      {
        slug: "cost-estimation",
        icon: "FileBarChart2",
        title: "تقدير التكلفة",
        summary:
          "تقديرات مبدئية وتفصيلية تساعد الفرق على قرارات مالية واعية.",
        overview:
          "نطور تقديرات تكلفة بالاعتماد على الكميات ومنطق السوق وافتراضات منضبطة مناسبة لمرحلة المشروع.",
        benefits: [
          "رؤية للميزانية قبل الالتزامات الرئيسية",
          "استثناءات وافتراضات واضحة",
          "دعم البدائل وخيارات القيمة"
        ]
      },
      {
        slug: "material-takeoff",
        icon: "NotebookPen",
        title: "حصر المواد",
        summary:
          "كميات مواد دقيقة مستخرجة من الرسومات والنماذج ووثائق المشروع.",
        overview:
          "ننشئ حصر مواد منظما يدعم الشراء والمناقصات وتخطيط اللوجستيات وضبط التكلفة.",
        benefits: [
          "كميات قابلة للتتبع حسب العنصر أو الحزمة",
          "تقليل عدم اليقين في الشراء",
          "مخرجات مناسبة للجداول وأنظمة المناقصات"
        ]
      },
      {
        slug: "construction-documentation",
        icon: "FileCheck2",
        title: "وثائق التنفيذ",
        summary:
          "حزم رسومات ووثائق منسقة ومعدة لسير عمل التنفيذ الحقيقي.",
        overview:
          "نجمع وثائق تنفيذ واضحة ومنسقة وخاضعة للتحكم في المراجعات وعملية لفرق الموقع.",
        benefits: [
          "حزم إصدار واضحة للمقاولين",
          "مراجع وترقيم رسومات منسق",
          "تحسين التسليم بين التصميم والتنفيذ"
        ]
      },
      {
        slug: "project-planning",
        icon: "CalendarClock",
        title: "تخطيط المشاريع",
        summary:
          "دعم تخطيطي يحول نطاق المشروع إلى مراحل واعتماديات وإجراءات.",
        overview:
          "نساعد الفرق على تحديد المخرجات وتسلسل الأعمال ومنطق الموارد والمخاطر وأطر التخطيط العملية.",
        benefits: [
          "تحويل مراحل المشروع إلى أعمال قابلة للتنفيذ",
          "مواءمة أفضل بين التصميم والشراء وأنشطة الموقع",
          "وثائق تخطيط عملية لمراجعة أصحاب المصلحة"
        ]
      },
      {
        slug: "project-scheduling",
        icon: "Timer",
        title: "جدولة المشاريع",
        summary:
          "دعم للبرامج والجداول لمتابعة التقدم والاعتماديات ومخاطر التسليم.",
        overview:
          "نعد ونراجع جداول المشاريع التي تدعم التنسيق الواقعي وتقارير التقدم وخطط الاستدراك.",
        benefits: [
          "اعتماديات وأنشطة حرجة واضحة",
          "متابعة تقدم مرتبطة بالمخرجات",
          "سرديات جدول للمراجعة من العميل والاستشاري"
        ]
      },
      {
        slug: "engineering-consulting",
        icon: "UsersRound",
        title: "الاستشارات الهندسية",
        summary:
          "دعم استشاري فني للمالكين والاستشاريين والمقاولين والفرق متعددة التخصصات.",
        overview:
          "تساعد استشاراتنا الفرق على تقييم البدائل وحل الأسئلة الفنية وتحسين جودة القرارات.",
        benefits: [
          "منظور هندسي مستقل",
          "توصيات عملية مبنية على قيود المشروع",
          "دعم للمراجعات واستفسارات المناقصات والاجتماعات الفنية"
        ]
      },
      {
        slug: "hse-documentation",
        icon: "ShieldCheck",
        title: "وثائق الصحة والسلامة والبيئة",
        summary:
          "وثائق سلامة وبيئة منظمة تدعم جاهزية المشروع والامتثال.",
        overview:
          "نطور وثائق الصحة والسلامة والبيئة التي تدعم جاهزية الموقع وتخطيط الطرق العملية والتواصل حول المخاطر وتقديمات العميل.",
        benefits: [
          "وثائق سلامة واضحة لفرق المشروع",
          "معلومات مخاطر وطرق عمل منظمة",
          "تنسيق جاهز للتقديم والتحكم في المراجعات"
        ]
      },
      {
        slug: "technical-reports",
        icon: "FileText",
        title: "التقارير الفنية",
        summary:
          "تقارير احترافية للتحليل والمراجعة والقرارات والمطالبات والتواصل.",
        overview:
          "نعد تقارير فنية تنظم الأدلة والمنطق الهندسي والمرئيات والنتائج والتوصيات.",
        benefits: [
          "هيكل واضح للحجة والملخص التنفيذي",
          "تواصل فني قائم على الأدلة",
          "تنسيق احترافي لأصحاب المصلحة"
        ]
      }
    ],
    servicePage: {
      heroLabel: "خدمة",
      benefitsTitle: "الفوائد",
      workflowTitle: "منهجية العمل",
      galleryTitle: "معرض المشروع",
      faqTitle: "الأسئلة الشائعة",
      relatedTitle: "خدمات ذات صلة",
      ctaTitle: "هل تحتاج هذه الخدمة لمشروع قائم؟",
      ctaText:
        "أرسل الرسومات والنطاق والموعد النهائي وسنحدد أسرع مسار منظم للتسليم.",
      workflow: [
        "مراجعة الموجز والوثائق",
        "تأكيد النطاق ومواءمة المعايير",
        "الإنتاج مع فحوصات فنية داخلية",
        "مراجعة العميل والتعديلات والإصدار النهائي"
      ],
      faqs: [
        {
          question: "هل يمكن لأوسو العمل من رسومات غير مكتملة؟",
          answer:
            "نعم. يمكننا البدء من اسكتشات أو مستندات مصورة أو نماذج أو معلومات جزئية مع تسجيل الافتراضات بوضوح قبل الإنتاج."
        },
        {
          question: "هل تدعمون العملاء الدوليين؟",
          answer:
            "نعم. نعمل عن بعد مع عملاء في عدة دول ونوائم المخرجات مع المعايير وصيغ الملفات المطلوبة."
        },
        {
          question: "متى يمكنكم البدء؟",
          answer:
            "للنطاقات العاجلة يمكننا عادة مراجعة الموجز وتأكيد خطة التسليم خلال يوم عمل واحد."
        }
      ]
    },
    industries: [
      {
        icon: "HardHat",
        title: "البناء",
        text: "دعم الوثائق والكميات والتنسيق لفرق التنفيذ النشطة."
      },
      {
        icon: "MapPinned",
        title: "البنية التحتية",
        text: "دعم للطرق والمرافق والجسور وأعمال المجال العام."
      },
      {
        icon: "Home",
        title: "السكني",
        text: "رسومات وكميات وتقارير للفلل والشقق والمنازل الخاصة."
      },
      {
        icon: "BriefcaseBusiness",
        title: "التجاري",
        text: "وثائق فنية للمكاتب والتجزئة والضيافة والمشاريع متعددة الاستخدام."
      },
      {
        icon: "Factory",
        title: "الصناعي",
        text: "دعم تخطيطي ووثائقي للمصانع والمستودعات والمنشآت الفنية."
      },
      {
        icon: "Landmark",
        title: "القطاع العام",
        text: "مخرجات منظمة للجهات والمؤسسات والمشتريات العامة."
      },
      {
        icon: "Sparkles",
        title: "النفط والغاز",
        text: "وثائق مضبوطة ودعم كميات للبيئات الفنية عالية المتطلبات."
      },
      {
        icon: "GraduationCap",
        title: "التعليم",
        text: "حزم هندسية للمدارس والحرم التعليمي ومرافق التعلم."
      },
      {
        icon: "HeartPulse",
        title: "الرعاية الصحية",
        text: "تنسيق دقيق للعيادات والمستشفيات والمساحات الصحية المتخصصة."
      }
    ],
    portfolio: [
      {
        slug: "urban-bridge-corridor",
        category: "البنية التحتية",
        title: "ممر جسر حضري",
        summary:
          "رسومات منسقة ودعم كميات لممر جسر يربط مناطق متعددة الاستخدام.",
        software: ["ريفت", "أوتوكاد", "إكسل"],
        challenge:
          "احتاج العميل إلى تنسيق سريع بين المخططات الإنشائية وملاحظات الأعمال المؤقتة وكميات المناقصة.",
        solution:
          "أنشأت أوسو سجل رسومات منظما وأصدرت مخرجات رسم منسقة وربطت الكميات بحزم المناقصة.",
        outcome:
          "خفضت الحزمة ملاحظات المراجعة وساعدت المقاول على إصدار توضيحات المناقصة بسرعة أكبر.",
        image: "/images/infrastructure-portfolio.png"
      },
      {
        slug: "residential-tower-documentation",
        category: "السكني",
        title: "وثائق برج سكني",
        summary:
          "وثائق تنفيذ وتنسيق نموذج لتطوير سكني مرتفع.",
        software: ["ريفت", "نافيس وركس", "أوتوكاد"],
        challenge:
          "كانت التحديثات المعمارية والإنشائية سريعة وتحتاج مراجعات الرسومات إلى ضبط أقوى.",
        solution:
          "أنشأنا سير عمل منسقا للمراجعات واستخرجنا حزم الرسومات مباشرة من النموذج المعتمد.",
        outcome:
          "استلمت فرق الموقع حزما أوضح بتتبع أفضل واستفسارات مكررة أقل.",
        image: "/images/engineering-hero.png"
      },
      {
        slug: "commercial-fitout-quantities",
        category: "التجاري",
        title: "كميات تجهيز تجاري",
        summary:
          "حصر تفصيلي وإعداد جدول كميات لمناقصة مكتب فاخر.",
        software: ["بلوبيم", "إكسل", "أوتوكاد"],
        challenge:
          "كان موعد المناقصة ضيقا وتضمنت الرسومات فجوات في النطاق.",
        solution:
          "أنتجت أوسو جداول حصر قابلة للتتبع وسجلت الافتراضات ونظمت الجدول لمقارنة الأسعار.",
        outcome:
          "قارن العميل أسعار المقاولين بثقة أكبر ونزاعات نطاق أقل.",
        image: "/images/infrastructure-portfolio.png"
      }
    ],
    portfolioLabels: {
      challenge: "تحدي العميل",
      solution: "الحل",
      outcome: "النتيجة",
      software: "البرامج المستخدمة",
      caseStudy: "دراسة حالة"
    },
    testimonials: [
      {
        quote:
          "أدخلت أوسو النظام إلى برنامج وثائق مضغوط جدا. كانت الرسومات واضحة ومنسقة وسهلة الاستخدام لفرق الموقع.",
        name: "مدير مشروع",
        role: "مقاول إقليمي"
      },
      {
        quote:
          "كانت حزمة الكميات شفافة وقابلة للتتبع. ساعدتنا على دخول المناقصة بافتراضات أقل وموقف تجاري أقوى.",
        name: "مدير تجاري",
        role: "مطور عقاري"
      },
      {
        quote:
          "التواصل لديهم ميزة حقيقية. يفهمون ما يحتاجه الاستشاريون ويردون بوضوح فني عملي.",
        name: "قائد تصميم",
        role: "مكتب معماري"
      }
    ],
    blog: [
      {
        slug: "better-boq-structure",
        category: "حصر الكميات",
        title: "كيف يقلل تنظيم جدول الكميات مخاطر المناقصة",
        excerpt:
          "جدول الكميات المنظم لا يكتفي بعد الأعمال، بل يوضح النطاق والافتراضات ومنطق التسعير.",
        body:
          "غالبا ما تختبئ مخاطر المناقصة في أوصاف البنود الغامضة والوحدات غير المتسقة والافتراضات المفقودة. يمنح التنظيم المنضبط لجدول الكميات المقاولين أساسا موحدا للتسعير ويمنح العملاء مسارا أنظف للمقارنة.",
        published: "2026-05-08"
      },
      {
        slug: "bim-for-construction-documentation",
        category: "النمذجة المعلوماتية",
        title: "استخدام النمذجة المعلوماتية لتحسين وثائق التنفيذ",
        excerpt:
          "تساعد الوثائق القائمة على النموذج فرق المشروع على التنسيق بسرعة عندما يدار النموذج بالمعايير الصحيحة.",
        body:
          "تحسن النمذجة المعلوماتية الوثائق عندما تحدد الفرق هدف النموذج والتسمية ومستوى التفاصيل ونقاط المراجعة مبكرا. القيمة ليست في العرض الثلاثي الأبعاد فقط، بل في الجداول المتسقة والمقاطع المنسقة ومصدر واحد يساعد الفرق على اكتشاف التغيير قبل أن يصبح ارتباكا في الموقع.",
        published: "2026-04-17"
      },
      {
        slug: "technical-reports-that-get-decisions",
        category: "التقارير الفنية",
        title: "كتابة تقارير فنية تقود إلى قرارات",
        excerpt:
          "تكون التقارير الهندسية أكثر فائدة عندما تحول الأدلة إلى خيارات وخطوات تالية واضحة.",
        body:
          "يملك التقرير الفني القوي سؤالا واضحا وأدلة تدعم الإجابة ونتائج عملية لفريق المشروع. يجب أن تكون المرئيات والافتراضات والحدود والتوصيات سهلة الوصول حتى يثق أصحاب القرار بالتقرير دون فك بنية معقدة.",
        published: "2026-03-28"
      }
    ],
    careers: {
      title: "العمل في أوسو",
      text:
        "انضم إلى فريق يقدر الدقة والتواصل الواضح والحكم الهندسي العملي.",
      labels: {
        culture: "ثقافة الشركة",
        openings: "الوظائف المتاحة",
        application: "نموذج التقديم"
      },
      culture: [
        "تعاون مرن عن بعد",
        "إرشاد فني",
        "احترام العمل العميق",
        "تعرض لمشاريع دولية"
      ],
      openings: [
        {
          title: "فني رسم إنشائي",
          location: "عن بعد أو هجين",
          type: "دوام كامل"
        },
        {
          title: "حاسب كميات",
          location: "عن بعد",
          type: "تعاقد"
        },
        {
          title: "نمذج معلومات بناء",
          location: "عن بعد أو حسب المشروع",
          type: "تعاقد"
        }
      ]
    },
    about: {
      title: "وضوح هندسي لفرق مشاريع طموحة",
      intro:
        "أوسو للحلول الهندسية شركة استشارات هندسية مدنية صممت للفرق التي تحتاج إلى إنتاج فني موثوق دون فقدان السيطرة الاستراتيجية.",
      mission:
        "أن نجعل الوثائق الهندسية المعقدة أوضح وأسرع وأكثر موثوقية لكل أصحاب المصلحة.",
      vision:
        "أن نصبح شريكا هندسيا دوليا موثوقا معروفا بالدقة وسرعة الاستجابة والابتكار العملي.",
      values: ["الدقة", "المسؤولية", "الابتكار", "النزاهة"],
      labels: {
        mission: "المهمة",
        vision: "الرؤية",
        values: "القيم",
        story: "قصة الشركة",
        leadership: "القيادة",
        timeline: "الخط الزمني",
        trust: "لماذا يثق العملاء بنا"
      },
      story:
        "تأسست أوسو لسد الفجوة بين طموح التصميم وضغط التسليم. نجمع خبرات الرسم والنمذجة والكميات والتخطيط والتقارير حتى ينتقل العملاء من عدم اليقين إلى عمل منسق.",
      leadership: [
        {
          name: "قيادة هندسية عليا",
          role: "التسليم وضمان الجودة وتنسيق العملاء"
        },
        {
          name: "قادة الإنتاج الفني",
          role: "الرسومات والنماذج والكميات والتقارير"
        }
      ],
      timeline: [
        "انطلاق حول الإنتاج الهندسي العملي",
        "التوسع إلى النمذجة المعلوماتية وسير عمل الكميات",
        "بناء أنظمة تسليم عن بعد للعملاء الدوليين",
        "تطوير حزم استشارية متكاملة للمشاريع المعقدة"
      ]
    },
    forms: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "الشركة",
      country: "الدولة",
      message: "الرسالة",
      service: "الخدمة",
      budget: "نطاق الميزانية",
      timeline: "الجدول الزمني",
      description: "وصف المشروع",
      upload: "رفع الرسومات أو المستندات أو الملفات المضغوطة",
      role: "الوظيفة",
      portfolio: "رابط الأعمال أو الملف الشخصي",
      budgetOptions: ["أقل من 5 آلاف", "من 5 إلى 20 ألف", "أكثر من 20 ألف"],
      timelineOptions: ["عاجل", "من أسبوعين إلى أربعة أسابيع", "مرن"],
      success: "شكرا لك. تم تجهيز طلبك لفريق أوسو.",
      required: "هذا الحقل مطلوب",
      invalidEmail: "أدخل بريدا إلكترونيا صحيحا",
      step: "خطوة",
      next: "التالي",
      previous: "السابق"
    },
    contact: {
      title: "تحدث إلى مستشار هندسي",
      text:
        "أرسل النطاق أو الرسومات أو السؤال، وسنرد عليك بخطوة تالية واضحة.",
      phone: "+1 555 012 4080",
      email: "hello@osoengineering.com",
      address: "استشارات دولية عن بعد تخدم العملاء حول العالم",
      hours: "من الاثنين إلى الجمعة، 9:00 صباحا - 6:00 مساء",
      whatsapp: "واتساب"
    },
    footer: {
      tagline:
        "استشارات هندسية مدنية فاخرة للفرق التي تحتاج إلى الدقة والسرعة والمسؤولية.",
      company: "الشركة",
      resources: "الموارد",
      legal: "القانوني",
      socials: ["لينكدإن", "إكس", "إنستغرام"],
      newsletterText:
        "رؤى شهرية حول الوثائق الهندسية والكميات والتخطيط والتسليم."
    },
    cookie:
      "نستخدم ملفات أساسية وتخزين تفضيلات لتذكر اللغة والمظهر وخيارات الموافقة.",
    legal: {
      privacyTitle: "سياسة الخصوصية",
      termsTitle: "الشروط والأحكام",
      privacy:
        "تجمع أوسو للحلول الهندسية المعلومات اللازمة فقط للرد على الاستفسارات وإعداد عروض الأسعار والتواصل حول خدمات المشاريع. تعامل الملفات المرفوعة كمواد مشروع سرية.",
      terms:
        "يوفر محتوى الموقع معلومات عامة. تخضع خدمات المشروع للعرض المتفق عليه والنطاق والجدول والاستثناءات والشروط التجارية الصادرة لكل تعاقد."
    },
    notFound: {
      title: "الصفحة غير موجودة",
      text: "ربما تم نقل الصفحة التي تبحث عنها أو أنها غير موجودة."
    }
  }
} as const;

export type SiteContent = (typeof content)[Locale];
export type Service = SiteContent["services"][number];
export type PortfolioProject = SiteContent["portfolio"][number];
export type BlogPost = SiteContent["blog"][number];

export function getContent(locale: string) {
  const safeLocale: Locale = locale === "ar" ? "ar" : "en";
  return content[safeLocale];
}

export function getService(locale: string, slug: string) {
  return getContent(locale).services.find((service) => service.slug === slug);
}

export function getProject(locale: string, slug: string) {
  return getContent(locale).portfolio.find((project) => project.slug === slug);
}

export function getPost(locale: string, slug: string) {
  return getContent(locale).blog.find((post) => post.slug === slug);
}
