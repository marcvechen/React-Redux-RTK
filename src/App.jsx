import React, { useState, useEffect, useRef, useCallback } from "react";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";
import withRenderTracker from "./HOC";
const TrackedCounterButton = withRenderTracker(CounterButton, "CounterButton");
const TrackedItemList = withRenderTracker(ItemList, "ItemList");
const TrackedSearchInput = withRenderTracker(SearchInput, "SearchInput");
const itemList = [
  { id: 1, value: "apple" },
  { id: 2, value: "banana" },
  { id: 3, value: "orange" },
  { id: 4, value: "grape" },
  { id: 5, value: "melon" },
  { id: 6, value: "kiwi" },
  { id: 7, value: "pear" },
  { id: 8, value: "plum" },
  { id: 9, value: "mango" },
  { id: 10, value: "lemon" },
  { id: 11, value: "car" },
  { id: 12, value: "bike" },
  { id: 13, value: "train" },
  { id: 14, value: "plane" },
  { id: 15, value: "boat" },
  { id: 16, value: "bus" },
  { id: 17, value: "tram" },
  { id: 18, value: "scooter" },
  { id: 19, value: "metro" },
  { id: 20, value: "taxi" },
  { id: 21, value: "table" },
  { id: 22, value: "chair" },
  { id: 23, value: "sofa" },
  { id: 24, value: "bed" },
  { id: 25, value: "lamp" },
  { id: 26, value: "shelf" },
  { id: 27, value: "desk" },
  { id: 28, value: "door" },
  { id: 29, value: "window" },
  { id: 30, value: "mirror" },
  { id: 31, value: "red" },
  { id: 32, value: "blue" },
  { id: 33, value: "green" },
  { id: 34, value: "yellow" },
  { id: 35, value: "black" },
  { id: 36, value: "white" },
  { id: 37, value: "gray" },
  { id: 38, value: "pink" },
  { id: 39, value: "brown" },
  { id: 40, value: "violet" },
  { id: 41, value: "dog" },
  { id: 42, value: "cat" },
  { id: 43, value: "bird" },
  { id: 44, value: "fish" },
  { id: 45, value: "horse" },
  { id: 46, value: "lion" },
  { id: 47, value: "tiger" },
  { id: 48, value: "bear" },
  { id: 49, value: "wolf" },
  { id: 50, value: "fox" },
  { id: 51, value: "html" },
  { id: 52, value: "css" },
  { id: 53, value: "javascript" },
  { id: 54, value: "react" },
  { id: 55, value: "node" },
  { id: 56, value: "vue" },
  { id: 57, value: "angular" },
  { id: 58, value: "sql" },
  { id: 59, value: "git" },
  { id: 60, value: "api" },
  { id: 61, value: "spring" },
  { id: 62, value: "summer" },
  { id: 63, value: "autumn" },
  { id: 64, value: "winter" },
  { id: 65, value: "morning" },
  { id: 66, value: "day" },
  { id: 67, value: "evening" },
  { id: 68, value: "night" },
  { id: 69, value: "sun" },
  { id: 70, value: "moon" },
  { id: 71, value: "book" },
  { id: 72, value: "pen" },
  { id: 73, value: "pencil" },
  { id: 74, value: "notebook" },
  { id: 75, value: "bag" },
  { id: 76, value: "phone" },
  { id: 77, value: "laptop" },
  { id: 78, value: "tablet" },
  { id: 79, value: "screen" },
  { id: 80, value: "keyboard" },
  { id: 81, value: "bread" },
  { id: 82, value: "milk" },
  { id: 83, value: "cheese" },
  { id: 84, value: "coffee" },
  { id: 85, value: "tea" },
  { id: 86, value: "juice" },
  { id: 87, value: "water" },
  { id: 88, value: "soup" },
  { id: 89, value: "rice" },
  { id: 90, value: "pasta" },
  { id: 91, value: "circle" },
  { id: 92, value: "square" },
  { id: 93, value: "triangle" },
  { id: 94, value: "star" },
  { id: 95, value: "line" },
  { id: 96, value: "point" },
  { id: 97, value: "cloud" },
  { id: 98, value: "rain" },
  { id: 99, value: "snow" },
  { id: 100, value: "wind" },
];
function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const memoizedCallbackInput = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const memoizedCallbackButton = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <TrackedCounterButton
        count={count}
        handleCount={memoizedCallbackButton}
      />

      <TrackedItemList search={search} list={itemList} />
    </div>
  );
}

export default App;
