import React from "react";
import Input from "./Input";
import Button from "./Button";
function LoginForm() {
    return ( 
         <div className="flex flex-col justify-center justify-items-center  bg-custom_darkbrown  h-3/4  ">
                <Input type="text" placeholder="نام کاربری" className="input input-bordered input-primary w-full max-w-xs my-4 bg-custom_brown text-custom_darkbrown " />
                <Input type="password" placeholder="رمز عبور" className="input input-bordered input-primary w-full max-w-xs bg-custom_brown text-custom_darkbrown "/>
                <h2 className="flex justify-end text-custom_brown mt-6">
                    فراموشی رمز عبور؟
                </h2>
            </div>
     );
}

export default LoginForm;