import { useEffect, useRef } from "react";
import {
  Wrench,
  Bike,
  Car,
  CalendarCheck,
  PaintBucket,
  LifeBuoy,
  MessageCircle,
  ShieldCheck,
  Clock,
  Award,
  PhoneCall,
  Star,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const WA_LINK = "https://wa.link/i8ll7p";

const reportConversion = () => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion();
    }
  } catch (e) {
    /* noop */
  }
};

const WAIcon = ({ size = 18 }) => (
  <span className="wa-icon-wrap" style={{ width: size + 8, height: size + 8 }}>
    <MessageCircle size={size} strokeWidth={2.5} />
  </span>
);

const WhatsAppButton = ({ label = "WhatsApp Now", testId, className = "" }) => (
  <a
    href={WA_LINK}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testId}
    className={`wa-pill ${className}`}
    onClick={reportConversion}
  >
    <WAIcon />
    <span>{label}</span>
  </a>
);

const services = [
  {
    icon: <Wrench size={28} strokeWidth={2} />,
    title: "Engine Repair & Diagnostics",
    desc: "Advanced computerised diagnostics, engine tuning, oil & filter service for cars and bikes — restore peak performance.",
  },
  {
    icon: <Bike size={28} strokeWidth={2} />,
    title: "Bike Service & Repair",
    desc: "Complete two-wheeler care — clutch, brakes, chain, electricals, and full general service by certified mechanics.",
  },
  {
    icon: <Car size={28} strokeWidth={2} />,
    title: "Doorstep Mechanic",
    desc: "On-demand mechanic at your home or office. Transparent pricing, original spares, fast turnaround.",
  },
  {
    icon: <CalendarCheck size={28} strokeWidth={2} />,
    title: "Periodic Servicing",
    desc: "Manufacturer-grade scheduled servicing for all car & bike brands. Pickup and drop available on request.",
  },
  {
    icon: <PaintBucket size={28} strokeWidth={2} />,
    title: "Denting, Painting & Detailing",
    desc: "Showroom-finish dent removal, premium paint jobs, ceramic coating, polishing and full interior detailing.",
  },
  {
    icon: <LifeBuoy size={28} strokeWidth={2} />,
    title: "Roadside Assistance & Towing",
    desc: "Stranded on the road? Battery jumpstart, flat tyre, fuel delivery, and 24x7 towing — wherever you are.",
  },
];

const whyUs = [
  { icon: <ShieldCheck size={22} />, title: "Trusted Experts", text: "Certified mechanics" },
  { icon: <Clock size={22} />, title: "24x7 Support", text: "Always on call" },
  { icon: <Award size={22} />, title: "Genuine Parts", text: "OEM quality" },
  { icon: <Sparkles size={22} />, title: "Premium Care", text: "Showroom finish" },
];

const steps = [
  { n: "01", title: "Message on WhatsApp", text: "Share your vehicle issue, model and location." },
  { n: "02", title: "Get a Quick Quote", text: "Transparent pricing and time estimate within minutes." },
  { n: "03", title: "Doorstep Pickup / Visit", text: "We pick up your vehicle or send a mechanic to you." },
  { n: "04", title: "Repaired & Delivered", text: "Quality-checked service, delivered back ready to ride." },
];

const testimonials = [
  {
    name: "Rohit S.",
    text: "Booked engine service over WhatsApp at 11pm — picked up my car the next morning. Smooth, transparent and genuine work.",
  },
  {
    name: "Priya M.",
    text: "My bike broke down on the highway. Their roadside team reached in 25 minutes. Lifesavers!",
  },
  {
    name: "Akhil R.",
    text: "Ceramic coating and detailing made my car look brand new. Premium service at a fair price.",
  },
];

const faqs = [
  {
    q: "Do you service all car & bike brands?",
    a: "Yes — we service all major Indian and international car and bike brands with brand-trained mechanics and genuine spares.",
  },
  {
    q: "How do I book a service?",
    a: "Just tap any WhatsApp button on this page. Share your vehicle model and the issue — we'll respond within minutes.",
  },
  {
    q: "Do you offer doorstep service?",
    a: "Absolutely. We provide doorstep mechanic visits, free pickup & drop, and 24x7 roadside assistance.",
  },
  {
    q: "Are spare parts genuine?",
    a: "We use only OEM / brand-approved genuine spare parts, backed by our service warranty.",
  },
];

const LandingPage = () => {
  const observed = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="App" data-testid="landing-root">
      {/* Decorative gradient glows (no images) */}
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-glow bg-glow-3" />

      {/* Floating WhatsApp FAB */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-wa"
        data-testid="fab-whatsapp"
        aria-label="Chat on WhatsApp"
        onClick={reportConversion}
      >
        <MessageCircle size={26} strokeWidth={2.4} />
      </a>

      <div className="page-wrap pt-6 pb-32">
        {/* Brand bar */}
        <div className="flex items-center justify-center mb-5 reveal">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(244,180,0,0.35)] bg-[#1a1208]">
            <Star size={14} className="star" fill="#f4b400" />
            <span className="text-[12px] tracking-[2px] uppercase font-bold text-gold">
              Trusted Service King
            </span>
            <Star size={14} className="star" fill="#f4b400" />
          </div>
        </div>

        {/* Hero banner (gradient, no image) */}
        <div className="hero-banner reveal" data-testid="hero-banner">
          <div className="text-center">
            <div className="hero-247">
              24<span style={{ color: "#fff" }}>×</span>7
            </div>
            <div
              className="headline mt-3 text-white"
              style={{ fontSize: 42 }}
            >
              Trusted
            </div>
            <div
              className="headline gold-text"
              style={{ fontSize: 42 }}
            >
              Service King
            </div>
            <p className="text-muted text-sm mt-3 px-1">
              Premium Car &amp; Bike Repair · Doorstep Service · Genuine Parts
            </p>

            <div className="mt-5">
              <WhatsAppButton
                label="Contact Us Now"
                testId="hero-contact-whatsapp"
              />
            </div>
          </div>
        </div>

        {/* Whatsapp Now button */}
        <div className="mt-5 reveal">
          <WhatsAppButton testId="cta-whatsapp-1" />
        </div>

        {/* Tagline */}
        <div className="mt-6 text-center reveal">
          <h1 className="headline gold-text" style={{ fontSize: 36 }}>
            Trusted Service
          </h1>
          <h2 className="headline gold-text" style={{ fontSize: 36 }}>
            24×7 Support
          </h2>
          <h2 className="headline gold-text" style={{ fontSize: 36 }}>
            Quick Response
          </h2>
        </div>

        {/* Second WhatsApp button */}
        <div className="mt-5 reveal">
          <WhatsAppButton testId="cta-whatsapp-2" />
        </div>

        {/* About paragraph */}
        <p className="mt-6 text-center text-white text-[15px] leading-relaxed reveal">
          We are a technology-driven car &amp; bike repair service dedicated to
          making vehicle care faster, safer, and more transparent. Whether it&apos;s
          a quick bike tune-up, complex engine repair, doorstep servicing, or
          premium detailing — we connect you to certified mechanics through a
          dependable, on-demand service network.
        </p>

        <div className="gold-rule my-8" />

        {/* Our Services */}
        <section className="reveal" data-testid="services-section">
          <div className="text-center">
            <h2 className="section-title gold-text">Our Services</h2>
            <div className="divider-gold" />
          </div>

          <div className="mt-6 space-y-2">
            {services.map((s, idx) => (
              <div key={idx} className="service-row reveal">
                <div className="service-icon">{s.icon}</div>
                <h3 className="headline text-white" style={{ fontSize: 24 }}>
                  {s.title}
                </h3>
                <p className="text-muted text-[14px] mt-2 leading-relaxed px-2">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 reveal">
            <WhatsAppButton
              label="Book Service on WhatsApp"
              testId="cta-whatsapp-services"
            />
          </div>
        </section>

        <div className="gold-rule my-10" />

        {/* Marquee */}
        <div className="marquee reveal -mx-4">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-10">
                <span>★ 24×7 Support</span>
                <span>★ Genuine Parts</span>
                <span>★ Doorstep Service</span>
                <span>★ Certified Mechanics</span>
                <span>★ Showroom Finish</span>
                <span>★ Fair Pricing</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <section className="mt-10 reveal" data-testid="why-us-section">
          <div className="text-center">
            <h2 className="section-title gold-text">Why Choose Us</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            {whyUs.map((w, i) => (
              <div key={i} className="why-tile">
                <div className="grid place-items-center mb-2 text-gold">
                  {w.icon}
                </div>
                <div className="headline text-white" style={{ fontSize: 16 }}>
                  {w.title}
                </div>
                <p className="text-muted text-[12px] mt-1">{w.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 reveal">
            <WhatsAppButton
              label="Talk to an Expert"
              testId="cta-whatsapp-why"
            />
          </div>
        </section>

        <div className="gold-rule my-10" />

        {/* How it works */}
        <section className="reveal" data-testid="process-section">
          <div className="text-center">
            <h2 className="section-title gold-text">How It Works</h2>
            <div className="divider-gold" />
          </div>

          <div className="mt-6 space-y-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-4 rounded-xl border border-[rgba(244,180,0,0.22)] bg-[rgba(26,18,8,0.7)]"
              >
                <div
                  className="headline gold-text shrink-0"
                  style={{ fontSize: 34, lineHeight: 1 }}
                >
                  {s.n}
                </div>
                <div>
                  <div className="headline text-white" style={{ fontSize: 18 }}>
                    {s.title}
                  </div>
                  <p className="text-muted text-[13px] mt-1">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 reveal">
            <WhatsAppButton
              label="Start on WhatsApp"
              testId="cta-whatsapp-steps"
            />
          </div>
        </section>

        <div className="gold-rule my-10" />

        {/* Stats */}
        <section className="reveal grid grid-cols-3 gap-3" data-testid="stats-section">
          {[
            { v: "10K+", l: "Vehicles Serviced" },
            { v: "4.9★", l: "Avg. Rating" },
            { v: "24/7", l: "Always Open" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl border border-[rgba(244,180,0,0.22)] bg-[rgba(10,7,3,0.7)]"
            >
              <div className="headline gold-text" style={{ fontSize: 28 }}>
                {s.v}
              </div>
              <div className="text-muted text-[11px] uppercase tracking-wider mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </section>

        <div className="gold-rule my-10" />

        {/* Testimonials */}
        <section className="reveal" data-testid="testimonials-section">
          <div className="text-center">
            <h2 className="section-title gold-text">Customer Love</h2>
            <div className="divider-gold" />
          </div>

          <div className="mt-6 space-y-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-[rgba(244,180,0,0.25)] bg-[rgba(26,18,8,0.6)]"
              >
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={14} fill="#f4b400" className="star" />
                  ))}
                </div>
                <p className="text-white text-[14px] leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="text-gold text-[12px] mt-3 font-bold uppercase tracking-wider">
                  — {t.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="gold-rule my-10" />

        {/* Guarantees */}
        <section className="reveal" data-testid="guarantee-section">
          <div className="text-center">
            <h2 className="section-title gold-text">Our Promise</h2>
            <div className="divider-gold" />
          </div>

          <div className="mt-6 space-y-3">
            {[
              "Free pickup & drop on every service",
              "100% genuine spare parts with warranty",
              "Transparent pricing — no hidden charges",
              "Certified, brand-trained mechanics",
              "Quality-check before delivery",
            ].map((p, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-3 rounded-lg border border-[rgba(244,180,0,0.22)] bg-[rgba(10,7,3,0.6)]"
              >
                <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                <span className="text-white text-[14px]">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 reveal">
            <WhatsAppButton
              label="Get Free Estimate"
              testId="cta-whatsapp-guarantee"
            />
          </div>
        </section>

        <div className="gold-rule my-10" />

        {/* FAQ */}
        <section className="reveal" data-testid="faq-section">
          <div className="text-center">
            <h2 className="section-title gold-text">FAQ</h2>
            <div className="divider-gold" />
          </div>

          <div className="mt-6 space-y-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group p-4 rounded-xl border border-[rgba(244,180,0,0.22)] bg-[rgba(26,18,8,0.6)] cursor-pointer transition-all open:border-[rgba(244,180,0,0.55)]"
                data-testid={`faq-${i}`}
              >
                <summary className="flex justify-between items-center list-none">
                  <span className="headline text-white" style={{ fontSize: 15 }}>
                    {f.q}
                  </span>
                  <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-muted text-[13px] mt-3 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="gold-rule my-10" />

        {/* Final CTA */}
        <section className="reveal text-center" data-testid="final-cta-section">
          <h2 className="section-title gold-text">Ready to Roll?</h2>
          <div className="divider-gold" />
          <p className="text-muted text-[14px] mt-4 px-2">
            Message us on WhatsApp now and get your car or bike back in
            showroom condition — fast, fair and trusted.
          </p>

          <div className="mt-6">
            <WhatsAppButton
              label="Chat with Us on WhatsApp"
              testId="cta-whatsapp-final"
            />
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-muted text-[12px]">
            <PhoneCall size={12} />
            <span>Tap a button anywhere on this page to chat instantly</span>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 pt-8 pb-4 text-center reveal">
          <div className="headline gold-text" style={{ fontSize: 22 }}>
            Trusted Service King
          </div>
          <p className="text-muted text-[12px] mt-2 px-4">
            Premium Car &amp; Bike Repair · 24×7 Support · Quick Response
          </p>
          <div className="gold-rule mt-6 mb-4" />
          <p className="text-muted text-[11px]">
            © {new Date().getFullYear()} Trusted Service King. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Sticky bottom CTA */}
      <div className="sticky-cta" data-testid="sticky-cta">
        <WhatsAppButton
          label="WhatsApp Now · 24×7"
          testId="sticky-whatsapp"
        />
      </div>
    </div>
  );
};

export default LandingPage;
