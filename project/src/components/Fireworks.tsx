import { useEffect, useState } from 'react';

interface Firework {
  id: number;
  left: number;
  top: number;
  delay: number;
}

function Fireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    const newFireworks: Firework[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: 10 + Math.random() * 80,
      top: 10 + Math.random() * 60,
      delay: i * 0.5,
    }));
    setFireworks(newFireworks);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.left}%`,
            top: `${firework.top}%`,
            animationDelay: `${firework.delay}s`,
          }}
        >
          <div className="relative">
            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-firework-1"></div>
            <div className="absolute w-2 h-2 bg-pink-400 rounded-full animate-firework-2"></div>
            <div className="absolute w-2 h-2 bg-red-400 rounded-full animate-firework-3"></div>
            <div className="absolute w-2 h-2 bg-orange-400 rounded-full animate-firework-4"></div>
            <div className="absolute w-2 h-2 bg-rose-400 rounded-full animate-firework-5"></div>
            <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-firework-6"></div>
            <div className="absolute w-2 h-2 bg-fuchsia-400 rounded-full animate-firework-7"></div>
            <div className="absolute w-2 h-2 bg-amber-400 rounded-full animate-firework-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fireworks;
