import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-lime rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background shape */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-dark-green/20 rounded-full translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-white/90 font-medium uppercase tracking-wider text-sm">
                SUBSCRIBE NEWSLETTER
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
                Don't Miss Our Future Updates! Get Subscribed Today!
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-none rounded-full px-6 py-6 text-foreground"
                required
              />
              <Button
                type="submit"
                className="bg-dark-green text-white hover:bg-dark-green/90 rounded-full px-8 py-6 font-semibold"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
