import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import RadioCard from '../SampleItems/RadioCard'
import { setRadioURL, setRadioImageURL, setRadioType, setRadioName, setRadioID, setRadioCurrListners } from '../../store/RadioPLayerSlice'
import { useDispatch } from 'react-redux'

// import Pagination from './paginataion/Pagination'


function Popular() {
    const dispatch = useDispatch()
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
    const fetchPage = async (currentPage: any) => {
        try {
            const response = await fetch(`https://live.jacktembo.com:8004/api/zm/stations?page=${currentPage}`)
            const data = await response.json()
            return data[0]
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnchangeData = async (data: any) => {

        // console.log(data)
        let currPageNumber: any = data.selected + 1;
        // console.log(currPageNumber)
        const currentPage = await fetchPage(currPageNumber);
        setStation(currentPage.stations)

        // console.log(station)
    }

    const handleOnClick = ({ id, radioName, radioCurrListners,radioType, radioURL, radioIMG }: any) => {
        dispatch(setRadioID(id))
        dispatch(setRadioName(radioName))
        dispatch(setRadioImageURL(radioIMG))
        dispatch(setRadioType(radioType))
        dispatch(setRadioURL(radioURL))
        dispatch(setRadioCurrListners(radioCurrListners))
    }


    return (
        <div>
            <h2 className='text-3xl font-bold mb-10 mt-32 mx-auto text-center'>The Most Popular Around You</h2>
            <div className="mt-4 mb-24 container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {station.map((item): any => {
                        return <>
                            <RadioCard
                                onClick={() => handleOnClick({ id: item.radio_id, radioURL:item.live_stream_url, radioIMG:item.radio_image, radioCurrListners:item.current_listeners, radioName:item.radio_name, radioType:item.stream_type })}
                                radioID={item.radio_id}
                                key={item.radio_id}
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
                containerClassName='select-none mb-5 flex justify-center items-center mx-auto'
                pageLinkClassName='p-3  ml-2'
                pageClassName='px-3 ml-2 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                previousClassName='px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                nextClassName='px-3 py-2 ml-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                activeClassName='px-3  py-2 text-blue-600 border border-gray-300 bg-white hover:bg-white-100 hover:text-dark-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
            />
        </div>
    )
}

export default Popular