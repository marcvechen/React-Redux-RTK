import { useCallback, useState, useEffect } from "react";
import Profile from "./UserProfile.jsx";
import TasksList from "./TasksList.jsx";
import Checkout from "./Checkout.jsx";
import MyContext from "./MyContext.jsx";
import Toggle from "./Toggler.jsx";

const loremWords = [
  { id: 1, value: "Lorem" },
  { id: 2, value: "ipsum" },
  { id: 3, value: "dolor" },
  { id: 4, value: "sit" },
  { id: 5, value: "amet" },
  { id: 6, value: "consectetur" },
  { id: 7, value: "adipiscing" },
  { id: 8, value: "elit" },
  { id: 9, value: "sed" },
  { id: 10, value: "do" },
];
function App() {
  const [isDark, setIsDark] = useState("light");
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  const [tasks, setTasks] = useState([
    { id: 1, value: "Купить хлеб" },
    { id: 2, value: "Погулять с собакой" },
  ]);
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const handleMode = () => {
    setIsDark((prevMode) => !prevMode);
  };
  useEffect(() => {
    isDark
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  }, [isDark]);
  const handleChange = useCallback(() => {
    const newName = prompt("Введіть нове ім'я:");
    if (newName) {
      setUser((prevUser) => ({ ...prevUser, name: newName }));
    }
  }, []);
  const handleCount = useCallback(
    () => setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 })),
    [],
  );
  const handleActive = useCallback(
    () =>
      setUser((prevUser) => ({
        ...prevUser,
        isActive: !prevUser.isActive ? true : false,
      })),
    [],
  );

  const handleSetTask = useCallback(() => {
    const randomWord =
      loremWords[Math.floor(Math.random() * loremWords.length)];

    const newTask = {
      id: Date.now(),
      value: randomWord.value,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }, []);
  const handleDeleteTask = useCallback(
    () => setTasks((prevTask) => prevTask.slice(0, -1)),
    [],
  );
  const handleAddProduct = useCallback(
    (productId) =>
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === productId
            ? { ...product, count: product.count + 1 }
            : product,
        ),
      ),
    [],
  );
  const handleDeleteProduct = useCallback(
    (productId) =>
      setCart((prevCart) =>
        prevCart.filter((product) => product.id !== productId),
      ),
    [],
  );
  const handleClearCheckout = useCallback(() => setCart(() => []), []);
  return (
    <div>
      <MyContext.Provider value={{ isDark, handleMode }}>
        <Toggle />
      </MyContext.Provider>
      <Profile
        user={user}
        changeName={handleChange}
        getAge={handleCount}
        changeActive={handleActive}
      />
      <TasksList
        tasks={tasks}
        setTask={handleSetTask}
        deleteTask={handleDeleteTask}
      />
      <Checkout
        cart={cart}
        addProduct={handleAddProduct}
        deleteProduct={handleDeleteProduct}
        clearCheckout={handleClearCheckout}
      />
    </div>
  );
}
export default App;
