import { Beaker, Shield, Droplet, Cog, Fuel, Sparkles } from "lucide-react";

const products = [
  { icon: Shield, name: "Scale & Corrosion Inhibitors", brand: "AQUATRACT CT Series" },
  { icon: Beaker, name: "Algaecides & Microbiocides", brand: "AQUATRACT CT-4000/4210" },
  { icon: Droplet, name: "Boiler Treatment Chemicals", brand: "AQUATRACT BT-2100" },
  { icon: Cog, name: "RO Systems & Filters", brand: "CSM Membranes & ANOW Filters" },
  { icon: Fuel, name: "Industrial Lubricants", brand: "LUPROMAX Series" },
  { icon: Sparkles, name: "VCI Corrosion Protection", brand: "VAPPRO Products" },
];

const ProductsSection = () => (
  <section id="products" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Products & <span className="text-gradient-blue">Capabilities</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Industry-leading chemicals, equipment, and treatment programs from trusted global partners.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <div key={p.name} className="flex items-start gap-4 bg-background rounded-xl p-5 shadow-card hover:shadow-elevated transition-shadow border border-border">
            <div className="w-11 h-11 rounded-lg gradient-cta flex items-center justify-center shrink-0">
              <p.icon className="text-primary-foreground" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-sm mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground">{p.brand}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
