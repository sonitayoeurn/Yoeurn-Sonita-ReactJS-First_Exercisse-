import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Container>
        <Navbar expand="lg" style={{marginTop: "20px"}}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img style={{width: "70px", height: "70px", marginRight: "30px" }} src="https://istad.co/resources/img/logo_md.png"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                    <Nav.Link className='mynav' href="#home">Home</Nav.Link>
                    <Nav.Link className='mynav' href="#about">About</Nav.Link>
                    <NavDropdown className='mynav' title="Course" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#reactjs">ReactJs</NavDropdown.Item>
                        <NavDropdown.Item href="#java">Java Programming</NavDropdown.Item>
                        <NavDropdown.Item href="#blockchain">Blockchain</NavDropdown.Item>
                        <NavDropdown.Item href="#spring">SpringBoot</NavDropdown.Item>
                
                    </NavDropdown>
                    <Nav.Link className='mynav' href="#contact">
                    Contact Us
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Container>
  );
}

export default Navigation;