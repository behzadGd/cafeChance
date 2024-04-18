import React from "react";
import Input from "./Input";
import Button from "./Button";
function LoginForm() {
    return ( 
         <div className="flex flex-col justify-center justify-items-center  mt-28 bg-custom_darkbrown  h-3/4 rounded-tl-custom-soft p-4">
                <h1 className="font-bold mb-5 flex justify-center text-xl text-custom_brown">ورود کاربر</h1>
                <Input type="text" placeholder="نام کاربری" className="input input-bordered input-primary w-full max-w-xs my-4 bg-custom_brown text-custom_darkbrown " />
                <Input type="password" placeholder="رمز عبور" className="input input-bordered input-primary w-full max-w-xs bg-custom_brown text-custom_darkbrown "/>
                <div className="flex flex-row-reverse m-4 mt-8">
                    <Button className='btn btn-outline text-custom_brown mx-2 w-32 '>ورود</Button>
                <Button className='btn btn-outline  text-custom_brown mx-2 w-32' >ثبت نام</Button>
                </div>
                <h2 className="flex justify-end text-custom_brown">
                    فراموشی رمز عبور؟
                </h2>
            </div>
     );
}

export default LoginForm;