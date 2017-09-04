import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const BOTW_logo = {
    title: "Open your eyes",
    src: "https://upload.wikimedia.org/wikipedia/fr/thumb/8/87/The_Legend_of_Zelda_Breath_of_the_Wild_logo.png/1280px-The_Legend_of_Zelda_Breath_of_the_Wild_logo.png",

};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Steven Kha's Website! Work in Progress!</h2>
                </div>
                <p className="App-intro">
                    Welcome to my site:
                </p>
                <p>

                </p>
                <p>
                    Yes it does! Testing image below... Please work!
                </p>
                <p>
                    <h1>{BOTW_logo.title}</h1>
                        <img src = {BOTW_logo.src }
                        alt ={BOTW_logo.title}
                             height = "251" width = "320"/>
                </p>
                <br />
                <p> New Line goes here:</p>
                <p> Another Line</p>


            </div>
        );
    }
}

export default App;
