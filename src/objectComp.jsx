function Object({ obj }) {
  return (
    <div>
      <h1>{["name:", obj.name]}</h1>
      <h1>{["age:", obj.age]}</h1>
    </div>
  );
}
export default Object;
