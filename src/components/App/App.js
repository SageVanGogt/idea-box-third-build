import React, { Component } from 'react';
import IdeaForm from '../IdeaForm/IdeaForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideasArray: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Idea Box</h1>
          <IdeaForm />
        </header>
      </div>
    );
  }
}

export default App;
