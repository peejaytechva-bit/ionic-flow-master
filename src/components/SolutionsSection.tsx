import { Droplets, Factory, Recycle, Wrench } from "lucide-react";

const solutions = [
  { icon: Droplets, title: "Water Treatment Systems", desc: "Boiler, cooling & RO water treatment with custom chemical programs for scale, corrosion, and microbiological control.", color: "gradient-cta" },
  { icon: Factory, title: "Preventive Maintenance", desc: "Pipe cleaning & passivation, tank disinfection, industrial painting, and complete equipment maintenance.", color: "gradient-hero" },
  { icon: Recycle, title: "Wastewater Treatment", desc: "System design, installation, rehabilitation & optimization with full environmental compliance.", color: "gradient-cta" },
  { icon: Wrench, title: "Equipment & Chemicals", desc: "Filtration systems, RO units, UV disinfection, specialty chemicals, lubricants & industrial cleaning solutions.", color: "gradient-hero" },
];

const SolutionsSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="solutions" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-blue">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial solutions from chemicals and equipment to installation, maintenance, and compliance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all group border border-border">
              <div className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <s.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
              <button onClick={() => scrollTo("book")} className="text-sm font-semibold text-primary hover:text-ionic-blue-light transition-colors">
                Get Assessment →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
