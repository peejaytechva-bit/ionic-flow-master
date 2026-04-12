import { AlertTriangle, TrendingDown, ShieldAlert, DollarSign } from "lucide-react";

const painPoints = [
  { icon: AlertTriangle, title: "Frequent Equipment Breakdowns", desc: "Unplanned shutdowns costing you thousands in lost production and emergency repairs." },
  { icon: TrendingDown, title: "Scaling & Corrosion Issues", desc: "Mineral buildup and pipe corrosion reducing system efficiency and equipment lifespan." },
  { icon: ShieldAlert, title: "Non-Compliance Risks", desc: "Failing environmental standards leading to penalties, fines, and operational delays." },
  { icon: DollarSign, title: "High Maintenance Costs", desc: "Rising operational expenses from reactive maintenance and inefficient treatment programs." },
];

const ProblemSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Are These Problems <span className="text-gradient-orange">Costing You?</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Industrial facilities face costly challenges every day. IONIC provides complete, customized solutions to eliminate these problems.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {painPoints.map((p) => (
          <div key={p.title} className="bg-background rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow group">
            <div className="w-12 h-12 rounded-lg gradient-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <p.icon className="text-accent-foreground" size={22} />
            </div>
            <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
