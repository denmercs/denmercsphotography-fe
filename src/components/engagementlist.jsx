import React from 'react'
import {useSelector} from "react-redux";
import EngagementCards from "./engagementcard";
import "./engagementlist.scss"

const WeddingList = () => {
    const albums = useSelector(state => state.facebook.engagementAlbums)
    let card;

    if(albums !== undefined) {
        card = albums.map(album => <EngagementCards key={album.id} album={album} />)
    }

    return (
        <div className="engagement-list">
        <h3>Engagements</h3>
        <div className="engagement-card">
            {card}
        </div>
    </div>
    )
}

export default WeddingList;