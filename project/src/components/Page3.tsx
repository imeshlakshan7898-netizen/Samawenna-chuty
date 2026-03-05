import FloatingHearts from './FloatingHearts';

interface Page3Props {
  onYes: () => void;
  onNo: () => void;
}

function Page3({ onYes, onNo }: Page3Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="text-8xl md:text-9xl animate-bounce">😠</div>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 leading-relaxed">
          Mata samawa denawada naddha?
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={onYes}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 text-xl"
          >
            YES ❤️
          </button>

          <button
            onClick={onNo}
            className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 text-xl"
          >
            NO 💔
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page3;
