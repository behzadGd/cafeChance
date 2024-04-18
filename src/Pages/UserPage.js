import React, { useState } from "react";
import Input from "../Componenets/Input";
import Button from "../Componenets/Button";
import LoginForm from "../Componenets/LoginForm";
import RejesterForm from "../Componenets/RejesterFrom";
function UserPage() {
    const [tab,setTab]=useState('login')
    console.log(tab)

    return (
        <div className="flex justify-around bg-cover bg-[url('../public/img/5.jpg')] w-full h-screen">
            
<div className="flex flex-col justify-center justify-items-center  mt-28 bg-custom_darkbrown  h-3/4 rounded-tl-custom-soft p-4 ">
          <h1 className="font-bold mb-5 flex justify-center text-xl text-custom_brown mt-6 ">
            {tab === 'login' ? 'ورود کاربر':'ثبت نام'}
          </h1>
          <div className="h-96 mt-20">
            {tab === 'login'?<LoginForm/> : <RejesterForm/>}
          </div>
                <div className="flex flex-row-reverse m-4 mb-10">
                    <Button className='btn btn-outline text-custom_brown mx-2 w-32 '>ورود</Button>
                <Button className='btn btn-outline  text-custom_brown mx-2 w-32' onClick={(e)=>{
                    setTab('rejester')
                }} >ثبت نام</Button>
                </div>
            </div>
            
            




            <div className="flex justify-center w-96 h-96  mt-28 " >
            </div>
            
        </div>
    )
}

export default UserPage;

