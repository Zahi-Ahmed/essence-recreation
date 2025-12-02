const StatsSection = () => {
  const stats = [
    { value: "0+", label: "YEARS EXPERIENCES" },
    { value: "0K+", label: "PRODUCT SALE" },
    { value: "0%", label: "POSITIVE REVIEWS" },
    { value: "0K+", label: "HAPPY CUSTOMERS" },
  ];

  return (
    <a href="tel:+18883608685" className="block cursor-pointer">
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lime text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </a>
  );
};

export default StatsSection;
