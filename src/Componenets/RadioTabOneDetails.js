import React from "react";
function RadioTabOneDetiails() {
  return (
    <>
      <div className="my-3 border border-solid border-custom_brown">
        <div className="navbar bg-custom_brown text-custom_darkbrown rounded-box my-1">
          <div className="flex-1 px-2 lg:flex-none">
            <a className="text-lg font-bold">همه دسته بندی ها</a>
          </div>
          <div className="flex justify-end flex-1 px-2">
            <div className="flex items-stretch">
              <a className="btn btn-ghost rounded-btn">نمایش همه دسته ها</a>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-btn"
                >
                  فیلتر دسته ها
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-custom_brown text-custom_darkbrown rounded-box w-52 mt-4"
                >
                  <li>
                    <a>قهوه ها</a>
                  </li>
                  <li>
                    <a>چای ها</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-solid border-custom_brown h-44 m-3"></div>
      </div>
    </>
  );
}

export default RadioTabOneDetiails;
