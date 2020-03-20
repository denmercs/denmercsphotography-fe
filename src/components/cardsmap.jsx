import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./cardsmap.scss";

const CardsMap = props => {
  const {
    id,
    weddingAlbums,
    engagementAlbums,
    setSelected,
    handleShow
  } = props;

  return (
    <div className="card-group">
      <ListGroup variant="flush">
        {weddingAlbums.map(album => (
          <ListGroup.Item>
            <Card
              onClick={() => {
                setSelected(album);
                handleShow();
              }}
              key={album.id}
            >
              <Card.Img src={album.coverPhoto} />
              <Card.Text>{album.name}</Card.Text>
            </Card>
          </ListGroup.Item>
        ))}
        {engagementAlbums.map(album => (
          <ListGroup.Item>
            <Card key={album.id}>
              <Card.Img src={album.coverPhoto} />
              <Card.Text
                onClick={() => {
                  setSelected(album);
                  handleShow();
                }}
              >
                {album.name}
              </Card.Text>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CardsMap;
