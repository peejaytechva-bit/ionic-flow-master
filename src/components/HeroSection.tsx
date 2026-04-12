import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Industrial water treatment facility" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      <div className="relative z-10 container-narrow px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block gradient-orange text-accent-foreground text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
            The Total Corrosion Control Company
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Optimize Your Water Systems.{" "}
            <span className="text-gradient-orange">Prevent Costly Downtime.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed">
            End-to-end water treatment and industrial maintenance solutions tailored for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollTo("book")} className="gradient-orange text-accent-foreground px-8 py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-elevated">
              Book a Free Consultation
            </button>
            <button onClick={() => scrollTo("book")} className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary-foreground/10 transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
