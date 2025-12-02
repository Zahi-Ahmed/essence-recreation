import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "tel:+18883608685" },
    { label: "About Us", href: "tel:+18883608685" },
    { label: "Shop", href: "tel:+18883608685" },
    { label: "Faqs", href: "tel:+18883608685" },
    { label: "Contact Us", href: "tel:+18883608685" },
  ];

  const privacyLinks = [{ label: "Privacy Policy", href: "tel:+18883608685" }];

  return (
    <footer id="contact" className="bg-dark-green text-white">
      <a href="tel:+18883608685" className="block cursor-pointer">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center gap-1 mb-6">
                <span className="text-lime text-2xl font-bold">((</span>
                <span className="text-white text-xl">
                  <sup className="text-xs">180</sup>
                  <span className="font-bold">XM</span>
                </span>
                <span className="text-white font-bold text-xl tracking-wider">RADIO</span>
                <span className="text-lime text-2xl font-bold">))</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                180xmradio.com is a Brand of DELANEY ECOM SOLUTIONS LLC, an independent content provider. It
                does not affiliate with any brand or promote any brand, product, or software. The product we
                offer may be available on the brand owner's website. We do not provide any outside links. The
                brand names and product logos used on this website are for representation purposes only. If you
                find any outside link, please inform us at support@180radio.info, and we will remove it.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 relative">
                Quick Link
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-lime -mb-2"></span>
              </h4>
              <ul className="space-y-3 mt-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <span className="text-white/70 hover:text-lime transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy Link */}
            <div>
              <h4 className="font-bold text-lg mb-6 relative">
                Privacy Link
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-lime -mb-2"></span>
              </h4>
              <ul className="space-y-3 mt-4">
                {privacyLinks.map((link, index) => (
                  <li key={index}>
                    <span className="text-white/70 hover:text-lime transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 relative">
                Contact Info
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-lime -mb-2"></span>
              </h4>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white/70 mt-1 flex-shrink-0" />
                  <span className="text-white/70">
                    2930 Fox Pointe Dr Saratoga Springs, UT 84045, USA
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/70 flex-shrink-0" />
                  <span className="text-white/70 hover:text-lime transition-colors">
                    +1 (888) 360-8685
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/70 flex-shrink-0" />
                  <span className="text-white/70 hover:text-lime transition-colors">
                    support@180radio.info
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a>

      {/* Copyright */}
      <a href="tel:+18883608685" className="block cursor-pointer">
        <div className="bg-hero">
          <div className="container mx-auto px-4 py-4">
            <p className="text-center text-white/70 text-sm">
              Copyright © 2025 All Right By 180 XM Radio Design By legit.global
            </p>
          </div>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
