const AboutSection = () => {
  const products = [
    {
      title: "Vehicle Integration Kits",
      description: "Seamless refurbished car stereos connection to your factory radio.",
    },
    {
      title: "Plug-and-Play Radios",
      description: "Quick setup, no complex wiring required.",
    },
    {
      title: "Antenna & Mounting Accessories",
      description: "Ensure optimal reception and sleek installs.",
    },
  ];

  return (
    <section id="about" className="bg-sage py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=350&fit=crop"
                alt="Car Interior with SiriusXM"
                className="rounded-2xl shadow-lg w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=300&fit=crop"
                alt="Tesla Dashboard"
                className="rounded-2xl shadow-lg w-3/4 ml-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-subheading">ABOUT 1800 XM RADIO</span>
            <h2 className="section-heading mt-2 mb-8">
              Discover Our <span className="text-lime">Top Products</span>
            </h2>

            <ul className="space-y-4 mb-8">
              {products.map((product, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-lime font-bold">•</span>
                  <div>
                    <span className="font-bold">{product.title}</span>
                    <span className="text-muted-foreground"> – {product.description}</span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mb-8">
              Whether you drive a car, truck, SUV, or RV, we have the perfect{" "}
              <strong>refurbished car stereo solution</strong> tailored for your needs.
              Seamless <strong>refurbished car stereos</strong> connection to your factory radio.
            </p>

            {/* Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <span className="bg-lime text-white text-xs px-2 py-1 rounded-full">0%</span>
                    <span className="font-medium">Best Products</span>
                  </span>
                </div>
                <div className="h-3 bg-dark-green rounded-full overflow-hidden">
                  <div className="h-full bg-dark-green rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <span className="bg-lime text-white text-xs px-2 py-1 rounded-full">0%</span>
                    <span className="font-medium">Customer Feedbacks</span>
                  </span>
                </div>
                <div className="h-3 bg-dark-green rounded-full overflow-hidden">
                  <div className="h-full bg-dark-green rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
