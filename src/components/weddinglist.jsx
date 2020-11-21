import React from 'react'
import {useSelector} from "react-redux";
import WeddingCard from "./weddingcard";
import "./weddinglist.scss"

const WeddingList = () => {
    const albums = useSelector(state => state.facebook.weddingAlbums)
    let card;

    if(albums !== undefined) {
        card = albums.map(album => <WeddingCard key={album.id} album={album} />)
    }

    return (
        <div className="wedding-list">
            <h3>Weddings</h3>
            <div className="wedding-card">
                {card}
            </div>
        </div>
    )
}

export default WeddingList;