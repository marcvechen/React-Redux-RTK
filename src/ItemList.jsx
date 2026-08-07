import { useMemo, memo } from "react";

const ItemList = memo(({ search, list }) => {
  const filteredList = useMemo(
    () => list.filter((item) => item.value.includes(search)),
    [search, list],
  );

  return (
    <div>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
});
export default ItemList;
