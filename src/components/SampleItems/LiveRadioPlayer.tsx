import AudioPlayer from './AudioPlayer';
import Header from '../Header';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

const RadioCard = () => {

  const location = useLocation()
  const radioName = location.state?.radioName
  const radioImageURL = location.state?.radioIMG
  const radioCurrListners = location.state?.radioCurrListners
  console.log(radioImageURL)


  return (
    <>
      <Header />
      <div className="mt-40 mb-24 text-center container mx-auto w-2/4 bg-white rounded-lg shadow-lg">
        <h2 className='text-3xl font-bold mb-10 mt-32 mx-auto text-center'>{radioName}</h2>
        <div className="mb-4">
          <img src={radioImageURL} alt={radioName} className="w-64 mx-auto h-auto" />
        </div>

        <div className="text-gray-500">{radioCurrListners} Listeners</div>
        <AudioPlayer />
      </div>
      <Footer />
    </>
  );
};

export default RadioCard;
