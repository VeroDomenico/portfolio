import React, { useState } from 'react';

export default function Plato() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {

  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='h-screen'>
        <div className="bg-blue-300 h-screen h-3/4 flex flex-col justify-between p-4">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 max-h-60 overflow-y: auto text-black text-center text-3xl">
            Plato Chat
        </div>
        <div className="flex items-center">
            <input
            type="text"
            className="flex-grow p-4 rounded-full border border-gray-300 text-black focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full ml-2" onClick={handleSendMessage}>
            Send
            </button>
        </div>
        </div>
    </div>
  );
}
