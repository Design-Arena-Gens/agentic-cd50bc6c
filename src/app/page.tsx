import Image from "next/image";
import VaultScene from "@/components/VaultScene";
import SecureIntakeForm from "@/components/SecureIntakeForm";
import Reveal from "@/components/Reveal";

const intelligenceSignals = [
  {
    label: "Bias-Neutral Intelligence Stack",
    description: "Cross-checks 12,400+ data feeds with adversarial modeling to surface absolute truth.",
    metric: "12,400+ feeds",
  },
  {
    label: "Autonomous Trust Layer",
    description: "Zero-contact dossier orchestration with full cryptographic audit and lineage trail.",
    metric: "Zero calls",
  },
  {
    label: "Precision Confidence Index",
    description: "Each insight is stamped with a living confidence range, recalibrated every 11 minutes.",
    metric: "99.972% certainty",
  },
];

const trustPillars = [
  {
    title: "Bank-Grade Segmentation",
    copy: "Each dossier is isolated in sovereign compute cells with AI-augmented compliance, ensuring asset-class separation every millisecond.",
    stat: "Tier 4 isolation",
  },
  {
    title: "Unbiased Insight Engine",
    copy: "We use multi-agent red teaming and ensemble benchmarking to vaporize consultant bias. Decisions land from empirical truth, not opinion.",
    stat: "Triangulated consensus",
  },
  {
    title: "Frictionless Delivery",
    copy: "Encrypted vault delivery with executable intelligence modules that plug into design systems and engineering command centers instantly.",
    stat: "< 180 min issuance",
  },
];

const timeline = [
  {
    title: "Precision Intake",
    body: "Secure, structured intake tokens capture objectives, constraints, and trust preferences without human exposure.",
    duration: "02:38",
  },
  {
    title: "Autonomous Synthesis",
    body: "Multi-rail neural arbitration fuses qualitative signals with telemetry to build a weighted intelligence corpus.",
    duration: "07:46",
  },
  {
    title: "Verification & Stress Test",
    body: "Models are stress-tested against synthetic adversaries. Weak signals are quarantined and reprocessed.",
    duration: "11:03",
  },
  {
    title: "Vault Delivery",
    body: "Executable dossier delivered into your zero-trust vault with living update channel and compliance chain.",
    duration: "02:00",
  },
];

const assuranceBadges = [
  "Sovereign Compute Cells",
  "Quantum-Resistant Key Exchange",
  "Bias Adversary Simulation",
  "Dynamic Chain-of-Trust Audit",
];

export default function Home() {
  return (
    <div className="viewport">
      <div className="grid-scrim" />
      <div className="noise-overlay" />
      <div className="glow-ring" style={{ top: "-160px", right: "-220px" }} />
      <div className="glow-ring" style={{ bottom: "-220px", left: "-140px" }} />
      <main className="main">
        <section className="hero">
          <video
            className="hero__video"
            src="/background.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            poster="/background-poster.png"
          />
          <div className="hero__scrim" />
          <div className="content-grid">
            <header className="nav">
              <div className="nav__brand">
                <Image src="/vault-mark.svg" alt="AccrueFlow icon" width={36} height={36} priority />
                <div>
                  <p className="nav__title">AccrueFlow™</p>
                  <span className="nav__sub">Timeless Intelligence Platform</span>
                </div>
              </div>
              <div className="nav__actions">
                <span className="nav__tag">Client Cipherline 011A</span>
                <a className="nav__cta" href="#intake">
                  Enter Vault
                </a>
              </div>
            </header>
            <div className="hero__body">
              <Reveal className="hero__copy">
                <p className="eyebrow">Digital Private Bank, Intelligence Division</p>
                <h1>
                  Frictionless confidence for <span>design</span> &amp; <span>engineering</span> command.
                </h1>
                <p className="lead">
                  AccrueFlow v2.0 is the no-contact intelligence vault issuing $15k dossiers in under three hours.
                  Absolute trust, executed without a single call.
                </p>
                <div className="hero__cta-group">
                  <a className="hero__cta hero__cta--primary" href="#intelligence">
                    View Intelligence Engine
                  </a>
                  <a className="hero__cta hero__cta--ghost" href="#intake">
                    Initiate Dossier
                  </a>
                </div>
                <div className="hero__assurance">
                  {assuranceBadges.map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>
              </Reveal>
              <Reveal className="hero__visual" delay={0.12}>
                <div className="hero__vault">
                  <VaultScene className="vault-canvas" />
                  <div className="hero__vault-panel">
                    <p>Confidence Index</p>
                    <div className="hero__confidence">
                      <span>99.972%</span>
                      <small>continuous recalibration</small>
                    </div>
                  </div>
                  <div className="hero__signal">
                    <span>Signal Integrity</span>
                    <strong>Tier Φ</strong>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="intelligence" className="section content-grid">
          <Reveal>
            <div className="section__heading">
              <p className="eyebrow">The Intelligence Engine</p>
              <h2>Frictionless truth. No consultants. No exposure.</h2>
              <p className="lede">
                Your intelligence bank executes through autonomous validation, zero-bias synthesis, and vault-grade
                compliance. Every dossier is a living asset that updates as reality changes.
              </p>
            </div>
          </Reveal>
          <div className="signal-grid">
            {intelligenceSignals.map((signal, index) => (
              <Reveal key={signal.label} delay={index * 0.08} className="signal-card">
                <div className="signal-card__metric">{signal.metric}</div>
                <h3>{signal.label}</h3>
                <p>{signal.description}</p>
                <div className="signal-card__beam" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section--alt">
          <div className="content-grid trust-grid">
            {trustPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.12} className="trust-card">
                <div className="trust-card__label">
                  <span>◦ {index + 1}</span>
                  <span>{pillar.stat}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
                <button type="button" className="trust-card__button">
                  View Controls
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section content-grid timeline">
          <Reveal>
            <div className="section__heading">
              <p className="eyebrow">Timeless Delivery</p>
              <h2>Precise, orchestrated, and fully audited in 24 minutes.</h2>
            </div>
          </Reveal>
          <div className="timeline__grid">
            {timeline.map((entry, index) => (
              <Reveal key={entry.title} delay={index * 0.1} className="timeline__card">
                <div className="timeline__time">{entry.duration}</div>
                <div>
                  <h3>{entry.title}</h3>
                  <p>{entry.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="intake" className="section section--intake">
          <div className="content-grid intake-grid">
            <Reveal className="intake__brief">
              <p className="eyebrow">Zero-Contact Dossier Issuance</p>
              <h2>The vault handshake that never touches a phone.</h2>
              <p className="lede">
                Submit encrypted objectives, receive a fully executed intelligence dossier through your chosen quantum
                defense channel. Every stage is logged across a tamper-evident ledger.
              </p>
              <ul className="intake__bullets">
                <li>Multi-factor entropy scoring ensures the vault only opens for verified principals.</li>
                <li>All payloads processed in sovereign compute cells with deterministic lineage.</li>
                <li>Delivery options include secure inbox, hardened API, or cold-storage artifact.</li>
              </ul>
            </Reveal>
            <SecureIntakeForm />
          </div>
        </section>

        <footer className="footer">
          <div className="content-grid footer__grid">
            <div>
              <div className="nav__brand footer__brand">
                <Image src="/vault-mark.svg" alt="AccrueFlow icon" width={30} height={30} />
                <div>
                  <p className="nav__title">AccrueFlow™</p>
                  <span className="nav__sub">Digital Private Bank</span>
                </div>
              </div>
              <p className="footer__copy">
                Vault-grade intelligence without meetings, bias, or delay. Tier Φ clearance for design and engineering
                leaders.
              </p>
            </div>
            <div className="footer__meta">
              <p>AccrueFlow Confidential · Zero-Contact Dossier Desk</p>
              <a href="mailto:secure@accrueflow.com">secure@accrueflow.com</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
