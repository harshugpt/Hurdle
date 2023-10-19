import React from "react";

const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color} id="box">
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled" id="box">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i} id="box"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div id="box"></div>
      <div id="box"></div>
      <div id="box"></div>
      <div id="box"></div>
      <div id="box"></div>
    </div>
  );
};

export default Row;
