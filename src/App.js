import React, { Component } from "react";
import { Bar, Clickable, Container, Footer, Header } from "./components";
import choices from "./choices.json";

class App extends Component {
  state = {
    // The current round.
    // Increases by 1 each time the user successfully guesses all the clickables without any repeats.
    // Resets to 1 if the user clicks on the same clickable for the second time in a given round.
    round: 1,
    // The clickable choices imported from choices.json.
    choices,
    // The user's current score.
    // Increases by 1 each time the user successfully guesses a non-repeat clickable.
    // Resets to 0 if the user clicks on the same clickable for the second time in a given round.
    score: 0,
    // The highest score the user has achieved since the last time the page was loaded.
    highScore: 0
  }

  componentDidMount() {
    // If the component successfully mounts, set up the game's initial state: the shuffled array of all choices, none yet clicked.
    this.setState({ choices: this.shuffleArr(this.state.choices) });
  }

  // using the Fisher-Yates shuffle algorithm to shuffle the array of clickables
  // makes it necessary for the user to remember which clickables have already been clicked
  shuffleArr = arr => {
    let i = arr.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i--;
    }
    return arr;
  };

  // what to do when a clickable is clicked
  handleClick = id => {
    // It's a repeat guess unless ...
    let repeatGuess = true;
    const updatedChoices = this.state.choices.map(choice => {
      const thisClickable = { ...choice };
      // the corresponding array element stored in the state includes "clicked: false".
      if ((thisClickable.id === id) && (!thisClickable.clicked)) {
        thisClickable.clicked = true;
        repeatGuess = false;
      }
      return thisClickable;
    });
    // calling the appropriate function depending on whether it was a repeat guess
    repeatGuess
      ? this.handleRepeat(updatedChoices)
      : this.handleNew(updatedChoices);
  };

  // If it was a repeat guess,
  handleRepeat = choices => {
    // reset the state apart from the high score (i.e., game over).
    this.setState({
      round: 1,
      choices: this.resetChoices(choices),
      score: 0
    });
  };

  // If it was not a repeat guess,
  handleNew = choices => {
    // update the current score and, if equal to the current score, the high score as well.
    let { score, highScore } = this.state;
    score += 1;
    highScore = Math.max(score, highScore);

    // It's a new round unless at least one choice still hasn't been clicked.
    let newRound = true;
    choices.map(choice => {
      if (!choice.clicked) {
        newRound = false;
      }
      return newRound;
    });
    
    // Set the state to incorporate these updates, including setting up a new round if appropriate.
    this.setState({
      round: newRound ? this.state.round + 1 : this.state.round,
      choices: newRound ? this.resetChoices(choices) : this.shuffleArr(choices),
      score,
      highScore
    });
  };

  // Reset choices to none yet clicked and reshuffle choices.
  // This function is called whenever there is a repeat guess or a new round.
  resetChoices = choices => {
    const noneClicked = choices.map(choice => ({ ...choice, clicked: false }));
    return this.shuffleArr(noneClicked);
  };

  render() {
    return (
      // setting the page's background
      <div style={{
        backgroundImage: "url(/assets/images/spongebob-floral-background.png)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover"
      }}>
        {/* bar displaying game info at the top of the window */}
        <Bar
          currentRound={this.state.round}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        {/* header displaying the game's title and basic rules */}
        <Header />
        {/* container for the clickables */}
        <Container>
          {this.state.choices.map(clickable => (
            // Each clickable gets a unique ID, shake property (triggered on repeat guess), click functionality, and unique image.
            <Clickable
              key={clickable.id}
              id={clickable.id}
              shake={!this.state.score && this.state.highScore}
              handleClick={this.handleClick}
              image={clickable.image}
            />
          ))}
        </Container>
        {/* footer containing the React logo and the game's title */}
        <Footer />
      </div>
    );
  }
}

// exporting the App component so it can be rendered on the page
export default App;
