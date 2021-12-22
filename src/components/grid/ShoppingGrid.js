import { Grid } from "semantic-ui-react";
import ShoppingItem from "../cards/ShoppingItem";
import coach_purse from "../../assets/images/products/coach_purse.png";
import nike_shoes from "../../assets/images/products/af1.jpeg";
import cake from "../../assets/images/products/cake.jpeg";
import bbw from "../../assets/images/products/bbw.jpeg";
import sour_punch from "../../assets/images/products/sour_punch.jpeg";
import "./ShoppingGrid.css";

const productData = [
    {
      name: "Zip Around Wallet - Sikka Family Sponsored",
      brand: "Coach",
      description:
        "Signature coated canvas and smooth leather\nTwelve credit card slots\nFull-length bill compartments\nInside zip coin pocket\nZip-around closure\nDetachable wrist strap",
      image: coach_purse
    },
    {
        name: "Air Force 1s",
        brand: "Nike",
        description: "The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
        image: nike_shoes
    },
    {
        name: "Surprise Cake",
        brand: "Le Chocolat de Bouchard",
        description: "Le Chocolat de Bouchard patisserie features a variety of original desserts designed by a professional team of bakers! The cake will be a surprise.",
        image: cake
    },
    {
      name: "Bath and Body Works Gift Card",
      brand: "Bath and Body Works",
      description: "You were looking for that certian lotion that day. Here's a gift card to buy it.",
      image: bbw
    },
    {
      name: "Sour Punch",
      brand: "American Licorice Company",
      description: "Your favorite candy is always a must.",
      image: sour_punch
    }
   
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
