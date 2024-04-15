import React from "react";
import Button from './Button'
function ModernBanner() {
    return ( 
        <>
        <div className="flex justify-between">
            <div className="flex-col w-1/2">
                <div>
                    <h2 className="text-center font-extrabold text-3xl"> <span className="bg-custom_darkbrown rounded-tl-custom-soft p-2">خلاقیت</span> برای ما چه معنایی دارد </h2>
                    <Button className='border-custom_darkbrown border-solid border-2 m-4 p-2 bg-custom_brown rounded-lg'>مشاهده منو</Button>
                </div>
                <div className="flex">
                    <p className="w-1/5">احترام به نیازهای مشتریان، در دسترس بودن، سرعت در آماده سازی سفارش، خلاقیت و نوآوری در خلق آیتم‌های منو نوشیدنی و محصولات از جمله اهداف کافه چنس بوده است.</p>
                    <img src="img/art 1.jpg" className="w-56 h-56 rounded-tl-custom-soft"></img>
                    <p className="w-1/5">مجموعه کافه چنس برای هر فصل پیشنهادها و نوشیدنی‌های منحصر بفردی را برای شما ابداع و خلق می‌کند که با قیمت‌های اقتصادی در تمامی شعب موجود می‌شوند.</p>
                </div>
            </div>
            <div className="flex w-1/2">
                <img src="img/barista 2.jpg" className="w-96 h-96 rounded-tl-custom-soft mr-3"></img>
                <p className="w-60 items-center">سرو قهوه فوق‌العاده، کیک‌ها و شیرینی‌های تازه و ارائه بهترین سرویس در فضاهای زنده و به‌یادماندنی از جمله ارزش‌های ما در کافه چنس است. همه هدف ما، تلاش ما و امید ما ارائه بهترین محصول با بهترین قیمت و کیفیت است.</p>
            </div>
        </div>
        </>
     );
}

export default ModernBanner;