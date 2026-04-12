import { Clock, Users, Layers, Leaf, CheckCircle } from "lucide-react";

const reasons = [
  { icon: Clock, title: "20+ Years Industry Experience", desc: "Founded in 1996, serving power plants, manufacturing facilities, and commercial buildings." },
  { icon: Users, title: "Customized Solutions", desc: "Every treatment program is tailored to your facility's unique requirements and challenges." },
  { icon: Layers, title: "End-to-End Service", desc: "Chemicals + Equipment + Installation + Maintenance + Compliance — all from one provider." },
  { icon: Leaf, title: "Environmental Compliance", desc: "Solutions designed to meet and exceed regulatory environmental standards." },
];

const WhyIonic = () => (
  <section id="why-ionic" className="section-padding">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient-orange">IONIC?</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            As one of the major full-service providers in water treatment, wastewater management, and plant preventive maintenance, IONIC delivers comprehensive solutions that keep your operations running efficiently.
          </p>
          <div className="space-y-3">
            {["Full-service (Chemicals + Equipment + Services)", "Customized treatment programs", "Compliance-focused solutions", "Environmental sustainability approach"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-ionic-orange shrink-0" size={18} />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card rounded-xl p-5 shadow-card border border-border">
              <r.icon className="text-primary mb-3" size={28} />
              <h3 className="font-bold text-foreground text-sm mb-1">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyIonic;
