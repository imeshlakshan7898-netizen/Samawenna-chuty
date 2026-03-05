import { Heart } from 'lucide-react';
import FloatingHearts from './FloatingHearts';

interface Page4Props {
  onYes: () => void;
}

function Page4({ onYes }: Page4Props) {
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
          <img
            src="/WhatsApp_Image_2026-03-05_at_8.50.04_PM.jpeg"
            alt="My Photo"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-pink-300"
          />
        </div>

        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
          Oyata karanna deyak ne Chuti Manika. Samawa deela yalu wenna thamai wenne. Oyage baby
          paw ne.
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 mb-8 leading-relaxed">
          Mage Chuti Manika oyata wena karanna deyak ne. Oyage baby paw ne. Samawa denawa neda?
        </p>

        <div className="flex justify-center items-center mt-12">
          <button
            onClick={onYes}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-5 px-16 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 text-2xl animate-pulse"
          >
            YES ❤️
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <Heart className="text-red-500 animate-ping" size={48} fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

export default Page4;
