import { useState } from "react";
import "./index.css";
import Vowels from "./components/Vowels";
import Consonants from "./components/Consonants";

function App() {
  const [learn, setLearn] = useState("");
  const [randomNumber, setRandomNumber] = useState(1);
  const [reverse, setReverse] = useState(true);

  return (
    <div className="App">
      <header>
        <div className="options">
          <h4 onClick={() => setLearn(true)}>vowels</h4>
          <h4 onClick={() => setLearn(false)}>consonants</h4>
        </div>
        <button onClick={() => setRandomNumber(Math.floor(Math.random() * 21))}>
          N
        </button>
      </header>
      <div className="content">
        {learn ? (
          <Vowels randomNumber={randomNumber} reverse={reverse} />
        ) : (
          <Consonants randomNumber={randomNumber} reverse={reverse} />
        )}
      </div>
      <footer>
        <h4 onClick={() => setReverse(!reverse)}>S</h4>
      </footer>
    </div>
  );
}

export default App;

//swap feature
