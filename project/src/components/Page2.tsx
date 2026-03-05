import { useState } from 'react';
import { Heart } from 'lucide-react';
import FloatingHearts from './FloatingHearts';

interface Page2Props {
  onYes: () => void;
  onNo: () => void;
}

function Page2({ onYes, onNo }: Page2Props) {
  const [isSad, setIsSad] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  const handleNoClick = () => {
    if (noClickCount === 0) {
      setIsSad(true);
      setNoClickCount(1);
    } else {
      onNo();
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-all duration-1000 ${
        isSad
          ? 'bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-pink-200 via-rose-200 to-red-200'
      }`}
    >
      {!isSad && <FloatingHearts />}

      {isSad && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-6xl opacity-30 animate-bounce">😢</div>
          <div className="absolute top-20 right-20 text-5xl opacity-30 animate-bounce delay-100">😔</div>
          <div className="absolute bottom-20 left-20 text-5xl opacity-30 animate-bounce delay-200">😞</div>
          <div className="absolute bottom-10 right-10 text-6xl opacity-30 animate-bounce delay-300">😥</div>
        </div>
      )}

      <div
        className={`relative z-10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center transition-all duration-1000 ${
          isSad ? 'bg-gray-800/90' : 'bg-white/90'
        }`}
      >
        <div className="mb-8 flex justify-center">
          <img
            src="/WhatsApp_Image_2026-03-05_at_8.50.03_PM.jpeg"
            alt="My Photo"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-pink-300"
          />
        </div>

        {isSad && (
          <div className="mb-6 text-6xl animate-pulse">😢</div>
        )}

        <h1
          className={`text-xl md:text-3xl font-bold mb-8 leading-relaxed transition-colors duration-1000 ${
            isSad ? 'text-gray-200' : 'text-gray-800'
          }`}
        >
          Chuti manika ane pethi yo… oyage pethiya paw ne. Samawa dennako. Godak wela dan
          tharaha wela ne.
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={onYes}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 text-xl"
          >
            YES ❤️
          </button>

          <button
            onClick={handleNoClick}
            className={`font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 text-xl ${
              isSad
                ? 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white'
                : 'bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white'
            }`}
          >
            NO 💔
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page2;
