import React, { useState } from "react";
import * as math from "mathjs";
import "./Calculadora.css";


function Calculadora() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (event) => {
    const value = event.target.value;

    switch (value) {
      case "AC":
        setInput("");
        setResult("");
        break;

      case "=":
        try {
          const output = math.evaluate(input);

          setResult(output);
        } catch (error) {
          setResult("Error");
        }
        break;

      case "sin":
      case "cos":
      case "tan":
      case "log":     
        setInput(`${value}(`);
        break;
      
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    


    
    <div className="calculadora">
      <div className="calculadora-display">
        <input type="text" value={input} disabled />
        <input type="text" value={result} disabled />
      </div>
      <div className="calculadora-keypad">
        <button value="(" onClick={handleButtonClick}>
          (
        </button>
        <button value=")" onClick={handleButtonClick}>
          )
        </button>
        <button value="AC"  onClick={handleButtonClick}>
          AC
        </button>
        <button value="/" onClick={handleButtonClick}>
          /
        </button>
        <button value="7" onClick={handleButtonClick}>
          7
        </button>
        <button value="8" onClick={handleButtonClick}>
          8
        </button>
        <button value="9" onClick={handleButtonClick}>
          9
        </button>
        <button value="*" onClick={handleButtonClick}>
          *
        </button>
        <button value="4" onClick={handleButtonClick}>
          4
        </button>
        <button value="5" onClick={handleButtonClick}>
          5
        </button>
        <button value="6" onClick={handleButtonClick}>
          6
        </button>
        <button value="-" onClick={handleButtonClick}>
          -
        </button>
        <button value="1" onClick={handleButtonClick}>
          1
        </button>
        <button value="2" onClick={handleButtonClick}>
          2
        </button>
        <button value="3" onClick={handleButtonClick}>
          3
        </button>
        <button value="+" onClick={handleButtonClick}>
          +
        </button>
        <button value="0" onClick={handleButtonClick}>
          0
        </button>
        <button value="." onClick={handleButtonClick}>
          .
        </button>
        <button value="=" onClick={handleButtonClick}>
          =
        </button>
        <button value="sin" onClick={handleButtonClick}>
          sin
        </button>
        <button value="cos" onClick={handleButtonClick}>
          cos
        </button>
        <button value="tan" onClick={handleButtonClick}>
          tan
        </button>
        <button value="log" onClick={handleButtonClick}>
          log
        </button>
        <button value="^" onClick={handleButtonClick}>
          x^y
        </button>

        

      </div>
    </div>
  );
}

export default Calculadora;
