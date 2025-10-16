import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  messages: string[];
  defaultWait?: number;
  deleteWait?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  messages,
  defaultWait = 100,
  deleteWait = 50,
  className = '',
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [backward, setBackward] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (!backward && subIndex === messages[index].length) {
      setTimeout(() => setBackward(true), 2000);
      return;
    }

    if (backward && subIndex === 0) {
      setBackward(false);
      setIndex((prev) => (prev + 1) % messages.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (backward ? -1 : 1));
    }, backward ? deleteWait : defaultWait);

    return () => clearTimeout(timeout);
  }, [subIndex, index, backward, messages, defaultWait, deleteWait]);

  return (
    <div className={`inline-block items-center justify-center ${className}`}>
      <span className="mr-1">{messages[index].substring(0, subIndex)}</span>
      <span className={`font-light ${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </div>
  );
};

// Export the Typewriter component
export default Typewriter;
