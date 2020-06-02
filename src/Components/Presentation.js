import React, { Component } from "react";
import img from "./slider2.jpg";
import {Image} from 'react-bootstrap';
export class Presentation extends Component {
    render() {
        return(
            <div>
                <h1 className="prese"> À propos de la plateforme </h1>
                <br/><br/>
                <h3 className="pres">CONTEXTE DU PROJET</h3><br/>
                <p className="para">
                  La Société financière internationale (SFI) a signé un accord de coopération avec l’Agence Marocaine de Développement de la Logistique (AMDL) 
                  en 2013, en vertu duquel la SFI fournira une assistance technique pour la conception et la mise en œuvre de la composante emploi-formation de 
                  l’Observatoire Marocain de la Compétitivité Logistique (OMCL). <br/><br/>La plateforme Emploi-Formation-Compétences (Plateforme-EFC) est le fruit de cet
                  accord de coopération. Elle s’inscrit dans le cadre de l’initiative « Education for Employment » (E4E) de la banque mondiale. E4E a pour but d’augmenter les opportunités des jeunes dans le monde arabe dans les domaines de l’éducation et de la formation professionnelle, en relevant ainsi le défi du chômage par la promotion de l’enseignement privé.
                </p>
                <br/>
                <h3 className="pres">OBJECTIFS DE LA PLATEFORME</h3><br/>
                <p className="para">
                La plateforme EFC est un instrument interactif qui collecte, analyse et met à disposition des acteurs du marché du travail et de la formation des informations diverses. Il se présente comme un portail web dont les objectifs sont les suivants :
                <br/><br/>
                  <ul>
                      <li>Améliorer l’adéquation entre l’offre et la demande au niveau de la formation et de l’emploi;</li>
                      <li>Améliorer l’employabilité des jeunes à travers un accès aisé à l’information;</li>
                      <li>Accompagner l’ensemble des parties prenantes du marché du travail et de la formation dans leurs prises de décisions;</li>
                      <li>Mettre à disposition des indicateurs clés facilitant la compréhension des tendances du secteur;</li>
                      <li>Donner accès à une plateforme encourageant les interactions entre les différents acteurs du marché du travail et de la formation.</li>
                  </ul>
                </p >
                <br/>
                <h3 className="pres">GRANDES ETAPES DU PROJET</h3><br/>
                <h4>Etape 1</h4>
                <ul className="para">
                    <li>Réalisation d’un diagnostic des besoins et attentes des différents acteurs de la plateforme;</li>
                    <li>Benchmark international des plateformes similaires;</li>
                    <li>Revue de l’existant en termes d’informations statistiques et des sources.</li>
                </ul><br/>
                <h4>Etape 2</h4>
                <ul className="para">
                    <li>Présentation des différents scénarios pour le business model et le modèle opérationnel de la plateforme.</li>
                </ul><br/>
                <h4>Etape 3</h4>
                <ul className="para">
                    <li>Conception et le développement ergonomique et fonctionnel de la plateforme;</li>
                    <li>Test et lancement de la plateforme.</li>
                </ul>
                <br/><br/><br/>


                


            </div>
        )
    }
}

