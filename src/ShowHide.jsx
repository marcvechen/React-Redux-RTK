import React, { useState } from "react";

function ShowHide() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>}
      <button
        onClick={() =>
          setShow((prevShow) => (prevShow === true ? false : true))
        }
      >
        show/hide
      </button>
    </div>
  );
}
export default ShowHide;
