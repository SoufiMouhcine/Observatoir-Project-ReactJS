import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

export class Actif extends Component {
         constructor(props) {
           super(props);
           this.continuer = this.continuer.bind(this);
         }

         continuer = (e) => { 
           
           e.preventDefault();
           this.props.nextStep();
           console.log("tapped");
         };

         /*values = [
           FraisPreliminaires,
           ImmobilisationsIncorporelles,
           Terrains,
           Constructions,
           InstallationsMaterielEtOutillage,
           MaterielTransport,
           AutresImmobilisationsCorporelles,
           MaterielEtImmobilierBureau,
           TotalImmobilisations,
           TotalStocks,
           Creances,
           Banque,
           Caisse,
           TotalActif
         ];  */

         sayHello() {
           alert("Hello!");
         }

         render() {
           var a = 4;
           var b = 8;
           const { values, inputChange } = this.props;

           return (
             <div className="form-container">
               <h1 className="mb-5">Actif</h1>

               <div className="form-group">
                 <label htmlFor="FraisPreliminaires">FraisPreliminaires</label>
                 <input
                   type="text"
                   className="form-control"
                   name="FraisPreliminaires"
                   onChange={inputChange("FraisPreliminaires")}
                   value={values.FraisPreliminaires}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="ImmobilisationsIncorporelles">
                   ImmobilisationsIncorporelles
                 </label>
                 <input
                   type="email"
                   className="form-control"
                   name="ImmobilisationsIncorporelles"
                   onChange={inputChange("ImmobilisationsIncorporelles")}
                   value={values.ImmobilisationsIncorporelles}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="Terrains">Terrains</label>
                 <input
                   type="text"
                   className="form-control"
                   name="Terrains"
                   onChange={inputChange("Terrains")}
                   value={values.Terrains}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="Constructions">Constructions</label>
                 <input
                   type="text"
                   className="form-control"
                   name="Constructions"
                   onChange={inputChange("Constructions")}
                   value={values.Constructions}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="InstallationsMaterielEtOutillage">
                   InstallationsMaterielEtOutillage
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="InstallationsMaterielEtOutillage"
                   onChange={inputChange("InstallationsMaterielEtOutillage")}
                   value={values.InstallationsMaterielEtOutillage}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor=" MaterielTransport"> MaterielTransport</label>
                 <input
                   type="text"
                   className="form-control"
                   name=" MaterielTransport"
                   onChange={inputChange(" MaterielTransport")}
                   value={values.MaterielTransport}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="AutresImmobilisationsCorporelles">
                   AutresImmobilisationsCorporelles
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="AutresImmobilisationsCorporelles"
                   onChange={inputChange("AutresImmobilisationsCorporelles")}
                   value={values.AutresImmobilisationsCorporelles}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="MaterielEtImmobilierBureau">
                   MaterielEtImmobilierBureau
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="MaterielEtImmobilierBureau"
                   onChange={inputChange("MaterielEtImmobilierBureau")}
                   value={values.MaterielEtImmobilierBureau}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="TotalImmobilisations">
                   TotalImmobilisations
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="TotalImmobilisations"
                   onChange={inputChange("TotalImmobilisations")}
                   value={values.TotalImmobilisations}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="TotalStocks">TotalStocks</label>
                 <input
                   type="text"
                   className="form-control"
                   name="TotalStocks"
                   onChange={inputChange("TotalStocks")}
                   value={values.TotalStocks}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="Creances">Creances</label>
                 <input
                   type="text"
                   className="form-control"
                   name="Creances"
                   onChange={inputChange("Creances")}
                   value={values.Creances}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="Caisse">Caisse</label>
                 <input
                   type="text"
                   className="form-control"
                   name="Caisse"
                   onChange={inputChange("Caisse")}
                   value={values.Caisse}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="Banque">Banque</label>
                 <input
                   type="text"
                   className="form-control"
                   name="Banque"
                   onChange={inputChange("Banque")}
                   value={values.Banque}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="TotalActif">TotalActif</label>
                 <input
                   type="text"
                   className="form-control"
                   name="Banque"
                   onChange={inputChange("TotalActif")}
                   value={values.TotalActif}
                   placeholder="Total Actif"
                 />
               </div>

               <br />

               <div className="text-right">
                 <button className="btn btn-primary" onClick={this.continuer}>
                   Suivant
                 </button>
               </div>
             </div>

             /*
             <Form>
               <Form.Group as={Row} controlId="FraisPreliminaires">
                 <Form.Label column sm={a}>
                   Frais Préliminaires
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Frais Préliminaires" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="ImmobilisationsIncorporelles">
                 <Form.Label column sm={a}>
                   Immobilisations Incorporelles
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Immobilisations Incorporelles" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Terrains">
                 <Form.Label column sm={a}>
                   Terrains
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Terrains" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Constructions">
                 <Form.Label column sm={a}>
                   Constructions
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Constructions" />
                 </Col>
               </Form.Group>

               <Form.Group
                 as={Row}
                 controlId="InstallationsMaterielEtOutillage"
               >
                 <Form.Label column sm={a}>
                   Installations Matériel Et Outillage
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Installations Matériel Et Outillage" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="MaterielTransport">
                 <Form.Label column sm={a}>
                   Matériel Transport
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Matériel Transport" />
                 </Col>
               </Form.Group>

               <Form.Group
                 as={Row}
                 controlId="AutresImmobilisationsCorporelles"
               >
                 <Form.Label column sm={a}>
                   Autres Immobilisations Corporelles
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control
                     placeholder="Autres Immobilisations Corporelles 
          </Form.Label>"
                   />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="MaterielEtImmobilierBureau">
                 <Form.Label column sm={a}>
                   Matériel et immoilié de Bureau
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Matériel et immoilié de Bureau" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="TotalImmobilisations">
                 <Form.Label column sm={a}>
                   Total Immobilisations
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Total Immobilisations" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="TotalStocks">
                 <Form.Label column sm={a}>
                   Total Stocks
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Total Stocks" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Creances">
                 <Form.Label column sm={a}>
                   Créances
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Créances" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Banque">
                 <Form.Label column sm={a}>
                   Banque
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Banque" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Caisse">
                 <Form.Label column sm={a}>
                   Caisse
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Caisse" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="TotalActif">
                 <Form.Label column sm={a}>
                   Total Actif
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Total Actif" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="">
                 <Form.Label column sm={a}></Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="" />
                 </Col>
               </Form.Group>

               <Button variant="primary" type="submit">
                 Submit
               </Button>
             </Form>
             */
           );
         }
       }
