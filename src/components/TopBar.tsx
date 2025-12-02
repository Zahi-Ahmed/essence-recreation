import { Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-hero text-lime py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-2 md:gap-6">
        <a href="mailto:contact@1800xmradio.shop" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail className="w-4 h-4" />
          <span>contact@1800xmradio.shop</span>
        </a>
        <span className="hidden md:inline text-white/50">|</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-lime rounded-full"></span>
          <span>We don't sell new Car Kits—only refurbished ones.</span>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
