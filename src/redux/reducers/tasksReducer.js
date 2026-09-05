const savedTasks = localStorage.getItem("tasks");

const initialValue = {
  value:
    savedTasks !== null
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Выучить React/Redux + заработать дэнги",
            isDone: false,
            createDate: new Date(),
          },
        ],
};
const tasksReducer = (store = initialValue, action) => {
  switch (action.type) {
    case "add":
      return {
        ...store,
        value: [
          ...store.value,
          {
            id: crypto.randomUUID(),
            title: action.payload,
            isDone: false,
            createDate: new Date(),
          },
        ],
      };
    case "delete":
      return {
        ...store,
        value: store.value.filter((item) => item.id !== action.payload),
      };
    case "deleteDoneTasks":
      return {
        ...store,
        value: store.value.filter((item) => item.isDone === false),
      };
    case "setDone":
      return {
        ...store,
        value: store.value.map((item) =>
          item.id == action.payload ? { ...item, isDone: !item.isDone } : item,
        ),
      };
    case "changeTitle":
      return {
        ...store,
        value: store.value.map((item) =>
          item.id == action.payload.id
            ? { ...item, title: action.payload.newTitle }
            : item,
        ),
      };

    default:
      return store;
  }
};
export default tasksReducer;
