import React from 'react';
import logo from './logo.jpg';
import './App.css';
import StoryList from './components/storyList';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Refugee Stories
        </p>
        < StoryList />
      </header>
    </div>
  );
}

export default App;
