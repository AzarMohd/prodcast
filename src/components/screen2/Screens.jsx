import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBar } from './SideBar';
import "./Navbar.css";
import { IconContext } from 'react-icons';
import * as Ioicons from "react-icons/io";
import "./Screens.css";
import Popup from './Popup';
import Footer from '../screen/Footer'

function Screens() {
    const [sidebar, setSidebar] = useState(false);
    

    const [buttonPopup, showPopup] = useState()
    const showSidebar = () => setSidebar(!sidebar);
    

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <div className="navbar">
                    <Link to="#" className='menu-bar'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Link to="#" className='menu menu-bars'>
                        <Ioicons.IoMdPersonAdd onClick={() => showPopup(true)} />
                    </Link>
                </div>
                <Popup  trigger={buttonPopup} setTrigger={showPopup}>
                    <h1>Hi this azar</h1>
                </Popup>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
                    <ul className='nav-menu-items' onClick={showSidebar} >
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bar'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideBar.map((item, index) => {
                            return (
                                <li className={item.cName} key={index}>
                                    <Link to={item.path}>
                                        {item.icon} <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <p id='value'>
                    
                </p>
                <Footer />
            </IconContext.Provider>
            
        </>
    )
}
export default Screens;