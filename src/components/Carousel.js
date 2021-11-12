import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Carousel } from 'react-bootstrap';
import ServicesCard from './ServicesCard';

export default function CardCarousel({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} controls="false" onSelect={handleSelect()} fade >
        {data.allStrapiSkill.nodes.map(node => (
          <Carousel.Item>
            <ServicesCard data={node} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}
