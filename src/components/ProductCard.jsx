function ProductCard({ item, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded mb-3" />
      <h2 className="text-lg font-bold mb-1 text-black">{item.name}</h2>
      <p className="text-gray-700 text-sm mb-2 text-center">{item.description}</p>
      <div className="text-green-700 font-semibold mb-2">{item.price} грн</div>
      <div className="text-xs text-gray-500 mb-2">
        {item.stock > 0 ? `В наявності: ${item.stock} шт.` : 'Немає в наявності'}
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold mt-auto disabled:bg-gray-300 disabled:text-gray-500"
        onClick={() => onAddToCart(item)}
        disabled={item.stock === 0}
      >
        Додати в корзину
      </button>
    </div>
  );
}

export default ProductCard;