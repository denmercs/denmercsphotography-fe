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
                    
                    <Link to={{
                        pathname: `/album/${id}`,
                        albumProps: { album: props.album}

                    }}>
                        <Card.Img variant="top" src={image} />
                        <p>{name}</p>
                    </Link>
                </Card>
            </div>
        </>
    )
}

export default WeddingCard;