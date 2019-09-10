import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import { Numbers } from "./components/ButtonComponents/NumberButtons/Numbers";
import { Operators } from "./components/ButtonComponents/OperatorButtons/Operators";
import { Specials } from "./components/ButtonComponents/SpecialButtons/Specials";
import { Display } from './components/DisplayComponents/Display';
import calculations from ".components/ButtonEffectFunctions/calculations";
 

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  let [total, setTotal] = useState(0);
  let [oldTotal, setOldTotal] = useState(0);
  let [operator, setOperator] = useState('');
  let [resetCalc, setResetCalc] = useState(true);

  const setTotalFunc = (num) => {
    let regex = new RegExp(/[0||+||-||*||/]/);
    // If total is an operator, or zero (on page load), display the number you click on the screen
    // Otherwise, add the number clicked, to whatever is displayed on the screen
    regex.test(total) && resetCalc ? setTotal(total = num) : setTotal(total += num);

    total.includes('.') && setTotal(total.replace('.' , '')); // trying to fix glitch of adding 100 decimals haha
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
