import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Header() {
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [countries, setCountries] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    fetchCountries()
  }, [])

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
  }

  const handleChange = (event:any) => {
    event.persist(); // Persist the event
    const selectedValue = event.target.value;
    let string = selectedValue.split(',')
    const code = string[0]
    const name = string[1]

    setSelectedCountryCode(code);
    navigate(`/filter/${code}`, { state: { code : code, name: name } });
  

    console.log(selectedValue); // Use selectedValue instead of selectedCountryCode
  };
  return (
    <>
      <nav className='flex justify-around items-center py-5 mt-1 fixed w-full z-20 top-0 left-0 px-auto bg-slate-400'>
        <div className="logo">
          <a href="/">
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Global Media</span>
          </a>
        </div>
        <div className="list-items">
          <ul className='flex justify-between gap-10'>
            <li>
              <Link to={'/'} className='text-xl text-semibold text-white'>Home</Link>
            </li>
            <li>
              <Link to={'/allCountries'} className='text-xl text-semibold text-white'>All List</Link>
            </li>
            <li>
              <Link to={'/about'} className='text-xl text-semibold text-white'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-slate-600 py-6  text-center mt-24">
        <label htmlFor="country" className="mr-2 font-semibold">
          Select a country:
        </label>
        <select
          id="country"
          value={selectedCountryCode}
          onChange={handleChange}
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option> Select any country</option>
          {countries.map((country: any) => (
            <option key={country.code} value={[country.code, country.name]} >
              <a href={`/filter/${country.code}`}>{country.name}</a>
            </option>
          ))}
        </select>
      </div >
    </>
  )
}

export default Header;