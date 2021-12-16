import Home from "./components/pages/Home";
import Mudstagram from "./components/pages/Mudstagram";
import Mudazon from "./components/pages/Mudazon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./App.css";


function App() {
  return (
    <div className="OverlayBackground">
      <BrowserRouter>
        <Menu className="Menu" secondary>
          <a href="/">
          <Menu.Item className="Item"
            name='Home'/>
          </a>
          <a href="/#/mudstagram">
          <Menu.Item id="Mudstagram" className="Item"
            name="Mudstagram"
          />
          </a>
          <a href="/#/mudazon">
          <Menu.Item id="Mudazon" className="Item"
            name='Mudazon'
          />
          </a>

        </Menu>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="mudstagram" element={<Mudstagram/>} />
          <Route path="mudazon" element={<Mudazon/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
