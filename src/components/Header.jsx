import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

function Header({ cartCount, onCartClick }) {
  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-white shadow">
      <Link to="/" className="text-2xl font-bold text-green-700 drop-shadow">Батьківська хата</Link>
      <nav className="flex items-center gap-6">
        <Link to="/catalog" className="text-lg font-semibold hover:text-green-700 transition">Каталог</Link>
        <Link to="/profile" className="text-lg font-semibold hover:text-green-700 transition">Профіль</Link>
        <button onClick={onCartClick} className="relative">
          <CartIcon count={cartCount} />
        </button>
      </nav>
    </header>
  );
}

export default Header;