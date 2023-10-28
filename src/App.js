import { useEffect, useState } from "react";
import { Wordle } from "./components/Wordle";
import "./App.css";
import data from "./data/db.json";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const response = data.solutions;
    const randomSolution =
      response[Math.floor(Math.random() * response.length)];
    setSolution(randomSolution.word);
  }, [setSolution]);
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
