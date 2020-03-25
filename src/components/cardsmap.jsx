import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./cardsmap.scss";

const CardsMap = props => {
  const { album } = props;

  return (
    <div className="card-item">
      <ListGroup.Item>
        <Card>
          <Card.Img src={album.coverPhoto} />
          <Card.Text>{album.name}</Card.Text>
        </Card>
      </ListGroup.Item>
    </div>
  );
};

export default CardsMap;
