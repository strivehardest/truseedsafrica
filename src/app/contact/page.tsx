"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { COLORS } from "@/lib/constants";
import Link from "next/link";
import CTASection from "@/components/CTASection";

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={COLORS.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const faqs = [
  { q: "What services does Tru Seeds Africa offer?", a: "TSA provides industrial agribusiness consulting, mechanization-as-a-service, outgrower scheme management, global commodity trade facilitation, investment due diligence, and ESG strategy across our 6 Strategic Pillars." },
  { q: "Which commodities does TSA specialise in?", a: "Our four strategic commodities are Cassava, Oil Palm, Coconut, and Cocoa Pods — from cultivation and industrial processing through to global trade facilitation." },
  { q: "Does TSA operate outside Ghana?", a: "Yes. While headquartered in Accra, TSA serves clients across Africa and facilitates exports to global markets under the AfCFTA framework." },
  { q: "How quickly will you respond to my enquiry?", a: "We typically respond within 24 business hours. For urgent matters, please call us directly on +233 244 434 333." },
  { q: "Can TSA help with investor readiness and due diligence?", a: "Absolutely. Our Strategic Agribusiness Consulting pillar covers full value-chain mapping, risk-profile assessment, and investment readiness blueprints for greenfield and existing agribusiness operations." },
];

const styles = `
  .contact-hero {
    background: linear-gradient(135deg, #0d3d0d 0%, #1F6B1F 55%, #174F17 100%);
    padding: 120px 40px 90px;
    position: relative;
    overflow: hidden;
    text-align: center;
  }
  .contact-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(212,160,23,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212,160,23,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .contact-hero-inner { max-width: 700px; margin: 0 auto; position: relative; z-index: 1; }

  /* Layout */
  .contact-section { padding: 96px 40px; }
  .contact-inner { max-width: 1200px; margin: 0 auto; }
  .contact-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 56px; align-items: start; }

  /* Info sidebar */
  .info-card {
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 28px rgba(0,0,0,0.07);
  }
  .info-card-header { background: #1F6B1F; padding: 24px 28px; }
  .info-card-body { padding: 8px 0; }
  .info-row {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 18px 28px;
    border-bottom: 1px solid #f3f3f3;
    transition: background 0.2s;
  }
  .info-row:last-child { border-bottom: none; }
  .info-row:hover { background: #fafafa; }
  .info-icon-wrap {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(31,107,31,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1F6B1F;
    flex-shrink: 0;
  }

  /* Map */
  .map-card {
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 28px rgba(0,0,0,0.08);
    border: 2px solid #1F6B1F;
    margin-top: 28px;
  }
  .map-directions-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 15px;
    background: #1F6B1F;
    color: #fff;
    text-decoration: none;
    font-family: 'Fira Sans', Arial, sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    transition: background 0.2s;
  }
  .map-directions-btn:hover { background: #277A27; }

  /* Form card */
  .form-card {
    background: #fff;
    border-radius: 6px;
    padding: 52px 48px;
    box-shadow: 0 4px 28px rgba(0,0,0,0.07);
  }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .field-group { display: flex; flex-direction: column; gap: 8px; }
  .field-label {
    font-size: 11px;
    font-weight: 700;
    color: #36454F;
    font-family: 'Fira Sans', Arial, sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .field-input {
    width: 100%;
    padding: 13px 16px;
    border: 1.5px solid rgba(0,0,0,0.1);
    border-radius: 4px;
    font-size: 15px;
    font-family: 'Fira Sans', Arial, sans-serif;
    color: #36454F;
    background: #fff;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .field-input:focus { border-color: #1F6B1F; box-shadow: 0 0 0 3px rgba(31,107,31,0.08); }
  select.field-input { appearance: none; cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%23666' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; }
  textarea.field-input { resize: vertical; min-height: 130px; line-height: 1.6; }
  .submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #1F6B1F;
    color: #fff;
    padding: 15px 40px;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Fira Sans', Arial, sans-serif;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }
  .submit-btn:hover { background: #277A27; transform: translateY(-1px); }
  .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  /* Success */
  .success-banner {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: #f0f9f0;
    border: 1.5px solid #b8dab8;
    border-radius: 6px;
    padding: 18px 20px;
    margin-bottom: 28px;
  }

  /* FAQ */
  .faq-section { background: #fff; padding: 96px 40px; }
  .faq-item { border-bottom: 1px solid rgba(0,0,0,0.07); }
  .faq-item:first-child { border-top: 1px solid rgba(0,0,0,0.07); }
  .faq-btn {
    width: 100%;
    background: none;
    border: none;
    padding: 22px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s;
  }
  .faq-btn:hover { background: #fafafa; }
  .faq-answer { padding: 0 24px 22px; }

  /* Quick links */
  .quick-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
  .quick-link-card {
    background: #fff;
    border-radius: 6px;
    padding: 28px 24px;
    text-decoration: none;
    border-top: 3px solid #D4A017;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .quick-link-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.1); }

  /* Responsive */
  @media (max-width: 1000px) {
    .contact-grid { grid-template-columns: 1fr; gap: 40px; }
    .quick-links { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 700px) {
    .contact-hero { padding: 100px 20px 72px; }
    .contact-section { padding: 64px 20px; }
    .faq-section { padding: 64px 20px; }
    .form-card { padding: 32px 24px; }
    .form-row { grid-template-columns: 1fr; }
    .quick-links { grid-template-columns: 1fr; }
  }
`;

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    subject: "", enquiryType: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build mailto href and open email client
    const to = "info@truseedsafrica.com";
    const subject = encodeURIComponent(`[TSA Enquiry] ${form.subject || form.enquiryType}`);
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\nEnquiry Type: ${form.enquiryType || "General"}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", enquiryType: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    }, 800);
  };

  return (
    <>
      <style>{styles}</style>

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1.5, background: COLORS.gold, opacity: 0.6 }} />
            <span style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 5, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>Contact Us</span>
            <div style={{ width: 40, height: 1.5, background: COLORS.gold, opacity: 0.6 }} />
          </div>
          <h1 style={{ fontSize: "clamp(38px, 6vw, 68px)", color: "#fff", fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "0 0 20px", lineHeight: 1.05, letterSpacing: "-1.5px" }}>
            Get In <span style={{ color: COLORS.gold }}>Touch</span>
          </h1>
          <div style={{ width: 56, height: 3, background: COLORS.gold, margin: "0 auto 24px", borderRadius: 2 }} />
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.85, fontFamily: "'Fira Sans', Arial, sans-serif", margin: "0 0 40px" }}>
            Headquartered in Accra, Ghana — serving clients across Africa and the globe.<br />
            Reach out and let's discuss how TSA can drive your agribusiness forward.
          </p>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "'Fira Sans', Arial, sans-serif" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>Contact</span>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)` }} />
      </section>

      {/* ── FORM + INFO ── */}
      <section className="contact-section" style={{ background: COLORS.offWhite }}>
        <div className="contact-inner">
          <div className="contact-grid">

            {/* ── LEFT: Info + Map ── */}
            <AnimatedSection>
              <div>
                <div style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 12 }}>Corporate Details</div>
                <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "0 0 28px", lineHeight: 1.15 }}>
                  How to Reach Us
                </h2>

                <div className="info-card">
                  <div className="info-card-header">
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0, lineHeight: 1.6 }}>
                      TSA is available Monday through Friday. For the fastest response, email us or use the contact form.
                    </p>
                  </div>
                  <div className="info-card-body">
                    {[
                      { Icon: PinIcon, label: "Head Office", value: "#4 Terminalia Street, Dansoman, Accra, Ghana" },
                      { Icon: MailIcon, label: "Email", value: "info@truseedsafrica.com", href: "mailto:info@truseedsafrica.com" },
                      { Icon: PhoneIcon, label: "Phone", value: "+233 244 434 333", href: "tel:+233244434333" },
                      { Icon: ClockIcon, label: "Office Hours", value: "Monday – Friday: 8:00 AM – 5:00 PM GMT" },
                    ].map(({ Icon, label, value, href }: { Icon: React.FC; label: string; value: string; href?: string }) => (
                      <div key={label} className="info-row">
                        <div className="info-icon-wrap"><Icon /></div>
                        <div>
                          <div style={{ color: COLORS.gold, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 4 }}>{label}</div>
                          {href ? (
                            <a href={href} style={{ color: COLORS.charcoal, fontSize: 15, fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.5, textDecoration: "none" }}
                              onMouseEnter={e => (e.currentTarget.style.color = COLORS.green)}
                              onMouseLeave={e => (e.currentTarget.style.color = COLORS.charcoal)}>
                              {value}
                            </a>
                          ) : (
                            <div style={{ color: COLORS.charcoal, fontSize: 15, fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.5 }}>{value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="map-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9!2d-0.2469!3d5.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b8e0c53b0a7%3A0x0!2sDansoman%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1699999999999!5m2!1sen!2sgh"
                    width="100%" height="260"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tru Seeds Africa — Dansoman, Accra"
                  />
                  <a href="https://maps.google.com/?q=Dansoman,Accra,Ghana" target="_blank" rel="noopener noreferrer" className="map-directions-btn">
                    <PinIcon /> Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* ── RIGHT: Form ── */}
            <AnimatedSection delay={100}>
              <div className="form-card">
                <div style={{ marginBottom: 36 }}>
                  <div style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 12 }}>Send a Message</div>
                  <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "0 0 10px" }}>
                    Start the Conversation
                  </h2>
                  <p style={{ color: COLORS.charcoalLight, fontSize: 15, fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0, lineHeight: 1.7 }}>
                    Fill out the form below and your message will be sent directly to <strong>info@truseedsafrica.com</strong>. We respond within 24 business hours.
                  </p>
                </div>

                {sent && (
                  <div className="success-banner">
                    <CheckIcon />
                    <div>
                      <div style={{ color: COLORS.green, fontWeight: 700, fontSize: 15, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", marginBottom: 4 }}>Message sent successfully!</div>
                      <div style={{ color: "#4A5F6A", fontSize: 14, fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.6 }}>Your email client has opened with your message. We'll respond within 24 business hours.</div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div className="form-row">
                    <div className="field-group">
                      <label className="field-label">First Name *</label>
                      <input required className="field-input" type="text" placeholder="First name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                    </div>
                    <div className="field-group">
                      <label className="field-label">Last Name *</label>
                      <input required className="field-input" type="text" placeholder="Last name" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="field-group">
                      <label className="field-label">Email Address *</label>
                      <input required className="field-input" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="field-group">
                      <label className="field-label">Phone Number</label>
                      <input className="field-input" type="tel" placeholder="+233 ..." value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>

                  <div className="field-group">
                    <label className="field-label">Enquiry Type *</label>
                    <select required className="field-input" value={form.enquiryType} onChange={e => setForm({ ...form, enquiryType: e.target.value })}>
                      <option value="">Select enquiry type...</option>
                      <option>Agribusiness Consulting</option>
                      <option>Mechanization & Equipment</option>
                      <option>Commodity Trade & Export</option>
                      <option>Investment & Due Diligence</option>
                      <option>Outgrower / Partnership</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label className="field-label">Subject *</label>
                    <input required className="field-input" type="text" placeholder="Brief subject of your message" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                  </div>

                  <div className="field-group">
                    <label className="field-label">Message *</label>
                    <textarea required className="field-input" placeholder="Tell us about your project, operation, or enquiry in detail..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", paddingTop: 4 }}>
                    <button type="submit" className="submit-btn" disabled={sending}>
                      <SendIcon />
                      {sending ? "Opening Email..." : "Send Message"}
                    </button>
                    <span style={{ color: "rgba(0,0,0,0.35)", fontSize: 13, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                      Sends to info@truseedsafrica.com
                    </span>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Quick links ── */}
          <AnimatedSection delay={150}>
            <div style={{ marginTop: 64 }}>
              <div style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 12, textAlign: "center" }}>Explore More</div>
              <h3 style={{ color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, fontSize: "clamp(20px, 3vw, 28px)", textAlign: "center", margin: "0 0 32px" }}>
                While You're Here
              </h3>
              <div className="quick-links">
                {[
                  { label: "Our Services", desc: "6 integrated pillars covering everything from cultivation to global trade.", href: "/services" },
                  { label: "Commodities", desc: "Cassava, Oil Palm, Coconut & Cocoa — discover our strategic crop portfolio.", href: "/commodities" },
                  { label: "About TSA", desc: "Learn more about our mission, leadership, and corporate profile.", href: "/about" },
                ].map(({ label, desc, href }) => (
                  <Link key={label} href={href} className="quick-link-card">
                    <div style={{ color: COLORS.gold, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 8 }}>Explore</div>
                    <div style={{ color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, fontSize: 18, marginBottom: 10 }}>{label}</div>
                    <div style={{ color: COLORS.charcoalLight, fontSize: 14, lineHeight: 1.7, fontFamily: "'Fira Sans', Arial, sans-serif" }}>{desc}</div>
                    <div style={{ color: COLORS.green, fontSize: 13, fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginTop: 14 }}>Learn More →</div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <div style={{ color: COLORS.gold, fontSize: 11, letterSpacing: 4, textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: 14 }}>Support</div>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "0 0 14px" }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: COLORS.charcoalLight, fontSize: 16, fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.7, margin: 0 }}>
                Can't find your answer? <a href="mailto:info@truseedsafrica.com" style={{ color: COLORS.green, fontWeight: 700 }}>Email us directly.</a>
              </p>
            </div>
          </AnimatedSection>

          <div style={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 6, overflow: "hidden" }}>
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="faq-item">
                  <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ color: openFaq === i ? COLORS.green : COLORS.charcoal, background: openFaq === i ? `${COLORS.green}06` : "#fff" }}>
                    <span style={{ fontSize: 16, fontWeight: 700, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ color: COLORS.gold, flexShrink: 0 }}><ChevronIcon open={openFaq === i} /></span>
                  </button>
                  {openFaq === i && (
                    <div className="faq-answer">
                      <p style={{ color: COLORS.charcoalLight, fontSize: 15, lineHeight: 1.9, fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      <CTASection
        eyebrow="Ready to Begin?"
        title="Let's Build Africa's"
        highlight="Industrial Future"
        subtitle="Whether you're an investor, farmer, institution, or partner — TSA has a strategic pathway for you."
        buttons={[
          { label: "Email Us Now", href: "mailto:info@truseedsafrica.com", variant: "primary" },
          { label: "Our Services", href: "/services", variant: "outline" },
        ]}
        theme="dark"
        agriElement={false}
      />
    </>
  );
}