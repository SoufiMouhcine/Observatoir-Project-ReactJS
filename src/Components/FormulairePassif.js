import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

export class Passif extends Component {
         continue = (e) => {
           e.preventDefault();
           this.props.nextStep();
         };

         back = (e) => {
           e.preventDefault();
           this.props.prevStep();
         };

        /* values = [
           CapitalActuel,
           ReservesLegales,
           AutresReserves,
           ReportAnouveau,
           ResultatsNetsInstanceApplication,
           SubventionsInvestissement,
           DetteFinancementLongTerme,
           DetteFinancementCourtTerme,
           FournisseursEtComptesRattaches,
           Personnel,
           OrganismesSociaux,
           Etat,
           ComptesAssociés,
           AutresCreanciers,
           Excedent,
           Deficit,
           TotalPassif,
         ];

        

         */

         render() {
           var a = 4;
           var b = 8;
           const { values, inputChange } = this.props;

           return (
             <div>
               <div className="form-container">
                 <h1 className="mb-5">Passif</h1>
                 <div className="form-group">
                   <label htmlFor="CapitalActuel">CapitalActuel</label>
                   <input
                     type="text"
                     className="form-control"
                     name="CapitalActuel"
                     onChange={inputChange("CapitalActuel")}
                     value={values.CapitalActuel}
                   />
                 </div>
                 <div className="form-group">
                   <label htmlFor="ReservesLegales">ReservesLegales</label>
                   <input
                     type="email"
                     className="form-control"
                     name="ReservesLegales"
                     onChange={inputChange("ReservesLegales")}
                     value={values.ReservesLegales}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="AutresReserves"> AutresReserves</label>
                   <input
                     type="text"
                     className="form-control"
                     name="AutresReserves"
                     onChange={inputChange("AutresReserves")}
                     value={values.AutresReserves}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor=" ReportAnouveau"> ReportAnouveau</label>
                   <input
                     type="text"
                     className="form-control"
                     name="ReportAnouveau"
                     onChange={inputChange("ReportAnouveau")}
                     value={values.ReportAnouveau}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="ResultatsNetsInstanceApplication">
                     ResultatsNetsInstanceApplication
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     name="ResultatsNetsInstanceApplication"
                     onChange={inputChange("ResultatsNetsInstanceApplication")}
                     value={values.ResultatsNetsInstanceApplication}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="SubventionsInvestissement">
                     SubventionsInvestissement
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     name="SubventionsInvestissement"
                     onChange={inputChange("SubventionsInvestissement")}
                     value={values.SubventionsInvestissement}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="DetteFinancementLongTerme">
                     DetteFinancementLongTerme
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     name="DetteFinancementLongTerme"
                     onChange={inputChange("DetteFinancementLongTerme")}
                     value={values.DetteFinancementLongTerme}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="DetteFinancementCourtTerme">
                     DetteFinancementCourtTerme
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     name="DetteFinancementCourtTerme"
                     onChange={inputChange("DetteFinancementCourtTerme")}
                     value={values.DetteFinancementCourtTerme}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="FournisseursEtComptesRattaches">
                     FournisseursEtComptesRattaches
                   </label>
                   <input
                     type="text"
                     className="form-control"
                     name="FournisseursEtComptesRattaches"
                     onChange={inputChange("FournisseursEtComptesRattaches")}
                     value={values.FournisseursEtComptesRattaches}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="Personnel">Personnel</label>
                   <input
                     type="text"
                     className="form-control"
                     name="Personnel"
                     onChange={inputChange("Personnel")}
                     value={values.Personnel}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="OrganismesSociaux">OrganismesSociaux</label>
                   <input
                     type="text"
                     className="form-control"
                     name="OrganismesSociaux"
                     onChange={inputChange("OrganismesSociaux")}
                     value={values.OrganismesSociaux}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="Etat">Etat</label>
                   <input
                     type="text"
                     className="form-control"
                     name="Etat"
                     onChange={inputChange("Etat")}
                     value={values.Etat}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor=" ComptesAssociés"> ComptesAssociés</label>
                   <input
                     type="text"
                     className="form-control"
                     name=" ComptesAssociés"
                     onChange={inputChange(" ComptesAssociés")}
                     value={values.ComptesAssociés}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="AutresCreanciers">AutresCreanciers</label>
                   <input
                     type="text"
                     className="form-control"
                     name="AutresCreanciers"
                     onChange={inputChange("AutresCreanciers")}
                     value={values.AutresCreanciers}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="Excedent">Excedent</label>
                   <input
                     type="text"
                     className="form-control"
                     name="Excedent"
                     onChange={inputChange("Excedent")}
                     value={values.Excedent}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="Deficit">Deficit</label>
                   <input
                     type="text"
                     className="form-control"
                     name="Deficit"
                     onChange={inputChange("Deficit")}
                     value={values.Deficit}
                   />
                 </div>

                 <div className="form-group">
                   <label htmlFor="TotalPassif">TotalPassif</label>
                   <input
                     type="text"
                     className="form-control"
                     name="TotalPassif"
                     onChange={inputChange("TotalPassif")}
                     value={values.TotalPassif}
                   />
                 </div>

                 <br />

                 <div className="row">
                   <div className="col-6">
                     <button className="btn btn-danger" onClick={this.back}>
                       Précedent
                     </button>
                   </div>
                   <div className="col-6 text-right">
                     <button
                       className="btn btn-primary"
                       onClick={this.continue}
                     >
                       Suivant
                     </button>
                   </div>
                 </div>
                 
               </div>
             </div>
             /*
             <Form>
               <Form.Group as={Row} controlId="CapitalActuel">
                 <Form.Label column sm={a}>
                   Capital Actuel
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Capital Actuel" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="ReservesLegales">
                 <Form.Label column sm={a}>
                   Réserves Légales
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Réserves Légales" />
                 </Col>
               </Form.Group>

               AutresReserves, ReportAnouveau, ResultatsNetsInstanceApplication, SubventionsInvestissement,DetteFinancementLongTerme,
              DetteFinancementCourtTerme, FournisseursEtComptesRattaches, Personnel, OrganismesSociaux, Etat, ComptesAssociés,
               AutresCreanciers, Excedent, Deficit, TotalPassif

               <Form.Group as={Row} controlId="AutresReserves">
                 <Form.Label column sm={a}>
                   Autres Réserves
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Autres Réserves" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="ReportAnouveau">
                 <Form.Label column sm={a}>
                   Report à Nouveau
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Report à Nouveau" />
                 </Col>
               </Form.Group>

               <Form.Group
                 as={Row}
                 controlId="ResultatsNetsInstanceApplication"
               >
                 <Form.Label column sm={a}>
                   Resultats nets en isntance d'affectation
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Resultats nets en isntance d'affectation" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="SubventionsInvestissement">
                 <Form.Label column sm={a}>
                   Subventions d'ivestissement
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Subventions d'ivestissement" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="DetteFinancementLongTerme">
                 <Form.Label column sm={a}>
                   Dette de financement à long terme
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Dette de financement à long terme" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="DetteFinancementCourtTerme">
                 <Form.Label column sm={a}>
                   Dette de financement à court terme
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Dette de financement à court terme" />
                 </Col>
               </Form.Group>


               <Form.Group as={Row} controlId="FournisseursEtComptesRattaches">
                 <Form.Label column sm={a}>
                   Fournisseurs et Comptes Rattachés
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Fournisseurs et Comptes Rattachés" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Personnel">
                 <Form.Label column sm={a}>
                   Personnel
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Personnel" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="OrganismesSociaux">
                 <Form.Label column sm={a}>
                   Organismes Sociaux
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Organismes Sociaux" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Etat">
                 <Form.Label column sm={a}>
                   Etat
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Etat" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="ComptesAssociés">
                 <Form.Label column sm={a}>
                   Comptes Associés
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Comptes Associés" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="AutresCreanciers">
                 <Form.Label column sm={a}>
                   Autres Créanciers
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Autres Créanciers" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Excedent">
                 <Form.Label column sm={a}>
                   Excedent
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Excedent" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="Deficit">
                 <Form.Label column sm={a}>
                   Déficit
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Déficit" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="TotalPassif">
                 <Form.Label column sm={a}>
                   Total Passif
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Total Passif" />
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
