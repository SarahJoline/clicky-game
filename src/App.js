import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import "./App.css";
import characters from "./Characters.json";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: characters,
      counter: 0,
      highscore: 0
    };
    this.addToCounter = this.addToCounter.bind(this);
    this.winMessage = this.winMessage.bind(this);
  }

  shuffleData(characters) {
    var i = 0,
      j = 0,
      temp = null;

    for (i = characters.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = characters[i];
      characters[i] = characters[j];
      characters[j] = temp;
    }
  }

  incorrectGuess() {
    if (this.state.highscore < this.state.counter) {
      this.setState({ highscore: this.state.counter });
      return "Congrats! You beat your high score";
    } else {
      return "You lose";
    }
  }

  addToCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  winMessage() {
    if (this.state.counter === 12) {
      return "You win";
    }
  }

  // componentDidMount() {
  //   console.log(this.state.counter);
  // }

  cardClick() {
    if (characters.clicked) {
      this.incorrectGuess();
      this.shuffleData();
    } else {
      this.addToCounter();
      //set clicked to true
    }
  }

  render() {
    const { counter, highscore } = this.state;
    return (
      <div className="App">
        <Nav counter={counter} highscore={highscore} />
        <Header />
        <div>
          <h1>{this.winMessage()}</h1>
        </div>
        <div>
          {characters.map(({ id, image, clicked }) => (
            <Cards
              id={id}
              image={image}
              clicked={clicked}
              clickHandler={this.addToCounter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
