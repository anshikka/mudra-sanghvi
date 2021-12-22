import Home from "./components/pages/Home";
import Mudstagram from "./components/pages/Mudstagram";
import Mudazon from "./components/pages/Mudazon";
import { Menu } from "semantic-ui-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [activeItem, setActiveItem] = useState("Home");

  if (activeItem === "Home") {
    return (
      <div className="OverlayBackground">
        
        <Menu className="Menu" secondary>
          <Menu.Item
            className="Item"
            name="Home"
            active={activeItem === "Home"}
            onClick={() => setActiveItem("Home")}
          />
          <Menu.Item
            id="Mudstagram"
            className="Item"
            name="Mudstagram"
            active={activeItem === "Mudstagram"}
            onClick={() => setActiveItem("Mudstagram")}
          />

          <Menu.Item
            id="Mudazon"
            className="Item"
            name="Mudazon"
            active={activeItem === "Mudazon"}
            onClick={() => setActiveItem("Mudazon")}
          />
        </Menu>

        <Home />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link href="http://fonts.cdnfonts.com/css/billabong" rel="stylesheet" />
        <link
          href="//db.onlinewebfonts.com/c/554eb51fb39e99ff974dc72a87720400?family=ITC+Officina+Sans"
          rel="stylesheet"
          type="text/css"
        />
      </div>
    );
  }
  if (activeItem === "Mudstagram") {
    return (
      <div className="OverlayBackground">
        <Menu className="Menu" secondary>
          <Menu.Item
            className="Item"
            name="Home"
            active={activeItem === "Home"}
            onClick={() => setActiveItem("Home")}
          />
          <Menu.Item
            id="Mudstagram"
            className="Item"
            name="Mudstagram"
            active={activeItem === "Mudstagram"}
            onClick={() => setActiveItem("Mudstagram")}
          />

          <Menu.Item
            id="Mudazon"
            className="Item"
            name="Mudazon"
            active={activeItem === "Mudazon"}
            onClick={() => setActiveItem("Mudazon")}
          />
        </Menu>

        <Mudstagram />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link href="http://fonts.cdnfonts.com/css/billabong" rel="stylesheet" />
        <link
          href="//db.onlinewebfonts.com/c/554eb51fb39e99ff974dc72a87720400?family=ITC+Officina+Sans"
          rel="stylesheet"
          type="text/css"
        />
      </div>
    );
  }
  if (activeItem === "Mudazon") {
    return (
      <div className="OverlayBackground">
        <Menu className="Menu" secondary>
          <Menu.Item
            className="Item"
            name="Home"
            active={activeItem === "Home"}
            onClick={() => setActiveItem("Home")}
          />
          <Menu.Item
            id="Mudstagram"
            className="Item"
            name="Mudstagram"
            active={activeItem === "Mudstagram"}
            onClick={() => setActiveItem("Mudstagram")}
          />

          <Menu.Item
            id="Mudazon"
            className="Item"
            name="Mudazon"
            active={activeItem === "Mudazon"}
            onClick={() => setActiveItem("Mudazon")}
          />
        </Menu>
        <Mudazon />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link href="http://fonts.cdnfonts.com/css/billabong" rel="stylesheet" />
        <link
          href="//db.onlinewebfonts.com/c/554eb51fb39e99ff974dc72a87720400?family=ITC+Officina+Sans"
          rel="stylesheet"
          type="text/css"
        />
      </div>
    );
  }
}

export default App;
