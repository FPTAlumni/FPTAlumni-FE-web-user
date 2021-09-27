import { useEffect, useState } from "react";

import { getPic } from "../apis/endpoint/danbooru";
import logo from "../logo.svg";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  const [pics, setPics] = useState([]);

  async function getImg() {
    // const pic = await getPic();
    setPics(pic);
  }

  useEffect(() => {
    // getImg();
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <p className="white-text">Nyam IV</p>
          </Navbar.Brand>
          <Navbar.Toggle color="white" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <p className="white-text">Home</p>
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
      </Container>
      {/* {pics.map((img) => (
          <ul>
            <img src={img.file_url} />
          </ul>
        ))} */}
    </div>
  );
}

export default App;
