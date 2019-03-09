import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import MuiThemeProvider from './MuiThemeProvider';
import CSVDownloader from './component/CSVDownloader';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <CSVDownloader />
                    </header>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
