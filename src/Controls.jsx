import React, { useState } from "react";

function Controls({
  updateCount,
  onUpdateClick,
  inputCount,
  onDogCountChange,
  onBreedChange,
  breedList,
}) {
  return (
    <div style={{ margin: 15 }}>
      <h2 style={{ fontFamily: "sans-serif" }}>Галерея Собак</h2>
      <p style={{ fontFamily: "sans-serif" }}>
        Картинки были обновлены {updateCount} раз(а)
      </p>

      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontFamily: "sans-serif" }}>Породы:</p>
        <select
          onChange={(e) => onBreedChange(e.target.value)}
          style={{ width: 150, margin: 5 }}
          name=""
          id=""
        >
          <option>Все породы</option>
          {breedList.map((breedName) => (
            <option key={breedName} value={breedName}>
              {breedName}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontFamily: "sans-serif" }}>Показать:</p>
        <input
          style={{ maxWidth: 70, margin: 5 }}
          type="number"
          min={1}
          max={50}
          value={inputCount}
          onChange={(e) => onDogCountChange(Number(e.target.value))}
        />
        <button
          onClick={onUpdateClick}
          style={{
            backgroundColor: "DodgerBlue",
            color: "white",
            padding: 10,
            border: 0,
            borderRadius: 10,
            margin: 5,
          }}
        >
          Обновить
        </button>
      </div>
    </div>
  );
}

export default Controls;
