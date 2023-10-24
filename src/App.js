import { useEffect, useState } from "react";
import axios from "axios";
import { Wordle } from "./components/Wordle";
import "./App.css";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    /*fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });*/
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3001";
    const endpoint = `${apiUrl}/solutions`;
    axios.get(endpoint).then((res) => {
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
