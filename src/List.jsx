import { useState } from "react";
import ListItem from "./ListItem";
function List({ arr }) {
  return (
    <div>
      {arr.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
