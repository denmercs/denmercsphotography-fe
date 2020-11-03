import React from 'react'
import {useSelector} from "react-redux";
import EngagementCards from "./engagementcard";
import "./weddinglist.scss"

const WeddingList = () => {
    const albums = useSelector(state => state.facebook.items)
    let card;

    if(albums !== undefined) {
        card = albums.map(album => <EngagementCards key={album.id} album={album} />)
    }

    return (
        <div className="Engagement-list">
            <h3>Engagements</h3>
            <div className="Engagement-card">
                {card}
            </div>
        </div>
    )
}

export default WeddingList;