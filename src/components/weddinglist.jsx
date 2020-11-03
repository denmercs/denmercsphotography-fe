import React from 'react'
import {useSelector} from "react-redux";
import WeddingCard from "./weddingcard";
import "./weddinglist.scss"

const WeddingList = () => {
    const albums = useSelector(state => state.facebook.items)
    let card;

    if(albums !== undefined) {
        card = albums.map(album => <WeddingCard key={album.id} album={album} />)
    }

    return (
        <div className="wedding-list">
            <div className="wedding-card">
                {card}
            </div>
        </div>
    )
}

export default WeddingList;