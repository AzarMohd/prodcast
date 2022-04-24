import React from 'react'
import Footer from '../screen/Footer'
import Navbar from '../screen/Navbar'
import {Link} from"react-router-dom"

function Screen() {
    return (
        <>
        <Navbar />
        <div>
            <div className="text-center image">
                <Link to="/screens"><img src="./assets/back.jpg" className="img-fluid" alt="Responsive Images" />
                </Link>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Screen