function CartPage({ cartItems, onClear }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-xl rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-black">Корзина</h2>
      {cartItems.length === 0 ? (
        <div className="text-gray-400 text-center">Корзина порожня</div>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="mb-3 flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded" />
                <div className="flex-1 text-left">
                  <div className="font-semibold text-black">{item.name}</div>
                  <div className="text-gray-600 text-sm">{item.price} грн x {item.count}</div>
                </div>
                <div className="font-bold text-black">{item.price * item.count} грн</div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold text-black">Всього:</div>
            <div className="text-lg font-bold text-black">{total} грн</div>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              onClick={onClear}
              disabled={cartItems.length === 0}
            >
              Очистити корзину
            </button>
            <button
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
              disabled={cartItems.length === 0}
              // Тут має бути логіка оформлення замовлення (modal, форма, API і тд)
            >
              Оформити замовлення
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;