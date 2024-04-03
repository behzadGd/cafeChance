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
            {tab === 'login'?<LoginForm/> : <RejesterForm/>}
            <div className="flex justify-center w-96 h-96  mt-28 " >
            </div>
            
        </div>
    )
}

export default UserPage;

