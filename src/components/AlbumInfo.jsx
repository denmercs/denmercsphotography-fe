import React, { useEffect } from 'react'
import Gallery from 'react-grid-gallery';
import {Container, Col, Row, Image} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosById } from '../store/actions/facebookActions';
import loadingGIF from "../assets/wedding.gif"
import {Button} from "react-bootstrap"
import "./albumInfo.scss"


const AlbumInfo = (props) => {
    const id = props.match.params.id;
    const album = props.location.albumProps.album;
    const dispatch = useDispatch();
    const {photos, loading} = useSelector(state => state.facebook)

    useEffect(() => {
        dispatch(getPhotosById(id))
    }, [])

    const handleClick = () => props.history.goBack();

    return (
        <>
        <Container className="album">
            <Button onClick={handleClick}>Go Back</Button>
            <Col>
                <Row>
                    <h3>{album.name}</h3>
                </Row>
                <Row>
                    <p>{album.location}</p>
                </Row>
                <Row>
                    <p>{album.description}</p>
                </Row>
                {
                    (loading) ? (<Row className="loadingGIF"><Image src={loadingGIF}/></Row>) : <Gallery images={photos} />
                    
                }
            </Col>
        </Container>
        </>
    )
}

export default AlbumInfo
