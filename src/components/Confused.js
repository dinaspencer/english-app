import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';



function ConfusedHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Commonly Confused Words</h1>
  </header>
  )
}


const ConfusedCard = ({ confusedcard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h3>{confusedcard.question}</h3>
              </div>    
              <div className="back">
              <h3>{confusedcard.answer}</h3>
              
              </div>
            </div>
        </div>
      
    )
  }

  const ConfusedList = ({ confusedcards }) => {

    return (
        <div className="card-container">
            {confusedcards.map(confusedcard =>{
                return <ConfusedCard confusedcard = {confusedcard} key={confusedcard.id} />
            })}
        </div>
    )
}

const confused_cards = [
    {
        "id": 1,
        "question": "Would you prefer for Madrid to (win/beat) Barcelona, or Barcelona to (win/beat) Madrid?",
        "answer": "Would you prefer for Madrid to beat Barcelona, or Barcelona to beat Madrid?."
      },
      {
        "id": 2,
        "question": "Have you ever (won/beat) a competition?",
        "answer": "Have you ever won a competition?"
      },
      {
        "id": 3,
        "question": "Do you usually (lend/borrow) things to your friends or family? What would you never (lend/borrow) to them?",
        "answer": "Do you usually lend things to your friends or family? What would you never lend to them?"
      },
      {
        "id": 4,
        "question": "Have you ever (lent/borrowed) something from someone? Did you remember to give it back?",
        "answer": "Have you ever borrowed something from someone? Did you remember to give it back?"
      },
      {
        "id": 5,
        "question": "What type of music do you enjoy (hearing/listening) to?",
        "answer": "What type of music do you enjoy listening to?"
      },
      {
        "id": 6,
        "question": "What interesting news have you (heard/listened) recently?",
        "answer": "What interesting news have you heard recently?"
      },
      {
        "id": 7,
        "question": "Have you ever been (robbed/stolen) while traveling? Do you know anyone else who has?",
        "answer": "Have you ever been robbed while traveling? Do you know anyone else who has?"
      },
      {
        "id": 8,
        "question": "When you were younger, did you ever (rob/steal) anything? Did you get caught?",
        "answer": "When you were younger, did you ever steal anything? Did you get caught?"
      },
      {
        "id": 9,
        "question": "Tell me about a (fun/funny) activity you did last summer.",
        "answer": "Tell me about a fun activity you did last summer."
      },
      {
        "id": 10,
        "question": "A friend of yours who is very (fun/funny) and what this person does to make you laugh",
        "answer": "A friend of yours who is very funny and what this person does to make you laugh"
      },
      {
        "id": 11,
        "question": "What do you (wish/hope) you had done when you were at university?",
        "answer": "What do you wish you had done when you were at university?"
      },
      {
        "id": 12,
        "question": "Something you (wish/hope) will change in the future",
        "answer": "Something you hope will change in the future"
      },
      {
        "id": 13,
        "question": "Do you have any interesting (travels/trips) coming up soon?",
        "answer": "Do you have any interesting trips coming up soon?"
      },
      {
        "id": 14,
        "question": "A place you would love to (travel/trip) if you had more time",
        "answer": "A place you would love to travel if you had more time"
      },
      {
        "id": 15,
        "question": "In high school, did you enjoy studying (story/history)?",
        "answer": "In high school, did you enjoy studying history?"
    },
    {
        "id": 16,
        "question": "An interesting (history/story) someone told you",
        "answer": "An interesting story someone told you"
    },
    {
        "id": 17,
        "question": "When was the last time you had a (date/appointment) with your doctor?",
        "answer": "When was the last time you had an appointment with your doctor?"
    },
    {
        "id": 18,
        "question": "Have you ever been on a blind (date/appointment)? Would you try it?",
        "answer": "Have you ever been on a blind date? Would you try it?"
    },
    {
        "id": 19,
        "question": "Have you ever (lost/missed) a flight, train or bus?",
        "answer": "Have you ever missed a flight, train or bus?"
    },
    {
        "id": 20,
        "question": "What types of things do you typically (lose/miss)?",
        "answer": "What types of things do you typically lose?"
    },
    {
        "id": 21,
        "question": "A TV program or series you've been (seeing/watching) recently",
        "answer": "A TV program or series you've been watching recently"
    },
    {
        "id": 22,
        "question": "Do you enjoy going to museums? What do you like to (see/watch) there?",
        "answer": "Do you enjoy going to museums? What do you like to see there?"
    },
      {
        "id": 23,
        "question": "Do you enjoy (knowing/meeting) new people?",
        "answer": "Do you enjoy meeting new people?"
    },
    {
        "id": 24,
        "question": "Tell me about the friend you have (met/known) the longest.",
        "answer": "Tell me about the friend you have known the longest."
    },
]

const shuffleCards = confused_cards.sort(() => Math.random() - 0.5);
  
  
  function Confused () {

    const [cards] = useState(shuffleCards);
  
  //FETCH DATA FROM JSON

  
    return (
      <div className="App">
        <ConfusedHeader />
        <ConfusedList confusedcards={cards} />
      </div>
    );
  }
  
  export default Confused;