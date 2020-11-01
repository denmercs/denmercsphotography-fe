import React from 'react';
import {Card, CardTitle, Icon} from "react-materialize";
import "./weddingcard.scss"

const WeddingCard = ({album}) => {
    let name = album.name.replace("Wedding: ", "");
    let card = (
        <div className="wedding-card">
            <Card
                header={<CardTitle image={album.picture.data.url} reveal waves="light"/>}
                reveal={<p> {name}</p>}
                revealIcon={<Icon>more_vert</Icon>}
    ></Card>
        </div>
)
        
            
    
    return (
        <>
            {card}
        </>
    )
}

export default WeddingCard;