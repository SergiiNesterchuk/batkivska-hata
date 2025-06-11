import { useState } from "react";
import Catalog from "./Catalog";
import Cart from "./Cart";

function App() {
  const [showCatalog, setShowCatalog] = useState(false);
  const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (product) => {
  setCartItems((prev) => {
    console.log("Додаємо в корзину: ", product);
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
      return prev.map((item) =>
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      );
    } else {
      return [...prev, { ...product, count: 1 }];
    }
  });
};

  const handleClearCart = () => setCartItems([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center p-4">
      <Cart cartItems={cartItems} onClear={handleClearCart} />
      {!showCatalog ? (
        <div className="flex flex-col items-center mt-16">
          <h1 className="text-4xl font-bold text-green-700 mb-2 drop-shadow">
            Батьківська хата тест123
          </h1>
          <p className="text-xl text-gray-700 mb-6 text-center max-w-xl">
            Сімейний блог про сад, город, врожай, рецепти та натуральну продукцію з села.<br />
            Вирощено з любов'ю, від <b>Анатолія Нестерчука</b>.
          </p>
          <div className="flex gap-6 mb-8">
            <a href="https://www.tiktok.com/@nesterchuk_anatoliy" target="_blank" rel="noopener noreferrer" title="TikTok">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" alt="TikTok" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://www.instagram.com/nesterchuk_anatoliy" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://t.me/batkivska_hata" target="_blank" rel="noopener noreferrer" title="Telegram">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100025198117909" target="_blank" rel="noopener noreferrer" title="Facebook">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
            </a>
            <a href="https://youtube.com/@nesterchuk_anatoliy" target="_blank" rel="noopener noreferrer" title="YouTube">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
            </a>
          </div>
          <button
            className="bg-green-600 text-white py-2 px-8 rounded-xl font-semibold shadow hover:bg-green-700 transition text-lg"
            onClick={() => setShowCatalog(true)}
          >
            Каталог продукції
          </button>
          <div className="mt-12 text-gray-400 text-xs">
            © {new Date().getFullYear()} Батьківська хата. Створено з любовʼю для людей 🌱
          </div>
        </div>
      ) : (
        <>
          <button
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-xl mb-4 hover:bg-gray-300"
            onClick={() => setShowCatalog(false)}
          >
            ← На головну
          </button>
          <Catalog onAddToCart={handleAddToCart} />
        </>
      )}
    </div>
  );
}

export default App;