import React from 'react'
import Button from './Button'

function BannerComponenet() {
  return (
    <>
    <div className='w-full h-96'>
      <div className="bg-[url('../public/img/2.png')] bg-cover w-full h-full flex justify-center items-end">
                <div className='mb-7 '>
                  <Button className='btn btn-outline mx-3 bg-stone-800'>رزرو آنلاین</Button>
                <Button className='btn btn-outline bg-stone-800'>مشاهده منو</Button>
                </div>
        
    </div>
    </div>
    </>
  )
}

export default BannerComponenet;