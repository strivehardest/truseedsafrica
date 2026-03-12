import Head from "next/head";
"use client";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { COLORS } from "@/lib/constants";
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
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const faqs = [
  { q: "What services does Tru Seeds Africa offer?", a: "TSA provides industrial agribusiness consulting, mechanization-as-a-service, outgrower scheme management, global commodity trade facilitation, investment due diligence, and ESG strategy across our 6 Strategic Pillars." },
  { q: "Which commodities does TSA specialise in?", a: "Our four strategic commodities are Cassava, Oil Palm, Coconut, and Cocoa Pods — from cultivation and industrial processing through to global trade facilitation." },
  { q: "Does TSA operate outside Ghana?", a: "Yes. While headquartered in Accra, TSA serves clients across Africa and facilitates exports to global markets under the AfCFTA framework." },
  { q: "How quickly will you respond to my enquiry?", a: "We typically respond within 24 business hours. For urgent matters, please call us directly on +233 244 434 333." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Contact | Tru Seeds Africa</title>
        <meta name="description" content="Contact Tru Seeds Africa for agribusiness consulting, partnership, and support. Reach out to our team in Accra, Ghana for all enquiries." />
        <meta name="keywords" content="Tru Seeds Africa, contact, Ghana, Africa, get in touch, agribusiness, enquiry, support, consulting, partnership, Accra, West Africa, agriculture" />
      </Head>
      <style>{`
        .cpage-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .cpage-body-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 60px; align-items: start; }
        .cpage-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .field-label { display: block; font-size: 12px; font-weight: 700; color: ${COLORS.charcoal}; font-family: 'Fira Sans', Arial, sans-serif; margin-bottom: 8px; letter-spacing: 1px; text-transform: uppercase; }
        .field-input { width: 100%; padding: 13px 16px; border: 1.5px solid rgba(0,0,0,0.1); border-radius: 3px; font-size: 15px; font-family: 'Fira Sans', Arial, sans-serif; color: ${COLORS.charcoal}; background: ${COLORS.white}; box-sizing: border-box; outline: none; transition: border-color 0.2s, box-shadow 0.2s; }
        .field-input:focus { border-color: ${COLORS.green}; box-shadow: 0 0 0 3px rgba(31,107,31,0.08); }
        textarea.field-input { resize: vertical; min-height: 120px; }
        .submit-btn { background: ${COLORS.green}; color: #fff; padding: 15px 44px; border: none; border-radius: 3px; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-family: 'Fira Sans', Arial, sans-serif; cursor: pointer; transition: background 0.2s, transform 0.2s; }
        .submit-btn:hover { background: ${COLORS.greenLight}; transform: translateY(-1px); }
        .info-item { display: flex; align-items: flex-start; gap: 16px; padding: 20px 0; border-bottom: 1px solid rgba(0,0,0,0.06); }
        .info-item:last-child { border-bottom: none; }
        .faq-btn { width: 100%; background: none; border: none; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; cursor: pointer; text-align: left; }
        @media (max-width: 900px) {
          .cpage-hero-grid, .cpage-body-grid { grid-template-columns: 1fr; gap: 40px; }
          .cpage-form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background: COLORS.greenDark, padding: "110px 40px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: `linear-gradient(${COLORS.gold} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.gold} 1px, transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: "18%", width: "1px", height: "100%", background: `linear-gradient(to bottom, transparent, rgba(212,160,23,0.15), transparent)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "50px", height: "3px", background: COLORS.gold }} />

        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "2px", background: COLORS.gold }} />
            <span style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>Contact Us</span>
            <div style={{ width: "40px", height: "2px", background: COLORS.gold }} />
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", color: COLORS.white, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "0 0 20px", lineHeight: 1.08, letterSpacing: "-1.5px" }}>
            Get In <span style={{ color: COLORS.gold }}>Touch</span>
          </h1>
          <div style={{ width: "48px", height: "3px", background: COLORS.gold, margin: "0 auto 24px" }} />
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", lineHeight: 1.85, fontFamily: "'Fira Sans', Arial, sans-serif", margin: 0 }}>
            Headquartered in Accra, Ghana — serving clients across Africa and the globe.<br />
            Reach out and let&apos;s discuss how TSA can drive your agribusiness forward.
          </p>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, transparent, ${COLORS.gold}, transparent)` }} />
      </section>

      {/* ── FORM + MAP ── */}
      <section style={{ background: COLORS.offWhite, padding: "90px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="cpage-body-grid">

            {/* ── CONTACT INFO + MAP ── */}
            <AnimatedSection>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

                {/* Info block */}
                <div style={{ background: COLORS.white, borderRadius: "4px", overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                  <div style={{ background: COLORS.green, padding: "20px 28px" }}>
                    <h3 style={{ color: COLORS.white, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, fontSize: "17px", margin: 0 }}>Corporate Details</h3>
                  </div>
                  <div style={{ padding: "8px 28px 20px" }}>
                    {[
                      { Icon: PinIcon, label: "Head Office", value: "#4 Terminalia Street, Dansoman, Accra, Ghana" },
                      { Icon: PhoneIcon, label: "Phone", value: "+233 244 434 333" },
                      { Icon: MailIcon, label: "Email", value: "info@truseedsafrica.com" },
                      { Icon: ClockIcon, label: "Office Hours", value: "Mon – Fri: 8:00 AM – 5:00 PM" },
                    ].map(({ Icon, label, value }) => (
                      <div key={label} className="info-item">
                        <div style={{ width: "36px", height: "36px", background: `${COLORS.green}14`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.green, flexShrink: 0 }}><Icon /></div>
                        <div>
                          <div style={{ color: COLORS.gold, fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, marginBottom: "3px" }}>{label}</div>
                          <div style={{ color: COLORS.charcoal, fontSize: "15px", fontFamily: "'Fira Sans', Arial, sans-serif", lineHeight: 1.5 }}>{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div style={{ borderRadius: "4px", overflow: "hidden", border: `2px solid ${COLORS.green}`, boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9!2d-0.2469!3d5.5497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b8e0c53b0a7%3A0x0!2sDansoman%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1699999999999!5m2!1sen!2sgh"
                    width="100%" height="260"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tru Seeds Africa — Dansoman, Accra"
                  />
                  <a href="https://maps.google.com/?q=Dansoman,Accra,Ghana" target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    padding: "14px", background: COLORS.green, color: "#fff", textDecoration: "none",
                    fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px", textTransform: "uppercase",
                  }}>
                    <PinIcon /> Get Directions
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* ── FORM ── */}
            <AnimatedSection>
              <div style={{ background: COLORS.white, borderRadius: "4px", padding: "48px 44px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "0 0 8px" }}>Send Us a Message</h2>
                <p style={{ color: COLORS.charcoalLight, fontSize: "14px", fontFamily: "'Fira Sans', Arial, sans-serif", margin: "0 0 36px", lineHeight: 1.7 }}>
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>

                {sent && (
                  <div style={{ background: "#d4edda", border: "1px solid #b8dacc", borderRadius: "3px", padding: "14px 18px", marginBottom: "24px", color: "#155724", fontFamily: "'Fira Sans', Arial, sans-serif", fontSize: "14px" }}>
                    ✓ Your message has been sent. We&apos;ll respond shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div className="cpage-form-row">
                    <div>
                      <label className="field-label">First Name *</label>
                      <input required className="field-input" type="text" placeholder="First name" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                    </div>
                    <div>
                      <label className="field-label">Last Name *</label>
                      <input required className="field-input" type="text" placeholder="Last name" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                    </div>
                  </div>
                  <div className="cpage-form-row">
                    <div>
                      <label className="field-label">Email Address *</label>
                      <input required className="field-input" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="field-label">Phone Number</label>
                      <input className="field-input" type="tel" placeholder="+233 ..." value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="field-label">Subject *</label>
                    <input required className="field-input" type="text" placeholder="e.g. Consulting Enquiry" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                  </div>
                  <div>
                    <label className="field-label">Message *</label>
                    <textarea required className="field-input" placeholder="Tell us about your project or enquiry..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", paddingTop: "4px" }}>
                    <button type="submit" className="submit-btn">Send Message</button>
                    <span style={{ color: "rgba(0,0,0,0.35)", fontSize: "13px", fontFamily: "'Fira Sans', Arial, sans-serif" }}>We typically respond within 24 hours.</span>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: COLORS.white, padding: "80px 40px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <AnimatedSection>
          {/* ── CTA SECTION ── */}
          <CTASection
            theme="green"
            eyebrow="Ready to Connect?"
            title="Let's Grow Together"
            highlight="Your Agribusiness"
            subtitle="Discover how Tru Seeds Africa can help you scale, industrialize, and succeed."
            buttons={[
              { label: "Our Services", href: "/services", variant: "primary" },
              { label: "About TSA", href: "/about", variant: "outline" },
            ]}
            agriElement={true}
          />
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span style={{ color: COLORS.gold, fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "'Fira Sans', Arial, sans-serif", fontWeight: 700 }}>Support</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", color: COLORS.green, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", fontWeight: 800, margin: "12px 0 0" }}>
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ border: `1px solid rgba(0,0,0,0.08)`, borderRadius: "4px", overflow: "hidden" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ color: openFaq === i ? COLORS.green : COLORS.charcoal, background: openFaq === i ? `${COLORS.green}06` : COLORS.white }}>
                  <span style={{ fontSize: "16px", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ color: COLORS.gold, flexShrink: 0 }}><ChevronIcon open={openFaq === i} /></span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", color: COLORS.charcoalLight, fontSize: "15px", lineHeight: 1.85, fontFamily: "'Fira Sans', Arial, sans-serif" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}