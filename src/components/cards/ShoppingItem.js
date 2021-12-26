import { Card, Image, Item, Label } from "semantic-ui-react";
import prime from "../../assets/images/cards/prime.png";
import "./ShoppingItem.css";

const extra = (
  <Item.Extra>
    <Label icon="dollar sign" content="0" />
    <Image src={prime} size="tiny" spaced />
  </Item.Extra>
);
function ShoppingItem(props) {
  return (
    <Card
      className="product-card"
      image={props.content.image}
      header={props.content.name}
      meta={props.content.brand}
      description={props.content.description}
      extra={extra}
    />
  );
}

export default ShoppingItem;
