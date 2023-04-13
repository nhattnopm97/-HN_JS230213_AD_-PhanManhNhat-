import React, { useState } from "react";

function WorldCounter() {
  const [allLetter, setAllLetterld] = useState("");
  const [world, setWorld] = useState("");
  const [letter, setLetter] = useState("");
  const [paragraph, setParagraph] = useState("");
  const handleOnChange = (letter) => {
    setAllLetterld(letter);
    const countSpace = allLetter.replace(/\s/g, "").length;
    setWorld(countSpace + 1);
    const countParagraph = letter.split("\n").length;
    setParagraph(countParagraph);
    const words = letter.trim().split(/\s+/);
    setLetter(words.length);
  };

  const handleUpcase = () => {
    const capitalized = allLetter.replace(/^\w|\s+\w/g, function (match) {
      return match.toUpperCase();
    });
    setAllLetterld(capitalized);
  };

  const handleLowercase = () => {
    const lowercase = allLetter.toLowerCase();
    setAllLetterld(lowercase);
  };

  return (
    <div>
      <div className="container">
        <div className="headup">
          <p>Word:{world}</p>
        </div>
        <div className="headup">
          <p>Letter:{letter}</p>
        </div>
        <div>
          <p className="headup">Paragraph:{paragraph}</p>
        </div>
      </div>
      <textarea
        value={allLetter}
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <div>
        <button onClick={handleUpcase}>Click To Uppercase</button>
        <button onClick={handleLowercase}>Click To Lowercase</button>
      </div>
    </div>
  );
}

export default WorldCounter;
