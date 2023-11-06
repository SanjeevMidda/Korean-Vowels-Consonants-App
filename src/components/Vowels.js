import React from "react";

const Vowels = ({ randomNumber, reverse }) => {
  console.log(randomNumber);
  let vowels = [
    {
      korean: "ㅏ",
      english: "a",
    },
    {
      korean: "ㅑ",
      english: "ya",
    },
    {
      korean: "ㅓ",
      english: "eo",
    },
    {
      korean: "ㅕ",
      english: "yeo",
    },
    {
      korean: "ㅗ",
      english: "o",
    },
    {
      korean: "ㅛ",
      english: "yo",
    },
    {
      korean: "ㅜ",
      english: "u",
    },
    {
      korean: "ㅠ",
      english: "yu",
    },
    {
      korean: "ㅡ",
      english: "eu",
    },
    {
      korean: "ㅣ",
      english: "i",
    },
    {
      korean: "ㅐ",
      english: "ae",
    },
    {
      korean: "ㅒ",
      english: "yae",
    },
    {
      korean: "ㅔ",
      english: "e",
    },
    {
      korean: "ㅖ",
      english: "ye",
    },
    {
      korean: "ㅘ",
      english: "wa",
    },
    {
      korean: "ㅙ",
      english: "wae",
    },
    {
      korean: "ㅚ",
      english: "oe",
    },
    {
      korean: "ㅝ",
      english: "wo",
    },
    {
      korean: "ㅞ",
      english: "we",
    },
    {
      korean: "ㅟ",
      english: "wi",
    },
    {
      korean: "ㅢ",
      english: "ui",
    },
  ];
  return (
    <div className="vowels">
      <h1>
        {reverse ? (
          vowels[randomNumber].korean
        ) : (
          <span>{vowels[randomNumber].english}</span>
        )}
      </h1>
    </div>
  );
};

export default Vowels;
