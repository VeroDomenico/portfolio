
'use client'

import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { useRouter } from 'next/router';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const catRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const { name } = router.query;

  const displayName = name ?? "John Doe";

  const handleConfetti = () => {
    if (catRef.current) {
      const rect = catRef.current.getBoundingClientRect();
      const originX = (rect.left + rect.width / 2) / window.innerWidth;
      const originY = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 400,
        spread: 140,
        angle: 70,
        origin: { x: originX, y: originY },
      });
    }
  };

  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showConfetti]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-400 to-teal-500 px-4 sm:px-8">
      <div 
        className={`relative w-full max-w-lg h-[400px] sm:h-[500px] transition-all duration-1000 ease-in-out perspective-1000 ${isOpen ? 'card-open' : ''}`}
        onTouchStart={() => setShowConfetti(true)}  // Mobile touch event
        onMouseEnter={() => setShowConfetti(true)}  // For desktops
      >
        {/* Card Front */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-xl cursor-pointer card-front"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute inset-0 bg-white rounded-lg border-8 border-teal-400">
            <div className="flex flex-col items-center justify-center h-full p-4 sm:p-8 bg-gradient-to-r from-red-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
              <h1 className="text-4xl sm:text-6xl font-bold py-2">Happy Birthday!</h1>
              <h2 className="font-bold text-2xl sm:text-4xl py-5 bg-gradient-to-r from-pink-400 via-blue-300 to-fuchsia-500 bg-clip-text text-transparent">
                {displayName}
              </h2>
              <h1 className="text-xl sm:text-3xl font-bold mb-4">Click to Open!</h1>
              <p className="text-lg sm:text-xl">A special message awaits...</p>
            </div>
          </div>
        </div>

        {/* Card Inside */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-xl card-back">
          <div className="absolute inset-0 bg-white rounded-lg border-8 border-teal-400 p-8">
            <div ref={catRef} className="flex flex-col items-center justify-center h-full">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-owWozEQt70zl85NUjqKlEMnIp8nK4n.png"
                alt="Birthday Cats"
                className="w-48 sm:w-64 h-auto object-contain mb-6"
              />
              <p className="text-lg sm:text-xl text-sky-400 text-center mt-4">
                Hope your special day is as wonderful as you are!
              </p>
              <div
                onClick={handleConfetti}
                className='text-md sm:text-lg font-bold text-orange-400 cursor-pointer mt-4'
              >
                Click me to Party!
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .card-front {
          backface-visibility: hidden;
          transform-origin: left;
          transition: transform 1s ease;
        }

        .card-back {
          backface-visibility: hidden;
          transform-origin: left;
          transform: rotateY(180deg);
        }

        .card-open .card-front {
          transform: rotateY(-180deg);
        }

        .card-open .card-back {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
}

