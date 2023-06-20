import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Popular from './regions/Popular'

function HomePage() {
    return (
        <div>
            <Header />
            <Popular />
            <Footer />
        </div>
    )
}

export default HomePage