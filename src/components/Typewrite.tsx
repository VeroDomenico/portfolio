// Import required dependencies
import React, { useEffect, useState } from 'react';

// Define TypewriterProps interface
interface TypewriterProps {
  messages: string[];
  defaultWait?: number;
  deleteWait?: number;
}

// Define Typewriter component
const Typewriter: React.FC<TypewriterProps> = ({
  messages,
  defaultWait = 100,
  deleteWait = 50,
}) => {
  // Define state variables
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [backward, setBackward] = useState(false);

  // Use useEffect hook to update the subIndex state variable
  useEffect(() => {
    // Check if the cursor is at the end of the message
    if (!backward && subIndex === messages[index].length) {
      // Set a timeout to reverse the direction of the cursor
      setTimeout(() => setBackward(true), 2000);
      return;
    }

    // Check if the cursor is at the beginning of the message
    if (backward && subIndex === 0) {
      // Set the cursor to the beginning of the next message
      setBackward(false);
      setIndex(index === messages.length - 1 ? 0 : index + 1);
      return;
    }

    // Set a timeout to update the cursor position
    const timeout = setTimeout(() => {
      setSubIndex(subIndex + (backward ? -1 : 1));
    }, backward ? deleteWait : defaultWait);

    // Return a cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [subIndex, index, backward]);

  // Render the typewriter component
  return (
      <div className={"flex-2 inline-flex font-bold flex-col items-center justify-content: center align-items: center"}>
        <span className={"text-2xl md:text-4xl"}>Dominic Meconi</span>
          <div className={"flex flex-row md:text-xl text-md"}>
              <span className={""}>{`${messages[index].substring(0, subIndex)}`}</span>
              <span id="blinkerAni">&#x25ae;</span>
          </div>
          
    </div>
  );
};

// Export the Typewriter component
export default Typewriter;
