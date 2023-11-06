import React from "react";

const Consonants = ({ randomNumber, reverse }) => {
  let modifiedRandomNumber = randomNumber;
  if (randomNumber >= 19) {
    modifiedRandomNumber = randomNumber - 2;
  }

  console.log(randomNumber);
  let consonants = [
    {
      korean: "ㄱ",
      english: "g/k",
    },
    {
      korean: "ㄴ",
      english: "n",
    },
    {
      korean: "ㄷ",
      english: "t/d",
    },
    {
      korean: "ㄹ",
      english: "r/l",
    },
    {
      korean: "ㅁ",
      english: "m",
    },
    {
      korean: "ㅂ",
      english: "p/b",
    },
    {
      korean: "ㅅ",
      english: "s",
    },
    {
      korean: "ㅇ",
      english: "ng",
    },
    {
      korean: "ㅈ",
      english: "j",
    },
    {
      korean: "ㅊ",
      english: "ch",
    },
    {
      korean: "ㅋ",
      english: "k",
    },
    {
      korean: "ㅌ",
      english: "t",
    },
    {
      korean: "ㅍ",
      english: "p",
    },
    {
      korean: "ㅎ",
      english: "h",
    },
    {
      korean: "ㄲ",
      english: "kk",
    },
    {
      korean: "ㄸ",
      english: "tt",
    },
    {
      korean: "ㅃ",
      english: "bb",
    },
    {
      korean: "ㅆ",
      english: "ss",
    },
    {
      korean: "ㅉ",
      english: "jj",
    },
  ];
  return (
    <div className="consonants">
      <h1>
        {reverse ? (
          consonants[modifiedRandomNumber].korean
        ) : (
          <span>{consonants[modifiedRandomNumber].english}</span>
        )}
      </h1>
    </div>
  );
};

export default Consonants;
