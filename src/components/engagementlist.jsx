import React from 'react'
import {useSelector} from "react-redux";
import EngagementCards from "./engagementcard";
import "./engagementlist.scss"
import Loading from "./loading"

const WeddingList = () => {
    const albums = useSelector(state => state.facebook.engagementAlbums)
    const {loading} = useSelector(state => state.facebook)
    let card;

    if(albums !== undefined && !loading) {
        card = albums.map(album => <EngagementCards key={album.id} album={album} />)
    } else {
        card = <Loading />
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