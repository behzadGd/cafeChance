import React from "react";
import { navBarLinks } from "../Libs/Constans";
import { Link, NavLink } from "react-router-dom";
import SunIcon from "./SunIcon";
function Header() {
    return ( 
        <div className="flex justify-between h-14 items-center bg-custom_darkbrown">
            {/* admin icon instagram icon */}
            <div className="flex justify-center  h-4/6 ">
                <SunIcon/>
                    <Link className="-mt-0.5" to={'/user'}>
                    <img className="w-10 h-10 " src="https://img.icons8.com/quill/100/user-male-circle.png" alt="user-male-circle"/>                
                </Link>
    
           
            </div>
            {/* nav bar */}
            <div className="flex flex-row-reverse ">
                {navBarLinks.map((item,index)=>{
                    // console.log(item.path)
                   return <NavLink to={item.path} className={({ isActive }) => isActive ? "mx-2 text-2xl text-white" : "mx-2 text-2xl text-custom_brown"} key={index}>{item.title}</NavLink>

                })}
            </div>
            {/* logo */}
            <div className="bg-[url('../public/img/logo.jpg')] w-20 h-10 bg-cover"></div>
        </div>
     );
}

export default Header;