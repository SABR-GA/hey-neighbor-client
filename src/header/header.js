import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import logo from "./../images/hey-neighbor-logo.png"
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar expand={false} collapseOnSelect={true}>
        <Container fluid>
          <Link to='/'><Navbar.Brand ><img src={logo}/></Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><h3>Menu</h3></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <LinkContainer to="/">
                  <Nav.Link><h4>Feed</h4></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/NewPost">
                  <Nav.Link><h4>New Post</h4></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/About">
                  <Nav.Link><h4>About</h4></Nav.Link>
                </LinkContainer>
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
<LinkContainer to="/PostPage">
                  <Nav.Link>New Post</Nav.Link>
                </LinkContainer>