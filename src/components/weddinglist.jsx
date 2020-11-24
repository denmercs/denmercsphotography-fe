import React from 'react'
import {useSelector} from "react-redux";
import WeddingCard from "./weddingcard";
import "./weddinglist.scss";
import Loading from "./loading";


const WeddingList = () => {
    const albums = useSelector(state => state.facebook.weddingAlbums)
    const {loading} = useSelector(state => state.facebook)
    let card;


    if(albums !== undefined && !loading) {
        card = albums.map(album => <WeddingCard key={album.id} album={album} />)
    } else {
        card = <Loading />
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