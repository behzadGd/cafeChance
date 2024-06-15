import React from "react";
function IconRow() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h5 className="text-center font-extrabold text-4xl text-custom_brown mt-5 bg-custom_darkbrown w-96 p-2 rounded-tl-custom-soft-small">
          بر پایه های اسپرسو
        </h5>
      </div>
      <div className="flex justify-center">
        <div className=" border-custom_darkbrown border-2 w-3/4 border-dashed ">
          <img src="img/cap6.png" />
        </div>
        {/* <div>
            <img src="img/cap 1.png" />
        </div>
        <div>
            <img src="img/cap 3.png" />
        </div>
        <div>
            <img src="img/cap 5.png" />
        </div>
        <div>
            <img src="img/cap 4.png" />
        </div>  */}
      </div>
    </>
  );
}

export default IconRow;
