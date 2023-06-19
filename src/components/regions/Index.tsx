import React, { useState } from 'react'
import Europ from './Europ'
import NorthAmerica from './NorthAmerica'
import SouthAmerica from './SouthAmerica'
import Australia from './Australia'
import Africa from './Africa'
import Asia from './Asia'
import Popular from './Popular'


function Index() {
    const regionTypes: any = {
        popular: Popular,
        asia: Asia,
        europe: Europ,
        africa: Africa,
        southAmerica: SouthAmerica,
        northAmerica: NorthAmerica,
        australia: Australia,
    }

    const [regionType, countType] = useState("popular")

    const CurrentType = regionTypes[regionType]
    return (

        <>
            <div className="mt-24 mb-32 container mx-auto">
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button
                        onClick={() => countType("popular")}
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white
                    dark:focus:bg-sky-600
                    dark:focus:text-slate-50"

                    >
                        Popular
                    </button>
                    <button
                        onClick={() => countType("asia")}
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white
                    dark:focus:bg-sky-600
                    dark:focus:text-slate-50"

                    >
                        Asia
                    </button>
                    <button
                        onClick={() => countType("europe")}
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white
                    dark:focus:bg-sky-600
                    dark:focus:text-slate-50"

                    >
                        Europe
                    </button>
                    <button
                        onClick={() => countType("africa")}
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white
                    dark:focus:bg-sky-600
                    dark:focus:text-slate-50"

                    >
                        Africa
                    </button>
                    <button
                        onClick={() => countType("northAmerica")}
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white
                    dark:focus:bg-sky-600
                    dark:focus:text-slate-50"

                    >
                        North America
                    </button>
                    <button
                        onClick={() => countType("southAmerica")}
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white
                    dark:focus:bg-sky-600
                    dark:focus:text-slate-50"

                    >
                        South America
                    </button>
                    <button
                        onClick={() => countType("australia")}
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white
                    dark:focus:bg-sky-600
                    dark:focus:text-slate-50"

                    >
                        Australia
                    </button>
                </div>
               

                    <CurrentType />
               </div >

        </>
    )
}

export default Index;