import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import FormThing from './FormThing';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <FormThing />
          <p/>
          
          <FormThing />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
