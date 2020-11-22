import React, { useEffect } from 'react'
import Gallery from 'react-grid-gallery';
import {Container, Col, Row, Image} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotosById } from '../store/actions/facebookActions';
import loadingGIF from "../assets/wedding.gif"
import "./albumInfo.scss"


const AlbumInfo = (props) => {
    const id = props.match.params.id;
    const album = props.location.albumProps.album;
    const dispatch = useDispatch();
    const {photos, loading} = useSelector(state => state.facebook)

    useEffect(() => {
        dispatch(getPhotosById(id))
    }, [])

    console.log('this is the props in albuminfo', props)
    return (
        <>
        <Container>
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
