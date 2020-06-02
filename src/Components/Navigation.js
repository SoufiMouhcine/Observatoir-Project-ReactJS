import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';


export class Navigation extends Component {

    render(){
        return (
          <Navbar fixedTop expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">Accueil</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown
                  title="L'Observatoire"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/Presentation">
                    Présentation
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/Actualités">
                    Actualités
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Evenements">
                    Événements
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Activités
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/publications">Publications</Nav.Link>
                <Nav.Link href="/statistiques">Statistiques</Nav.Link>
                <NavDropdown title="Coopératives" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/signUp">
                    Inscrire sa coopérative
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/logIn">
                    Se connecter
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/donneesGenerales">
                    Données Générales
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/inscription">
                    Formulaire inscription
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/bilan">Bilan</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Forum</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <Nav.Link href="/Partenariat">Partenariat</Nav.Link>
                <Nav.Link href="#deets">Apropos</Nav.Link>
                <Nav.Link eventKey={2} href="/Contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }


}
