import React from "react";
function AboutPage() {
  return (
    <div>
      {/* banner of about page */}
      <div>
        <div className="diff aspect-[16/9] h-64">
          <div className="diff-item-1">
            <div className="bg-custom_darkbrown  text-9xl font-black grid place-content-center text-custom_brown">
              درباره ما
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-custom_brown text-9xl font-black grid place-content-center text-custom_darkbrown">
              درباره ما
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
        {/* row 2 about page */}
        <div className="flex justify-center mt-6">
          <div className="w-56 m-2 ">
            <div className="flex justify-center">
              <img
                className="w-12 h-12 text-center"
                src="https://img.icons8.com/ios/100/phone--v1.png"
                alt="phone--v1"
              />
            </div>
            <h2 className="font-extrabold text-custom_darkbrown text-xl text-center mt-1">
              تلفن تماس
            </h2>
            <p className="text-custom_darkbrown text-center m-1">02122900000</p>
          </div>
          <div className="w-56 m-2">
            {" "}
            <div className="flex justify-center">
              {" "}
              <img
                className="w-12 h-12"
                src="https://img.icons8.com/ios/100/marker--v1.png"
                alt="marker--v1"
              />
            </div>
            <h2 className="font-extrabold text-custom_darkbrown text-xl text-center mt-1">
              آدرس
            </h2>
            <p className="text-custom_darkbrown text-center m-1">
              میدان هروی گلستان پنجم روبروی پاساژ هدیش مال پاساژ گلها طبقه اول
            </p>
          </div>
          <div className="w-56 m-2">
            {" "}
            <div className="flex justify-center">
              {" "}
              <img
                className="w-12 h-12"
                src="https://img.icons8.com/ios/100/mail.png"
                alt="mail"
              />
            </div>
            <h2 className="font-extrabold text-custom_darkbrown text-xl text-center mt-1">
              پست الکترونیک
            </h2>
            <p className="text-custom_darkbrown text-center m-1">
              info@Chancecafe.com
            </p>
          </div>
          <div className="w-56 m-2 text-center">
            {" "}
            <div className="flex justify-center">
              {" "}
              <img
                className="w-12 h-12"
                src="https://img.icons8.com/ios/100/clock--v3.png"
                alt="clock--v3"
              />
            </div>
            <h2 className="font-extrabold text-custom_darkbrown text-xl text-center mt-1">
              ساعت کار کافه{" "}
            </h2>
            <p className="text-custom_darkbrown m-1 text-center">
              هر روز هفته 8:30 صبح الی 23:50 عصر
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
