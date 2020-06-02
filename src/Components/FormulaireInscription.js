import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import Axios from "axios"

export class Inscription extends Component {
  constructor(props){
    super(props);
    this.state={
      "nom":"",
      "nombreAdherents":1,
      "numerotpi": 1,
      "telephone": 1,
      "branche": "",
      "secteur": "",
      "province":"",
      "region":"",
      "fax":1,
      "adresseActuelle":"",
      "dateCreation":""


    }
  }

  suivant = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  changeHandler=e=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler=e=>{
    e.preventDefault()
    console.log(this.state)
    let token= "Bearer "+(JSON.parse(localStorage.getItem('tokens')).token)
    console.log(token)
    Axios.post("https://observatoire-aseds.herokuapp.com/Cooperatives/",this.state,{
      headers: { Authorization: token}
    })
    .then(response=>{
      if(response.status===200)
      alert("Coopérative bien inscrit sur notre site")
    })
    .catch(error=>{
      console.log(error)

    });

  }


  render() {
    var a = 3;
    var b = 9;
    const { values, inputChange } = this.props;

    return (
      <div>
        <h1 >Incription</h1>
        <br />
        <Form>
          <Form.Group as={Row} controlId="nom">
            <Form.Label column sm={a}>
              Nom Coopérative ou Union
            </Form.Label>
            <Col sm={b}>
              <Form.Control
                name="nom"
                onChange={this.changeHandler}
                placeholder="Nom coopérative"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="numeroTPI">
            <Form.Label column sm={a}>
              Numéro TPI
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="numéro TPI" name="numerotpi" type="number" onChange={this.changeHandler}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Nombre d'adhérent">
            <Form.Label column sm={a}>
              Nombre d'adhérent
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Nombre d'adhérent" name="nombreAdherents" type="number" onChange={this.changeHandler}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Branche">
            <Form.Label column sm={a}>
              Branche
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Branche" name="branche" onChange={this.changeHandler}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Province">
            <Form.Label column sm={a}>
              Province
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Province" name="province"onChange={this.changeHandler}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Région">
            <Form.Label column sm={a}>
              Région
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Région" name="region" onChange={this.changeHandler}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="secteurActivite">
            <Form.Label column sm={a}>
              Secteur d'Activité
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Secteur d'Activité" name="secteur" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="telephone">
            <Form.Label column sm={a}>
              Telephone
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Telephone" name="telephone" type="number" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="fax">
            <Form.Label column sm={a}>
              Fax
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Fax" name="fax" type="number" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Adresse actuelle">
            <Form.Label column sm={a}>
              Adresse actuelle
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="Adresse actuelle" name="adresseActuelle" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Date de Création">
            <Form.Label column sm={a}>
              Date de Création
            </Form.Label>
            <Col sm={b}>
              <Form.Control placeholder="2017-12-27" type="Date sd" name="dateCreation" onChange={this.changeHandler} />
            </Col>
          </Form.Group>

          <Button variant="primary" onClick={this.submitHandler} type="submit">
            Incription
          </Button>
        </Form>
      </div>

     
    );
  }
}
