import React, { useState } from "react";
import './FalseFriendsCard.css';
import { Link } from 'react-router-dom';


function FalseFriendsHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>False Friends</h1>
  </header>
  )
}


const FalseFriendsCard = ({ falsefriendscard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h2>{falsefriendscard.word1}</h2>
              </div>    
              <div className="back">
              <h4>{falsefriendscard.word2}</h4>
              
              </div>
            </div>
        </div>
      
    )
  }

  const FalseFriendsList = ({ falsefriendscards }) => {

    return (
        <div className="card-container">
            {falsefriendscards.map(falsefriendscard =>{
                return <FalseFriendsCard falsefriendscard = {falsefriendscard} key={falsefriendscard.id} />
            })}
        </div>
    )
}

const falsefriends_cards = [
    {"id":1,"word1":"signature","word2":"firma"},
    {"id":2,"word1":"asignatura","word2":"subject"}, 
    {"id":3,"word1":"pretend","word2":"fingir"},
    {"id":4,"word1":"pretender","word2":"aim, attempt"},
    {"id":5,"word1":"realize","word2":"darse cuenta"},
    {"id":6,"word1":"realizar","word2":"achieve, perform, fulfill"},
    {"id":7,"word1":"constipated","word2":"estreñido"},
    {"id":8,"word1":"constipado","word2":"a cold"},
    {"id":9,"word1":"embarrassed","word2":"avergonzado"},
    {"id":10,"word1":"embarazada","word2":"pregnant"},
    {"id":11,"word1":"jam","word2":"mermelada"},
    {"id":12,"word1":"jamón","word2":"ham"},
    {"id":13,"word1":"compromise","word2":"acuerdo, consenso"},
    {"id":14,"word1":"compromiso","word2":"commitment"},
    {"id":15,"word1":"actual (English)","word2":"real, verdadero"},
    {"id":16,"word1":"actual (Spanish)","word2":"current"},
    {"id":17,"word1":"assist","word2":"ayudar"},
    {"id":18,"word1":"asistir","word2":"to attend"},
    {"id":19,"word1":"carpet","word2":"alfombra"},
    {"id":20,"word1":"carpeta","word2":"folder"},
    {"id":21,"word1":"exit","word2":"salida"},
    {"id":22,"word1":"éxito","word2":"success"},
    {"id":23,"word1":"fabric","word2":"tela"},
    {"id":24,"word1":"fábrica","word2":"factory"},
    {"id":25,"word1":"library","word2":"biblioteca"},
    {"id":26,"word1":"librería","word2":"bookstore"},
    {"id":27,"word1":"sane","word2":"cuerdo"},
    {"id":28,"word1":"sano","word2":"healthy"},
    {"id":29,"word1":"soap","word2":"jabón"},
    {"id":30,"word1":"sopa","word2":"soup"},
    {"id":31,"word1":"record","word2":"grabar"},
    {"id":32,"word1":"recordar","word2":"to remember/remind"},
    {"id":33,"word1":"large","word2":"grande"},
    {"id":34,"word1":"largo","word2":"long"},
    {"id":35,"word1":"disgust","word2":"asco"},
    {"id":36,"word1":"disgusto","word2":"dissatisfaction, annoyance"},
    {"id":37,"word1":"idiom","word2":"frase hecha"},
    {"id":38,"word1":"idioma","word2":"language"},
    {"id":39,"word1":"discussion","word2":"debate, conversación"},
    {"id":40,"word1":"discusión","word2":"argument"},
    {"id":41,"word1":"remove","word2":"quitar"},
    {"id":42,"word1":"remover","word2":"stir"},
    {"id":43,"word1":"lecture","word2":"ponencia"},
    {"id":44,"word1":"lectura","word2":"reading"},
    {"id":45,"word1":"bland","word2":"soso"},
    {"id":46,"word1":"blando","word2":"soft"},
    {"id":47,"word1":"career","word2":"carrera profesional"},
    {"id":48,"word1":"carrera","word2":"degree (or race)"},
    {"id":49,"word1":"disposable","word2":"desechable"},
    {"id":50,"word1":"disponible","word2":"available"},
    {"id":51,"word1":"sensible (English)","word2":"sensato"},
    {"id":52,"word1":"sensible (Spanish)","word2":"sensitive"},
    {"id":53,"word1":"distress","word2":"desamparo"},
    {"id":54,"word1":"destreza","word2":"skill"},
    {"id":55,"word1":"pan (English)","word2":"sartén"},
    {"id":56,"word1":"pan (Spanish)","word2":"bread"},
    {"id":57,"word1":"fault","word2":"culpa"},
    {"id":58,"word1":"falta","word2":"lack"},
    {"id":59,"word1":"journey","word2":"trip"},
    {"id":60,"word1":"jornada","word2":"workday"},
    
    
]

  
  function FalseFriends () {

    return (
      <div className="App">
        <FalseFriendsHeader />
        <FalseFriendsList falsefriendscards={falsefriends_cards} />
      </div>
    );
  }
  
  export default FalseFriends;