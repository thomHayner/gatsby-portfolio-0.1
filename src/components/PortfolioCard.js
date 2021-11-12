import React from "react";
import { Card } from "react-bootstrap";

export default function PortfolioCard({ data }) {
  return(
    <Card style={{ width: "512px", height: "512px", alignItems: "center", backgroundColor: "#363636", justifyContent: "center" }} >
      <Card.Title>{data.name}</Card.Title>
        <Card.Img src={data.img.localFile.url} style={{ width: "200px", height: "200px" }} />
      <Card.Body>{data.description}</Card.Body>
    </Card>
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
