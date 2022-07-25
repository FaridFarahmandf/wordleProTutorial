import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState(["apple"]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey"}
    });

    //find any green color
    formattedGuess.forEach((l, i) => {
      if(solution[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    })

    //find any yellow color
    formattedGuess.forEach((l,i) => {
      if(solutionArray.includes(l.key)){
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    })

    return formattedGuess
  };
  
  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {};
  
  // handle keyup event & track current guess
  // if user presses enter, add the new guess  
  const handleKeyUp = ({key}) => {
    if(key === "Enter") {
       // only add guess if turn is less than 5
      if(turn > 5) {
        console.log("you do not have any turn for guessing");
        return
      }
 // do not allow duplicate words
      if(history.includes(currentGuess)){
        console.log("you have already tried this guess");
        return
      }

      if(currentGuess.length !== 5) {
        console.log("your guess lenght must equal to 5");
        return
      }
      console.log(formatGuess())
    }
    if (key === "Backspace") {
      setCurrentGuess ((prev) => prev.slice(0, -1));
      return;
    }
    if(/^[A-Za-z]$/.test(key)){
      if(currentGuess.length < 5) {
        setCurrentGuess ((prev) => prev + key);
      }
    }
  };

  return {turn, currentGuess, guesses, isCorrect, handleKeyUp};
};

export default useWordle;
