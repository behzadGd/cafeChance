import React from "react";
import CardsComponenet from "./CardsComponenet";
function CardHolderComponenet() {
    return ( <>
    {/* <CardsComponenet/> */}
    <h1 className="text-center font-extrabold text-4xl text-custom_darkbrown m-10">انواع قهوه های کافه چنس</h1>
    <div className="flex justify-center">
        {Array.from(Array(3)).map((item,index)=>{
        console.log(index,item)
        return <CardsComponenet key={index}/>
        
    })}
    </div>
    
    </> );
}

export default CardHolderComponenet;