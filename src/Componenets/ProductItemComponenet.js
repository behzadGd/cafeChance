import React from "react";
function ProductItemComponenet() {
  return (
    <>
      <div className="card w-96 bg-custom_darkbrown shadow-xl mt-5">
        <figure className="px-10 pt-10">
          <img src="img/logochance.png" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-custom_brown">Shoes!</h2>
          <p className="text-custom_brown">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions">
            <button className="btn text-custom_darkbrown bg-custom_brown">
              افزودن سفارش
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemComponenet;
