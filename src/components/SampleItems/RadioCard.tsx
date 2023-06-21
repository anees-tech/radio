import React from 'react';
import RadioTypes from '../../interfaces';
import { Link } from 'react-router-dom';




const RadioCard: React.FC<RadioTypes> = ({radioName, radioID, onClick, radioCountry, radioImage, radioButton}) =>{
    return (
            <div className="w-full flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <Link to={`/radio/${radioID}`} >
                    <img className="p-8 rounded-t-lg" width={`300px`} src={radioImage} alt="product image" />
                </Link>
                <div className="px-5 pb-5">
                   <Link to={`/radio/${radioID}`}>
                        <h5 className="text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{radioName}</h5>
                    </Link>
                    <h3 className="text-lg tracking-tight text-center text-gray-900 dark:text-white">{radioCountry}</h3>
                    <div className="flex items-center justify-between">
                       <Link onClick={onClick} to={`/radio/${radioID}`} className="text-white mx-auto  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2 px-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{radioButton}</Link>
                    </div>

                </div>
            </div>
    )
}

export default RadioCard