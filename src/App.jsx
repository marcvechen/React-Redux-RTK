import React, { useState, useEffect, use } from "react";
import Controls from "./Controls";
function App() {
  const [count, setUpdateCount] = useState(0);
  const [inputCount, setInputCount] = useState(3);
  const [load, setLoading] = useState(true);
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState("Все породы");
  const [breedList, setbreedList] = useState([]);
  const handleUpdate = () => {
    setUpdateCount((prevCount) => prevCount + 1);
    fetchDogs(inputCount);
  };
  const fetchBreed = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all", {
        method: "GET",
      });
      const data = await response.json();
      setbreedList(Object.keys(data.message));
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    fetchBreed();
  }, []);

  const fetchDogs = async (num) => {
    try {
      setLoading(true);
      let url = ``;
      if (breed == "Все породы") {
        url = `https://dog.ceo/api/breeds/image/random/${num}`;
      } else {
        url = `https://dog.ceo/api/breed/${breed}/images/random/${num}`;
      }
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      setDogs(data.message);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDogs(3);
  }, []);
  return (
    <div>
      <Controls
        updateCount={count}
        onUpdateClick={handleUpdate}
        inputCount={inputCount}
        onDogCountChange={setInputCount}
        onBreedChange={setBreed}
        breedList={breedList}
      />
      {load ? <p>Загрузка...</p> : <div></div>}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {dogs.map((url) => (
          <img style={{ margin: 10 }} src={url} key={url} alt="Dog" />
        ))}
      </div>
    </div>
  );
}
export default App;
