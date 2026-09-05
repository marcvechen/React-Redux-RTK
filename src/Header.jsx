import { useSelector } from "react-redux";
function Header({ countTasks }) {
  const { value } = useSelector((store) => store.text);
  return (
    <div>
      <h1>Todo apps {value}</h1>
      <h3>Всего задач: {countTasks}</h3>
    </div>
  );
}
export default Header;
