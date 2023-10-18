import React from "react";

const Row = ({ guess }) => {
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
