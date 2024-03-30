import React from "react";
function Input({className,children,placeholder,type}) {
    // console.log(placeholder)
    return ( 
        <input className={className}type={type} placeholder={placeholder}>{children}</input>
        
     );
}

export default Input;