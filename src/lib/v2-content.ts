export const v2Content = {
  en: {
    version: "Version 2.0",
    portal: {
      navLabel: "Portal",
      eyebrow: "Client Portal",
      title: "A secure project command room for every client",
      text:
        "Track active deliverables, review documents, read consultant updates, and request revisions from one calm workspace.",
      open: "Open Portal",
      signIn: "Portal Access",
      clientId: "Client ID",
      accessCode: "Access code",
      remember: "Remember this workspace",
      success: "Demo access prepared. Review the portal workspace below.",
      secureNote:
        "Demo interface only. Production authentication can be connected to your preferred identity provider.",
      dashboardTitle: "Client Workspace",
      dashboardText:
        "Project visibility designed for owners, architects, contractors, and international clients.",
      quickActionsTitle: "Quick actions",
      projectsTitle: "Active projects",
      documentsTitle: "Recent documents",
      messagesTitle: "Consultant updates",
      metrics: [
        {label: "Active Projects", value: "07", hint: "3 in technical review"},
        {label: "Open RFIs", value: "12", hint: "5 awaiting client input"},
        {label: "Submittals", value: "46", hint: "91% on schedule"},
        {label: "Avg Response", value: "4h", hint: "Across current week"}
      ],
      projects: [
        {
          name: "Urban Bridge Corridor",
          status: "Technical review",
          progress: 72,
          due: "Jul 18",
          manager: "OSO Infrastructure"
        },
        {
          name: "Residential Tower Documentation",
          status: "Client markup",
          progress: 58,
          due: "Jul 24",
          manager: "OSO BIM Studio"
        },
        {
          name: "Commercial Fit-Out Quantities",
          status: "Tender issue",
          progress: 86,
          due: "Jul 12",
          manager: "OSO Cost Team"
        }
      ],
      documents: [
        {name: "Structural drawing register", type: "XLSX", status: "Updated"},
        {name: "BOQ revision B", type: "PDF", status: "For review"},
        {name: "BIM coordination snapshots", type: "ZIP", status: "Issued"}
      ],
      messages: [
        "Revit model revision C has been coordinated with latest architectural grids.",
        "Quantity assumptions are ready for client confirmation before tender issue.",
        "HSE method statement draft is queued for senior technical check."
      ],
      quickActions: ["Upload drawings", "Request revision", "Schedule review", "Download package"]
    },
    admin: {
      navLabel: "Admin",
      eyebrow: "Admin Dashboard",
      title: "Operational intelligence for OSO delivery leaders",
      text:
        "A private command view for monitoring leads, projects, revenue risk, team workload, and delivery quality.",
      open: "Open Dashboard",
      dashboardTitle: "Executive Operations",
      dashboardText:
        "A high-signal dashboard for directors, coordinators, and technical production leads.",
      metrics: [
        {label: "Monthly Revenue", value: "$184k", change: "+18%"},
        {label: "Qualified Leads", value: "32", change: "+9"},
        {label: "Delivery Health", value: "94%", change: "stable"},
        {label: "Utilization", value: "81%", change: "optimal"}
      ],
      pipelineTitle: "Opportunity pipeline",
      workloadTitle: "Team workload",
      inquiriesTitle: "Recent inquiries",
      alertsTitle: "Delivery alerts",
      pipeline: [
        {stage: "Discovery", value: "$42k", count: 8},
        {stage: "Proposal", value: "$96k", count: 6},
        {stage: "Negotiation", value: "$63k", count: 3},
        {stage: "Won", value: "$118k", count: 5}
      ],
      workload: [
        {team: "Drafting", load: 78, status: "Healthy"},
        {team: "BIM", load: 86, status: "Watch"},
        {team: "QS", load: 74, status: "Healthy"},
        {team: "Reports", load: 62, status: "Capacity"}
      ],
      inquiries: [
        {client: "Regional Contractor", service: "Structural Drafting", priority: "High"},
        {client: "Architecture Studio", service: "Revit BIM", priority: "Medium"},
        {client: "Private Developer", service: "BOQ Preparation", priority: "High"}
      ],
      alerts: [
        "Bridge corridor review gate due within 48 hours.",
        "Two proposals need commercial approval before issue.",
        "BIM team approaching planned capacity for next week."
      ]
    },
    home: {
      platformTitle: "Digital delivery, built into the consultancy experience",
      platformText:
        "V2 adds a sharper operational layer: clients see project progress clearly, while OSO leaders can monitor pipeline, quality, workload, and delivery risk.",
      portalTitle: "Client portal",
      portalText:
        "A polished workspace for active projects, documents, messages, and revision requests.",
      adminTitle: "Admin command center",
      adminText:
        "A private operational dashboard for leads, delivery health, team capacity, and revenue visibility.",
      intelligenceTitle: "Delivery intelligence",
      intelligenceText:
        "Premium motion, clearer states, faster scanning, and a refined system of cards, metrics, and timelines."
    }
  },
  ar: {
    version: "الإصدار 2.0",
    portal: {
      navLabel: "البوابة",
      eyebrow: "بوابة العملاء",
      title: "غرفة مشروع آمنة لكل عميل",
      text:
        "تابع المخرجات النشطة وراجع الوثائق واقرأ تحديثات الاستشاريين واطلب التعديلات من مساحة عمل واحدة هادئة.",
      open: "فتح البوابة",
      signIn: "دخول البوابة",
      clientId: "معرف العميل",
      accessCode: "رمز الدخول",
      remember: "تذكر مساحة العمل",
      success: "تم تجهيز وصول العرض التجريبي. راجع مساحة البوابة أدناه.",
      secureNote:
        "هذه واجهة عرض فقط. يمكن ربط المصادقة الفعلية بمزود الهوية المفضل لديك.",
      dashboardTitle: "مساحة عمل العميل",
      dashboardText:
        "رؤية مشروع مصممة للمالكين والمعماريين والمقاولين والعملاء الدوليين.",
      quickActionsTitle: "إجراءات سريعة",
      projectsTitle: "المشاريع النشطة",
      documentsTitle: "الوثائق الأخيرة",
      messagesTitle: "تحديثات الاستشاريين",
      metrics: [
        {label: "مشاريع نشطة", value: "07", hint: "3 في المراجعة الفنية"},
        {label: "استفسارات مفتوحة", value: "12", hint: "5 بانتظار العميل"},
        {label: "تقديمات", value: "46", hint: "91% حسب الجدول"},
        {label: "متوسط الاستجابة", value: "4س", hint: "خلال الأسبوع الحالي"}
      ],
      projects: [
        {
          name: "ممر جسر حضري",
          status: "مراجعة فنية",
          progress: 72,
          due: "18 يوليو",
          manager: "فريق البنية التحتية"
        },
        {
          name: "وثائق برج سكني",
          status: "ملاحظات العميل",
          progress: 58,
          due: "24 يوليو",
          manager: "استوديو BIM"
        },
        {
          name: "كميات تجهيز تجاري",
          status: "إصدار مناقصة",
          progress: 86,
          due: "12 يوليو",
          manager: "فريق التكلفة"
        }
      ],
      documents: [
        {name: "سجل الرسومات الإنشائية", type: "XLSX", status: "محدث"},
        {name: "جدول الكميات مراجعة ب", type: "PDF", status: "للمراجعة"},
        {name: "لقطات تنسيق BIM", type: "ZIP", status: "صادر"}
      ],
      messages: [
        "تم تنسيق نموذج ريفت مراجعة ج مع أحدث المحاور المعمارية.",
        "افتراضات الكميات جاهزة لتأكيد العميل قبل إصدار المناقصة.",
        "مسودة بيان طريقة السلامة في انتظار الفحص الفني العالي."
      ],
      quickActions: ["رفع الرسومات", "طلب تعديل", "جدولة مراجعة", "تنزيل الحزمة"]
    },
    admin: {
      navLabel: "الإدارة",
      eyebrow: "لوحة الإدارة",
      title: "ذكاء تشغيلي لقادة التسليم في أوسو",
      text:
        "واجهة خاصة لمتابعة العملاء المحتملين والمشاريع ومخاطر الإيرادات وحمل الفرق وجودة التسليم.",
      open: "فتح اللوحة",
      dashboardTitle: "العمليات التنفيذية",
      dashboardText:
        "لوحة عالية الوضوح للمديرين والمنسقين وقادة الإنتاج الفني.",
      metrics: [
        {label: "إيراد الشهر", value: "$184k", change: "+18%"},
        {label: "فرص مؤهلة", value: "32", change: "+9"},
        {label: "صحة التسليم", value: "94%", change: "مستقر"},
        {label: "الاستفادة", value: "81%", change: "مثالي"}
      ],
      pipelineTitle: "مسار الفرص",
      workloadTitle: "حمل الفرق",
      inquiriesTitle: "الاستفسارات الأخيرة",
      alertsTitle: "تنبيهات التسليم",
      pipeline: [
        {stage: "اكتشاف", value: "$42k", count: 8},
        {stage: "عرض", value: "$96k", count: 6},
        {stage: "تفاوض", value: "$63k", count: 3},
        {stage: "فوز", value: "$118k", count: 5}
      ],
      workload: [
        {team: "الرسم", load: 78, status: "صحي"},
        {team: "BIM", load: 86, status: "مراقبة"},
        {team: "الكميات", load: 74, status: "صحي"},
        {team: "التقارير", load: 62, status: "متاح"}
      ],
      inquiries: [
        {client: "مقاول إقليمي", service: "الرسم الإنشائي", priority: "عال"},
        {client: "مكتب معماري", service: "نمذجة ريفت", priority: "متوسط"},
        {client: "مطور خاص", service: "إعداد جداول الكميات", priority: "عال"}
      ],
      alerts: [
        "بوابة مراجعة ممر الجسر مستحقة خلال 48 ساعة.",
        "عرضان يحتاجان إلى اعتماد تجاري قبل الإصدار.",
        "فريق BIM يقترب من القدرة المخططة للأسبوع القادم."
      ]
    },
    home: {
      platformTitle: "تسليم رقمي مدمج في التجربة الاستشارية",
      platformText:
        "يضيف الإصدار الثاني طبقة تشغيلية أوضح: يرى العملاء تقدم المشروع بوضوح، بينما يتابع قادة أوسو المسار والجودة وحمل العمل ومخاطر التسليم.",
      portalTitle: "بوابة العملاء",
      portalText:
        "مساحة عمل مصقولة للمشاريع النشطة والوثائق والرسائل وطلبات التعديل.",
      adminTitle: "مركز قيادة الإدارة",
      adminText:
        "لوحة تشغيلية خاصة للفرص وصحة التسليم وسعة الفريق ورؤية الإيرادات.",
      intelligenceTitle: "ذكاء التسليم",
      intelligenceText:
        "حركة أكثر فخامة وحالات أوضح ومسح أسرع ونظام محسن للبطاقات والمؤشرات والجداول الزمنية."
    }
  }
} as const;

export function getV2Content(locale: string) {
  return locale === "ar" ? v2Content.ar : v2Content.en;
}

export type V2Content = ReturnType<typeof getV2Content>;
