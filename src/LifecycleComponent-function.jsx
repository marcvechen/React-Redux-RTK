import React, { useState, useEffect } from "react";
let realClicks = 0;
function LifeCycleFunction() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoic3R1ZGVudEB0ZXN0LmNvbSIsImlhdCI6MTc4MzY3MTc4OSwiZXhwIjoxNzg0Mjc2NTg5fQ.vQcWvrRlW256Y6ADt5p1vAkY0FsoTN6ZZzjkzkbarps";
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://todo-redev.onrender.com/api/todos",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(count);
  }, [count]);
  useEffect(() => {
    return () => {
      console.log("Компонент буде видалено");
    };
  }, []);
  useEffect(() => {}, []);

  return (
    <div>
      <span style={{ padding: 10, backgroundColor: "blue", margin: 10 }}>
        {count}
      </span>
      <button
        style={{ padding: 10, backgroundColor: "blue", margin: 10 }}
        onClick={() => {
          realClicks++;

          if (realClicks % 2 === 0) {
            setCount(realClicks);
          }
        }}
      >
        +1
      </button>
    </div>
  );
}
export default LifeCycleFunction;
