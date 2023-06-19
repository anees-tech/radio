import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import interfacesProps from '../../interfaces'


 
const RadioPlayer: React.FC<interfacesProps> = ({ radioName, radioCountry }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
        onClick={handleTogglePlay}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="ml-4">
      <h3 className="text-lg font-semibold">{radioName}</h3>
        <h3 className="text-lg font-semibold">{radioCountry}</h3>
        <p className="text-gray-500">{radioCountry}</p>
      </div>
    </div>
  );
};

export default RadioPlayer;