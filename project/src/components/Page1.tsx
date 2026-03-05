import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import FloatingHearts from './FloatingHearts';

interface Page1Props {
  onYes: () => void;
  onNo: () => void;
}

function Page1({ onYes, onNo }: Page1Props) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
  const [moveCount, setMoveCount] = useState(0);
  const [isNoClickable, setIsNoClickable] = useState(false);

  const moveNoButton = () => {
    if (moveCount < 3) {
      const maxWidth = window.innerWidth - 150;
      const maxHeight = window.innerHeight - 100;

      const randomTop = Math.random() * maxHeight;
      const randomLeft = Math.random() * maxWidth;

      setNoButtonPosition({ top: randomTop, left: randomLeft });
      setMoveCount(moveCount + 1);

      if (moveCount === 2) {
        setIsNoClickable(true);
      }
    }
  };

  const handleNoClick = () => {
    if (isNoClickable) {
      onNo();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">❤️</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse delay-100">💕</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse delay-200">💖</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-pulse delay-300">💗</div>
      </div>

      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <Heart className="text-red-500 animate-pulse" size={64} fill="currentColor" />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 leading-relaxed">
          Chuty Manika samawenna mata parakku unata… Mage weradda samawa denawa neda?
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12 relative">
          <button
            onClick={onYes}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 text-xl"
          >
            YES ❤️
          </button>

          {moveCount < 3 ? (
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 text-xl"
            >
              NO 💔
            </button>
          ) : (
            <button
              onClick={handleNoClick}
              style={{
                position: 'fixed',
                top: `${noButtonPosition.top}px`,
                left: `${noButtonPosition.left}px`,
              }}
              className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 text-xl z-50"
            >
              NO 💔
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page1;
