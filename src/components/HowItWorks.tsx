import { CalendarCheck, ClipboardCheck, Settings } from "lucide-react";

const steps = [
  { num: "01", icon: CalendarCheck, title: "Book Consultation", desc: "Schedule a free consultation with our water treatment experts." },
  { num: "02", icon: ClipboardCheck, title: "Site Assessment & Proposal", desc: "We conduct a thorough on-site assessment and deliver a customized proposal." },
  { num: "03", icon: Settings, title: "Implementation & Support", desc: "We implement the solution and provide ongoing maintenance and support." },
];

const HowItWorks = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="how-it-works" className="section-padding gradient-hero">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            How It Works
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Three simple steps to optimized water systems and reduced downtime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              <div className="w-20 h-20 rounded-full gradient-orange mx-auto mb-6 flex items-center justify-center shadow-elevated">
                <s.icon className="text-accent-foreground" size={32} />
              </div>
              <span className="text-xs font-bold tracking-widest text-ionic-orange uppercase mb-2 block">Step {s.num}</span>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{s.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 text-primary-foreground/20 text-3xl">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => scrollTo("book")} className="gradient-orange text-accent-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-elevated">
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
