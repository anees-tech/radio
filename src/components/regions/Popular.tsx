import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import RadioCard from '../SampleItems/RadioCard'
// import Pagination from './paginataion/Pagination'


function Popular() {
    const [data, setData] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [station, setStation] = useState<any[]>([]);


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://live.jacktembo.com:8004/api/zm/stations`)
            const data = await response.json()

            // console.log(data)
            setData(data)
            setStation(data[0].stations)
            setTotalPages(data[0].total_pages)
            console.log(data[0].total_pages)
        } catch (error) {
            console.log(error)
        }
    } 
    const fetchPage = async (currentPage:any) => {
        try {
            const response = await fetch(`https://live.jacktembo.com:8004/api/zm/stations?page=${currentPage}`)
            const data = await response.json()
            return data[0]
        } catch (error) {
            console.log(error)
        }
    }

    const  handleOnchangeData = async (data: any) => {
       
        // console.log(data)
        let currPageNumber: any = data.selected + 1;
        // console.log(currPageNumber)
        const currentPage = await fetchPage(currPageNumber);
        setStation(currentPage.stations)

        // console.log(station)
    }

    return (
        <div>
            <div className="mt-24 mb-32 container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {station.map((item): any => {
                        return <>
                            <RadioCard
                                radioName={item.radio_name}
                                radioButton='Listen'
                                radioCountry='Zambia'
                                radioImage={item.radio_image}
                            />
                        </>

                    })}
                </div>
            </div>
            <ReactPaginate
                previousLabel={`Previous`}
                nextLabel={`Next`}
                breakLabel={`...`}
                pageCount={totalPages}
                marginPagesDisplayed={3}
                pageRangeDisplayed={4}
                onPageChange={handleOnchangeData}
                containerClassName='select-none flex justify-center items-center mx-auto'
                pageLinkClassName='p-3 ml-2'
                pageClassName='px-3 ml-2 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                previousClassName='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                nextClassName='px-3 py-2 ml-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                activeClassName='px-3  py-2 text-blue-600 border border-gray-300 bg-white hover:bg-white-100 hover:text-dark-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
            />
        </div>
    )
}

export default Popular