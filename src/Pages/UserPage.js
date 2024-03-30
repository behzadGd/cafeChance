import React, { useState } from "react";
import Input from "../Componenets/Input";
import Button from "../Componenets/Button";
import LoginForm from "../Componenets/LoginForm";
import RejesterForm from "../Componenets/RejesterFrom";
function UserPage() {
    const [tab,setTab]=useState('login')
    console.log(tab)
    return (
        <div className="flex justify-around">
            <div className="flex justify-center w-96 h-96  mt-28 bg-slate-700" >
                this is image
            </div>
            {tab === 'login'?<LoginForm/> : <RejesterForm/>}
        </div>
    )
}

export default UserPage;

