import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

import {Accueil} from "./Components/Accueil";

import {Publications} from "./Components/Publications";
import {Presentation} from "./Components/Presentation";
import {Actualités} from "./Components/Actualités";
import {Evenements} from "./Components/Evenements";
import {Contact} from "./Components/Contact";
import {ContactRep} from "./Components/ContactRep";
import {Partenariat} from "./Components/Partenariat";

import {Statistiques} from "./Components/Statistiques";
import {Navigation} from './Components/Navigation';
import {Footer} from "./Components/Footer";
import {PubSlider} from "./Components/PubSlider";

import {Inscription} from "./Components/FormulaireInscription";
import {Bilan} from "./Components/FormulaireBilan";
import {DonneesGenerales} from "./Components/FormulaireDonneesGenerales";
import SocialFollow from "./Components/ReseauxSociaux";

import Login from "./Components/LogIn";
import {SignUp} from "./Components/SignUp";
import Slideshow from './Slider';


import { AuthContext } from "./Components/Authentification/auth";
import PrivateRoute from "./Components/Authentification/PrivateRoute";


function App(props)  {
 
  
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = React.useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);}
  

    return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <BrowserRouter>
          <SocialFollow />
          <Navigation />
          <br />
          <div className="container">
            <Switch>
              <Route path="/" component={Accueil} exact />
              <Route path="/publications" component={Publications} />
              <Route path="/statistiques" component={Statistiques} />
              <PrivateRoute path="/inscription" component={Inscription} />
              <PrivateRoute
                path="/donneesGenerales"
                component={DonneesGenerales}
              />
              <PrivateRoute path="/bilan" component={Bilan} />
              <Route path="/signUp" component={SignUp} />
              <Route path="/logIn" component={Login} />
              <Route path="/Presentation" component={Presentation} />
              <Route path="/Actualités" component={Actualités} />
              <Route path="/Evenements" component={Evenements} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Partenariat" component={Partenariat} />
              <Route path="/ContactRep" component={ContactRep} />
            </Switch>

            <h3>
              {" "}
              <br />
              Observatoire National des Coopératives
            </h3>
          </div>
          <PubSlider />
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    );

}

export default App ;
