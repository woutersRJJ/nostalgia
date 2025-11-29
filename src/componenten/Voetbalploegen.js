import {Section} from "./Section";
import {useState} from "react";

export function Voetbalploegen({data, title}) {
    return <Section title={title}>
        {data.map((v) => <Voetbalploeg voetbalploeg={v} key={v.id}/>)}
    </Section>
}

function Voetbalploeg(props) {
    const {voetbalploeg} = props
    const colors = [
        {nl: 'rood', en: 'red'},
        {nl: 'wit', en: 'white'},
        {nl: 'blauw', en: 'blue'},
        {nl: 'geel', en: 'yellow'},
        {nl: 'groen', en: 'green'},
        {nl: 'paars', en: 'purple'},
        {nl: 'zwart', en: 'black'}
    ]
    const kleur1En = colors.find(c => c.nl === voetbalploeg.kleuren[0]).en
    const kleur2En = colors.find(c => c.nl === voetbalploeg.kleuren[1]).en
    const specialStyle = {backgroundColor: kleur1En, color: kleur1En}
    const specialStyle2 = {backgroundColor: kleur2En, color: kleur2En}

    return <div className='ploeg'>
        <div>{voetbalploeg.id}</div>
        <div>{voetbalploeg.naam}</div>
        <div>Stamnr {voetbalploeg.stamnummer}</div>
        <span style={specialStyle}>kleur 1</span>
        <span style={specialStyle2}>kleur 2</span>
        <SpelerBrowser spelers={voetbalploeg.spelers}/>
    </div>
}

function SpelerBrowser(props) {
    const {spelers} = props
    const [indexGetoondeSpeler, setIndexGetoondeSpeler] = useState(0)

    if (!spelers) return <>
        <div style={{'marginTop': '15px'}}>Spelers</div>
        <span style={{'width': '0px'}}>geen info</span>
    </>

    return <>
        <div style={{'marginTop': '15px'}}>Spelers</div>
        <button onClick={() => {
            setIndexGetoondeSpeler(indexGetoondeSpeler ===0 ?spelers.length-1:indexGetoondeSpeler-1)
        }}>&lt;</button>
        <span style={{'display': 'inline-block', 'width': '100px'}}>{spelers[indexGetoondeSpeler]}</span>
        <button onClick={() => setIndexGetoondeSpeler(indexGetoondeSpeler + 1 < spelers.length?indexGetoondeSpeler+1:0)}>&gt;</button>
        <button>toggle favorit</button>
    </>
}
