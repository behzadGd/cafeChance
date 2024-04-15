import React from "react";
import { navBarLinks } from "../Libs/Constans";
import { Link, NavLink } from "react-router-dom";
import SunIcon from "./SunIcon";
function Header() {
    return ( 
        <div className="flex justify-between h-16 items-center bg-custom_darkbrown">
            {/* admin icon instagram icon */}
            <div className="flex justify-center  h-4/6 ">
                <SunIcon/>
                    <Link className="-mt-0.5" to={'/user'}>
                    <img className="w-10 h-10 " src="https://img.icons8.com/quill/100/user-male-circle.png" alt="user-male-circle"/>  
                    {/* <i class="fas fa-search"></i>              */}
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
            <div className="bg-[url('../public/img/logochance.png')] w-14 h-14 bg-cover mr-6 mb-2"></div>
        </div>
     );
}

export default Header;