import axios from "axios";
import React, { useEffect, useState } from "react";

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    axios.get("/api/letters").then((res) => {
      const response = res.data;
      setLetters(response);
    });
  }, []);
  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
};

export default Keypad;
