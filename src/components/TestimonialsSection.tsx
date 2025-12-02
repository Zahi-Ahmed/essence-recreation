import { Star, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

const TestimonialsSection = () => {
  const testimonial = {
    text: "I wasn't sure which Radio XN kit would fit my vehicle, but the team at 180 XM Radio helped me pick the right one. It arrived fast, installed easily, and works like a charm. Great service!",
    author: "SARAH D.",
    location: "Charlotte, NC",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 4,
  };

  return (
    <a href="tel:+18883608685" className="block cursor-pointer">
      <section className="py-16 md:py-24 bg-background relative">
        {/* Dotted pattern background */}
        <div className="absolute inset-0 dotted-pattern opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="section-subheading">CLIENT REVIEWS</span>
              <h2 className="section-heading mt-2 mb-6 border-l-4 border-lime pl-4">
                What <span className="text-lime">Our Customers</span>
                <br />
                Are Saying
              </h2>
              <p className="text-muted-foreground mb-8">
                We pride ourselves on quality products, fast service, and expert support. Here's what our happy
                customers have to say:
              </p>
              <Button className="bg-lime text-white hover:bg-lime-dark rounded-full px-8 py-6 font-semibold pointer-events-none">
                <Phone className="w-5 h-5 mr-2" />
                CALL US: +1 (888) 360-8685
              </Button>
            </div>

            {/* Right - Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center">
                  <Quote className="w-6 h-6 text-lime" />
                </div>
              </div>

              <div className="pt-8">
                <p className="text-muted-foreground italic text-lg mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? "fill-lime text-lime" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="text-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-4 border-lime"
                  />
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-lime text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </a>
  );
};

export default TestimonialsSection;
