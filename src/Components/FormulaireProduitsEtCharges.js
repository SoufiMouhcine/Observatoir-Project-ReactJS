import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

export class ProduitsEtCharges extends Component {
         continue = (e) => {
           e.preventDefault();
           this.props.nextStep();
         };

         back = (e) => {
           e.preventDefault();
           this.props.prevStep();
         };

         /* values = [
           ChiffreAffaires,
           SubventionsExploitation,
           TransfertsDeCharge,
           AchatRevendusMarchandises,
           AchatsConsommesMatieresEtFournitures,
           AutresChargesExternes,
           ImpotsEtTaxes,
           TotalAchats,
           ChargesPersonnel,
           AutresCharges,
           ChargesFinacieres,
           DotationsExploitations,
           ProduitsCessionsImmobilisations
         ]; 
         
         */

         render() {
           var a = 4;
           var b = 8;

           const { values, inputChange } = this.props;

           return (
             <div className="form-container">
               <h1 className="mb-5">Produits Et Charges</h1>

               <div className="form-group">
                 <label htmlFor="ChiffreAffaires">ChiffreAffaires</label>
                 <input
                   type="text"
                   className="form-control"
                   name="ChiffreAffaires"
                   onChange={inputChange("ChiffreAffaires")}
                   value={values.ChiffreAffaires}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="SubventionsExploitation">
                   SubventionsExploitation
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="SubventionsExploitation"
                   onChange={inputChange("SubventionsExploitation")}
                   value={values.SubventionsExploitation}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="TransfertsDeCharge">TransfertsDeCharge</label>
                 <input
                   type="text"
                   className="form-control"
                   name="TransfertsDeCharge"
                   onChange={inputChange("TransfertsDeCharge")}
                   value={values.TransfertsDeCharge}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="AchatRevendusMarchandises">
                   AchatRevendusMarchandises
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="AchatRevendusMarchandises"
                   onChange={inputChange("AchatRevendusMarchandises")}
                   value={values.AchatRevendusMarchandises}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="AchatsConsommesMatieresEtFournitures">
                   AchatsConsommesMatieresEtFournitures
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="AchatsConsommesMatieresEtFournitures"
                   onChange={inputChange(
                     "AchatsConsommesMatieresEtFournitures"
                   )}
                   value={values.AchatsConsommesMatieresEtFournitures}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="AutresChargesExternes">
                   AutresChargesExternes
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="AutresChargesExternes"
                   onChange={inputChange("AutresChargesExternes")}
                   value={values.AutresChargesExternes}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="ImpotsEtTaxes">ImpotsEtTaxes</label>
                 <input
                   type="text"
                   className="form-control"
                   name="ImpotsEtTaxes"
                   onChange={inputChange("ImpotsEtTaxes")}
                   value={values.ImpotsEtTaxes}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="TotalAchats">TotalAchats</label>
                 <input
                   type="text"
                   className="form-control"
                   name="TotalAchats"
                   onChange={inputChange("TotalAchats")}
                   value={values.TotalAchats}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="ChargesPersonnel">ChargesPersonnel</label>
                 <input
                   type="text"
                   className="form-control"
                   name="ChargesPersonnel"
                   onChange={inputChange("ChargesPersonnel")}
                   value={values.ChargesPersonnel}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="AutresCharges">AutresCharges</label>
                 <input
                   type="text"
                   className="form-control"
                   name="AutresCharges"
                   onChange={inputChange("AutresCharges")}
                   value={values.AutresCharges}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="CChargesFinacieres">ChargesFinacieres</label>
                 <input
                   type="text"
                   className="form-control"
                   name="ChargesFinacieres"
                   onChange={inputChange("ChargesFinacieres")}
                   value={values.ChargesFinacieres}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="DotationsExploitations">
                   DotationsExploitations
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="DotationsExploitations"
                   onChange={inputChange("DotationsExploitations")}
                   value={values.DotationsExploitations}
                 />
               </div>

               <div className="form-group">
                 <label htmlFor="ProduitsCessionsImmobilisations">
                   ProduitsCessionsImmobilisations
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   name="ProduitsCessionsImmobilisations"
                   onChange={inputChange("ProduitsCessionsImmobilisations")}
                   value={values.ProduitsCessionsImmobilisations}
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
           );
           /*
           return (
             <Form>
               <Form.Group as={Row} controlId="ChiffreAffaires">
                 <Form.Label column sm={a}>
                   Chiffre d'affaires
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Chiffre d'affaires" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="SubventionsExploitation">
                 <Form.Label column sm={a}>
                   Subventions d'exploitation
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Subventions d'exploitation" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="TransfertsDeCharge">
                 <Form.Label column sm={a}>
                   Reprises d'exploitations: Transferts de Charges
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Transferts de Charges" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="AchatRevendusMarchandises">
                 <Form.Label column sm={a}>
                   Achats revendus de marchandises
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Achats revendus de marchandises" />
                 </Col>
               </Form.Group>
               <Form.Group
                 as={Row}
                 controlId="AchatsConsommesMatieresEtFournitures"
               >
                 <Form.Label column sm={a}>
                   Achats consommés de matières et fournitures
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Achats consommés de matières et fournitures" />
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
               <Form.Group as={Row} controlId="ImpotsEtTaxes">
                 <Form.Label column sm={a}>
                   Impôts et Taxes
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Impôts et Taxes" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="TotalAchats">
                 <Form.Label column sm={a}>
                   Total achats
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Total achats" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ChargesPersonnel">
                 <Form.Label column sm={a}>
                   Charges du personnel
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Charges du personnel" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="AutresCharges">
                 <Form.Label column sm={a}>
                   Autres charges
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Autres charges" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ChargesFinacieres">
                 <Form.Label column sm={a}>
                   Charges financières
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Charges financières" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="DotationsExploitations">
                 <Form.Label column sm={a}>
                   Dotations d'exploitation
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Dotations d'exploitation" />
                 </Col>
               </Form.Group>
               <Form.Group as={Row} controlId="ProduitsCessionsImmobilisations">
                 <Form.Label column sm={a}>
                   Produits de cessions d'immobilisations
                 </Form.Label>
                 <Col sm={b}>
                   <Form.Control placeholder="Produits de cessions d'immobilisations" />
                 </Col>
               </Form.Group>
               <Button variant="primary" type="submit">
                 Submit
               </Button>
             </Form>
           ); */
         }
       }
