import { FaShoppingCart } from "react-icons/fa";

function CartIcon({ count }) {
  return (
    <div className="relative">
      <FaShoppingCart className="w-7 h-7 text-green-700" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
          {count}
        </span>
      )}
    </div>
  );
}

export default CartIcon;