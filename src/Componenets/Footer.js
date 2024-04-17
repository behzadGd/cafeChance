import React from "react";
import Button from "./Button";
function Footer() {
    return ( <>
    <div className="bg-custom_darkbrown w-full h-72 flex justify-between">
        <div className="w-1/3 flex-col justify-center items-center bg-black"> 
        <Button className={'btn btn-wide'}>خانه</Button>
        <Button className={'btn btn-wide my-2'}>منو</Button>
        <Button className={'btn btn-wide'}>درباره ما</Button>
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