import React, { Component } from "react";
import img from "./slider2.jpg";
import img1 from  '../img/logo.jpg';
import img2 from "../img/logo_pnud.jpg";
import img3 from "../img/logo_unicef.png";
import img4 from "../img/logo_unwomen.gif";
import img5 from "../img/logo_unfpa.jpg";
import img6 from "../img/nations-unies-maroc.png";

export class Partenariat extends Component {
    render(){
        return(
            <div>
                <div class="border">
                    <h1 class="contact">Partenariat</h1>
                </div><br/>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img class="imgActualités" src={img2} alt="actualité" />
                        </div>
                        <div class="col">
                            <h4>United Nations Program for Development</h4>
                        </div>
                    </div><br/>
                    <div class="row align-items-end">
                        <div class="col-md-12">
                            <a href="https://www.ma.undp.org/content/morocco/fr/home/morocco/fr/home.html">
                                <div class="border-part">
                                    <p class="part">PNUD</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img class="imgActualités" src={img3} alt="actualité" />
                        </div>
                        <div class="col">
                            <h4>The United Nations Fund for Children</h4>
                        </div>
                    </div><br/>
                    <div class="row align-items-end">
                        <div class="col-md-12">
                            <a href="http://www.unicef.org/morocco/french/">
                                <div class="border-part">
                                    <p class="part">UNICEF</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img class="imgActualités" src={img4} alt="actualité" />
                        </div>
                        <div class="col">
                            <h4>Nations Fund for Women</h4>
                        </div>
                    </div><br/>
                    <div class="row align-items-end">
                        <div class="col-md-12">
                            <a href="https://www.unwomen.org/en">
                                <div class="border-part">
                                    <p class="part">UNIFEM</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img class="imgActualités" src={img1} alt="actualité" />
                        </div>
                        <div class="col">
                            <h4>The World Bank</h4>
                        </div>
                    </div><br/>
                    <div class="row align-items-end">
                        <div class="col-md-12">
                            <a href="https://www.worldbank.org/">
                                <div class="border-part">
                                    <p class="part">The World Bank</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img class="imgActualités" src={img5} alt="actualité" />
                        </div>
                        <div class="col">
                            <h4>United Nations Fund for Population</h4>
                        </div>
                    </div><br/>
                    <div class="row align-items-end">
                        <div class="col-md-12">
                            <a href="http://www.morocco-unfpa.org/">
                                <div class="border-part">
                                    <p class="part">FNUAP</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-4">
                            <img class="imgActualités" src={img2} alt="actualité" />
                        </div>
                        <div class="col">
                            <h4>United Nations in Morocco</h4>
                        </div>
                    </div><br/>
                    <div class="row align-items-end">
                        <div class="col-md-12">
                            <a href="http://www.un.org.ma/spip.php?article2120">
                                <div class="border-part">
                                    <p class="part">United Nations in Morocco</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }
}