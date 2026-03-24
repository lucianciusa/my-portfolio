import { useEffect, useMemo, useState } from "react";

const content = {
  en: {
    nav: [
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "certifications", label: "Certifications" },
      { id: "contact", label: "Contact" }
    ],
    heroEyebrow: "AI & Big Data Master's Student",
    heroTitle: "Lucian Ciusa",
    heroSubtitle: "Building practical AI products and data-driven solutions.",
    heroPrimary: "See my work",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    aboutTitle: "About Me",
    aboutBody:
      "I am currently studying an AI & Big Data specialization master's degree at Tajamar Tech in Madrid, Spain. I enjoy combining machine learning, analytics, and clean product thinking to solve real-world problems.",
    educationTitle: "Education",
    educationKicker: "Current",
    educationDegree: "Master's in AI & Big Data Specialization",
    educationSchool: "Tajamar Tech, Madrid, Spain",
    projectsTitle: "Projects",
    projectsIntro: "Real project spotlight plus upcoming case studies.",
    projectCards: [
      {
        tag: "Current",
        title: "La Cuchara",
        body: "My current project. Full case study and technical breakdown will be added soon."
      },
      {
        tag: "Next",
        title: "Upcoming Project",
        body: "Reserved for your next AI or data case study."
      },
      {
        tag: "Soon",
        title: "In Progress",
        body: "Space ready for future portfolio work and measurable outcomes."
      }
    ],
    skillsTitle: "Skills & Tech Stack",
    certTitle: "Certifications",
    certIntro: "Microsoft certifications completed and in progress.",
    contactTitle: "Contact",
    contactBody: "Use this form to quickly draft an email.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSend: "Send message"
  },
  es: {
    nav: [
      { id: "about", label: "Sobre mi" },
      { id: "projects", label: "Proyectos" },
      { id: "skills", label: "Habilidades" },
      { id: "certifications", label: "Certificaciones" },
      { id: "contact", label: "Contacto" }
    ],
    heroEyebrow: "Estudiante de Master en IA y Big Data",
    heroTitle: "Lucian Ciusa",
    heroSubtitle: "Construyendo productos de IA y soluciones basadas en datos en Madrid.",
    heroPrimary: "Ver proyectos",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    aboutTitle: "Sobre Mi",
    aboutBody:
      "Actualmente estudio un master de especializacion en IA y Big Data en Tajamar Tech, Madrid. Me gusta combinar machine learning, analitica y mentalidad de producto para resolver problemas reales.",
    educationTitle: "Educacion",
    educationKicker: "Actual",
    educationDegree: "Master en Especializacion de IA y Big Data",
    educationSchool: "Tajamar Tech, Madrid",
    projectsTitle: "Proyectos",
    projectsIntro: "Proyecto real destacado y proximos casos de estudio.",
    projectCards: [
      {
        tag: "Actual",
        title: "La Cuchara",
        body: "Mi proyecto actual. El caso de estudio completo y el detalle tecnico se anadiran pronto."
      },
      {
        tag: "Siguiente",
        title: "Proximo Proyecto",
        body: "Espacio reservado para tu siguiente caso de IA o datos."
      },
      {
        tag: "Pronto",
        title: "En Progreso",
        body: "Espacio preparado para futuros proyectos con resultados medibles."
      }
    ],
    skillsTitle: "Habilidades y Stack Tecnologico",
    certTitle: "Certificaciones",
    certIntro: "Certificaciones de Microsoft completadas y en progreso.",
    contactTitle: "Contacto",
    contactBody: "Usa este formulario para redactar un email rapidamente.",
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
    status: "Completed",
    badgeUrl:
      "https://images.credly.com/size/680x680/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png",
    certUrl: "https://www.credly.com/badges/a84d21b9-d493-4e6c-a2cb-5a283c960b49/public_url",
    credentialId: "a84d21b9-d493-4e6c-a2cb-5a283c960b49",
    tags: ["Fundamentals", "Data", "Azure"]
  },
  {
    code: "DP-300",
    title: "Administering Microsoft Azure SQL Solutions",
    status: "Completed",
    badgeUrl:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    certUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/LucianCiusa-9334/DF7B34C0159A3BB5?sharingId=2F892BDD94DC2A42",
    credentialId: "DF7B34C0159A3BB5",
    tags: ["Associate", "Azure SQL", "Administration"]
  },
  {
    code: "DP-700",
    title: "Implementing Data Engineering Solutions Using Microsoft Fabric",
    status: "Completed",
    badgeUrl:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    certUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/LucianCiusa-9334/45553FD331F65910?sharingId=2F892BDD94DC2A42",
    credentialId: "45553FD331F65910",
    tags: ["Associate", "Fabric", "Data Engineering"]
  },
  {
    code: "AI-102",
    title: "Designing and Implementing a Microsoft Azure AI Solution",
    status: "Completed",
    badgeUrl:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    certUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/LucianCiusa-9334/77150C69888DB3F4?sharingId=2F892BDD94DC2A42",
    credentialId: "77150C69888DB3F4",
    tags: ["Associate", "AI", "Solutions"]
  },
  {
    code: "DP-100",
    title: "Designing and Implementing a Data Science Solution on Azure",
    status: "In Progress",
    badgeUrl:
      "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    certUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/",
    credentialId: "Pending",
    tags: ["Associate", "Data Science", "In Progress"]
  }
];

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Data Analysis",
  "Power BI",
  "Deep Learning",
  "Git",
  "APIs"
];

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
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.18
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
      <div className="background-canvas" aria-hidden="true">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="mesh-overlay" />
      </div>

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
        </section>

        <section id="about" className="panel reveal-section">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutBody}</p>
        </section>

        <section id="projects" className="panel reveal-section">
          <h2>{t.projectsTitle}</h2>
          <p className="section-intro">{t.projectsIntro}</p>

          <div className="cards">
            {t.projectCards.map((card) => (
              <article className="card" key={card.title}>
                <p className="tag">{card.tag}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="panel reveal-section">
          <h2>{t.skillsTitle}</h2>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
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
          <p>{t.contactBody}</p>
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
