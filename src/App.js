import { useEffect, useState } from "react";
import Stovle from "./components/Stovle";
import { solutions } from "./data/solutions";

console.log(solutions);

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random() * 30)];
    setSolution(randomSolution);
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Stovle</h1>
      {solution && <Stovle solution={solution} />}
    </div>
  );
}

export default App;
