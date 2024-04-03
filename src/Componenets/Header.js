import React from "react";
import { navBarLinks } from "../Libs/Constans";
import { NavLink } from "react-router-dom";
function Header() {
    return ( 
        <div className="flex justify-center h-14 items-center bg-lime-950">
            <div className="flex flex-row-reverse">
                {navBarLinks.map((item,index)=>{
                   return <NavLink to={item.path} className={({ isActive }) => isActive ? "mx-2 text-2xl text-black" : "mx-2 text-2xl text-white"} key={index}>{item.title}</NavLink>
                })}
            </div>
        </div>
     );
}

export default Header;