import React from "react";
import "./cardsmap.scss";
import {Card} from "react-materialize"

const CardsMap = props => {
  const { album } = props;

  return (
    <div className="card-item">
      <li>
        <Card>
          <Card.Img src={album.coverPhoto} />
          <Card.Text>{album.name}</Card.Text>
        </Card>
        </li>
    </div>
  );
};

export default CardsMap;
