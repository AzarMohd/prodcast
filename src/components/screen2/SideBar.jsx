import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";


export const SideBar =[
    {
        title:"Home",
        path:"/",
        icon:<AiIcons.AiFillHome />,
        cName:"nav-text"
    },
    {
        title:"Team",
        path:"/",
        icon:<AiIcons.AiOutlineTeam />,
        cName:"nav-text"
    },
    {
        title:"FAQ'S",
        path:"/",
        icon:<FaIcons.FaQuestion />,
        cName:"nav-text"
    },
    {
        title:"Back",
        path:"/",
        icon:<AiIcons.AiFillHome />,
        cName:"nav-text"
    },
    {
        title:"Log-out",
        path:"/",
        icon:<AiIcons.AiOutlineLogout />,
        cName:"nav-text"
    }
];