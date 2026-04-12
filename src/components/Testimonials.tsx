import { Star } from "lucide-react";

const testimonials = [
  { quote: "Reduced our maintenance costs by 35% in 6 months. IONIC's customized treatment program transformed our operations.", author: "Operations Manager", company: "Manufacturing Plant, Laguna" },
  { quote: "IONIC helped us pass compliance inspections smoothly. Their end-to-end service is unmatched in the industry.", author: "Facility Manager", company: "Industrial Complex, Cavite" },
  { quote: "From chemical supply to equipment maintenance, IONIC handles everything. We've had zero unplanned shutdowns since partnering with them.", author: "Plant Engineer", company: "Power Generation Facility" },
];

const Testimonials = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted by <span className="text-gradient-blue">Industry Leaders</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-background rounded-2xl p-7 shadow-card border border-border">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} className="text-ionic-orange fill-ionic-orange" size={16} />)}
            </div>
            <p className="text-foreground mb-5 leading-relaxed text-sm italic">"{t.quote}"</p>
            <div>
              <p className="font-bold text-foreground text-sm">{t.author}</p>
              <p className="text-xs text-muted-foreground">{t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
