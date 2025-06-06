import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';



function GerundHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Gerund or Infinitive?</h1>
  </header>
  )
}


const GerundCard = ({ gerundcard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h3>{gerundcard.question}</h3>
              </div>    
              <div className="back">
              <h3>{gerundcard.answer}</h3>
              
              </div>
            </div>
        </div>
      
    )
  }

  const GerundList = ({ gerundcards }) => {

    return (
        <div className="card-container">
            {gerundcards.map(gerundcard =>{
                return <GerundCard gerundcard = {gerundcard} key={gerundcard.id} />
            })}
        </div>
    )
}

const gerund_cards = [
    {
        "id": 1,
        "question": "Tell me about something you regret (do / not do) when you were younger.",
        "answer": "Tell me about something you regret doing / not doing when you were younger."
      },
      {
        "id": 2,
        "question": "What do you wish you could afford (do)?",
        "answer": "What do you wish you could afford to do?"
      },
      {
        "id": 3,
        "question": "Have you ever forgotten (do) something really important? What was it?",
        "answer": "Have you ever forgotten to do something really important? What was it?"
      },
      {
        "id": 4,
        "question": "A type of music you can't stand (listen) to",
        "answer": "A type of music you can't stand listening to"
      },
      {
        "id": 5,
        "question": "A habit or activity you stopped (do) recently",
        "answer": "A habit or activity you stopped doing recently"
      },
      {
        "id": 6,
        "question": "Do you usually stop (rest/eat) when you're on a roadtrip?",
        "answer": "Do you usually stop to rest/to eat when you're on a roadtrip?"
      },
      {
        "id": 7,
        "question": "Something you wish you could spend more time (do)",
        "answer": "Something you wish you could spend more time doing"
      },
      {
        "id": 8,
        "question": "Do you think Bitcoin will manage (become) the world's leading financial technology?",
        "answer": "Do you think Bitcoin will manage to become the world's leading financial technology?"
      },
      {
        "id": 9,
        "question": "Can you imagine (work) in the metaverse?",
        "answer": "Can you imagine working in the metaverse?"
      },
      {
        "id": 10,
        "question": "A movie I don't mind (watch) over and over again",
        "answer": "A movie I don't mind watching over and over again"
      },
      {
        "id": 11,
        "question": "Where do you think you'll end up (spend) your next holidays?",
        "answer": "Where do you think you'll end up spending your next holidays?"
      },
      {
        "id": 12,
        "question": "How do you tend (react) in stressful situations?",
        "answer": "How do you tend to react in stressful situations?"
      },
      {
        "id": 13,
        "question": "Something your boss wants you (do)",
        "answer": "Something your boss wants you to do"
      },
      {
        "id": 14,
        "question": "Something you always have to remind your partner or family (do)",
        "answer": "Something you always have to remind your partner or family to do"
      },
      {
        "id": 15,
        "question": "Something your parents encouraged you (do) when you were a kid",
        "answer": "Something your parents encouraged you to do when you were a kid"
    },
    {
      "id": 16,
      "question": "Have you ever avoided (see) someone?",
      "answer": "Have you ever avoided seeing someone?"
    },
    {
      "id": 17,
      "question": "Tell me about someone on your team who deserves (get) a promotion",
      "answer": "Tell me about someone on your team who deserves to get a promotion"
    },
    {
      "id": 18,
      "question": "A project you agreed (participate) in but later realized you didn't have time",
      "answer": "A project you agreed to participate in but later realized you didn't have time"
    },
    {
      "id": 19,
      "question": "Something you would never allow your kids (do), or something you were never allowed (do)",
      "answer": "Something you would never allow your kids to do, or something you were never allowed to do"
    },
    {
      "id": 20,
      "question": "True or false: I always finish (read) the books that I start",
      "answer": "True or false: I always finish reading the books that I start"
    },
    {
      "id": 21,
      "question": "A place from your childhood that you miss (go)",
      "answer": "A place from your childhood that you miss going"
    },
    {
      "id": 22,
      "question": "A place you are thinking about (travel) this summer",
      "answer": "A place you are thinking about traveling this summer"
    },
    {
      "id": 23,
      "question": "Something you need (get) off your chest",
      "answer": "Something you need to get off your chest"
    },
    {
      "id": 24,
      "question": "A person you would like (catch up with)",
      "answer": "A person you would like to catch up with"
    },
      
]

const shuffleCards = gerund_cards.sort(() => Math.random() - 0.5);
  
  
  function Gerund () {

    const [cards] = useState(shuffleCards);
  
  //FETCH DATA FROM JSON

  
    return (
      <div className="App">
        <GerundHeader />
        <GerundList gerundcards={cards} />
      </div>
    );
  }
  
  export default Gerund;