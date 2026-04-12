import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      <div className="relative z-10 container-narrow px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
          Let's Optimize Your System Today
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg">
          Get a comprehensive assessment of your water treatment systems and a customized plan to reduce costs and improve efficiency.
        </p>
        <button onClick={() => scrollTo("book")} className="gradient-orange text-accent-foreground px-10 py-5 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity shadow-elevated">
          Book Your Free Consultation Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
