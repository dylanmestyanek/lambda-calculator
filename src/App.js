import React, { useState } from "react";
import Logo from "./components/DisplayComponents/Logo";
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers";
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators";
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials";
import { Display } from "./components/DisplayComponents/Display";
import "./App.css";

function App() {
  let [total, setTotal] = useState(0);
  let [oldTotal, setOldTotal] = useState(0);
  let [operator, setOperator] = useState('');
  let [resetCalc, setResetCalc] = useState(true);

  const setTotalFunc = (num) => {
    let regex = new RegExp(/[0||+||-||*||/]/);
    // If total is an operator, or zero (on page load), display the number you click on the screen
    // Otherwise, add the number clicked, to whatever is displayed on the screen
    regex.test(total) && resetCalc ? setTotal(total = num) : setTotal(total += num);
    setResetCalc(false);
  }
  
  // Handles special buttons: 
  const specialOperators = (value) => {
    switch(value) {
      case ('C'):
         setTotal(0);
         setOldTotal(0);
         setResetCalc(true);
         break;
      case ('+/-'):
        total > 0 ? setTotal(-total) : setTotal(Math.abs(total))
        break;
      case ('%'):
        setTotal(parseFloat(total * .01));
        break;
      default:
        break;
    } 
  };

  //Handle calculations
  const calculations = (value) => {
    if (value === "=") {
      switch(operator) {
        case '+':
          setTotal((+oldTotal) + (+total));
          break;
        case '-':
          setTotal((+oldTotal) - (+total));
          break;
        case '*':
          setTotal((+oldTotal) * (+total));
          break;
        case '/':
          setTotal((+oldTotal) / (+total));
          break;
        default:
          break;
        }
        setOperator('');
    } else {
        setOldTotal(total);
        setTotal('');
        setOperator(value);
    }
};
  
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display value={total} />
        <div className="buttonsContainer">
          <div className="numbersContainer">
            <Specials specialOperators={specialOperators}/>
            <Numbers setTotal={setTotalFunc} />
          </div>
          <Operators calculations={calculations}/>
        </div>
      </div>
    </div>
  );
}

export default App;
