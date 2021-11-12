import React, { useState } from 'react';
import { Container, Carousel, Col, Row } from 'react-bootstrap';
import PortfolioCard from './PortfolioCard';

export default function CardCarousel({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} indicators={false} controls={false} onSelect={handleSelect} fade >
        {data.allStrapiSkill.nodes.map(node => (
          <Carousel.Item>
            <Container className="d-flex justify-content-center" >
              <Row>
                <Col>
                  <PortfolioCard data={node} />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
  )
}