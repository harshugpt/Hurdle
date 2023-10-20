import axios from "axios";
import React, { useEffect, useState } from "react";

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    const link = process.env.REACT_APP_API_URL;
    axios.get(`${link}/letters`).then((res) => {
      const response = res.data;
      setLetters(response);
    }, []);
  });
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
