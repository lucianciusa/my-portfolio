import { useEffect, useMemo, useState } from "react";

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
    heroSubtitle: "Building practical AI products and data-driven solutions in Madrid.",
    heroPrimary: "See my work",
    aboutTitle: "About Me",
    aboutBody:
      "I am currently studying an AI & Big Data specialization master's degree at Tajamar Tech in Madrid. I enjoy combining machine learning, analytics, and clean product thinking to solve real-world problems.",
    educationTitle: "Education",
    educationKicker: "Current",
    educationDegree: "Master's in AI & Big Data Specialization",
    educationSchool: "Tajamar Tech, Madrid",
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
      { id: "education", label: "Educacion" },
      { id: "projects", label: "Proyectos" },
      { id: "skills", label: "Habilidades" },
      { id: "certifications", label: "Certificaciones" },
      { id: "contact", label: "Contacto" }
    ],
    heroEyebrow: "Estudiante de Master en IA y Big Data",
    heroTitle: "Lucian Ciusa",
    heroSubtitle: "Construyendo productos de IA y soluciones basadas en datos en Madrid.",
    heroPrimary: "Ver proyectos",
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
    status: "Completed"
  },
  {
    code: "DP-300",
    title: "Administering Microsoft Azure SQL Solutions",
    status: "Completed"
  },
  {
    code: "DP-700",
    title: "Implementing Data Engineering Solutions Using Microsoft Fabric",
    status: "Completed"
  },
  {
    code: "AI-102",
    title: "Designing and Implementing a Microsoft Azure AI Solution",
    status: "Completed"
  },
  {
    code: "DP-100",
    title: "Designing and Implementing a Data Science Solution on Azure",
    status: "In Progress"
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
      <div className="bg-shape shape-1" aria-hidden="true" />
      <div className="bg-shape shape-2" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

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
        <section className="hero panel">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="subtitle">{t.heroSubtitle}</p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              {t.heroPrimary}
            </a>
            <a
              className="btn ghost"
              href="https://www.linkedin.com/in/lucian-ciusa-66a7b92b6/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section id="about" className="panel">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutBody}</p>
        </section>

        <section id="education" className="panel">
          <h2>{t.educationTitle}</h2>
          <article className="timeline-item">
            <p className="kicker">{t.educationKicker}</p>
            <h3>{t.educationDegree}</h3>
            <p>{t.educationSchool}</p>
          </article>
        </section>

        <section id="projects" className="panel">
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

        <section id="skills" className="panel">
          <h2>{t.skillsTitle}</h2>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="certifications" className="panel">
          <h2>{t.certTitle}</h2>
          <p className="section-intro">{t.certIntro}</p>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article className="cert-card" key={cert.code}>
                <div className="badge-shell" aria-hidden="true">
                  <div className="badge-core">{cert.code}</div>
                </div>
                <p className="cert-status">{cert.status}</p>
                <h3>{cert.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel">
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
