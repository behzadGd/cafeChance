import React, { useState } from "react";
import useAsync from "../Hooks/useAsync";
function RadioContainer() {
  const [pic, setPic] = useState();
  let [title, setTitle] = useState();
  let [dic, setDic] = useState();
  let { getData, loading } = useAsync("");
  console.log(pic, title, dic);
  return (
    <>
      <div className="flex">
        <form action="" method="POST">
          <div className="">
            <span>عکس محصول</span>
            <input
              className="m-3"
              onChange={(e) => {
                setPic(e.target.value);
              }}
            ></input>
            <button className="text-custom_brown ml-2 border border-custom_brown px-2">
              ارسال
            </button>
          </div>
          <div className="m-5">
            <span>عنوان محصول</span>
            <input
              className="m-3"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <button className="text-custom_brown ml-2 border border-custom_brown px-2">
              ارسال
            </button>
          </div>
          <div>
            <span>توضیحات محصول</span>
            <input
              className="m-3"
              onChange={(e) => {
                setDic(e.target.value);
              }}
            ></input>
            <button className="text-custom_brown ml-2 border border-custom_brown px-2">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RadioContainer;
