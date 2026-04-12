import { Building, Hotel, Zap, Factory, Hospital } from "lucide-react";

const clients = [
  { icon: Factory, label: "Manufacturing Plants" },
  { icon: Building, label: "Commercial Buildings" },
  { icon: Zap, label: "Power Plants" },
  { icon: Hotel, label: "Hotels & Resorts" },
  { icon: Hospital, label: "Hospitals" },
];

const ClientsSection = () => (
  <section className="py-12 px-4 md:px-8 border-y border-border bg-muted/50">
    <div className="container-narrow">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">Trusted across industries</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-14">
        {clients.map((c) => (
          <div key={c.label} className="flex items-center gap-2 text-muted-foreground">
            <c.icon size={20} />
            <span className="text-sm font-medium">{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
