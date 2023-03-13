import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';



function FeelingsHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Adjective or Feeling?</h1>
  </header>
  )
}


const FeelingsCard = ({ feelingscard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h3>{feelingscard.question}</h3>
              </div>    
              <div className="back">
              <h3>{feelingscard.answer}</h3>
              
              </div>
            </div>
        </div>
      
    )
  }

  const FeelingsList = ({ feelingscards }) => {

    return (
        <div className="card-container">
            {feelingscards.map(feelingscard =>{
                return <FeelingsCard feelingscard = {feelingscard} key={feelingscard.id} />
            })}
        </div>
    )
}

const feelings_cards = [
    {
        "id": 1,
        "answer": "An embarrassing mistake you made",
        "question": "An (embarrassed/embarrassing) mistake you made"
      },
      {
        "id": 2,
        "answer": "Do you get embarrassed easily?",
        "question": "Do you get (embarrassed/embarrassing) easily?"
      },
      {
        "id": 3,
        "answer": "Agree or disagree: Kids get bored too easily nowadays.",
        "question": "Agree or disagree: Kids get (bored/boring) too easily nowadays."
      },
      {
        "id": 4,
        "answer": "Topics of conversation that you find really boring",
        "question": "Topics of conversation that you find really (bored/boring)"
      },
      {
        "id": 5,
        "answer": "Moments in your life when you feel the most tired",
        "question": "Moments in your life when you feel the most (tiring/tired)"
      },
      {
        "id": 6,
        "answer": "A hobby or activity you're interested in",
        "question": "A hobby or activity you're (interesting/interested) (in/with/about)"
      },
      {
        "id": 7,
        "answer": "Do you find documentaries interesting? Tell me about one you liked.",
        "question": "Do you find documentaries (interested/interesting)? Tell me about one you liked."
      },
      {
        "id": 8,
        "answer": "A type of behavior you find really annoying",
        "question": "A type of behavior you find really (annoying/annoyed)"
      },
      {
        "id": 9,
        "answer": "I get annoyed with my partner/family when...",
        "question": "I get (annoying/annoyed) with my partner/family when...."
      },
      {
        "id": 10,
        "answer": "Do you feel scared when you watch scary movies?",
        "question": "Do you feel (scary/scared) when you watch (scary/scared) movies?"
      },
      {
        "id": 11,
        "answer": "Have you felt frustrated in the last couple of weeks? Why?",
        "question": "Have you felt (frustrating/frustrated) in the last couple of weeks? Why?"
      },
      {
        "id": 12,
        "answer": "A frustrating problem I've dealt with",
        "question": "A (frustrating/frustrated) problem I've dealt with"
      },
      {
        "id": 13,
        "answer": "Do you feel intimidated by high-level executives?",
        "question": "Do you feel (intimidated/intimidating) by high-level executives?"
      },
      {
        "id": 14,
        "answer": "The most intimidating person you've ever met",
        "question": "The most (intimidated/intimidating) person you've ever met"
      },
      {
        "id": 15,
        "answer": "The most tiring part of your job",
        "question": "The most (tiring/tired) part of your job"
      },
      {
        "id": 16,
        "answer": "What are you excited about right now?",
        "question": "What are you (excited/exciting) about right now?"
      },
      {
          "id": 17,
          "answer": "The most exciting activity you've ever done on vacation",
          "question": "The most (excited/exciting) activity you've ever done on vacation"
        },
        {
          "id": 18,
          "answer": "On a scale of 1 to 10, how stressful is your job?",
          "question": "On a scale of 1 to 10, how (stressed/stressful) is your job?"
        },
        {
          "id": 19,
          "answer": "A situation that made you feel stressed in the last few weeks",
          "question": "A situation that made you feel (stressed/stressful) in the last few weeks"
        },
      
        {
          "id": 20,
          "answer": "A celebrity who you think is absolutely stunning",
          "question": "A celebrity who you think is absolutely (stunning/stunned)"
        },
        {
          "id": 21,
          "answer": "Have you ever been stunned by a news story?",
          "question": "Have you ever been (stunning/stunned) by a news story?"
        }
    
]

const shuffleCards = feelings_cards.sort(() => Math.random() - 0.5);
  
  
  function Feelings () {

    const [cards] = useState(shuffleCards);
  
  
    //TRY AGAIN LATER WITH API
  //   useEffect(() => {
  //     axios.get('https://api.apispreadsheets.com/data/MZBaGSW88gjPEDuA/')
  //     .then(response => {
  
  //      setCards(response.data);
  //      console.log(response.data)
  //       .catch(setError);
  // })}, [])

  
    return (
      <div className="App">
        <FeelingsHeader />
        <FeelingsList feelingscards={cards} />
      </div>
    );
  }
  
  export default Feelings;