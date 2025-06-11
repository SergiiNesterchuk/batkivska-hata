import products from '../data/products';
import ProductCard from '../components/ProductCard';

function Catalog({ onAddToCart }) {
  return (
    <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default Catalog;