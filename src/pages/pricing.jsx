import React, {useState} from "react";
import "./pricing.scss";
import {Container, Card, Row, Col } from "react-bootstrap";
import { FaRegCalendarCheck, FaEdit, FaUserShield } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { AiFillPicture } from "react-icons/ai";
import { IoMdPaper } from "react-icons/io";

const Pricing = () => {
  const [news, setNews] = useState([
    {
      icon: <FaRegCalendarCheck className="card-icon" />,
      title: "Industry Leading Turnaround Time",
      text: `You will have your final images within three to four weeks. You
      won’t have to wait months to see your pictures. We will give you
      a sneak peak of your album 2-3 days after the wedding day.`
    },
    {
      icon: <FiShield className="card-icon" />,
      title: "Insurance",
      text: `Photography Insurance included in all of our packages.`
    },
    {
      icon: <FaEdit className="card-icon" />,
      title: "Professional Editing",
      text: `All photos and videos go through our industry professional standard
      editing.`
    },
    {
      icon: <AiFillPicture className="card-icon" />,
      title: "Online Galleries",
      text: ` You will have a secure, private gallery for your wedding photos.
      Duration of the gallery depends on your coverage.`
    },
    {
      icon: <IoMdPaper className="card-icon" />,
      title: "Image Release",
      text: `You always receive full print release rights to all of your
      images. Period!`
    },
    {
      icon: <FaUserShield className="card-icon" />,
      title: "Privacy and Transparency",
      text: `We love transparency! No hidden fees or charges. You will never
      receive spam email/messages from us!`
    }
  ])

    const [pricingOne, setPricingOne] = useState([
      {
        items: {
          title: "10 hrs - $2000",
          time: "Online Gallery (3 months)",
          photographers: "2 Photographers"
        }
      },
      {
        items: {
          title: "8 hrs - $1800",
          time: "Online Gallery (3 months)",
          photographers: "2 Photographers"
        }
      },
      {
        items: {
          title: "6 hrs - $1600",
          time: "Online Gallery (3 months)",
          photographers: "2 Photographers"
        }
      }
    ])

    const [pricingTwo, setPricingTwo] = useState([
      {
        items: {
          title: "10 hrs - $1800",
          time: "Online Gallery (1 month)",
          photographers: "2 Photographers"
        }
      },
      {
        items: {
          title: "8 hrs - $1600",
          time: "Online Gallery (1 month)",
          photographers: "2 Photographers"
        }
      },
      {
        items: {
          title: "6 hrs - $1400",
          time: "Online Gallery (1 month)",
          photographers: "2 Photographers"
        }
      },
    ])

    const [vidoePricing1, setVideoPricing1] = useState([
      {
        items: {
          title: "10 hrs - $1200",
          time: "60 seconds teaser trailer",
          highlight: "Highlight reel (6-9 mins)",
          videographers: "1 Videographer"
        }
      },
      {
        items: {
          title: "8 hrs - $1000",
          time: "60 seconds teaser trailer",
          highlight: "Highlight reel (6-9 mins)",
          videographers: "1 Videographer"
        }
      },
      {
        items: {
          title: "6 hrs - $800",
          time: "60 seconds teaser trailer",
          highlight: "Highlight reel (6-9 mins)",
          videographers: "1 Videographer"
        }
      },
    ])

    const [vidoePricing2, setVideoPricing2] = useState([
      {
        items: {
          title: "10 hrs - $1400",
          time: "60 seconds teaser trailer",
          highlight: "Highlight reel (6-9 mins)",
          videographers: "2 Videographers"
        }
      },
      {
        items: {
          title: "8 hrs - $1200",
          time: "60 seconds teaser trailer",
          highlight: "Highlight reel (6-9 mins)",
          videographers: "2 Videographers"
        }
      },
      {
        items: {
          title: "6 hrs - $1000",
          time: "60 seconds teaser trailer",
          highlight: "Highlight reel (6-9 mins)",
          videographers: "2 Videographers"
        }
      },
    ])
  return (
    <>
      <Container className="pricing-news">
        <h3 className="pricing-header"> Good News First </h3>
        <Col>
          <Row className="justify-content-center">
            {
              news.map(price => {
                return (
                  <>
                  <Card style={{ width: "18rem" }}>
                    {price.icon}
                    <Card.Title>{price.title}</Card.Title>
                    <Card.Text>
                      {price.text}
                    </Card.Text>
                  </Card>
                  </>
                )
              })
            }
          </Row>
          </Col>
      </Container>
      <Container className="pricing-list">
        <Col>
          <h3 className="pricing-header"> Wedding Photography Pricing </h3>
          <h4>(Travel included up to 200 miles roundtrip)</h4>
          <h5>Wedding and Engagement</h5>
          <Row>
          {
            pricingOne.map(price => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Title>{price.items.title}</Card.Title>
                    <Card.Text>{price.items.time}</Card.Text>
                    <Card.Text>{price.items.photographers}</Card.Text>
                  </Card>
                </>
              )
            })
          }
          </Row>
          <h5>Wedding Only</h5>
          <Row>
          {
            pricingTwo.map(price => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Title>{price.items.title}</Card.Title>
                    <Card.Text>{price.items.time}</Card.Text>
                    <Card.Text>{price.items.photographers}</Card.Text>
                  </Card>
                </>
              )
            })
          }
          </Row>
          <h3 className="pricing-header">Wedding Videography Pricing</h3>
          <h4>(Travel included up to 200 miles roundtrip)</h4>
          <h5>Video Only</h5>
          <Row>
          {
            vidoePricing1.map(price => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Title>{price.items.title}</Card.Title>
                    <Card.Text>{price.items.time}</Card.Text>
                    <Card.Text>{price.items.highlight}</Card.Text>
                    <Card.Text>{price.items.videographers}</Card.Text>
                  </Card>
                </>
              )
            })
          }
          </Row>

          <Row>
          {
            vidoePricing2.map(price => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Title>{price.items.title}</Card.Title>
                    <Card.Text>{price.items.time}</Card.Text>
                    <Card.Text>{price.items.highlight}</Card.Text>
                    <Card.Text>{price.items.videographers}</Card.Text>
                  </Card>
                </>
              )
            })
          }
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default Pricing;
