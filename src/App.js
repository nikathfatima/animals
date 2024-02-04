import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      App Component
      <button onClick={handleClick}>Add Animal</button>
      <p>Number of Animals : {count}</p>
    </div>
  );
}

export default App;
