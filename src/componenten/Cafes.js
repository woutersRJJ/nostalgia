import {useState} from "react";
import {Section} from "./Section";

export function Cafes({data,title}) {
    const [favorites, setFavorites] = useState([]);

    return <Section title={title}>
        {data.map((c) => <Cafe cafe={c} key={c.id} favorites={favorites} setFavorites={setFavorites}/>)}
        <h3>Mijn favorieten</h3>
        {favorites.map((f,index)=><Favorite favorite={data.find(o=>o.id ===f)} key={index} favorites={favorites} setFavorites={setFavorites}/>)}
    </Section>
}

function Favorite(props) {
    const {favorite,favorites,setFavorites}=props

    function removeFavorite() {
        setFavorites([...favorites.filter(f => f !== favorite.id)])
    }

    return <div onClick={()=>removeFavorite(favorite.id)} className='favorit'>
        <div>{favorite.id}</div>
        <div>{favorite.naam}</div>
        <div>{favorite.locatie}</div>
    </div>
}

function Cafe({cafe,favorites,setFavorites}) {

    function isFavorite() {
        return favorites.some(f => f === cafe.id);
    }

    function addFavorite(id) {
        setFavorites([...favorites.filter(f => f !== id), id])
    }

    function removeFavorite() {
        setFavorites([...favorites.filter(f => f !== cafe.id)])
    }
    return <div onClick={() => isFavorite(cafe.id) ? removeFavorite(cafe.id) : addFavorite(cafe.id)} className='nofavorit'>
        <div>{cafe.id}</div>
        <div>{cafe.naam}</div>
        <div>{cafe.locatie}</div>
    </div>
}