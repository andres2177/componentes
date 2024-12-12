import React from 'react';
import HolaMundo from './components/HolaMundo';
import Saludo from './components/Saludo';
import ListaDeTareas from './components/ListaDeTareas';


function App() {
    return (
        <div className="App">
            <HolaMundo />
            <Saludo nombre="Andrés" />
            <ListaDeTareas />
        
        </div>
    );
}

export default App;
