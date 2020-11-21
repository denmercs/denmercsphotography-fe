import React from 'react'
import WeddingList from '../components/weddinglist'
import {Container, Row, Col} from "react-bootstrap";
import Footer from './footer'
import Header from './header'
import "./home.scss"

const Home = () => {
    return (
        <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                    <Header />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                    <WeddingList />
                    </Col> 
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>

    )
}

export default Home
