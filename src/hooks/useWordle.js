import React, { useState } from "react";

const useWordle = ({ solution }) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["harsh", "hello"]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("Formatting the guess -", currentGuess);
  };

  const addNewGuess = () => {};

  const handleKeyup = (e) => {
    if (e.key === "Enter") {
      //only add guesses  if turn is less than 5
      if (turn > 5) {
        console.log("you are out of turn");
        return;
      }
      //do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("you already tried that word");
        return;
      }
      //check word is 5 char long
      if (currentGuess.length != 5) {
        console.log("pls enter 5 word");
        return;
      }
      formatGuess();
    }
    if (e.key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }
    if (/^[A-Za-z]$/.test(e.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + e.key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
