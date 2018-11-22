import * as React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from './app-router';
import './App.scss';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <section>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav>
          <ul>
            <li><Link to='/'>Register</Link></li>
            <li><Link to='/list'>Accounts List</Link></li>
          </ul>
        </nav>
        <AppRouter />
      </section>
    );
  }
}

export default App;
