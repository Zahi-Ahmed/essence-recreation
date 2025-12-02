const WhyChooseSection = () => {
  const features = [
    {
      number: "01.",
      title: "Fast Shipping",
      description:
        "Enjoy fast, free delivery across the U.S. — no hidden fees, no minimums. Get your Radio XN gear shipped right to your door at no extra cost.",
    },
    {
      number: "02.",
      title: "24/7 Support",
      description:
        "Need help anytime, day or night? Our expert team is available 24/7 to assist with product questions, order updates, and installation guidance.",
    },
    {
      number: "03.",
      title: "Low Price",
      description:
        "We offer competitive pricing on all Radio XN radio kits and accessories — so you can shop with confidence and keep more in your wallet.",
    },
    {
      number: "04.",
      title: "Hassle-Free Returns",
      description:
        "Changed your mind? No worries. We make it easy with simple, no-stress returns and fast exchanges on all eligible items.",
    },
  ];

  return (
    <a href="tel:+18883608685" className="block cursor-pointer">
      <section className="green-gradient py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="section-heading text-white text-center mb-12">
            Why Choose <span className="text-lime">180 XM Radio</span> ?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-lime text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">
                    {feature.number}
                  </span>
                </div>
                <div className="pt-8 text-center">
                  <h3 className="font-bold text-xl mb-4">{feature.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </a>
  );
};

export default WhyChooseSection;
