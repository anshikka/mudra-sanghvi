import { Container, Image } from "semantic-ui-react";
import TextLoop from "react-text-loop";
import mudra_nonu from "../../assets/images/mudra/mudra_nonu.png";
import "./Home.css";

function Home() {
  return (
    <Container className="home">
      <Container className="title" fluid>
        <TextLoop texinterval={2000}>
          <span>Hi </span>
          <span>Happy Birthday</span>
          <span>T-Swift Says You're 22</span>
          <span>This One is For You</span>
        </TextLoop>{" "}
        Mudra
      </Container>

      <Container className="main_image">
        <Image src={mudra_nonu} fluid />
      </Container>
    </Container>
  );
}

export default Home;
