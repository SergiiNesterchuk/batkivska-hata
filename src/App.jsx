import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-2 drop-shadow">
        Батьківська хата
      </h1>
      <p className="text-xl text-gray-700 mb-6 text-center max-w-xl">
        Сімейний блог про сад, город, врожай, рецепти та натуральну продукцію з села.<br />
        Вирощено з любов'ю, від <b>Анатолія Нестерчука</b>.
      </p>
      <div className="flex gap-6 mb-8">
        <a
          href="https://www.tiktok.com/@nesterchuk_anatoliy"
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
            alt="TikTok"
            className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          />
        </a>
        <a
          href="https://www.instagram.com/nesterchuk_anatoliy"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
            alt="Instagram"
            className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          />
        </a>
        <a
          href="https://t.me/batkivska_hata"
          target="_blank"
          rel="noopener noreferrer"
          title="Telegram"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"
            alt="Telegram"
            className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100025198117909"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
            alt="Facebook"
            className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          />
        </a>
        <a
          href="https://youtube.com/@nesterchuk_anatoliy"
          target="_blank"
          rel="noopener noreferrer"
          title="YouTube"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
            alt="YouTube"
            className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          />
        </a>
      </div>
      <button
        className="bg-green-600 text-white py-2 px-8 rounded-xl font-semibold shadow hover:bg-green-700 transition text-lg"
        onClick={() => alert('Каталог скоро буде!')}
      >
        Каталог продукції
      </button>
      <div className="mt-12 text-gray-400 text-xs">
        © {new Date().getFullYear()} Батьківська хата. Створено з любовʼю для людей 🌱
      </div>
    </div>
  );
}

export default App;