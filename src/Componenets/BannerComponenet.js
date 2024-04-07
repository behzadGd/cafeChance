import React from 'react'
import Button from './Button'

function BannerComponenet() {
  return (
    <>
    <div className='w-full h-screen flex'>
      <div className="bg-[url('../public/img/3.jpg')] bg-cover w-full h-full flex justify-end items-end ">
               
               
                <div className='w-1/2 h-96 flex-col content-end item-end'>
                 
                 
                  <div className='w-2/4 mb-2   '>
                  <h1 className='font-extrabold text-8xl text-custom_darkbrown text-right  mb-5'>کافه چنس</h1>
                  <h2 className='text-xl text-custom_darkbrown font-bold text-right mr-16 mt-3'>شانستو برای مزه بهتر امتحان کن</h2>
                </div>
               
               
                <div className='mb-32  w-2/5 '>
                  <Button className='btn btn-outline mx-3 bg-custom_darkbrown mt-9 text-custom_brown'>رزرو آنلاین</Button>
                <Button className='btn btn-outline bg-custom_darkbrown text-custom_brown'>مشاهده منو</Button>
                </div>
                </div>
        
    </div>
    </div>
    </>
  )
}

export default BannerComponenet;