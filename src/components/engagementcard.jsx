import React from 'react';
import {Card} from "react-bootstrap";
import { Link } from 'react-router-dom';

import "./engagementcard.scss"

const WeddingCard = ({album}) => {
    let name = album.name.replace("Engagement: ", "");
    const image = album.picture.data.url;
    const id = album.id

    return (
        <>
            <div className="engagement-album">
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Link to={`/album/${id}`}>{name}</Link>
                </Card>
            </div>
        </>
    )
}

export default WeddingCard;