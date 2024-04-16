import React from "react";
import CardsComponenet from "./CardsComponenet";
function CardHolderComponenet() {
    return ( <>
    {/* <CardsComponenet/> */}
        <div className="flex justify-center ">
                <h2 className="text-center font-extrabold text-4xl text-custom_brown m-10 bg-custom_darkbrown w-96 p-2 rounded-tl-custom-soft-small">انواع قهوه های کافه چنس</h2>

        </div>
    <div className="flex justify-center">
        {Array.from(Array(3)).map((item,index)=>{
        console.log(index,item)
        return <CardsComponenet key={index}/>


    })}
    </div>
    
    </> );
}

export default CardHolderComponenet;