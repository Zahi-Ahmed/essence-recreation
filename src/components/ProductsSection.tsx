import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const products = [
    {
      image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?w=400&h=400&fit=crop",
      category: "Radio Receiver",
      title: "OnyX EZR Radio XN Radio Receiver With Compact Motorcycle...",
      price: "$149.95",
    },
    {
      image: "https://images.pexels.com/photos/4219830/pexels-photo-4219830.jpeg?w=400&h=400&fit=crop",
      category: "Kenwood",
      title: "Radio XN Radio OnyX EZR Receiver",
      price: "$45.99",
    },
    {
      image: "https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?w=400&h=400&fit=crop",
      category: "Radio Receiver",
      title: "Audiovox Xpress EZ Receiver Only",
      price: "$19.99",
    },
    {
      image: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?w=400&h=400&fit=crop",
      category: "Radio Receiver",
      title: "Edge Radio XN Satellite Radio Receiver With Vehicle Kit",
      price: "$69.99",
    },
    {
      image: "https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?w=400&h=400&fit=crop",
      category: "Kenwood",
      title: "Kenwood DMX809S With CMOS-230 Backup Camera Bundle",
      price: "$649.00",
    },
    {
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?w=400&h=400&fit=crop",
      category: "Kenwood",
      title: 'Kenwood DMX809S 6.8" Digital Multimedia Receiver With Android...',
      price: "$549.00",
    },
    {
      image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?w=400&h=400&fit=crop",
      category: "Precision Power",
      title: "Soundstream HDHU.9813RG Radio Headunit For 1998-2013 Road Gli...",
      price: "$999.00",
    },
    {
      image: "https://images.pexels.com/photos/3784223/pexels-photo-3784223.jpeg?w=400&h=400&fit=crop",
      category: "Kenwood",
      title: "Kenwood KMM-X705 1-DIN Digital Media Receiver",
      price: "$169.00",
    },
    {
      image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?w=400&h=400&fit=crop",
      category: "Kenwood",
      title: "Kenwood Excelon DMX709S 2-DIN Headunit With SXV300v1 Radio X...",
      price: "$429.00",
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading flex items-center justify-center gap-4">
            <span className="text-lime text-3xl">(</span>
            Our <span className="text-lime">Best Products</span>
            <span className="text-lime text-3xl">)</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
