function Cart({ cartItems, onClear }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="fixed top-4 right-4 bg-white shadow-xl rounded-xl p-4 w-80 max-h-[90vh] overflow-auto z-20 text-black">
      <h2 className="text-lg font-bold mb-3 text-black">Корзина</h2>
      {cartItems.length === 0 ? (
        <div className="text-gray-400">Корзина порожня</div>
      ) : (
        <ul className="mb-3 space-y-3">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 bg-gray-50 rounded-lg p-2 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate text-black">{item.name}</div>
                <div className="text-xs text-gray-700 truncate">{item.description}</div>
                <div className="text-sm text-black">
                  <span className="font-bold">{item.price} грн</span> ×{" "}
                  <span className="font-bold">{item.count}</span> ={" "}
                  <span className="font-bold text-green-700">
                    {item.price * item.count} грн
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="font-bold text-lg mb-2 border-t pt-2 text-black">
        Всього: <span className="text-green-700">{total} грн</span>
      </div>
      <button
        className="bg-red-400 text-white py-2 px-4 rounded text-base w-full font-semibold hover:bg-red-500 transition"
        onClick={onClear}
        disabled={cartItems.length === 0}
      >
        Очистити корзину
      </button>
    </div>
  );
}

export default Cart;