import { useEffect, useState } from 'react'
import './App.css'
import headshot from './assets/rikuna-headshot.png'

const profile = {
  name: 'Rikuna Das',
  title: 'Internet Marketing Executive',
  phone: '+91 6370968182',
  phoneHref: 'tel:+916370968182',
  email: 'drikuna@gmail.com',
  emailHref: 'mailto:drikuna@gmail.com',
  location: 'Kestopur, Kolkata, 700102',
  whatsappHref:
    'https://wa.me/916370968182?text=Hello%20Rikuna%2C%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20opportunity.',
  resumeHref: './rikuna-das-resume-2026.pdf',
  previewHref: './rikuna-das-resume-preview.png',
}

const pageTabs = [
  { id: 'overview', label: 'Overview', tag: 'Intro page' },
  { id: 'expertise', label: 'Expertise', tag: 'Skills page' },
  { id: 'experience', label: 'Experience', tag: 'Career page' },
  { id: 'contact', label: 'Contact', tag: 'Action page' },
]

const heroNotes = [
  'SEO-led visibility improvements',
  'Paid ads with performance tracking',
  'Content and campaign planning',
]

const capabilities = [
  {
    title: 'SEO Strategy',
    description:
      'Keyword mapping, on-page structure, citations, and local search improvements built for discoverability.',
  },
  {
    title: 'PPC Performance',
    description:
      'Google Ads campaign setup, optimization, spend control, and conversion-focused reporting.',
  },
  {
    title: 'Social Campaigns',
    description:
      'Content scheduling, engagement planning, and channel management for stronger brand visibility.',
  },
  {
    title: 'Analytics Reporting',
    description:
      'Campaign KPI reviews across impressions, clicks, traffic, engagement, and performance trends.',
  },
]

const services = [
  'Search Engine Optimization',
  'Google Ads / PPC',
  'Social Media Marketing',
  'WordPress Website Optimization',
  'Google Analytics Reporting',
  'Content Calendar Planning',
]

const highlights = [
  'Managed daily digital marketing operations while reacting quickly to market and campaign signals.',
  'Optimized WordPress websites with better page speed, mobile responsiveness, and search structure.',
  'Prepared KPI reports covering clicks, conversions, impressions, and spend for decision support.',
  'Worked with cross-functional teams to strengthen traffic, visibility, and online engagement.',
]

const experience = [
  {
    company: 'Virtual Employee Pvt. Ltd.',
    period: 'August 2023 - Present',
    achievements: [
      'Worked across SEO, social media marketing, and PPC projects for multiple client accounts.',
      'Conducted keyword research, competitor analysis, and optimization for both organic and paid search.',
      'Handled Google Ads and social ad performance while improving campaign efficiency and reach.',
      'Built and optimized WordPress pages with stronger structure, responsiveness, and SEO alignment.',
      'Used Google Analytics and platform dashboards to review outcomes and guide improvements.',
    ],
  },
  {
    company: 'Digihyfy Digital Marketing Agency',
    period: 'March 2022 - August 2023',
    achievements: [
      'Supported search engine optimization and social media marketing projects for business growth.',
      'Created and maintained content calendars aligned with brand and campaign objectives.',
      'Prepared analytics reports to measure campaign KPIs and ongoing performance.',
      'Collaborated with broader teams to improve engagement, traffic, and overall campaign output.',
    ],
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function App() {
  const [activePage, setActivePage] = useState('overview')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => {
      const nextHash = window.location.hash.replace('#', '')
      const isKnownPage = pageTabs.some((tab) => tab.id === nextHash)
      setActivePage(isKnownPage ? nextHash : 'overview')
      setMenuOpen(false)
    }

    onHashChange()
    window.addEventListener('hashchange', onHashChange)

    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const openPage = (pageId) => {
    window.location.hash = pageId
    setMenuOpen(false)
  }

  const isOverview = activePage === 'overview'
  const isExpertise = activePage === 'expertise'
  const isExperience = activePage === 'experience'
  const frameTitle = isOverview
    ? 'Rikuna Das'
    : isExpertise
      ? 'Expertise'
      : isExperience
        ? 'Experience'
        : 'Let’s Connect'

  const frameDescription = isOverview
    ? 'A dedicated Internet Marketing Executive with a strong passion for building digital visibility, improving campaign performance, and supporting business growth through SEO, PPC, social media, analytics, and website optimization.'
    : isExpertise
      ? 'A refined presentation of the skills, services, and digital marketing strengths that define Rikuna’s professional journey. From search visibility and paid campaigns to analytics and content planning, each area reflects a practical and growth-focused approach.'
      : isExperience
        ? 'A thoughtful overview of professional experience, meaningful achievements, and day-to-day contributions across digital marketing roles. Each section is arranged to reflect consistency, practical knowledge, and a growing impact in SEO, PPC, social media, analytics, and website optimization.'
        : 'A warm and welcoming space to start meaningful conversations about roles, freelance projects, and digital marketing opportunities. Whether you are looking for dedicated support in SEO, PPC, social media, or performance-focused strategy, this is the right place to connect and begin the conversation with confidence.'

  return (
    <div className="page-shell">
      <header className="topbar card">
        <div className="topbar-main">
          <button className="brand brand-button" type="button" onClick={() => openPage('overview')}>
            <span className="brand-mark">RD</span>
            <div>
              <strong>{profile.name}</strong>
              <small>{profile.title}</small>
            </div>
          </button>

          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          {pageTabs.map((tab) => {
            const isActive = activePage === tab.id

            return (
              <button
                key={tab.id}
                className={`nav-pill ${isActive ? 'is-active' : ''}`}
                type="button"
                onClick={() => openPage(tab.id)}
              >
                <strong>{tab.label}</strong>
                <span>{tab.tag}</span>
              </button>
            )
          })}
        </nav>
      </header>

      <main className="layout">
        <section className="card frame-card">
          <div className="frame-copy">
            <h1>{frameTitle}</h1>
            <p>{frameDescription}</p>
          </div>
        </section>

        {isOverview ? (
          <>
            <section className="hero card hero-card">
              <div className="hero-copy">
                <p className="eyebrow">Digital marketing portfolio</p>
                <h2>Turning search, social, and paid traffic into measurable growth.</h2>
                <p className="hero-text">
                  {profile.name} is an {profile.title.toLowerCase()} with experience
                  across SEO, PPC, analytics, WordPress optimization, and social media campaigns.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href={profile.resumeHref} download>
                    Download CV
                  </a>
                  <button className="button button-secondary" type="button" onClick={() => openPage('contact')}>
                    Open Contact Page
                  </button>
                </div>
                <div className="hero-bottom">
                  <article className="hero-note-card">
                    <span className="hero-note-label">Why work with Rikuna</span>
                    <p>
                      A calm, detail-oriented marketing professional who blends search,
                      paid campaigns, analytics, and content thinking into steady digital growth.
                    </p>
                  </article>
                  <div className="hero-chip-list">
                    {heroNotes.map((note) => (
                      <span key={note}>{note}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="profile-card">
                <div className="profile-media">
                  <img src={headshot} alt="Rikuna Das" />
                  <div className="status-pill">Available for roles</div>
                </div>
                <div className="profile-details">
                  <h2>{profile.name}</h2>
                  <p>{profile.title}</p>
                  <ul className="contact-list">
                    <li>
                      <span>Phone</span>
                      <a href={profile.phoneHref}>{profile.phone}</a>
                    </li>
                    <li>
                      <span>Email</span>
                      <a href={profile.emailHref}>{profile.email}</a>
                    </li>
                    <li>
                      <span>Location</span>
                      <strong>{profile.location}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content-grid">
              <article className="card section-card">
                <SectionHeading
                  eyebrow="Summary"
                  title="Strong digital marketing foundation"
                  description="A clear profile snapshot for hiring managers scanning the site quickly."
                />
                <div className="bullet-list">
                  {highlights.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </article>

              <article className="card section-card accent-card">
                <SectionHeading
                  eyebrow="Explore More"
                  title="Move through each section with clarity and ease"
                  description="Every section is arranged to feel smooth, intentional, and easy to explore, creating a portfolio experience that feels polished from start to finish."
                />
                <div className="page-link-grid">
                  {pageTabs.map((tab) => (
                    <button
                      key={tab.id}
                      className="page-link-card"
                      type="button"
                      onClick={() => openPage(tab.id)}
                    >
                      <strong>{tab.label}</strong>
                      <span>{tab.tag}</span>
                    </button>
                  ))}
                </div>
              </article>
            </section>
          </>
        ) : isExpertise ? (
          <>
            <section className="card page-hero expertise-hero">
             <SectionHeading
  eyebrow="Digital Marketing Expertise"
  title="SEO, Social Media & PPC Marketing Specialist"
  description="Experienced digital marketing executive with 3+ years of experience in SEO, social media marketing, PPC advertising, and performance analytics, helping businesses increase visibility, engagement, and conversions."
/>
              <div className="tag-grid">
                {services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
            </section>

            <section className="capability-grid">
              {capabilities.map((capability, index) => (
                <article className={`card capability-card tone-${index + 1}`} key={capability.title}>
                  <span className="capability-index">0{index + 1}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </section>
          </>
        ) : isExperience ? (
          <>
            <section className="content-grid experience-layout">
              <article className="card section-card timeline-card">
                <SectionHeading
                  eyebrow="Experience Page"
                  title="Career timeline in premium card layout"
                  description="Separate timeline cards keep the work history easy to scan on both desktop and mobile."
                />
                <div className="timeline">
                  {experience.map((role) => (
                    <section className="timeline-item" key={role.company}>
                      <div className="timeline-header">
                        <h3>{role.company}</h3>
                        <span>{role.period}</span>
                      </div>
                      <div className="timeline-points">
                        {role.achievements.map((achievement) => (
                          <p key={achievement}>{achievement}</p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </article>

              <aside className="card resume-card">
                <SectionHeading
                  eyebrow="Resume Page"
                  title="A beautifully presented CV, ready to view and download"
                  description="This section offers a quick and convenient way for recruiters, clients, and hiring teams to preview the original resume and download it instantly whenever needed."
                />
                <a className="resume-preview" href={profile.resumeHref} download>
                  <img src={profile.previewHref} alt="Preview of Rikuna Das resume" />
                </a>
                <div className="resume-actions">
                  <a className="button button-primary" href={profile.resumeHref} download>
                    Download CV
                  </a>
                  <button className="button button-tertiary" type="button" onClick={() => openPage('contact')}>
                    Hire / Contact
                  </button>
                </div>
              </aside>
            </section>
          </>
        ) : (
          <section className="contact-page-grid">
            <article className="card contact-card spotlight-card">
              <div>
                <p className="eyebrow">Contact Page</p>
                <h2>Let&apos;s create meaningful digital growth together.</h2>
                <p>
                  Whether you&apos;re hiring for a full-time role, freelance support, or a
                  performance-focused marketing project, you can reach Rikuna in one tap
                  from mobile or desktop.
                </p>
              </div>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={profile.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Redirect
                </a>
                <a className="button button-secondary" href={profile.phoneHref}>
                  Call Now
                </a>
              </div>
            </article>

            <article className="card direct-contact-card">
              <SectionHeading
                eyebrow="Direct Details"
                title="Every way to connect, gathered in one elegant place"
                description="Thoughtfully arranged for a smooth experience on both mobile and desktop, so reaching out feels quick, simple, and welcoming."
              />
              <div className="direct-contact-grid">
                <a className="direct-contact-box" href={profile.emailHref}>
                  <strong>Email</strong>
                  <span>{profile.email}</span>
                </a>
                <a className="direct-contact-box" href={profile.phoneHref}>
                  <strong>Phone</strong>
                  <span>{profile.phone}</span>
                </a>
                <a
                  className="direct-contact-box"
                  href={profile.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>WhatsApp</strong>
                  <span>Open chat instantly</span>
                </a>
                <a className="direct-contact-box" href={profile.resumeHref} download>
                  <strong>Resume</strong>
                  <span>Download full CV</span>
                </a>
              </div>
            </article>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
