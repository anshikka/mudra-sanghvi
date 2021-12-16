import { Header, Container } from "semantic-ui-react";
import ShoppingGrid from "../grid/ShoppingGrid";
import "./Mudazon.css";

function Mudstagram() {
  return (
    <Container id="mudazon-container">
      <Header id="mudazon-title" as="h1">
        Mudazon
      </Header>
      <ShoppingGrid/>

    </Container>
  );
}

export default Mudstagram;
