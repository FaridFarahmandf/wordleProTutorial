import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3002/solution")
    .then(res => res.json())
    .then(ans => {
      const randomSolution = ans[Math.floor(Math.random() * ans.length)];
      setSolution(randomSolution.word)
    })
  }, [setSolution]);
  
  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
