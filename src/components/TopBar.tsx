import { Mail } from "lucide-react";

const TopBar = () => {
  return (
    <a href="tel:+18883608685" className="block bg-hero text-lime py-2 text-sm cursor-pointer hover:bg-hero/90 transition-colors">
      <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-2 md:gap-6">
        <span className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>support@180radio.info</span>
        </span>
        <span className="hidden md:inline text-white/50">|</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-lime rounded-full"></span>
          <span>We don't sell new Car Kits—only refurbished ones.</span>
        </span>
      </div>
    </a>
  );
};

export default TopBar;
