import ionicLogo from "@/assets/ionic-logo.jpg";

const Footer = () => (
  <footer className="gradient-hero py-12 px-4 md:px-8">
    <div className="container-narrow">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={ionicLogo} alt="IONIC Logo" className="h-10 brightness-200 contrast-200" />
        </div>
        <p className="text-primary-foreground/50 text-sm text-center">
          © {new Date().getFullYear()} Impact One Nation Industrial Corporation. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
