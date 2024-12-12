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
    {id: 1, "topic": "an area where you underestimated yourself this year"},  
    {id: 2, "topic": "tell me about one of your weaknesses"}, 
    {id: 3, "topic": "a person who you hit it off with immediately"}, 
    {id: 4, "topic": "is there anything you need to get rid of?"},
    {id: 5, "topic": "what would you do differently if you could do this year over again?"}, 
    {id: 6, "topic": "define what success means to you"}, 
    {id: 7, "topic": "someone you'd love to hang out with"},
    {id: 8, "topic":  "a habit that has really paid off"}, 
    {id: 9, "topic":  "something you need to get back on track with"}, 
    {id: 10, "topic": "something you're looking forward to"},   
    {id: 11, "topic": "something you should put on the back burner"}, 
    {id: 14, "topic": "someone who really cracks you up"},
    {id: 15, "topic": "someone who brings out the best in me"},
    {id: 16, "topic": "if you could go back to school, what would you study?"},  
    {id: 17, "topic":  "what is something you don't want to put up with going forward?"},
    {id: 18, "topic": "a place or product that is overrated"},
    {id: 19, "topic": "a breathtaking place you visited this year"},
    {id: 20, "topic": "a habit you need to kick"},
    {id: 21, "topic": "the best advice you received (or gave) in the last year"},
    {id: 22, "topic": "the highlight of your year"},
    {id: 24, "topic": "what things freak you out?"},
    
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