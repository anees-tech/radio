import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
// redux-toolkit




const CountryList: React.FC = () => {


  const navigate = useNavigate()

  const [countries, setCountries] = useState<{ code: string; name: string }[]>([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://live.jacktembo.com:8004/api/world/countries');
      const data = await response.json();
      setCountries(
        data.map((item: any) => ({
          code: item.country_code,
          name: item.country_name,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCountrySelection = (countryCode: string, countryName: string) => {
    navigate(`/country/${countryCode.toLowerCase()}`, {state:{countryCode:countryCode, countryName:countryName}})
    console.log(countryCode);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-6">
        <h1 className="text-3xl text-center mt-10 font-bold mb-10">List of All Countries</h1>
        <div className="container mt-3 mb-5 grid grid-cols-4 gap-4">
          {countries.map((item) => (
            <button
              
              key={item.code}
              onClick={() => handleCountrySelection(item.code, item.name)}
              className="bg-gray-800 text-white p-4 text-center rounded-md"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CountryList;
