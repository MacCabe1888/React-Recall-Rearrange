import React, { Component } from "react";
import { Bar, Clickable, Container, Footer, Header } from "./components";
import choices from "./choices.json";

class App extends Component {
  state = {
    choices,
    score: 0,
    highScore: 0
  }

  render() {
    return (
      <div>
        <Bar score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <Container>
          {this.state.choices.map(clickable => (
            <Clickable
              key={clickable.id}
              id={clickable.id}
              shake={!this.state.score && this.state.highScore}
              // handleClick={this.handleClick}
              image={clickable.image}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
