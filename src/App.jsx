import { useState } from "react";
import emailjs from "emailjs-com";

const services = [
  { number: "01", name: "Starter Business Website", price: "₹8,000", unit: "starting at", ideal: "Small businesses, consultants and independent service providers.", delivery: "5–7 working days", featured: false, features: ["Up to 4 pages", "Responsive mobile and desktop design", "WhatsApp click-to-chat integration", "Basic contact information", "On-page SEO", "Deployment assistance"] },
  { number: "02", name: "Professional Business Website", price: "₹12,000", unit: "starting at", ideal: "Coaching classes, clinics, gyms, salons and established businesses.", delivery: "7–12 working days", featured: true, features: ["Up to 6 pages", "Customised UI and responsive design", "Contact and enquiry forms", "Google Maps integration", "Social media integration", "Basic SEO, deployment and basic training"] },
  { number: "03", name: "Full-Stack MERN Web Application", price: "₹25,000", unit: "starting at", ideal: "Businesses that need interactive features, data management or custom workflows.", delivery: "14–21 working days", featured: false, features: ["React frontend", "Node.js and Express.js backend", "MongoDB database", "Authentication where required", "Admin dashboard and CRUD", "API integration and custom workflows", "Deployment assistance"] },
  { number: "04", name: "Website Maintenance & Support", price: "₹1,500", unit: "per month, starting at", ideal: "Businesses that need ongoing help keeping an existing website updated.", delivery: "Ongoing", featured: false, features: ["Minor content updates", "Bug fixes", "Basic security and dependency updates", "Backup checks", "Technical support", "Major redesigns and new features quoted separately"] },
];

const projects = [
  { number: "01", name: "My Watch Mood", type: "Movie discovery application", description: "A Netflix-style movie discovery experience with mood filters, search, trailers and a Watch Later list, powered by TMDB.", stack: ["React", "TMDB API", "Tailwind CSS", "Framer Motion"], repo: "https://github.com/MayurArgade/react-netflix-clone", demo: "https://react-netlix.netlify.app/", tag: "API integration", preview: "movies" },
  { number: "02", name: "Wallpaper Gallery", type: "Wallpaper discovery website", description: "A responsive wallpaper gallery that loads image collections from an API and presents them in a clean browsing layout.", stack: ["HTML", "CSS", "JavaScript", "Unsplash API"], repo: "https://github.com/MayurArgade/wallpaper-app", demo: "https://wallpaper-app-dun.vercel.app/", tag: "Responsive web", preview: "wallpaper" },
  { number: "03", name: "Gemini UI Clone", type: "AI-inspired interface concept", description: "A responsive front-end recreation of a Gemini-style chat interface. This is a UI practice project, not a production AI service.", stack: ["React", "JavaScript", "CSS"], repo: "https://github.com/MayurArgade/Geminiclone", demo: "https://mayurargade.github.io/Geminiclone/", tag: "React interface", preview: "ai" },
];

const industries = [
  ["01", "Education & coaching", "Course information, enquiry forms and clear paths for students and parents to get in touch."],
  ["02", "Healthcare & clinics", "Service details, location information and easier appointment enquiries."],
  ["03", "Real estate", "Property showcases, project information and direct buyer enquiries."],
  ["04", "Restaurants & cafes", "Menus, opening information, location maps and quick customer contact."],
  ["05", "Fitness & wellness", "Membership information, class details and consultation enquiries."],
  ["06", "Salons & beauty", "Service menus, pricing information, galleries and booking enquiries."],
  ["07", "Professional services", "A credible online presence that explains expertise and turns visits into enquiries."],
];

const steps = [
  ["01", "Discovery", "We discuss your business, requirements and objectives."],
  ["02", "Proposal", "You receive the project scope, quotation and estimated timeline."],
  ["03", "Design", "I prepare the website layout and obtain your approval."],
  ["04", "Development", "I build and test the agreed functionality."],
  ["05", "Review", "You review the project and request the agreed revisions."],
  ["06", "Launch", "The website is deployed and handover documentation is provided."],
];

const faqs = [
  ["How much does a website cost?", "Starter business websites begin at ₹8,000, professional websites at ₹12,000, and full-stack MERN applications at ₹25,000. Maintenance starts at ₹1,500 per month. Final pricing depends on the agreed scope and complexity."],
  ["How long does development take?", "Estimated delivery is 5–7 working days for a Starter Website, 7–12 working days for a Professional Website and 14–21 working days for a MERN Application. Estimates begin after requirements, content and required assets are received."],
  ["Can you redesign my existing website?", "Yes. Share your current website and the changes you need. A redesign or additional functionality will be scoped and quoted according to its complexity."],
  ["Will my website work on mobile devices?", "Responsive design is included in both business website packages. The layout is planned for mobile, tablet and desktop screens."],
  ["Can I manage website content myself?", "Content management or an admin dashboard can be discussed during discovery. An admin dashboard and CRUD functionality are included in the MERN application scope where agreed."],
  ["Do you provide maintenance?", "Yes. Website maintenance starts at ₹1,500 per month and covers minor content updates, bug fixes, basic security and dependency updates, backup checks and technical support. Major redesigns and new features are quoted separately."],
  ["Are domain and hosting included?", "Domain registration, paid hosting, premium APIs and third-party subscriptions are billed separately. I can help with deployment and guide you through the required setup."],
  ["How do payments work?", "The payment structure is 50% at project confirmation, 30% at the development milestone and the remaining 20% before final handover."],
];

const emailConfig = {
  service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function ProjectPreview({ type }) {
  return <div className={`project-preview preview-${type}`}>
    <div className="preview-top"><span /><span /><span /><i>mayur.dev / preview</i></div>
    {type === "movies" && <div className="preview-movie"><small>DISCOVER YOUR NEXT WATCH</small><strong>Find your<br/>kind of story.</strong><div className="preview-pills"><b>Action</b><b>Comedy</b><b>Drama</b></div><div className="poster-row"><span>INTERSTELLAR</span><span>THE BATMAN</span><span>INCEPTION</span></div></div>}
    {type === "wallpaper" && <div className="preview-wall"><div className="wall-title">Find your next<br/><b>wallpaper.</b></div><div className="wall-grid"><span/><span/><span/><span/><span/><span/></div></div>}
    {type === "ai" && <div className="preview-ai"><div className="ai-mark">✳</div><strong>How can I help<br/>you today?</strong><div className="ai-prompt">Ask me anything... <span>↑</span></div><div className="ai-suggestions"><span>✦ Explain a concept</span><span>⌘ Write some code</span></div></div>}
  </div>;
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [formState, setFormState] = useState("idle");
  const [theme, setTheme] = useState("dark");

  const navItems = [["Services", "services"], ["Work", "projects"], ["Industries", "industries"], ["Process", "process"], ["About", "about"], ["Contact", "contact"]];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    if (!emailConfig.service || !emailConfig.template || !emailConfig.key) {
      setFormState("unconfigured");
      return;
    }
    setFormState("loading");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      await emailjs.send(emailConfig.service, emailConfig.template, values, emailConfig.key);
      setFormState("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS submission failed", error);
      setFormState("error");
    }
  };

  return <div className={`site-shell theme-${theme}`}>
    <div className="announcement"><span className="status-dot"/> Independent freelance web developer <span className="announce-divider">·</span> Malad, Mumbai <span className="announce-right">Available for select projects ↗</span></div>
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Mayur Argade home">mayur<span>.</span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <span>↗</span></a>
      </nav>
      <div className="nav-actions"><button className="theme-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle colour theme">{theme === "dark" ? "☼" : "☾"}</button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "✕" : "☰"}</button></div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> WEB DEVELOPMENT FOR AMBITIOUS BUSINESSES</div>
          <h1>Websites that<br/><em>move business</em><br/>forward<span className="accent-dot">.</span></h1>
          <p className="hero-description">I design and develop modern websites and custom web applications that help businesses build trust, connect with customers and simplify everyday work.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Discuss your project <span>↗</span></a><a className="button button-secondary" href="#projects">Explore selected work <span>↓</span></a></div>
          <div className="hero-footnote"><span>BASED IN MUMBAI, INDIA</span><span>WORKING WITH CLIENTS ACROSS INDIA & BEYOND</span></div>
        </div>
        <div className="hero-art" aria-label="Web development workspace illustration">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="code-window"><div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>business-site.jsx</span><b>•••</b></div><div className="code-content"><div className="code-line"><span>01</span><code><i>const</i> website = {"{"}</code></div><div className="code-line"><span>02</span><code>&nbsp;&nbsp;design: <b>"thoughtful"</b>,</code></div><div className="code-line"><span>03</span><code>&nbsp;&nbsp;experience: <b>"responsive"</b>,</code></div><div className="code-line"><span>04</span><code>&nbsp;&nbsp;purpose: <b>"grow business"</b>,</code></div><div className="code-line"><span>05</span><code>{"}"}</code></div><div className="code-line code-gap"><span>06</span><code><i>export default</i> website;</code></div></div><div className="window-bottom"><span><i/> All systems ready</span><span>REACT · MERN</span></div></div>
          <div className="floating-note note-top"><span>↗</span><div><b>Built around your goals</b><small>Not just another template</small></div></div>
          <div className="floating-note note-bottom"><span className="note-check">✓</span><div><b>Responsive by design</b><small>Mobile · Tablet · Desktop</small></div></div>
          <div className="art-caption">IDEAS IN. WORKING WEBSITES OUT.</div>
        </div>
      </section>

      <section className="value-strip"><div><b>01</b><span>Business-first thinking</span></div><div><b>02</b><span>Modern full-stack builds</span></div><div><b>03</b><span>Clear project milestones</span></div><div><b>04</b><span>Support after launch</span></div></section>

      <section className="section-wrap section-block" id="services">
        <SectionHeading eyebrow="WHAT I CAN BUILD FOR YOU / 01" title={<>The right solution<br/><em>for your next step.</em></>} text="From a professional first website to a custom application, choose the level of build your business actually needs."/>
        <div className="service-grid">{services.map((service) => <article className={service.featured ? "service-card featured" : "service-card"} key={service.number}>
          <div className="service-card-top"><span>{service.number} / SERVICE</span>{service.featured && <span className="popular-label">MOST REQUESTED</span>}</div>
          <h3>{service.name}</h3><p className="service-ideal">{service.ideal}</p>
          <div className="price-line"><small>{service.unit}</small><strong>{service.price}</strong>{service.number === "04" && <small>/ month</small>}</div>
          <div className="delivery"><span>ESTIMATED DELIVERY</span><b>{service.delivery}</b></div>
          <ul>{service.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
          <a className={service.featured ? "service-link filled" : "service-link"} href="#contact" onClick={() => {}} >Discuss this service <span>↗</span></a>
        </article>)}</div>
        <p className="pricing-note">All prices are starting prices. Final pricing depends on project scope, features and complexity. Domain registration, paid hosting, premium APIs and third-party subscriptions are billed separately.</p>
      </section>

      <section className="section-wrap section-block projects-section" id="projects">
        <SectionHeading eyebrow="SELECTED WORK / 02" title={<>A few things I've<br/><em>put into the world.</em></>} text="Real projects from my development work. Explore the live builds or inspect the source code."/>
        <div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.number}>
          <ProjectPreview type={project.preview}/>
          <div className="project-meta"><span>{project.number} / {project.tag}</span><span>PERSONAL PROJECT</span></div>
          <h3>{project.name}</h3><p className="project-type">{project.type}</p><p className="project-description">{project.description}</p>
          <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="project-links"><a href={project.demo} target="_blank" rel="noreferrer">Live preview ↗</a><a href={project.repo} target="_blank" rel="noreferrer">Source code ↗</a></div>
        </article>)}</div>
      </section>

      <section className="industries-section section-block" id="industries"><div className="section-wrap"><SectionHeading eyebrow="WHO I WORK WITH / 03" title={<>Built for the way<br/><em>your business works.</em></>} text="Different businesses have different customers and workflows. Your website should reflect that."/><div className="industry-grid">{industries.map(([num,name,desc]) => <article className="industry-card" key={num}><span>{num}</span><div><h3>{name}</h3><p>{desc}</p></div><b>↗</b></article>)}</div></div></section>

      <section className="section-wrap section-block" id="process"><SectionHeading eyebrow="A CLEAR WAY OF WORKING / 04" title={<>No mystery.<br/><em>Just a clear process.</em></>} text="You know what we're building, what it costs and what happens next."/><div className="process-grid">{steps.map(([num,title,desc]) => <article className="process-step" key={num}><span className="step-number">{num}</span><div className="step-connector"/><h3>{title}</h3><p>{desc}</p></article>)}</div><div className="payment-panel"><div><span className="eyebrow">PROJECT PAYMENT STRUCTURE</span><h3>Milestones keep<br/>everything clear.</h3></div><div className="payment-stages"><div><strong>50%</strong><span>Project confirmation</span></div><div><strong>30%</strong><span>Development milestone</span></div><div><strong>20%</strong><span>Before final handover</span></div></div></div><p className="timeline-note">Delivery estimates begin after requirements, content and required assets are received. Timelines may change with project complexity or delayed feedback.</p></section>

      <section className="about-section section-block" id="about"><div className="section-wrap about-layout"><div><SectionHeading eyebrow="A LITTLE ABOUT ME / 05" title={<>One developer.<br/><em>Direct collaboration.</em></>}/><p className="about-intro">I'm <strong>Mayur Argade</strong>, a freelance web developer based in Malad, Mumbai. I work with businesses to turn ideas and everyday problems into useful digital experiences.</p><p className="about-body">My focus is on responsive business websites and full-stack web applications using React, JavaScript, Node.js, Express.js and MongoDB. I keep communication straightforward, explain technical decisions in plain language and build around the requirements we agree on.</p><a className="text-link" href="https://github.com/MayurArgade" target="_blank" rel="noreferrer">Explore my GitHub <span>↗</span></a></div><div className="about-side"><div className="about-location"><span>⌖</span><div><small>LOCATION</small><b>Malad, Mumbai, India</b></div></div><div className="about-stack"><small>CORE TECHNOLOGY</small><div className="stack-group"><b>FRONTEND</b><div>React.js <span>JavaScript</span> HTML5 <span>CSS3</span> Tailwind CSS</div></div><div className="stack-group"><b>BACKEND & DATA</b><div>Node.js <span>Express.js</span> MongoDB <span>REST APIs</span></div></div><div className="stack-group"><b>TOOLS & DEPLOYMENT</b><div>Git <span>GitHub</span> Vercel <span>Netlify</span></div></div></div></div></div></section>

      <section className="section-wrap section-block faq-section" id="faq"><SectionHeading eyebrow="GOOD TO KNOW / 06" title={<>A few things<br/><em>you might be wondering.</em></>}/><div className="faq-list">{faqs.map(([question,answer],index) => <div className={activeFaq === index ? "faq-item active" : "faq-item"} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>{question}</span><b>{activeFaq === index ? "−" : "+"}</b></button>{activeFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="contact-section section-block" id="contact"><div className="section-wrap contact-layout"><div className="contact-copy"><span className="eyebrow">HAVE A PROJECT IN MIND? / 07</span><h2>Let's make<br/><em>it happen.</em></h2><p>Tell me a little about your business and what you'd like to build. I'll review the details and get back to you.</p><div className="contact-direct"><span>ELSEWHERE ON THE WEB</span><a href="https://github.com/MayurArgade" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/mayur-argade-/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row"><label>Your name<input name="name" placeholder="Name" required minLength="2"/></label><label>Email address<input name="email" type="email" placeholder="you@company.com" required/></label></div>
          <div className="form-row"><label>Phone number<input name="phone" type="tel" placeholder="+91..." /></label><label>Business name<input name="business" placeholder="Your business"/></label></div>
          <div className="form-row"><label>What do you need?<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Starter Business Website</option><option>Professional Business Website</option><option>Full-Stack MERN Web Application</option><option>Website Maintenance & Support</option><option>Not sure yet</option></select></label><label>Estimated budget <small>(optional)</small><select name="budget" defaultValue=""><option value="">Select a range</option><option>Under ₹10,000</option><option>₹10,000–₹25,000</option><option>₹25,000–₹50,000</option><option>₹50,000+</option><option>Need guidance</option></select></label></div>
          <label>Tell me about your project<textarea name="message" rows="4" placeholder="What does your business do, and what would you like the website to help you achieve?" required minLength="10"/></label>
          <input type="text" name="website" className="honeypot" tabIndex="-1" autoComplete="off" aria-hidden="true"/>
          <div className="form-bottom"><span>I'll only use these details to respond to your enquiry.</span><button className="button button-primary" type="submit" disabled={formState === "loading"}>{formState === "loading" ? "Sending..." : "Send enquiry"} <span>↗</span></button></div>
          {formState === "success" && <p className="form-message success" role="status">Your enquiry has been sent. Thanks for reaching out.</p>}
          {formState === "error" && <p className="form-message error" role="alert">Something went wrong while sending your enquiry. Please try again in a moment.</p>}
          {formState === "unconfigured" && <p className="form-message error" role="alert">The enquiry form is not connected yet. Please configure the EmailJS environment variables before accepting enquiries.</p>}
        </form></div></section>
    </main>
    <footer className="footer"><div className="footer-top"><a className="brand" href="#home">mayur<span>.</span></a><p>Thoughtful websites. Useful digital solutions.</p><a href="#home">Back to top ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mayur Argade · Mumbai, India</span><span>Built with React · Designed with intent</span><div><a href="https://github.com/MayurArgade" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mayur-argade-/" target="_blank" rel="noreferrer">LinkedIn</a></div></div></footer>
  </div>;
}

export default App;
