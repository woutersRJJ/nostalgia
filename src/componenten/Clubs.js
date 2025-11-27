import {CLUBS_DATA} from "../data/data";
import {Section} from "./Section";
import {useState} from "react";

export function Clubs({title}) {
    const [favorites, setFavorites] = useState([]);

    return <Section title={title}>
        {CLUBS_DATA.map((c) => <Club club={c} key={c.id} favorites={favorites} setFavorites={setFavorites}/>)}
    </Section>
}

function Club(props) {
    const {club, favorites, setFavorites} = props

    function isFavorite(i) {
        return favorites.some(f => f === club.id);
    }

    function addFavorite(id) {
        setFavorites([...favorites.filter(f => f !== id), id])
    }

    function removeFavorite(id) {
        setFavorites([...favorites.filter(f => f !== club.id)])
    }

    return <div onClick={() => isFavorite(club.id) ? removeFavorite(club.id) : addFavorite(club.id)} className={isFavorite(club.id)?"favorit":"nofavorit"}>
        <div>{club.naam}</div>
        <div>{club.locatie}</div>
    </div>
}