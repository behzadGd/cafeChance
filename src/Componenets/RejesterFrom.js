import React from "react";
import Input from "./Input";
function RejesterForm() {
    return ( 
        <div>
            <div className="flex flex-col justify-center justify-items-center  bg-custom_darkbrown  h-3/4  ">
                <Input type="text" placeholder="نام" className="input input-bordered input-primary w-full max-w-xs  bg-custom_brown text-custom_darkbrown " />
                <Input type="text" placeholder="ایمیل" className="input input-bordered input-primary w-full max-w-xs my-1 bg-custom_brown text-custom_darkbrown " />
                <Input type="text" placeholder="شماره همراه" className="input input-bordered input-primary w-full max-w-xs mb-1 bg-custom_brown text-custom_darkbrown " />
                <Input type="password" placeholder="رمز عبور" className="input input-bordered input-primary w-full max-w-xs bg-custom_brown text-custom_darkbrown "/>
                <h2 className="flex justify-end text-custom_brown mt-6">
                    فراموشی رمز عبور؟
                </h2>
            </div>
        </div>
     );
}

export default RejesterForm;