function Destructuring({ str, number, arr }) {
  return <h1>{[str, number, arr].join("-")}</h1>;
}
export default Destructuring;
