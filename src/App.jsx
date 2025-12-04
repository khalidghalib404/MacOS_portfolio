import React from 'react';
import {Navbar,Welcome,Doc} from "./components/index.js"
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import Terminal from "#windows/Terminal.jsx";
import TerminalWindow from "#windows/Terminal.jsx";
gsap.registerPlugin(Draggable)

function App(props) {
    return (
        <main className="App">
            <Navbar />
            <Welcome />
            <Doc/>
            <TerminalWindow/>
        </main>
    );
}

export default App;
