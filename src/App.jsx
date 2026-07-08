import Counter from "./ParentComponent";
import Hello from "./ChildComponent";
import Redev from "./SiblingComponent";
function App() {
  return (
    <div>
      <Counter />
      <Redev />
    </div>
  );
}
export default App;
