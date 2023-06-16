import React from 'react'
import RadioCard from './SampleItems/RadioCard';



function GridItems() {
    return (
        <>
            <div className="mt-24 mb-32 container mx-auto">
                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    <button
                        type="button"
                        className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                    >
                        Popular
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                    >
                        Asia
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                    >
                        Europe
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                    >
                        Africa
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                    >
                        North America
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                    >
                        South America
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
                    >
                        Australia
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    <div>
                        <RadioCard
                            radioName="Radio Name"
                            radioCountry="Country"
                            radioFreq="FM 105.5"
                            radioButton="Listen"
                        />
                    </div>
                    <div>
                        <RadioCard
                            radioName="Radio Name"
                            radioCountry="Country"
                            radioFreq="FM 105.5"
                            radioButton="Listen"
                        />
                    </div>
                    <div>
                        <RadioCard
                            radioName="Radio Name"
                            radioCountry="Country"
                            radioFreq="FM 105.5"
                            radioButton="Listen"
                        />
                    </div>
                    <div>
                        <RadioCard
                            radioName="Radio Name"
                            radioCountry="Country"
                            radioFreq="FM 105.5"
                            radioButton="Listen"
                        />
                    </div>
                    <div>
                        <RadioCard
                            radioName="Radio Name"
                            radioCountry="Country"
                            radioFreq="FM 105.5"
                            radioButton="Listen"
                        />
                    </div>
                    <div>
                        <RadioCard
                            radioName="Radio Name"
                            radioCountry="Country"
                            radioFreq="FM 105.5"
                            radioButton="Listen"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GridItems