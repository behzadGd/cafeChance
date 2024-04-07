import React from "react";
import { navBarLinks } from "../Libs/Constans";
import { NavLink } from "react-router-dom";
import SunIcon from "./SunIcon";
function Header() {
    return ( 
        <div className="flex justify-between h-14 items-center bg-custom_darkbrown">
            {/* admin icon instagram icon */}
            <div>
                <SunIcon/>
            </div>
            {/* nav bar */}
            <div className="flex flex-row-reverse ">
                {navBarLinks.map((item,index)=>{
                   return <NavLink to={item.path} className={({ isActive }) => isActive ? "mx-2 text-2xl text-white" : "mx-2 text-2xl text-custom_brown"} key={index}>{item.title}</NavLink>
                })}
            </div>
            {/* logo */}
            <div className="bg-[url('../public/img/logo.jpg')] w-20 h-10 bg-cover"></div>
        </div>
     );
}

export default Header;