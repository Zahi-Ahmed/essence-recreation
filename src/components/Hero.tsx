import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Seamless Radio XN Radio
            <br />
            Integration For Any Vehicle
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Whether you drive a sedan, SUV, truck, or RV, we offer vehicle-specific Radio XN car kits that
            deliver perfect sound quality without changing your factory stereo. Easy to install, built to last, and
            backed by expert support.
          </p>
          <Button className="bg-lime text-white hover:bg-lime-dark rounded-full px-8 py-6 text-lg font-semibold">
            <Phone className="w-5 h-5 mr-2" />
            CALL US: +1 (803) 797-3765
          </Button>
        </div>

        {/* Hero Images */}
        <div className="mt-12 flex justify-center items-end gap-4 md:gap-8">
          <div className="relative w-32 md:w-48 lg:w-56">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=600&fit=crop"
              alt="SiriusXM App on Phone"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="relative w-48 md:w-72 lg:w-96">
            <img
              src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop"
              alt="White SUV Vehicle"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full h-full">
          <path
            d="M0 100V0C240 80 480 100 720 100C960 100 1200 80 1440 0V100H0Z"
            fill="hsl(85, 40%, 96%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
