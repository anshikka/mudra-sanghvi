import { Grid } from "semantic-ui-react";
import ShoppingItem from "../cards/ShoppingItem";
import coach_purse from "../../assets/images/products/coach_purse.png";
import nike_shoes from "../../assets/images/products/af1.jpeg";
import champagne from "../../assets/images/products/champagne.png";
import bbw from "../../assets/images/products/bbw.jpeg";
import target from "../../assets/images/products/target.jpeg";
import chicago from "../../assets/images/products/chicago.jpeg";
import "./ShoppingGrid.css";

const productData = [
  {
    name: "Air Force 1s",
    brand: "Nike",
    description:
      "The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    image: nike_shoes,
  },
  {
    name: "Zip Around Wallet - Sikka Family Sponsored",
    brand: "Coach",
    description:
      "Signature coated canvas and smooth leather\nTwelve credit card slots\nFull-length bill compartments\nInside zip coin pocket\nZip-around closure\nDetachable wrist strap",
    image: coach_purse,
  },
  {
    name: "Bath and Body Works Gift Card",
    brand: "Bath and Body Works",
    description:
      "You were looking for that certian lotion that day. Here's a gift card to buy it.",
    image: bbw,
  },
  {
    name: "Sour Punch and Other Small Gifts",
    brand: "Target",
    description: "Your favorite candy and things are always a must.",
    image: target,
  },
  {
    name: "Champagne",
    brand: "Any Brand!",
    description:
      "Since you couldn't do this on your 21st, you'll be popping this on your 22nd!",
    image: champagne,
  },
  {
    name: "A Day Out in The City",
    brand: "Chicago Downtown",
    description:
      "Let's go out to celebrate your 22nd birthday! The city of Chicago will never cease to entertain us!",
    image: chicago,
  },
];

const products = productData.map((product) => (
  <Grid.Column>
    <ShoppingItem content={product} />
  </Grid.Column>
));
function ShoppingGrid() {
  return (
    <Grid container columns={3}>
      {products}
    </Grid>
  );
}

export default ShoppingGrid;
