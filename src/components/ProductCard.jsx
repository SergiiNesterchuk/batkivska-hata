function ProductCard({ item, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow p-3 sm:p-4 flex flex-col items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded mb-2 sm:mb-3"
      />
      <h2 className="text-base sm:text-lg font-bold mb-1">{item.name}</h2>
      <p className="text-xs sm:text-sm text-gray-600 mb-2 text-center">{item.description}</p>
      <div className="text-green-700 font-semibold mb-2">{item.price} грн</div>
      <div className="text-xs text-gray-400 mb-2">
        {item.stock > 0 ? `В наявності: ${item.stock} шт.` : 'Немає в наявності'}
      </div>
      <button
        className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold mt-auto text-sm sm:text-base disabled:bg-gray-300 disabled:text-gray-500"
        onClick={() => onAddToCart(item)}
        disabled={item.stock === 0}
      >
        Додати в корзину
      </button>
    </div>
  );
}

export default ProductCard;