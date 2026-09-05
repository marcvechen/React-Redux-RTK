import { useSelector } from "react-redux";
function Header({ countTasks }) {
  return (
    <div>
      <h1>Todo apps </h1>
      <h3>Всего задач: {countTasks}</h3>
    </div>
  );
}
export default Header;
