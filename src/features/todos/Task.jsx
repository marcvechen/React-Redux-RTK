import { useRef, useState, useEffect } from "react";

function Task({ task, handleRemove, setDoneTask, changeTask }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isText, setIsText] = useState(task.title);
  const inputRef = useRef();
  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);
  const saveEdit = () => {
    if (isText.trim().length > 0) {
      changeTask(task.id, isText);
      setIsEdit((isEdit) => !isEdit);
    } else if (isText == "") {
      alert("Пустая строка - Напиши что нибудь");
    } else if (isText == " ") {
      alert("Просто пробел - Напиши что нибудь");
    }
  };
  const cancelEdit = () => {
    setIsText(task.title);
    setIsEdit(false);
  };
  const handleEdit = (e) => {
    if (e.key === "Enter") {
      saveEdit();
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };
  return (
    <div style={{ display: "flex", gap: 15 }}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => setDoneTask(task.id)}
      />
      {isEdit ? (
        <input
          onBlur={cancelEdit}
          ref={inputRef}
          value={isText}
          onChange={(e) => setIsText(e.target.value)}
          onKeyDown={handleEdit}
        />
      ) : (
        <p className={task.isDone ? "done" : ""}>{task.title}</p>
      )}
      <button
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          saveEdit();
        }}
      >
        {isEdit ? "✅" : "✏️"}
      </button>
      <button
        onClick={() => {
          handleRemove(task.id);
        }}
      >
        ❌
      </button>
    </div>
  );
}
export default Task;
