import { ReactPhotoCollage } from "react-photo-collage";
import {Container} from "semantic-ui-react";
import "./Collage.css";


function Collage(props){
  return (
    <Container className="collage">
      <ReactPhotoCollage id="collage" width='1000px' height={['1000px', '170px']} layout={[1]} photos={props.content} showNumOfRemainingPhotos={true} />
    </Container>
  )
}

export default Collage;