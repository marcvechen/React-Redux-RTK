import { useState } from "react";

function ListItem({ item }) {
  const [state, setState] = useState("");

  return (
    <div>
      {item.text}
      <button
        onClick={() => {
          setState((prevState) => prevState + "111");
        }}
      >
        {item.text}
      </button>
      {state}
    </div>
  );
}
export default ListItem;
