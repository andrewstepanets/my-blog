import { Navbar, Nav } from 'react-bootstrap'


function MainNav() {

    return (
        <Navbar
            className="as-navbar as-nav-base"
            bg="transparent"
            expand="lg" >
            <Navbar.Brand className="as-navbar-brand">
                <a href="#">Andrew Stepanets</a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link
                        className="as-navbar-item as-navbar-link"
                        href='/'>Home
          </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNav;