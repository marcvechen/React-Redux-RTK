import { useSelector } from "react-redux";

function Header({ countTasks }) {
  const { item: tasks, loading, error } = useSelector((state) => state.todos);

  return (
    <div>
      <h1>Todo apps</h1>

      <h3>Всего задач: {countTasks}</h3>
      {loading && (
        <h3
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            margin: 0,
          }}
        >
          Loading...
        </h3>
      )}
      {error && (
        <p
          style={{
            color: "red",
            position: "absolute",
            top: 20,
            left: 20,
            margin: 0,
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
export default Header;
