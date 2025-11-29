import './App.css';
import {Frituren} from "./componenten/Frituren";
import {Discotheken} from "./componenten/Discotheken";
import {Cafes} from "./componenten/Cafes";
import {CAFES_DATA, VOETBALPLOEGEN_DATA} from "./data/data";
import {Voetbalploegen} from "./componenten/Voetbalploegen";

function App() {
    return (
        <div className="App">
            <h1>State and events</h1>
            <Frituren title='Frituren'/>
            <Discotheken title='Discotheken'/>
            <Cafes title='Cafés' data={CAFES_DATA} />
            <Voetbalploegen title='Voetbalploegen' data={VOETBALPLOEGEN_DATA}/>
        </div>
    );
}

export default App;
