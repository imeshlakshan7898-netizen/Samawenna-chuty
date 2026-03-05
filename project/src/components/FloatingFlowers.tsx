import { useEffect, useState } from 'react';

interface Flower {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
  size: number;
}

function FloatingFlowers() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const flowerEmojis = ['🌸', '🌺', '🌹', '🌷', '🌻', '💐'];

  useEffect(() => {
    const newFlowers: Flower[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 5,
      emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
      size: 25 + Math.random() * 25,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute bottom-0 animate-float-up opacity-80"
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            fontSize: `${flower.size}px`,
          }}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  );
}

export default FloatingFlowers;
