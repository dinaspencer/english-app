import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';



function QuestionsHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Ask A Question Using...</h1>
  </header>
  )
}


const QuestionCard = ({ questioncard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h1>?</h1>
              </div>    
              <div className="back">
              <h2>{questioncard.topic}</h2>
              
              </div>
            </div>
        </div>
      
    )
  }

  const QuestionList = ({ questioncards }) => {

    return (
        <div className="card-container">
            {questioncards.map(questioncard =>{
                return <QuestionCard questioncard = {questioncard} key={questioncard.id} />
            })}
        </div>
    )
}

const question_cards = [
    {id: 1, "topic": "when"},  
    {id: 2, "topic": "2nd conditional"}, 
    {id: 3, "topic": "how many"}, 
    {id: 4, "topic": "why"},
    {id: 5, "topic": "would you like"}, 
    {id: 6, "topic": "who"}, 
    {id: 7, "topic": "what"},
    {id: 8, "topic":  "where"}, 
    {id: 9, "topic": "do"}, 
    {id: 10, "topic": "could"}, 
    {id: 11, "topic": "are you going"},   
    {id: 11, "topic": "3rd conditional"}, 
    {id: 13, "topic": "did"},
    {id: 14, "topic": "have you ever"},
    {id: 15, "topic": "do you think"}]

    const shuffleCards = question_cards.sort(() => Math.random() - 0.5);
  
  
  function Questions () {

    const [cards] = useState(shuffleCards);
  
  
    //FETCH DATA FROM JSON

  
    return (
      <div className="App">
        <QuestionsHeader />
        <QuestionList questioncards={cards} />
      </div>
    );
  }
  
  export default Questions;