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
 

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  let [totalState, setTotalState] = useState(0);
  let [oldState, setOldState] = useState(0);
  let [operatorState, setOperatorState] = useState('');

  const setTotalFunc = (num) => {
    let regex = new RegExp(/[0||+||-||*||/]/);
    regex.test(totalState) || operatorState == '' ? setTotalState(totalState = num) : setTotalState(totalState += num);
  }
  
  const specialOperatorsFunc = (operator) => {
    operator === 'C' && setTotalState(0);
  }

  const setOperatorFunc = (operator) => {
    if (operator === "=") {
      switch(operatorState) {
        case '+':
          setTotalState((+oldState) + (+totalState));
          break;
        case '-':
          setTotalState((+oldState) - (-totalState));
          break;
        case '*':
          setTotalState((+oldState) * (+totalState));
          break;
        case '/':
          setTotalState((+oldState) / (+totalState));
          break;
        }
        setOperatorState('');
      } else {
        setOldState(totalState);
        console.log(totalState)
        operatorState === '' && setTotalState(operator);
        setOperatorState(operator);
      }
    }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display value={totalState} />
        <div className="buttonsContainer">
          <div className="numbersContainer">
            <Specials specialOperators={specialOperatorsFunc}/>
            <Numbers setTotal={setTotalFunc} />
          </div>
          <Operators setOperator={setOperatorFunc}/>
        </div>
      </div>
    </div>
  );
}

export default App;
