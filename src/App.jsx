import { useEffect, useMemo, useState } from "react";
import laCucharaPhoto from "../assets/la-cuchara-project.png";
import lucianProfilePhoto from "../assets/lucian-profile.jpg";

const content = {
  en: {
    nav: [
      { id: "about", label: "About" },
      { id: "education", label: "Education" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "certifications", label: "Certifications" },
      { id: "contact", label: "Contact" }
    ],
    heroEyebrow: "AI & Big Data Master's Student",
    heroTitle: "Lucian Ciusa",
    heroSubtitle: "Building practical AI products and data-driven solutions.",
    heroImageAlt: "Portrait of Lucian Ciusa",
    heroPrimary: "See my work",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    aboutTitle: "About Me",
    aboutBody:
      "I am currently studying an AI & Big Data specialization master's degree at Tajamar Tech in Madrid, Spain. I enjoy combining machine learning, analytics, and clean product thinking to solve real-world problems.",
    educationTitle: "Education",
    educationItems: [
      {
        institution: "Tajamar Tech",
        program: "Master's in Big Data and AI, in collaboration with Microsoft",
        dates: "Sep. 2025 - Jun. 2026",
        location: "Madrid, Spain"
      },
      {
        institution: "Escuela Profesional Santa Maria de los Apostoles",
        program: "Higher Vocational Training in Multiplatform App Development",
        dates: "Sep. 2022 - Jan. 2025",
        location: "Madrid, Spain"
      }
    ],
    projectsTitle: "Projects",
    projectsIntro: "Real project spotlight.",
    projectRepo: "Repository",
    projectDetails: "Details Page",
    projectSolution: "Solution Deployment",
    projectDemoUnavailable: "Demo not available, check out the details page instead.",
    projectCards: [
      {
        tag: "Featured",
        title: "CuisineAML",
        body:
          "An AI platform for intelligent restaurant discovery and demand forecasting. Uses semantic embeddings for personalized venue recommendations and XGBoost models trained on 30+ features to predict daily service demand. Built with Python, Azure ML Studio, and cloud infrastructure.",
        imageUrl: laCucharaPhoto,
        imageAlt: "CuisineAML project photo",
        repoUrl: "https://github.com/adnanhamidoun/lacuchara",
        detailsUrl: "https://cuisineaml-preview.vercel.app/",
        solutionUrl: ""
      }
    ],
    skillsTitle: "Skills & Tech Stack",
    certTitle: "Certifications",
    certIntro: "Microsoft certifications certified and in progress.",
    contactTitle: "Contact",
    contactBody: "Use this form to quickly draft an email, or",
    contactInlineCta: "click here",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Send message"
  },
  es: {
    nav: [
      { id: "about", label: "Sobre mí" },
      { id: "education", label: "Educación" },
      { id: "projects", label: "Proyectos" },
      { id: "skills", label: "Habilidades" },
      { id: "certifications", label: "Certificaciones" },
      { id: "contact", label: "Contacto" }
    ],
    heroEyebrow: "Estudiante de Máster en IA y Big Data",
    heroTitle: "Lucian Ciusa",
    heroSubtitle: "Construyendo productos de IA y soluciones basadas en datos.",
    heroImageAlt: "Retrato de Lucian Ciusa",
    heroPrimary: "Ver proyectos",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    aboutTitle: "Sobre Mí",
    aboutBody:
      "Actualmente estudio un máster de especialización en IA y Big Data en Tajamar Tech, Madrid. Me gusta combinar machine learning, analítica y mentalidad de producto para resolver problemas reales.",
    educationTitle: "Educación",
    educationItems: [
      {
        institution: "Tajamar Tech",
        program: "Máster en Big Data e IA, en colaboración con Microsoft",
        dates: "sept. 2025 - jun. 2026",
        location: "Madrid, España"
      },
      {
        institution: "Escuela Profesional Santa Maria de los Apostoles",
        program: "Ciclo Formativo de Grado Superior, Desarrollo de Aplicaciones Multiplataforma",
        dates: "sept. 2022 - ene. 2025",
        location: "Madrid, España"
      }
    ],
    projectsTitle: "Proyectos",
    projectsIntro: "Proyecto real destacado.",
    projectRepo: "Repositorio",
    projectDetails: "Página de Detalles",
    projectSolution: "Despliegue de la Solución",
    projectDemoUnavailable: "Demo no disponible, consulta la página de detalles en su lugar.",
    projectCards: [
      {
        tag: "Destacado",
        title: "CuisineAML",
        body:
          "Una plataforma de IA para descubrimiento inteligente de restaurantes y predicción de demanda. Usa embeddings semánticos para recomendaciones personalizadas y modelos XGBoost entrenados con más de 30 variables para estimar la demanda diaria de servicio. Construida con Python, Azure ML Studio e infraestructura cloud.",
        imageUrl: laCucharaPhoto,
        imageAlt: "Foto del proyecto CuisineAML",
        repoUrl: "https://github.com/adnanhamidoun/lacuchara",
        detailsUrl: "https://cuisineaml-preview.vercel.app/",
        solutionUrl: ""
      }
    ],
    skillsTitle: "Habilidades y Stack Tecnológico",
    certTitle: "Certificaciones",
    certIntro: "Certificaciones de Microsoft obtenidas y en progreso.",
    contactTitle: "Contacto",
    contactBody: "Usa este formulario para redactar un email rápidamente, o",
    contactInlineCta: "haz clic aquí",
    formName: "Nombre",
    formEmail: "Email",
    formMessage: "Mensaje",
    formSend: "Enviar mensaje"
  }
};

const certifications = [
  {
    code: "DP-900",
    title: "Microsoft Azure Data Fundamentals",
    status: "Certified",
    badgeUrl:
      "https://images.credly.com/size/680x680/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png",
    certUrl: "https://www.credly.com/badges/a84d21b9-d493-4e6c-a2cb-5a283c960b49/public_url",
    credentialId: "a84d21b9-d493-4e6c-a2cb-5a283c960b49",
    tags: [
      "Core Data Concepts",
      "Relational Data",
      "Non-relational Data",
      "Analytics Workloads",
      "Azure Data Services",
      "Power BI Basics"
    ]
  },
  {
    code: "DP-300",
    title: "Administering Microsoft Azure SQL Solutions",
    status: "Certified",
    badgeUrl:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    certUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/LucianCiusa-9334/DF7B34C0159A3BB5?sharingId=2F892BDD94DC2A42",
    credentialId: "DF7B34C0159A3BB5",
    tags: [
      "Azure SQL Database",
      "Azure SQL Managed Instance",
      "SQL Server on Azure VM",
      "T-SQL Administration",
      "Performance Optimization",
      "Security Hardening",
      "Task Automation",
      "HA/DR"
    ]
  },
  {
    code: "DP-700",
    title: "Implementing Data Engineering Solutions Using Microsoft Fabric",
    status: "Certified",
    badgeUrl:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    certUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/LucianCiusa-9334/45553FD331F65910?sharingId=2F892BDD94DC2A42",
    credentialId: "45553FD331F65910",
    tags: [
      "Microsoft Fabric",
      "Data Ingestion",
      "Data Transformation",
      "Lakehouse",
      "Data Warehouse",
      "Real-Time Intelligence",
      "Analytics Optimization",
      "PySpark",
      "KQL"
    ]
  },
  {
    code: "AI-102",
    title: "Designing and Implementing a Microsoft Azure AI Solution",
    status: "Certified",
    badgeUrl:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    certUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/LucianCiusa-9334/77150C69888DB3F4?sharingId=2F892BDD94DC2A42",
    credentialId: "77150C69888DB3F4",
    tags: [
      "Azure AI Services",
      "Azure AI Search",
      "Azure OpenAI",
      "Generative AI",
      "Agentic Solutions",
      "Computer Vision",
      "Natural Language Processing",
      "Knowledge Mining",
      "Responsible AI"
    ]
  },
  {
    code: "DP-100",
    title: "Designing and Implementing a Data Science Solution on Azure",
    status: "In Progress",
    badgeUrl:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    certUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/",
    credentialId: "Pending",
    tags: [
      "Azure Machine Learning",
      "MLflow",
      "Model Training",
      "Experimentation",
      "Model Deployment",
      "MLOps",
      "Prompt Optimization",
      "Language Models"
    ]
  }
];

const skillGroups = {
  en: [
    {
      title: "AI & Data",
      items: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Prompt Engineering",
        "MLOps",
        "Data Analysis"
      ]
    },
    {
      title: "Cloud & Platforms",
      items: [
        "Azure",
        "Azure Machine Learning",
        "Azure AI Services",
        "Azure OpenAI",
        "Microsoft Fabric",
        "Databricks"
      ]
    },
    {
      title: "Data Engineering",
      items: ["SQL", "Azure SQL", "PySpark", "Data Pipelines", "ETL", "Power BI"]
    },
    {
      title: "Software & ERP",
      items: [
        ".NET Framework",
        "C#",
        "APIs",
        "Git",
        "ERP Systems",
        "ERP Integrations",
        "Business Process Automation"
      ]
    }
  ],
  es: [
    {
      title: "IA y Datos",
      items: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Prompt Engineering",
        "MLOps",
        "Análisis de Datos"
      ]
    },
    {
      title: "Cloud y Plataformas",
      items: [
        "Azure",
        "Azure Machine Learning",
        "Azure AI Services",
        "Azure OpenAI",
        "Microsoft Fabric",
        "Databricks"
      ]
    },
    {
      title: "Ingeniería de Datos",
      items: ["SQL", "Azure SQL", "PySpark", "Pipelines de Datos", "ETL", "Power BI"]
    },
    {
      title: "Software y ERP",
      items: [
        ".NET Framework",
        "C#",
        "APIs",
        "Git",
        "Sistemas ERP",
        "Integraciones ERP",
        "Automatización de Procesos"
      ]
    }
  ]
};

function App() {
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState("about");

  const t = useMemo(() => content[lang], [lang]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const revealTargets = document.querySelectorAll(".reveal-section");

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-42% 0px -46% 0px",
        threshold: 0
      }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.target.classList.contains("visible");
          const ratio = entry.intersectionRatio;

          if (!isVisible && ratio >= 0.2) {
            entry.target.classList.add("visible");
            return;
          }

          if (isVisible && ratio <= 0.06) {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: [0, 0.06, 0.12, 0.2, 0.28]
      }
    );

    sections.forEach((section) => activeObserver.observe(section));
    revealTargets.forEach((section) => revealObserver.observe(section));

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:lucianciusa1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#top">
          LC
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {t.nav.map((item) => (
            <a
              key={item.id}
              className={active === item.id ? "active" : ""}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="lang-toggle"
          onClick={() => setLang((prev) => (prev === "en" ? "es" : "en"))}
          aria-label="Switch language"
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </header>

      <main id="top" className="container">
        <section className="hero panel reveal-section visible">
          <div className="hero-layout">
            <div className="hero-photo-wrap">
              <img className="hero-photo" src={lucianProfilePhoto} alt={t.heroImageAlt} loading="eager" />
            </div>
            <div className="hero-copy">
              <p className="eyebrow">{t.heroEyebrow}</p>
              <h1>{t.heroTitle}</h1>
              <p className="subtitle">{t.heroSubtitle}</p>

              <div className="hero-actions">
                <a className="btn primary" href="#projects">
                  {t.heroPrimary}
                </a>
                <div className="social-actions">
                  <a
                    className="btn ghost social-btn"
                    href="https://www.linkedin.com/in/lucian-ciusa-66a7b92b6/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 10.87H5.67V18H8.34V10.87M8.34 6A1.56 1.56 0 1 0 5.22 6A1.56 1.56 0 0 0 8.34 6M18.34 13.78C18.34 11.27 16.93 10.55 15.65 10.55C14.63 10.55 14.19 11.11 13.93 11.5V10.87H11.37V18H14.05V14.3C14.05 13.32 14.24 12.37 15.45 12.37C16.64 12.37 16.66 13.48 16.66 14.36V18H19.34V13.78H18.34Z" />
                    </svg>
                    <span>{t.linkedinLabel}</span>
                  </a>
                  <a
                    className="btn ghost social-btn"
                    href="https://github.com/Luchy118"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M12 .5A12 12 0 0 0 8.2 23.9C8.8 24 9 23.7 9 23.5V21.3C5.7 22 5 19.9 5 19.9C4.5 18.7 3.8 18.4 3.8 18.4C2.8 17.7 3.9 17.7 3.9 17.7C5 17.8 5.6 18.9 5.6 18.9C6.6 20.6 8.3 20.1 9 19.8C9.1 19.1 9.4 18.7 9.7 18.5C7 18.2 4.2 17.1 4.2 12.4C4.2 11.1 4.7 10 5.5 9.1C5.4 8.8 5 7.5 5.6 5.8C5.6 5.8 6.6 5.5 9 7.1C9.9 6.8 10.9 6.7 12 6.7C13.1 6.7 14.1 6.8 15 7.1C17.4 5.5 18.4 5.8 18.4 5.8C19 7.5 18.6 8.8 18.5 9.1C19.3 10 19.8 11.1 19.8 12.4C19.8 17.1 17 18.2 14.3 18.5C14.7 18.8 15 19.4 15 20.3V23.5C15 23.7 15.2 24 15.8 23.9A12 12 0 0 0 12 .5Z" />
                    </svg>
                    <span>{t.githubLabel}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="panel reveal-section">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutBody}</p>
        </section>

        <section id="education" className="panel reveal-section">
          <h2>{t.educationTitle}</h2>
          <div className="education-grid">
            {t.educationItems.map((item) => (
              <article className="education-card" key={`${item.institution}-${item.program}`}>
                <h3>{item.institution}</h3>
                <p>{item.program}</p>
                <p className="education-meta">{item.dates}</p>
                <p className="education-meta">{item.location}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="panel reveal-section">
          <h2>{t.projectsTitle}</h2>
          <p className="section-intro">{t.projectsIntro}</p>

          <div className="cards projects-grid">
            {t.projectCards.map((card, index) => (
              <article
                className={`card project-card ${card.imageUrl ? "has-media" : "no-media"}`}
                key={`${card.title}-${index}`}
              >
                {card.imageUrl ? (
                  <div className="project-media" aria-hidden="true">
                    <img src={card.imageUrl} alt={card.imageAlt || card.title} loading="lazy" />
                  </div>
                ) : null}
                <div className="project-content">
                  {card.tag ? <p className="tag">{card.tag}</p> : null}
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  {(card.repoUrl || card.detailsUrl || card.solutionUrl) && (
                    <div className="project-actions">
                      {card.repoUrl ? (
                        <a className="btn ghost project-btn" href={card.repoUrl} target="_blank" rel="noreferrer">
                          {t.projectRepo}
                        </a>
                      ) : null}
                      {card.detailsUrl ? (
                        <a className="btn ghost project-btn" href={card.detailsUrl} target="_blank" rel="noreferrer">
                          {t.projectDetails}
                        </a>
                      ) : null}
                      {card.solutionUrl ? (
                        <a className="btn ghost project-btn" href={card.solutionUrl} target="_blank" rel="noreferrer">
                          {t.projectSolution}
                        </a>
                      ) : null}
                    </div>
                  )}
                  {!card.solutionUrl && card.imageUrl ? <p className="project-note">{t.projectDemoUnavailable}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="panel reveal-section">
          <h2>{t.skillsTitle}</h2>
          <div className="skill-groups">
            {skillGroups[lang].map((group) => (
              <article className="skill-group" key={group.title}>
                <h3 className="skill-group-title">{group.title}</h3>
                <div className="chips">
                  {group.items.map((skill) => (
                    <span key={`${group.title}-${skill}`}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="panel reveal-section">
          <h2>{t.certTitle}</h2>
          <p className="section-intro">{t.certIntro}</p>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="cert-card" key={cert.code}>
                <div className="cert-left">
                  <a href={cert.certUrl} target="_blank" rel="noreferrer" className="cert-badge-link">
                    <img
                      src={cert.badgeUrl}
                      alt={`${cert.code} Microsoft certification badge`}
                      className="cert-badge"
                      loading="lazy"
                    />
                  </a>
                  <p className="cert-code">{cert.code}</p>
                  <p className={`cert-status ${cert.status === "In Progress" ? "pending" : ""}`}>
                    {cert.status}
                  </p>
                </div>
                <div className="cert-right">
                  <h3>{cert.title}</h3>
                  <p className="credential-id">ID: {cert.credentialId}</p>
                  <div className="cert-tags" aria-label={`${cert.code} tags`}>
                    {cert.tags.map((tag) => (
                      <span key={`${cert.code}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel reveal-section">
          <h2>{t.contactTitle}</h2>
          <p>
            {t.contactBody} <a className="contact-inline-link" href="mailto:lucianciusa1@gmail.com">{t.contactInlineCta}</a>.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>{t.formName}</span>
              <input required name="name" type="text" />
            </label>
            <label>
              <span>{t.formEmail}</span>
              <input required name="email" type="email" />
            </label>
            <label>
              <span>{t.formMessage}</span>
              <textarea required name="message" rows="4" />
            </label>
            <button className="btn primary" type="submit">
              {t.formSend}
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Lucian Ciusa</footer>
    </>
  );
}

export default App;
