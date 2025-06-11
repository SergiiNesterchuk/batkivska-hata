import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CartPage from "./pages/CartPage";
import Profile from "./pages/Profile";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
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

  // useNavigate має бути ВНУТРІШНЬО компонента
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col">
      <Header 
        cartCount={cartItems.reduce((sum, item) => sum + item.count, 0)}
        onCartClick={() => navigate("/cart")}
      />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} onClear={handleClearCart} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <footer className="text-gray-400 text-xs text-center p-4">
        © {new Date().getFullYear()} Батьківська хата. Створено з любовʼю для людей 🌱
      </footer>
    </div>
  );
}

export default App;