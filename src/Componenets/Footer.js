import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function Footer() {
    return ( <>
    <div className="bg-custom_darkbrown w-full h-72 flex justify-between">
        <div className="w-1/3 flex-col-reverse justify-center items-start "> 
        <div className="">
            <Link to={'/'}>
        <div className="text-center m-2 mt-6">خانه</div>
        </Link>
        <Link to={'/product'}>
        <div className="text-center m-2">منو</div>
        </Link>
        <Link to={'/about'}>
        <div className="text-center m-2">درباره ما</div>
        </Link>
        <Link to={'/user'}>
        <div className="text-center m-2">حساب کاربری</div>
        </Link>
        </div>
        {/* social media */}
        <div className="flex justify-center mt-7">
        <img className="w-12 h-12" src="https://img.icons8.com/color/96/whatsapp--v1.png" alt="whatsapp--v1"/>
        <img  className="w-12 h-12"  src="https://img.icons8.com/fluency/96/instagram-new.png" alt="instagram-new"/>
        <img  className="w-12 h-12"  src="https://img.icons8.com/color/96/google-maps.png" alt="google-maps"/>
        </div>
        </div>
         {/* google map */}
        <div className="w-1/3 flex justify-center items-center">google map</div>
        <div className="w-1/3 flex justify-center items-center">
            <div className="bg-[url('../public/img/logochance.png')] w-40 h-44 bg-cover">
        </div>
        </div>
       
        
    </div>
    <div className="h-8 bg-custom_darkbrown flex justify-between">
        <div></div>
        <div className="text-custom_brown mr-5">© تمامی حقوق این وبسایت برای <span className="rounded-tl-custom-soft-small bg-custom_brown text-custom_darkbrown p-2">کافه چنس</span> محفوظ می‌باشد</div>
        
        
    </div>
    </> );
}

export default Footer;