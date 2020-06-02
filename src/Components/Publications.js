import React, { Component } from "react";
import img from "./slider2.jpg";
export class Publications extends Component {

  state={
    pub1:{
      "id":1,
      "title":"artcile de qskjd kqjsd jhqsd",
      "date":2020,
      "image":img,
      "text":"Lots of text here...With "
    },
    pub2:{
      "id":1,
      "title":"delective sdqhak",
      "date":2020,
      "image":img,
      "text":"Lots of text here... one is taller than the other. To fix that, use a combination qsdsq qsd qsd qsdqssd qsdqsd qsd  "
    },
    pub3:{
      "id":1,
      "title":"rapport de mouhcine sur l'économie des coopératives",
      "date":2020,
      "image":img,
      "text":"Lots of text here...With"
    },
    pub4:{
      "id":1,
      "title":"delective sdqhak",
      "date":2020,
      "image":img,
      "text":" the other. To fix that, use a combination of a .clearfix and o"
    }
  }
  

  /*componentDidMount(){
    fetch('https...')
    .then((response) => {
      return response.json()
    })
    .then((result)=>{
      this.setState({pub: result})
      console.log(result)
    })
  }*/


  render() {
    return (
      
      <div className="container">
        <div class="container">
          <h1>Publications et Rapports</h1>
          <br/>
          <div class="row align-items-center justify-content-around">
            <div class="col-md-2.5">
              <span class="filtrer">Filtrez par :</span>
            </div>
            <div class="col-md-3">
              <select class="custom-select">
                <option selected>Date de publication</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="custom-select">
                <option selected>Région</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-3">
              <select class="custom-select">
                <option selected>Catégorie</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="col-md-2">
            <button type="button" class="btn btn-success">Valider</button>
            </div>
          </div>
          <br/><br/>
          <div class="row">
                <div class="col-md-3">
                  <div class="row">
                    <div class="col-md-8">
                      <a href="#">
                        <img class="img" src={this.state.pub1.image} title="voir l'article" alt="article" />
                        <p class="txt">
                          {this.state.pub1.title}<br/>
                          <span class="date">Date:{this.state.pub1.date}</span>
                        </p>
                      </a>
                    </div>
                    <div class="row align-items-end">
                      <div class="col-lg">
                        <a href="#">
                          <p class="lien">télecharger</p>
                          <br/><br/>
                        </a>
                      </div>
                    </div>   
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row">
                    <div class="col-md-8">
                      <a href="#">
                        <img class="img" src={this.state.pub1.image} title="voir l'article" alt="article" />
                        <p class="txt">
                          {this.state.pub2.title}<br/>
                          <span class="date">Date:{this.state.pub1.date}</span>
                        </p>
                      </a>
                    </div>
                    <div class="row align-items-end">
                      <div class="col-lg">
                        <a href="#">
                          <p class="lien">télecharger</p>
                          <br/><br/>
                        </a>
                      </div> 
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row">
                    <div class="col-md-8">
                      <a href="#">
                        <img class="img" src={this.state.pub1.image} title="voir l'article" alt="article" />
                        <p class="txt">
                          {this.state.pub3.title}<br/>
                          <span class="date">Date:{this.state.pub1.date}</span>
                        </p>
                      </a>
                    </div>
                    <div class="row align-items-end">
                      <div class="col-lg">
                        <a href="#">
                          <p class="lien">télecharger</p>
                          <br/><br/>
                        </a>
                      </div>
                    </div>   
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row">
                    <div class="col-md-8">
                      <a href="#">
                        <img class="img" src={this.state.pub1.image} title="voir l'article" alt="article" />
                        <p class="txt">
                          {this.state.pub2.title}<br/>
                          <span class="date">Date:{this.state.pub1.date}</span>
                        </p>
                      </a>
                    </div>
                    <div class="row align-items-end">
                      <div class="col-lg">
                        <a href="#">
                          <p class="lien">télecharger</p>
                          <br/><br/>
                        </a>
                      </div> 
                    </div>  
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="row">
                    <div class="col-md-8">
                      <a href="#">
                        <img class="img" src={this.state.pub1.image} title="voir l'article" alt="article" />
                        <p class="txt">
                          {this.state.pub4.title}<br/>
                          <span class="date">Date:{this.state.pub1.date}</span>
                        </p>
                      </a>
                    </div>
                    <div class="row align-items-end">
                      <div class="col-lg">
                        <a href="#">
                          <p class="lien">télecharger</p>
                          <br/><br/>
                        </a>
                      </div> 
                    </div>  
                  </div>
                </div>
                
                  
                  
                
              
              
              
            
         </div>     
        </div>
      </div>
    );
  }
}


