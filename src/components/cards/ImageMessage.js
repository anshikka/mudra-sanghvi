import { Card, Container, Icon } from "semantic-ui-react";
import Collage from "../image/Collage";
import "./ImageMessage.css"

function ImageMessage(props) {
  return (
    <Card className="card" fluid>
      <Card.Content>
        <Card.Header className="name">{props.content.name}</Card.Header>
      </Card.Content>
      <Card.Content>
          <Container>
      <Collage content={props.content.pictures} />
      </Container>
      </Card.Content>
      <Card.Content>
        <Card.Description className="message">{props.content.message}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="like" size="large"/>
          122799 Likes
        </a>
      </Card.Content>
    </Card>
  );
}

export default ImageMessage;
