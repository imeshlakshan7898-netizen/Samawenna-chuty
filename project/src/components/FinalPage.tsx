import { useEffect, useState } from 'react';
import Fireworks from './Fireworks';
import FloatingFlowers from './FloatingFlowers';
import FloatingHearts from './FloatingHearts';

function FinalPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-300 to-red-300 flex items-center justify-center p-4 relative overflow-hidden">
      <Fireworks />
      <FloatingFlowers />
      <FloatingHearts />

      <div
        className={`relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl w-full text-center transform transition-all duration-1000 ${
          showMessage ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <div className="mb-8 flex justify-center space-x-4">
          <div className="text-6xl animate-bounce">❤️</div>
          <div className="text-6xl animate-bounce delay-100">💕</div>
          <div className="text-6xl animate-bounce delay-200">💖</div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 mb-8 leading-relaxed animate-pulse">
          Aadarei Mage Chuti Manike… Ummaah 💋❤️
        </h1>

        <div className="flex justify-center space-x-3 mt-12">
          <div className="text-5xl animate-spin-slow">🌹</div>
          <div className="text-5xl animate-pulse">💝</div>
          <div className="text-5xl animate-spin-slow">🌹</div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-4xl">
          <div className="animate-bounce">💖</div>
          <div className="animate-bounce delay-100">💗</div>
          <div className="animate-bounce delay-200">💕</div>
          <div className="animate-bounce delay-300">❤️</div>
          <div className="animate-bounce delay-400">💝</div>
          <div className="animate-bounce delay-500">💖</div>
        </div>
      </div>
    </div>
  );
}

export default FinalPage;
