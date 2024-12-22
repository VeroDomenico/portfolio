
'use client'

import { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { useRouter } from 'next/router';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Correctly using useRef
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-400 to-teal-500">
      <div 
        className={`relative w-[600px] h-[400px] transition-all duration-1000 ease-in-out perspective-1000 ${isOpen ? 'card-open' : ''}`}
        onMouseEnter={() => setShowConfetti(true)}
      >
        {/* Card Front */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-xl cursor-pointer card-front"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="absolute inset-0 bg-white rounded-lg border-8 border-teal-400">
            <div className="flex flex-col items-center justify-center h-full p-8 text-teal-600">
              <h1 className="flex items-center font-bold justify-center text-6xl py-3">Happy Birthday!</h1>
              <h2 className="font-bold text-5xl py-5 bg-gradient-to-r from-violet-200 via-violet-500 to-indigo-600  bg-clip-text text-transparent">
                {displayName}
              </h2>
              <h1 className="text-4xl font-bold mb-4">Click to Open!</h1>
              <p className="text-xl">A special message awaits...</p>
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
                className="w-64 h-64 object-contain mb-6"
              />
              <p className="text-xl text-teal-600 text-center mt-4">
                Hope your special day is as wonderful as you are!
              </p>
              <div
                onClick={ handleConfetti}
                className='text-md font-bold text-emerald-400'
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

