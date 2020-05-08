import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { printLabel, createSquare } from './components/interface';
// import './class/index';
import { pickCard } from './functions/overload'
// import { deck } from './functions/This'

function App() {
  // let myObj = { size: 10, label: "size 10 Object" }
  // printLabel(myObj)

  // let mySquare = createSquare({ color: "black" });
  // console.log(mySquare)

  let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
  let pickedCard1 = myDeck[pickCard(myDeck)];
  console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

  let pickedCard2 = pickCard(15);
  console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
