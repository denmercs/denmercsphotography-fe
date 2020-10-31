import React from 'react'
import {useSelector} from "react-redux";
import WeddingCard from "./weddingcard";

const WeddingList = () => {
    const albums = useSelector(state => state.facebook.items.albums)
    let card;

    if(albums !== undefined) {
        card = albums.map(album => <WeddingCard key={album.id} album={album} />)
    }

    return (
        <>
            <h3>Wedding List</h3>
            {card}
        </>
    )
}

export default WeddingList;