import React from "react";
function CardsComponenet() {
  return (
    <>
      <div className="card w-96 glass m-7 mt-30">
        <figure>
          <img
            src="https://espressocoffeeguide.com/wp-content/uploads/2022/08/espresso-breve-recipe.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-custom_darkbrown">
            بهترین طعم از نظر شما
          </h2>
          <p className="text-custom_darkbrown">
            محبوب ترین نوشیدنی های ما از نظر مشتریان
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-custom_darkbrown text-custom_brown">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsComponenet;
