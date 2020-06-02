import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

export class EtatSoldesGestion extends Component {
         continue = (e) => {
           e.preventDefault();
           this.props.nextStep();
         };

         back = (e) => {
           e.preventDefault();
           this.props.prevStep();
         };

         /*
         values = [
           VenteMarchandisesEnLetat,
           AchatRevendusMarchandises2,
           VenteBienEtServicesProduits,
           VariationStockProduits,
           ImmobilisationsCooperatives,
           AutresChargesExternes2,
           MargeBruteSurVenteEnLetat,
           ProductionExercice,
           ConsommationExercice,
           ValeurAjoutee
         ];
*/
         render() {
           var a = 4;
           var b = 8;

           const { values, inputChange } = this.props;

           return (
             <div className="form-container">
               <h1 className="mb-5">Etat des soldes de Gestion</h1>

               <div className="form-group">
                 <label htmlFor="VenteMarchandisesEnLetat">
                   VenteMarchandisesEnLetat
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="VenteMarchandisesEnLetat"
                   onChange={inputChange("VenteMarchandisesEnLetat")}
                   value={values.VenteMarchandisesEnLetat}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="AchatRevendusMarchandises2">
                   AchatRevendusMarchandises
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="AchatRevendusMarchandises2"
                   onChange={inputChange("AchatRevendusMarchandises2")}
                   value={values.AchatRevendusMarchandises}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="VenteBienEtServicesProduits">
                   VenteBienEtServicesProduits
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="VenteBienEtServicesProduits"
                   onChange={inputChange("VenteBienEtServicesProduits")}
                   value={values.VenteBienEtServicesProduits}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="VariationStockProduits">
                   VariationStockProduits
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="VariationStockProduits"
                   onChange={inputChange("VariationStockProduits")}
                   value={values.VariationStockProduits}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="ImmobilisationsCooperatives">
                   ImmobilisationsCooperatives
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="ImmobilisationsCooperatives"
                   onChange={inputChange("ImmobilisationsCooperatives")}
                   value={values.ImmobilisationsCooperatives}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="AutresChargesExternes2">
                   AutresChargesExternes
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="AutresChargesExternes2"
                   onChange={inputChange("AutresChargesExternes2")}
                   value={values.AutresChargesExternes}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="MargeBruteSurVenteEnLetat">
                   MargeBruteSurVenteEnLetat
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="MargeBruteSurVenteEnLetat"
                   onChange={inputChange("MargeBruteSurVenteEnLetat")}
                   value={values.MargeBruteSurVenteEnLetat}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="ProductionExercice">ProductionExercice</label>
                 <input
                   type="text"
                   className="form-control"
                   name="ProductionExercice"
                   onChange={inputChange("ProductionExercice")}
                   value={values.ProductionExercice}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="ConsommationExercice">
                   ConsommationExercice
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="ConsommationExercice"
                   onChange={inputChange("ConsommationExercice")}
                   value={values.ConsommationExercice}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="ValeurAjoutee">ValeurAjoutee</label>
                 <input
                   type="text"
                   className="form-control"
                   name="ValeurAjoutee"
                   onChange={inputChange("ValeurAjoutee")}
                   value={values.ValeurAjoutee}
                 />
               </div>

               <div className="row">
                 <div className="col-6">
                   <button className="btn btn-danger" onClick={this.back}>
                     Précedent
                   </button>
                 </div>
                 <div className="col-6 text-right">
                   <button className="btn btn-primary" onClick={this.continue}>
                     Suivant
                   </button>
                 </div>
               </div>
             </div>

             /*
             <Form>
               <Form.Group as={Row} controlId="VenteMarchandisesEnLetat">
                 <Form.Label column sm={a}>
                   Ventes de marchandises en l'etat
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Ventes de marchandises en l'etat" />
                 </Col>
               </Form.Group>

               <Form.Group as={Row} controlId="AchatRevendusMarchandises">
                 <Form.Label column sm={a}>
                   Achat revendus de marchandises
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Achat revendus de marchandises" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="VenteBienEtServicesProduits">
                 <Form.Label column sm={a}>
                   Vente de biens et services produits
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Vente de biens et services produits" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="VariationStockProduits">
                 <Form.Label column sm={a}>
                   Variation stock de produits
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Variation stock de produits" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ImmobilisationsCooperatives">
                 <Form.Label column sm={a}>
                   Immobilisations produites par les coopératives
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Immobilisations produites par les coopératives" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="AutresChargesExternes">
                 <Form.Label column sm={a}>
                   Autres charges externes
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Autres charges externes" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="MargeBruteSurVenteEnLetat">
                 <Form.Label column sm={a}>
                   Marge brute sur vente en l'état (a-b)
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Marge brute sur vente en l'état" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ProductionExercice">
                 <Form.Label column sm={a}>
                   Production de l'exercice (c+d+e)
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder=" Production de l'exercice" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ConsommationExercice">
                 <Form.Label column sm={a}>
                   Consommation de l'exercice
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Consommation de l'exercice" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ValeurAjoutee">
                 <Form.Label column sm={a}>
                   Valeur ajoutée
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Valeur ajoutée" />
                 </Col>
               </Form.Group>
               <Button variant="primary" type="submit">
                 Submit
               </Button>
             </Form> */
           );
         }
       }
