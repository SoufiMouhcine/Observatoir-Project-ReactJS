import React, { Component } from "react";
import img from "./slider2.jpg";
export class Actualités extends Component {
    render(){
        return(
            <div>
                <h1 className="act">Actualités</h1><br/><br/>
                <div class="row align-items-center justify-content-around">
                    <div class="underline">
                        <div class="row">
                            <div class="col-md-4">
                                <img class="imgActualités" src={img} alt="actualité" />
                            </div>
                            <div class="col-md-8">
                                <h4>Titre de l'actualité</h4>
                                <p>Le Groupe Moldtrans, un des principaux opérateurs espagnols de services internationaux de transport terrestre, maritime, aérien, national, logistique, équitable et douanier, annonce l'achèvement de l'absorption de MAT BCN, société spécialisée dans les services de transport terrestre avec le Maroc et la Tunisie.L'absorption est entrée en vigueur le 1er janvier 2018 et le personnel, les clients et les actifs de MAT BCN font désormais partie de la société MOLDTRANS SL appartenant au même groupe d'activités.</p>
                                <a class="lienActualités" href="#">Voir plus ></a><br/><br/>
                            </div>
                         </div>
                    </div><br/>
                    <div class="underline">
                        <div class="row">
                            <div class="col-md-4">
                                <img class="imgActualités" src={img} alt="actualité" />
                            </div>
                            <div class="col-md-8">
                                <h4>Titre de l'actualité</h4>
                                <p>Le Groupe Moldtrans, un des principaux opérateurs espagnols de services internationaux de transport terrestre, maritime, aérien, national, logistique, équitable et douanier, annonce l'achèvement de l'absorption de MAT BCN, société spécialisée dans les services de transport terrestre avec le Maroc et la Tunisie.L'absorption est entrée en vigueur le 1er janvier 2018 et le personnel, les clients et les actifs de MAT BCN font désormais partie de la société MOLDTRANS SL appartenant au même groupe d'activités.</p>
                                <a class="lienActualités" href="#">Voir plus ></a><br/><br/>
                            </div>
                         </div>
                    </div><br/>
                    <div class="underline">
                        <div class="row">
                            <div class="col-md-4">
                                <img class="imgActualités" src={img} alt="actualité" />
                            </div>
                            <div class="col-md-8">
                                <h4>Titre de l'actualité</h4>
                                <p>Le Groupe Moldtrans, un des principaux opérateurs espagnols de services internationaux de transport terrestre, maritime, aérien, national, logistique, équitable et douanier, annonce l'achèvement de l'absorption de MAT BCN, société spécialisée dans les services de transport terrestre avec le Maroc et la Tunisie.L'absorption est entrée en vigueur le 1er janvier 2018 et le personnel, les clients et les actifs de MAT BCN font désormais partie de la société MOLDTRANS SL appartenant au même groupe d'activités.</p>
                                <a class="lienActualités" href="#">Voir plus ></a><br/><br/>
                            </div>
                         </div>
                    </div><br/>
                    <div class="underline">
                        <div class="row">
                            <div class="col-md-4">
                                <img class="imgActualités" src={img} alt="actualité" />
                            </div>
                            <div class="col-md-8">
                                <h4>Titre de l'actualité</h4>
                                <p>Le Groupe Moldtrans, un des principaux opérateurs espagnols de services internationaux de transport terrestre, maritime, aérien, national, logistique, équitable et douanier, annonce l'achèvement de l'absorption de MAT BCN, société spécialisée dans les services de transport terrestre avec le Maroc et la Tunisie.L'absorption est entrée en vigueur le 1er janvier 2018 et le personnel, les clients et les actifs de MAT BCN font désormais partie de la société MOLDTRANS SL appartenant au même groupe d'activités.</p>
                                <a class="lienActualités" href="#">Voir plus ></a><br/><br/>
                            </div>
                         </div>
                    </div><br/>

                </div>
            </div>
        )
    }
}