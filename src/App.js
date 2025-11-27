import './App.css';
import {Frituren} from "./componenten/Frituren";
import {Clubs} from "./componenten/Clubs";
import {Cafes} from "./componenten/Cafes";
import {CAFES_DATA} from "./data/data";

function App() {
    return (
        <div className="App">
            <h1>State and events</h1>
            <Frituren title='Frituren'/>
            <Clubs title='Clubs'/>
            <Cafes title='Cafés' data={CAFES_DATA} />
        </div>
    );
}

export default App;
