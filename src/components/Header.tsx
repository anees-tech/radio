import React from 'react'
function Header() {
  return (
    <>

      <nav className='flex justify-around items-center py-5 mt-1 fixed w-full z-20 top-0 left-0 px-auto bg-slate-400'>
        <div className="logo">
          <a href="#">
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Global Media</span>
          </a>
        </div>
        <div className="search">
          <form className='flex justify-center w-96 items-center '>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center rounded-lg pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={`2`} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" className="w-full p-4 rounded-xl pl-10 text-sm" placeholder="Search By your Country" required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
          </form>
        </div>
        <div className="list-items">
          <ul className='flex justify-between gap-10'>
            <li>
              <a className='text-xl text-semibold text-white' href="#">Home</a>
            </li>
            <li>
              <a className='text-xl text-semibold text-white' href="#">All List</a>
            </li>
            <li>
              <a className='text-xl text-semibold text-white' href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Header;