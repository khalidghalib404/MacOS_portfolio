import React from 'react';
import {Navbar,Welcome,Doc} from "./components/index.js"

function App(props) {
    return (
        <main className="App">
            <Navbar />
            <Welcome />
            <Doc/>
        </main>
    );
}

export default App;
