import axios from "axios";
import React, { useEffect, useState } from "react";

const Keypad = () => {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/letters").then((res) => {
      const response = res.data;
      setLetters(response);
    }, []);
  });
  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          return <div key={l.key}>{l.key}</div>;
        })}
    </div>
  );
};

export default Keypad;
