import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./cardsmap.scss";

const CardsMap = React.memo(props => {
  const { weddingAlbums, engagementAlbums, setSelected, handleShow } = props;

  return (
    <div className="card-group">
      <ListGroup>
        {weddingAlbums.map(album => (
          <ListGroup.Item>
            <Card>
              <Card.Img src={album.coverPhoto} />
              <Card.Text
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelected(album);
                  handleShow();
                }}
              >
                {album.name}
              </Card.Text>
            </Card>
          </ListGroup.Item>
        ))}

        {engagementAlbums.map(album => (
          <ListGroup.Item>
            <Card>
              <Card.Img src={album.coverPhoto} />
              <Card.Text
                key={album.id}
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
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
});

export default CardsMap;
