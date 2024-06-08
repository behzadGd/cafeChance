import React, { useEffect, useState } from "react";
import useAsync from "../Hooks/useAsync";
import axios from "axios";
import RadioTabOneDetiails from "./RadioTabOneDetails";
function RadioTabOne() {
  let [nameProduct, setNameProduct] = useState({});
  let [description, setDescription] = useState({});
  let [price, setPrice] = useState({});
  let [recipe, setRecipe] = useState({});
  let [best, setBest] = useState({ isBestProduct: false });
  let { getData, loading } = useAsync();
  let [category, setCategory] = useState("");
  useEffect(() => {
    getData();
  }, []);
  let allProduct = Object.assign(
    nameProduct,
    description,
    price,
    recipe,
    best,
    category
  );
  console.log(allProduct);
  console.log(category);

  return (
    <>
      <div className="flex border border-solid border-custom_brown justify-end my-5">
        <form>
          <input
            type="text"
            placeholder="دسته بندی"
            className="input input-bordered input-success w-full max-w-96 my-2 "
            onChange={(e) => {
              setCategory({
                category: {
                  id: "",
                  name: e.target.value,
                },
              });
            }}
          />

          <div className="">
            <button
              className="btn btn-outline btn-success w-24"
              onClick={(e) => {
                e.preventDefault();
                axios.post("api/category", {
                  allProduct,
                });
              }}
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
      <RadioTabOneDetiails />
      {/* this is product details */}
      <div className="flex border border-solid border-custom_brown justify-end">
        <form action="" method="">
          <div className="flex justify-center items-center m-2">
            {/* <div>اسم محصول :</div> */}
            <input
              className="input input-bordered input-success w-full max-w-xs "
              placeholder="اسم محصول"
              onChange={(e) => {
                setNameProduct({
                  id: "",
                  name: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className=" flex justify-center items-center m-2">
            {/* <div>توضیحات محصول :</div> */}
            <input
              className="input input-bordered input-success w-full max-w-xs"
              placeholder="توضیحات محصول"
              onChange={(e) => {
                setDescription({
                  description: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="m-2 flex justify-center items-center">
            {/* <div>قیمت محصول :</div> */}
            <input
              type="number"
              className="input input-bordered input-success w-full max-w-xs"
              placeholder="قیمت محصول"
              onChange={(e) => {
                setPrice({
                  price: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="m-2 flex justify-center items-center">
            {/* <div>طرز تهیه محصول :</div> */}
            <input
              className="input input-bordered input-success w-full max-w-xs"
              placeholder="طرز تهییه محصول"
              onChange={(e) => {
                setRecipe({
                  recipe: e.target.value,
                });
              }}
            ></input>
          </div>
          {/* <div className="m-2 flex justify-center items-center">
            <div>بهترین محصول</div>
            <input
              type="checkbox"
              onChange={(e) => {
                setBest({
                  isBestProduct: true,
                  // category: {
                  //   name: "",
                  // },
                });
                // setDic(e.target.value);
              }}
            ></input>
          </div> */}
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">بهترین محصول</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-success"
              />
            </label>
          </div>
          <div className="">
            <button
              className="btn btn-outline btn-success w-24"
              onClick={(e) => {
                e.preventDefault();
                axios.post("api/product", {
                  // target: "http://localhost:8080",
                  allProduct,
                });
              }}
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RadioTabOne;
