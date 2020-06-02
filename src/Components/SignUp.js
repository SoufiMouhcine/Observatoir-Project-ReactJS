import React, { Component } from "react";
import axios from 'axios' 

import "../index.css"

export class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      "nomPresident":"",
      "userName":"",
      "telephonePresident":6,
      "password":""
    }
  }

  changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    axios.post("https://observatoire-aseds.herokuapp.com/register",this.state)
    .then(resonse=>{
      if(resonse.status===200)
      alert("Votre compte à été bien crée")
    })
    .catch(error=>
     {
      console.log(error)
      
    });
    
    }




  render() {
    const{nomPresident, userName, telephonePresident, password}=this.state
    return (
      <form>
        <h3>Créer le Compte de Votre Coopérative</h3><br/>

        <div className="form-group">
          <label>Nom du president</label>
          <input type="text" 
          className="form-control" 
          placeholder="nom" 
          name="nomPresident" 
          value={nomPresident} 
          onChange={this.changeHandler} 
          required/>
        </div>

        <div className="form-group">
          <label>username</label>
          <input type="text" className="form-control" 
          placeholder="username" 
          name="userName"
          value={userName} 
          onChange={this.changeHandler} 
          required/>
        </div>

        
        <div className="form-group">
          <label>Téléphone</label>
          <input type="number" 
          className="form-control" 
          placeholder="624 654 789" 
          name="telephonePresident" 
          onChange={this.changeHandler} 
          required/>
        </div>

        <div className="form-group">
          <label>adresse Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Entre votre adresse email"
            required
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Entrez votre mot de passe"
            value={password} 
            onChange={this.changeHandler} 
            name="password" required
          />
        </div>

        <div className="form-group">
          <label>Confirmation Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirmez votre mot de passe"
            required
          />
        </div><br/>

        <button type="Créer" className="btn btn-primary btn-block" onClick={this.submitHandler}>
          Créer Compte
        </button>
        <p className="forgot-password text-right">
          Déjà Enregistré ? <a href="/Login">Connectez-vous?</a>
        </p>
      </form>
    );
  }
}
