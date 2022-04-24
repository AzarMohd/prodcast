import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import { SettingData } from './SettingData';
import { SidebarData } from './SidebarData';
import "./Navbar.css";
import { IconContext } from 'react-icons';

function Navbar() {
    const[sidebar,setSidebar]= useState(false);
    const[settingbar,setSettingbar] =useState(false);

    const showSidebar =()=>setSidebar(!sidebar);
    const showSettingbar =()=>setSettingbar(!settingbar);

  return (
    <>
    <IconContext.Provider value = {{color :'white'}}>
        <div className="navbar">
            <Link to="#" className='menu-bar'>
            <FaIcons.FaBars onClick={ showSidebar }/>
            </Link>
            <Link to="#" className='menu-bars'>
            <FiIcons.FiSettings onClick={showSettingbar} />
            </Link>
            
            </div>
            <nav className={sidebar? "nav-menu active" : "nav-menu"} >
                <ul className='nav-menu-items' onClick={ showSidebar } >
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bar'>
                        <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li className={item.cName} key={index}>
                                <Link to={item.path}>
                                    {item.icon} <span>{item.title}</span>
                                </Link>
                            </li>
                            );
                    })}
                </ul>
            </nav>
            <nav className={settingbar? "nav-menu actives" : "nav-menus"} >
                <ul className='nav-menu-items' onClick={ showSettingbar } >
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose  />
                        </Link>
                    </li>
                    {SettingData.map((item,index)=>{
                        return(
                            <li className={item.cName} key={index}>
                                <Link to={item.path}>
                                    {item.icon} <span>{item.title}</span>
                                </Link>
                            </li>
                            );
                    })}
                </ul>
            </nav>
            
            </IconContext.Provider>
        
        </>
  )
}

export default Navbar