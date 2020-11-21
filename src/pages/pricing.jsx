import React from "react";
import "./pricing.scss";
import {Container, Card, Row, Col } from "react-bootstrap";
import { FaRegCalendarCheck, FaEdit, FaUserShield } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { AiFillPicture } from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";

const Pricing = () => {
  return (
    <>
      <Container className="pricing-news">
        <h3> Good News First </h3>
        <Col>
          <Row className="justify-content-center">
            <Card style={{ width: "18rem" }}>
              <FaRegCalendarCheck className="card-icon" />
              <Card.Title>Industry Leading Turnaround Time</Card.Title>
              <Card.Text>
                You will have your final images within three to four weeks. You
                won’t have to wait months to see your pictures. We will give you
                a sneak peak of your album 2-3 days after the wedding day.
              </Card.Text>
            </Card>
            <Card style={{ width: "18rem" }}>
              <FiShield className="card-icon" />
              <Card.Title>Insurance</Card.Title>
              <Card.Text>
                Photography Insurance included in all of our packages.
              </Card.Text>
            </Card>
            <Card style={{ width: "18rem" }}>
              <FaEdit className="card-icon" />
              <Card.Title>Professional Editing</Card.Title>
              <Card.Text>
                All photos go through our industry professional standard
                editing.
              </Card.Text>
            </Card>
          </Row>
          <Row className="justify-content-center">
            <Card style={{ width: "18rem" }}>
              <AiFillPicture className="card-icon" />
              <Card.Title>Online Galleries</Card.Title>
              <Card.Text>
                You will have a secure, private gallery for your wedding photos.
                Duration of the gallery depends on your coverage.
              </Card.Text>
            </Card>
            <Card style={{ width: "18rem" }}>
              <IoMdPaper className="card-icon" />
              <Card.Title>Image Release</Card.Title>
              <Card.Text>
                You always receive full print release rights to all of your
                images. Period!
              </Card.Text>
            </Card>
            <Card style={{ width: "18rem" }}>
              <FaUserShield className="card-icon" />
              <Card.Title>Privacy and Transparency</Card.Title>
              <Card.Text>
                We love transparency! No hidden fees or charges. You will never
                receive spam email/messages from us!
              </Card.Text>
            </Card>
          </Row>
          </Col>
      </Container>
      <Container className="pricing-list">
        <Col>
          <h3> Wedding Photography Pricing </h3>
          <h4>(Travel included up to 200 miles roundtrip)</h4>
          <h5>Wedding and Engagement</h5>
          <Row className="justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Title>10 hrs - $2000</Card.Title>
              <Card.Text>Online Gallery (3 months)</Card.Text>
              <Card.Text>2 Photographers</Card.Text>
              <Card.Text>Dennis + Jackie</Card.Text>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Title>8 hrs - $1800</Card.Title>
              <Card.Text>Online Gallery (3 months)</Card.Text>
              <Card.Text>2 Photographers</Card.Text>
              <Card.Text>Dennis + Jackie</Card.Text>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Title>6 hrs - $1600</Card.Title>
              <Card.Text>Online Gallery (3 months)</Card.Text>
              <Card.Text>2 Photographers</Card.Text>
              <Card.Text>Dennis + Jackie</Card.Text>
            </Card>
          </Row>
          <h5>Wedding Only</h5>
          <Row className="justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Title>10 hrs - $1800</Card.Title>
              <Card.Text>Online Gallery (1 month)</Card.Text>
              <Card.Text>2 Photographers</Card.Text>
              <Card.Text>Dennis + Jackie</Card.Text>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Title>8 hrs - $1600</Card.Title>
              <Card.Text>Online Gallery (1 month)</Card.Text>
              <Card.Text>2 Photographers</Card.Text>
              <Card.Text>Dennis + Jackie</Card.Text>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Title>6 hrs - $1400</Card.Title>
              <Card.Text>Online Gallery (1 month)</Card.Text>
              <Card.Text>2 Photographers</Card.Text>
              <Card.Text>Dennis + Jackie</Card.Text>
            </Card>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Pricing;
