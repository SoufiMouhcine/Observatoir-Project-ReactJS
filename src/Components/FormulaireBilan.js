import React, { Component } from "react";
import { Passif } from "./FormulairePassif";
import { Actif } from "./FormulaireActif";
import { ProduitsEtCharges } from "./FormulaireProduitsEtCharges";
import { EtatSoldesGestion } from "./FormulaireEtatSoldesDeGestion";
import { ConfirmBilan } from "./FormulaireBilanConfirm";

export class Bilan extends Component {
    constructor(props) {
      super(props);

      this.state = {
        step: 1,
        CapitalActuel: "",
        ReservesLegales: "",
        AutresReserves: "",
        ReportAnouveau: "",
        ResultatsNetsInstanceApplication: "",
        SubventionsInvestissement: "",
        DetteFinancementLongTerme: "",
        DetteFinancementCourtTerme: "",
        FournisseursEtComptesRattaches: "",
        Personnel: "",
        OrganismesSociaux: "",
        Etat: "",
        ComptesAssociés: "",
        AutresCreanciers: "",
        Excedent: "",
        Deficit: "",
        TotalPassif: "",
        FraisPreliminaires: "",
        ImmobilisationsIncorporelles: "",
        Terrains: "",
        Constructions: "",
        InstallationsMaterielEtOutillage: "",
        MaterielTransport: "",
        AutresImmobilisationsCorporelles: "",
        MaterielEtImmobilierBureau: "",
        TotalImmobilisations: "",
        TotalStocks: "",
        Creances: "",
        Banque: "",
        Caisse: "",
        TotalActif: "",
        ChiffreAffaires: "",
        SubventionsExploitation: "",
        TransfertsDeCharge: "",
        AchatRevendusMarchandises: "",
        AchatsConsommesMatieresEtFournitures: "",
        AutresChargesExternes: "",
        ImpotsEtTaxes: "",
        TotalAchats: "",
        ChargesPersonnel: "",
        AutresCharges: "",
        ChargesFinacieres: "",
        DotationsExploitations: "",
        ProduitsCessionsImmobilisations: "",
        VenteMarchandisesEnLetat: "",
        AchatRevendusMarchandises2: "",
        VenteBienEtServicesProduits: "",
        VariationStockProduits: "",
        ImmobilisationsCooperatives: "",
        AutresChargesExternes2: "",
        MargeBruteSurVenteEnLetat: "",
        ProductionExercice: "",
        ConsommationExercice: "",
        ValeurAjoutee: "",
      };

           // Bind
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.inputChange = this.inputChange.bind(this);
      }

         

         nextStep = () => {
           const { step } = this.state
           this.setState({ step: step + 1 });
         };

         prevStep = () => {
           const { step } = this.state
           this.setState({ step: step - 1 });
         };

         inputChange = (input) => (e) => {
           this.setState({
             [input]: e.target.value,
           });
         };

         render() {
           const { step } = this.state;

           const {
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
             ValeurAjoutee
           } = this.state;

           const values = {
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
             ValeurAjoutee
           };

           switch (step) {
             case 1:
               return (
                 <Actif
                   nextStep={this.nextStep}
                   inputChange={this.inputChange}
                   values={values}
                 />
               );

             case 2:
               return (
                 <Passif
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   inputChange={this.inputChange}
                   values={values}
                 />
               );

             case 3:
               return (
                 <ProduitsEtCharges
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   inputChange={this.inputChange}
                   values={values}
                 />
               );
             case 4:
               return (
                 <EtatSoldesGestion
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   inputChange={this.inputChange}
                   values={values}
                 />
               );

             case 5:
               return (
                 <ConfirmBilan
                   nextStep={this.nextStep}
                   prevStep={this.prevStep}
                   values={values}
                 />
               );

             default:
               return <h2>DEFAULT WORKING</h2>;
           }
         }
       }
