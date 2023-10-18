import React, { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedArray = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    //find any green letters
    formattedArray.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedArray[i].color = "green";
        solutionArray[i] = null;
      }
    });

    //find any yellow letters
    formattedArray.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedArray[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });
    return formattedArray;
  };

  const addNewGuess = (formattedArray) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedArray;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess("");
  };

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
      //formatGuess();
      const formatted = formatGuess();
      addNewGuess(formatted);
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
