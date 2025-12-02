interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  price: string;
}

const ProductCard = ({ image, category, title, price }: ProductCardProps) => {
  return (
    <div className="product-card group cursor-pointer">
      <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-muted flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="text-center">
        <span className="text-lime text-sm font-medium">{category}</span>
        <h3 className="font-semibold mt-1 mb-2 line-clamp-2">{title}</h3>
        <p className="text-lime text-xl font-bold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
