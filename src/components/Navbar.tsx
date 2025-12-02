import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#" },
    { label: "SHOP", href: "#products" },
    { label: "ABOUT US", href: "#about" },
    { label: "FAQs", href: "#" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <nav className="bg-hero py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-lime text-2xl font-bold">((</span>
            <span className="text-white text-xl">
              <sup className="text-xs">1800</sup>
              <span className="font-bold">XM</span>
            </span>
            <span className="text-white font-bold text-xl tracking-wider">RADIO</span>
            <span className="text-lime text-2xl font-bold">))</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-lime transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Call Button */}
          <div className="hidden lg:block">
            <Button variant="outline" className="bg-white text-foreground border-white rounded-full px-6 py-2 hover:bg-lime hover:text-white hover:border-lime transition-all">
              <Phone className="w-4 h-4 mr-2" />
              CALL US: +1 (803) 797-3765
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-lime transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+18037973765"
                className="text-lime font-medium flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +1 (803) 797-3765
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
