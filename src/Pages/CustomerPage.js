import React, { useState } from "react";
function CustomerPage() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  console.log("i am form data", formData);
  return (
    <>
      <input
        onChange={(e) => {
          setFormData({
            name: e.target.value,
            email: "",
          });
        }}
      ></input>
    </>
  );
}

export default CustomerPage;
