import React, {useState} from 'react'
import {Container, Row, Col, Image, Carousel} from "react-bootstrap"
import "./home.scss"

const Home = () => {
    const [link, setLink] = useState(
        [{id: 1, src: "https://i.ibb.co/fD383kM/FB-IMG-1561349353497.jpg"},
        {id: 2, src: "https://i.ibb.co/tXxBqVW/Jane-Ernesto-003.jpg"}, 
        {id: 4, src: "https://i.ibb.co/RvLwXvy/FB-IMG-1565404143809.jpg"},
        {id: 6, src: "https://i.ibb.co/xqPRJjQ/FB-IMG-1561349275071.jpg"},
        {id: 9, src: "https://i.ibb.co/VT00Fhk/Felicia-Adam-016.jpg"},
        {id: 10, src: "https://i.ibb.co/c2QHZJm/Jacklyn-Nicholas-020.jpg"},
        {id: 11, src: "https://i.ibb.co/pyjCDzC/Jade-Trevor-138.jpg"}, 
        {id: 13, src: "https://i.ibb.co/nDtWdqq/FB-IMG-1564272598592.jpg"},
        {id: 14, src: "https://i.ibb.co/KXdPbM9/Taylor-Tyler-367.jpg"}]
    )
    

    return (
        <>
                <Carousel>
                {
                    link.map(photo => (
                        <Carousel.Item key={photo.id}>
                            <img src={`${photo.src}`} className="d-block w-100 carousel-img"/>
                        </Carousel.Item>
                    ))
                }
                </Carousel>
        <Container className="home">
            <Row>
                <Col xs={6} md={4} lg={4}>
                    <Image src="https://i.ibb.co/31V0bWZ/family-picture.jpg" className="denmercs-photo"/>
                </Col>
                <Col xs={6} md={8} lg={8}>
                    <p>A perfect blend of classic and modern is our goal. For the last 4 years, we have been creating images that are timeless, not trendy. Our laid-back personality allows you to focus on the important aspects of the day like spending time with your loved ones while we take care of the beautiful photos and videos that reflect the details and moments that make your wedding unique to you.  We are excited to work with you!</p>
                    <p>~ Dennis & Jackie</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home
