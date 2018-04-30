import React, { Component } from 'react';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeaContainer from '../IdeaContainer/IdeaContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdeaObj = (idea) => {
    const ideas = [...this.state.ideas, idea];
    this.setState({ ideas });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Idea Box</h1>
          <IdeaForm 
            addIdeaObj={this.addIdeaObj}
          />
        </header>
        <IdeaContainer 
          ideas={this.state.ideas}
        />
      </div>
    );
  }
}

export default App;
