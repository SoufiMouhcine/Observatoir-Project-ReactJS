import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

export class ConfirmBilan extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };



  render() {

    const {
      values: {
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
        TotalActif,
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
        ProduitsCessionsImmobilisations,
        VenteMarchandisesEnLetat,
        AchatRevendusMarchandises2,
        VenteBienEtServicesProduits,
        VariationStockProduits,
        ImmobilisationsCooperatives,
        AutresChargesExternes2,
        MargeBruteSurVenteEnLetat,
        ProductionExercice,
        ConsommationExercice,
        ValeurAjoutee,
      },
    } = this.props;

    return (
        
      <div>
        <div className="form-container">
          <h1 className="mb-5">Passif</h1>,, , , , SubventionsInvestissement,
          DetteFinancementLongTerme, DetteFinancementCourtTerme,
          FournisseursEtComptesRattaches, Personnel, OrganismesSociaux, Etat,
          ComptesAssociés, AutresCreanciers, Excedent, Deficit, TotalPassif,
          FraisPreliminaires, ImmobilisationsIncorporelles, Terrains,
          Constructions, InstallationsMaterielEtOutillage, MaterielTransport,
          AutresImmobilisationsCorporelles, MaterielEtImmobilierBureau,
          TotalImmobilisations, TotalStocks, Creances, Banque, Caisse,
          TotalActif, ChiffreAffaires, SubventionsExploitation,
          TransfertsDeCharge, AchatRevendusMarchandises,
          AchatsConsommesMatieresEtFournitures, AutresChargesExternes,
          ImpotsEtTaxes, TotalAchats, ChargesPersonnel, AutresCharges,
          ChargesFinacieres, DotationsExploitations,
          ProduitsCessionsImmobilisations, VenteMarchandisesEnLetat,
          AchatRevendusMarchandises2, VenteBienEtServicesProduits,
          VariationStockProduits, ImmobilisationsCooperatives,
          AutresChargesExternes2, MargeBruteSurVenteEnLetat, ProductionExercice,
          ConsommationExercice, ValeurAjoutee
          <ul class="list-group">
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item"> ReservesLegales: {ReservesLegales}</li>
            <li class="list-group-item">AutresReserves: {AutresReserves}</li>
            <li class="list-group-item">ReportAnouveau: {ReportAnouveau}</li>
            <li class="list-group-item">
              ResultatsNetsInstanceApplication:{" "}
              {ResultatsNetsInstanceApplication}
            </li>

           <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
            <li class="list-group-item">CapitalActuel: {CapitalActuel}</li>
          </ul>
          <br />
          <div className="row">
            <div className="col-6">
              <button className="btn btn-danger" onClick={this.back}>
                Précedent
              </button>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-primary" onClick={this.continue}>
                Confirmer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
