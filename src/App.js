import { useEffect, useState } from "react";
import axios from "axios";
import { Wordle } from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    /*fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });*/
    axios.get("http://localhost:3001/solutions").then((res) => {
      const response = res.data;
      const randomSolution =
        response[Math.floor(Math.random() * response.length)];
      setSolution(randomSolution.word);
    });
  }, [setSolution]);
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
