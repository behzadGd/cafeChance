import React from "react";
import ProductItemComponenet from "../Componenets/ProductItemComponenet";

function ProductPage() {
  return (
    <>
      <div>this is product page</div>
      <div className="flex flex-wrap justify-around ">
        {Array.from(Array(20)).map((item, index) => {
          return <ProductItemComponenet />;
        })}
      </div>
    </>
  );
}

export default ProductPage;
