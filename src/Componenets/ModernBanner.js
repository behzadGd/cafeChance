import React from "react";
import Button from './Button'
function ModernBanner() {
    return ( 
        <>
        {/* row 3 in website */}
        <div className="flex justify-between mt-20">
            {/* side left in website row 3 */}
            <div className="flex w-1/2 justify-center items-center mt-44">
                <img src="img/barista 2.jpg" className="w-96 h-96 rounded-tl-custom-soft mr-3"></img>
                <p className="w-60 items-center text-custom_darkbrown">سرو قهوه فوق‌العاده، کیک‌ها و شیرینی‌های تازه و ارائه بهترین سرویس در فضاهای زنده و به‌یادماندنی از جمله ارزش‌های ما در کافه چنس است. همه هدف ما، تلاش ما و امید ما ارائه بهترین محصول با بهترین قیمت و کیفیت است.</p>
            </div>
            {/* side right in website row 3 */}
            <div className="flex-col w-1/2 justify-center items-center mr-2">
                <div className="">
                    <h2 className="text-center font-extrabold text-7xl text-custom_darkbrown"> <span className="bg-custom_darkbrown rounded-tl-custom-soft-small p-2 text-custom_brown">خلاقیت</span> برای ما چه معنایی دارد </h2>
                    <Button className='border-custom_darkbrown border-solid border-2 m-4 p-2 bg-custom_brown rounded-lg text-custom_darkbrown'> مشاهده منو کافه چنس</Button>
                </div>
                <div className="flex justify-center items-center mt-3">
                    <p className="w-1/5 text-custom_darkbrown">احترام به نیازهای مشتریان، در دسترس بودن،از جمله اهداف کافه چنس بوده است.</p>
                    <img src="img/art 1.jpg" className="w-56 h-56 rounded-tl-custom-soft-small m-2"></img>
                    <p className="w-1/5 text-custom_darkbrown">مجموعه کافه چنس برای هر فصل پیشنهادها و نوشیدنی‌های منحصر بفردی را برای شما ابداع و خلق می‌کند.</p>
                </div>
            </div>
        </div>
        </>
     );
}

export default ModernBanner;