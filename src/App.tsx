import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css'
import AllCountries from './components/regions/AllCountries';
import HomePage from './components/HomePage';
import CountryStations from './components/regions/CountryStations'


function App() {
  return (
    <>
     
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/country/:code" element={<CountryStations />} />
          <Route path='/allCountries' element={<AllCountries />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App