import React from 'react';
import {Card} from "react-bootstrap";
import { Link } from 'react-router-dom';

import "./weddingcard.scss"

const WeddingCard = (props) => {
    let name = props.album.name.replace("Wedding: ", "");
    const image = props.album.picture.data.url;
    const id = props.album.id
    return (
        <>
            <div className="wedding-album">
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Link to={{
                        pathname: `/album/${id}`,
                        albumProps: { album: props.album}

                    }}>{name}</Link>
                </Card>
            </div>
        </>
    )
}

export default WeddingCard;