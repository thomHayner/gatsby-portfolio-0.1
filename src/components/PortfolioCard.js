import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function PortfolioCard({ data }) {
  return(
    <Row>
      <Col>
        <Card style={{ width: "224px", height: "400px", alignItems: "center", backgroundColor: "#363636", justifyContent: "center" }} >
          <Card.Title>{data.name}</Card.Title>
            <Card.Img src={data.img.localFile.url} style={{ width: "200px", height: "200px" }} />
          <Card.Body>{data.description}</Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

// export default function ServicesCard() {
//   return(
//     <div/>
//     <StaticQuery
//       query={graphql`
//         query portfolioCards {
//           allStrapiSkills {
//             nodes {
//               name
//               description
//             }
//           }
//         }
//       `}

//       render={data=> (
//         <Container>
//           <Card>

//           </Card>
//         </Container>
//       )}
//     />
//   )
// }
