import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

export class DonneesGenerales extends Component {
  render() {
    var a = 4;
    var b = 8;
    return (
      <div>
        <h1>Formulaire Données Générales</h1>
        <br />
        <Form>
          <Form.Group as={Row} controlId="active">
            <Form.Label column sm={a}>
              Active
            </Form.Label>
            <Form.Check sm={b} type="switch" id="custom-switch" label="" />
          </Form.Group>

          <Form.Group as={Row} controlId="AdhrentsTravailleursPermanents">
            <Form.Label column sm={a}>
              Adhérents Travailleurs Permanents
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Adhérents Travailleurs Permanents" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="AdhrentsFemmesTravailleuresPermanentes"
          >
            <Form.Label column sm={a}>
              Adhérents Femmes Travailleures Permanentes
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Adhérents Femmes Travailleures Permanentes" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="AdhrentsTravailleursSaisonniers">
            <Form.Label column sm={a}>
              Adhérents Travailleurs Saisonniers
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Adhérents Travailleurs Saisonniers" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="AdhrentsFemmesTravailleuresSaisonnieres"
          >
            <Form.Label column sm={a}>
              Adhérents Femmes Travailleures Saisonnières
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Adhérents Femmes Travailleures Saisonnières" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="SalariesPermanents">
            <Form.Label column sm={a}>
              Salariés Permanents
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Salariés Permanents" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="SalariesFemmesPermanentes">
            <Form.Label column sm={a}>
              Salariés Femmes Permanentes
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder=" Salariés Femmes Permanentes" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="SalariesFemmesSaisonnieres">
            <Form.Label column sm={a}>
              Salariés Femmes Saisonniers
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Salariés Femmes Saisonniers" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="TenueReguliereAssemblees">
            <Form.Label column sm={a}>
              Tenue regulière des assemblées
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="DerniereAGannuelle">
            <Form.Label column sm={a}>
              Dernière AG annuelle
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Dernière AG annuelle" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="nomComissaireAuxComptes">
            <Form.Label column sm={a}>
              Nom du Comissaire aux Comptes
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Nom du Comissaire aux Comptes" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="telephoneComissaireAuxComptes">
            <Form.Label column sm={a}>
              Téléphone du Comissaire aux Comptes
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Téléphone du Comissaire aux Comptes" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="adresseComissaireAuxComptes">
            <Form.Label column sm={a}>
              Adresse du Comissaire aux Comptes
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Adresse du Comissaire aux Comptes" />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
