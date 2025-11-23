import React from 'react';
import {Navbar,Welcome} from "./components/index.js"
function App(props) {
    return (
        <main className="App">
            <Navbar />
            <Welcome/>
        </main>
    );
}

export default App;
