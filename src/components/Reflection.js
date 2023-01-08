import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';



function ReflectionsHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Questions For Reflection</h1>
  </header>
  )
}


const ReflectionCard = ({ reflectioncard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h1>?</h1>
              </div>    
              <div className="back">
              <h2>{reflectioncard.topic}</h2>
              
              </div>
            </div>
        </div>
      
    )
  }

  const ReflectionList = ({ reflectioncards }) => {

    return (
        <div className="card-container">
            {reflectioncards.map(reflectioncard =>{
                return <ReflectionCard reflectioncard = {reflectioncard} key={reflectioncard.id} />
            })}
        </div>
    )
}

const reflection_cards = [
    {id: 1, "topic": "something you've been worried about"},  
    {id: 2, "topic": "tell me about one of your weaknesses"}, 
    {id: 3, "topic": "a person who you hit it off with immediately"}, 
    {id: 4, "topic": "what did you like about your job last year? what didn't you like?"},
    {id: 5, "topic": "what would you do differently if you could repeat 2022?"}, 
    {id: 6, "topic": "how did your relationships improve in 2022?"}, 
    {id: 7, "topic": "did you bump into any old friends during the holidays?"},
    {id: 8, "topic":  "a habit that has really paid off"}, 
    {id: 9, "topic": "is there anything you want to cut down on in 2023?"}, 
    {id: 10, "topic": "something you're looking forward to in 2023"}, 
    {id: 11, "topic": "the icing on the cake during your Christmas holidays"},   
    {id: 11, "topic": "something you should put on the back burner"}, 
    {id: 13, "topic": "did you make Christmas plans, or did you play it by ear?"},
    {id: 14, "topic": "someone who really cracked you up during the holidays"},
    {id: 15, "topic": "a friend or family member who contacted you out of the blue"},
    {id: 16, "topic": "where did you end up spending New Year's Eve?"},
    {id: 17, "topic": "did you put up any decorations for Christmas?"},
    {id: 18, "topic": "did you put off buying Christmas presents until the last minute?"},
    {id: 19, "topic": "a breathtaking place you visited in 2022"},
    {id: 20, "topic": "something new you want to learn"},
    {id: 21, "topic": "the best advice you received (or gave) in 2022"},
    {id: 22, "topic": "a bright spot in your 2022"}
  ]

    const shuffleCards = reflection_cards.sort(() => Math.random() - 0.5);
  
  
  function Reflection () {

    const [cards] = useState(shuffleCards);
  
  

    return (
      <div className="App">
        <ReflectionsHeader />
        <ReflectionList reflectioncards={cards} />
      </div>
    );
  }
  
  export default Reflection;