import {DISCOTHEKEN_DATA} from "../data/data";
import {Section} from "./Section";
import {useState} from "react";

export function Discotheken({title}) {
    const [favorites, setFavorites] = useState([]);

    return <Section title={title}>
        {DISCOTHEKEN_DATA.map((d) => <Discotheek discotheek={d} key={d.id} favorites={favorites} setFavorites={setFavorites}/>)}
    </Section>
}

function Discotheek(props) {
    const {discotheek, favorites, setFavorites} = props

    function isFavorite() {
        return favorites.some(f => f === discotheek.id);
    }

    function addFavorite(id) {
        setFavorites([...favorites.filter(f => f !== id), id])
    }

    function removeFavorite() {
        setFavorites([...favorites.filter(f => f !== discotheek.id)])
    }

    return <div onClick={() => isFavorite(discotheek.id) ? removeFavorite(discotheek.id) : addFavorite(discotheek.id)} className={isFavorite(discotheek.id)?"favorit":"nofavorit"}>
        <div>{discotheek.naam}</div>
        <div>{discotheek.locatie}</div>
    </div>
}