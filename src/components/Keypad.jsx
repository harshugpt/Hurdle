import React, { useEffect, useState } from "react";
import data from "../data/db.json";

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    const response = data.letters;
    setLetters(response);
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
