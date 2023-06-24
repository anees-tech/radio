import { useLocation } from 'react-router-dom';

const AudioPlayer = () => {
    const location = useLocation()
    const radioURL = location.state?.radioURL
    console.log(radioURL)

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      
      <div className="mt-4">
        <audio controls className="w-full">
          <source src={radioURL} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
