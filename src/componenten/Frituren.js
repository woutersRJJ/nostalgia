import {FRITUREN_DATA} from "../data/data";
import {Section} from "./Section";

export function Frituren(props) {
    const {title} = props;

    return <Section title={title}>
        {FRITUREN_DATA.map((f, index) => <Frituur frituur={f} key={index}/>)}
    </Section>
}

function Frituur({frituur}) {

    return <div className='nofavorit'>
        <div style={{'marginTop':'10px'}}>{frituur.naam}</div>
        <div>{frituur.locatie}</div>
    </div>
}