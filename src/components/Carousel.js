import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Carousel } from 'react-bootstrap';
import ServicesCard from './ServicesCard';

export default function CardCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <StaticQuery
      query={graphql`
        query projectCardDeck { 
          allStrapiSkill(sort: {fields: displayOrder, order: ASC}) { 
            nodes { 
              id 
              name 
              description 
              img { 
                localFile { 
                  url 
                } 
              } 
            } 
          } 
        } 
      `} 

      render={data => (
        <Container>
          <Carousel activeIndex={index} controls="false" onSelect={handleSelect()} fade >
            {data.allStrapiSkill.nodes.map(node => (
              <Carousel.Item>
                <ServicesCard data={node} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      )}
    />
  )
}
