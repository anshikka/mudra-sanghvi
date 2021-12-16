import { Header, Container } from "semantic-ui-react";
import ImageFeed from "../feed/ImageFeed";
import "./Mudstagram.css";

function Mudstagram() {
  return (
    <Container>
      <Header id="mudstagram-title" as="h1">
        Mudstagram
      </Header>
      <iframe
        src="https://open.spotify.com/embed/track/15tHagkk8z306XkyOHqiip?theme=0"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <ImageFeed id="image-feed" />
    </Container>
  );
}

export default Mudstagram;
