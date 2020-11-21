import React from 'react';
import {Card, CardTitle} from "react-materialize";
import { Link } from 'react-router-dom';

import "./weddingcard.scss"

const WeddingCard = ({album}) => {
    let name = album.name.replace("Wedding: ", "");
    const id = album.id
    let card = (
        <div className="wedding-card">
            <Card
                header={<CardTitle image={album.picture.data.url}><Link to={`/album/${id}`}>{name}</Link></CardTitle>}
            />
        </div>
    )
    return (
        <>
            {card}
        </>
    )
}

export default WeddingCard;