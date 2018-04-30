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
    const newIdea = {...idea, id: Date.now()};
    const ideas = [...this.state.ideas, newIdea];
    this.setState({ ideas });
  }

  deleteIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => 
      idea.id !== id
    )

    this.setState({ ideas })
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
          deleteIdea={this.deleteIdea}
        />
      </div>
    );
  }
}

export default App;
