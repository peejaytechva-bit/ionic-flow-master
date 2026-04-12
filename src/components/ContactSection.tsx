import { useState } from "react";
import { Phone, Mail, MapPin, Globe, Smartphone } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  industry: z.string().trim().min(1, "Industry is required").max(100),
  problem: z.string().trim().min(1, "Please describe your need").max(1000),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(30),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [form, setForm] = useState<FormData>({ name: "", company: "", industry: "", problem: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <section id="book" className="section-padding bg-card">
        <div className="container-narrow text-center py-16">
          <div className="w-20 h-20 rounded-full gradient-orange mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">✓</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Thank You!</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            We've received your inquiry. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <p className="text-sm text-muted-foreground">What happens next: Our engineer will contact you to schedule a site assessment.</p>
        </div>
      </section>
    );
  }

  const inputClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
  const errorClass = "text-xs text-destructive mt-1";

  return (
    <section id="book" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book a Free <span className="text-gradient-orange">Consultation</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours to schedule your assessment.
            </p>

            <div id="contact" className="space-y-5">
              {[
                { icon: Phone, label: "Landline", value: "(632) 8806 2048 / 8805 2959 / 8800 9104" },
                { icon: Smartphone, label: "Mobile", value: "Globe 0917 854 9790 / Smart 0947 801 7594" },
                { icon: Mail, label: "Email", value: "impactonenation@gmail.com" },
                { icon: MapPin, label: "Address", value: "Blk 9 Lot 6, Banuyo Rd, Pilar Village, Las Piñas City" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center shrink-0">
                    <c.icon className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{c.label}</p>
                    <p className="text-sm text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated border border-border space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input className={inputClass} placeholder="Full Name *" value={form.name} onChange={(e) => updateField("name", e.target.value)} />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </div>
              <div>
                <input className={inputClass} placeholder="Company *" value={form.company} onChange={(e) => updateField("company", e.target.value)} />
                {errors.company && <p className={errorClass}>{errors.company}</p>}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input className={inputClass} placeholder="Industry *" value={form.industry} onChange={(e) => updateField("industry", e.target.value)} />
                {errors.industry && <p className={errorClass}>{errors.industry}</p>}
              </div>
              <div>
                <input className={inputClass} placeholder="Phone / Mobile *" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
              </div>
            </div>
            <div>
              <input className={inputClass} placeholder="Email Address *" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>
            <div>
              <textarea className={`${inputClass} min-h-[100px] resize-none`} placeholder="Describe your water treatment needs or problem *" value={form.problem} onChange={(e) => updateField("problem", e.target.value)} />
              {errors.problem && <p className={errorClass}>{errors.problem}</p>}
            </div>
            <button type="submit" className="w-full gradient-orange text-accent-foreground py-4 rounded-lg text-base font-bold hover:opacity-90 transition-opacity shadow-elevated">
              Submit Inquiry
            </button>
            <p className="text-xs text-muted-foreground text-center">We'll respond within 24 hours. No spam, ever.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
