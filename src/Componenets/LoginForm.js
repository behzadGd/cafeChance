import React from "react";
import Input from "./Input";
import Button from "./Button";
function LoginForm() {
    return ( 
         <div className="flex flex-col justify-center justify-items-center  mt-28 bg-pink-400 bg-opacity-30 h-3/4 rounded-3xl">
                <h1 className="font-bold mb-5 flex justify-center text-xl text-black">ورود کاربر</h1>
                <Input type="text" placeholder="نام کاربری" className="input input-bordered input-primary w-full max-w-xs my-4 " />
                <Input type="password" placeholder="رمز عبور" className="input input-bordered input-primary w-full max-w-xs"/>
                <div className="flex flex-row-reverse m-4 mt-8">
                    <Button className='btn btn-outline text-black mx-2 w-32 '>ورود</Button>
                <Button className='btn btn-outline  text-black mx-2 w-32' >ثبت نام</Button>
                </div>
                <h2 className="flex justify-end text-black">
                    فراموشی رمز عبور؟
                </h2>
            </div>
     );
}

export default LoginForm;