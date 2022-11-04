import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';


function TopicsHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Choose a Topic</h1>
  </header>
  )
}


const TopicCard = ({ topiccard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h1>?</h1>
              </div>    
              <div className="back">
              <h3>{topiccard.topic}</h3>
              
              </div>
            </div>
        </div>
      
    )
  }

  const TopicList = ({ topiccards }) => {

    return (
        <div className="card-container">
            {topiccards.map(topiccard =>{
                return <TopicCard topiccard = {topiccard} key={topiccard.id} />
            })}
        </div>
    )
}

const topics_cards = [
    {id: 1, "topic": "agree or disagree: my company is ahead of the pack."},  
    {id: 2, "topic": "some news I found out recently"}, 
    {id: 3, "topic": "ask a question using 2nd or 3rd conditional"}, 
    {id: 4, "topic": "something I'd like to save money for"},
    {id: 5, "topic": "something I need to pay more attention to"}, 
    {id: 6, "topic": "reflection on this week: one thing that went well, and one thing I learned"}, 
    {id: 7, "topic": "I need to get back on track with ___"},
    {id: 8, "topic":  "what I wish I had known before having kids (or getting married)"}, 
    {id: 9, "topic": "one habit I want to get rid of and one habit I want to keep"}, 
    {id: 10, "topic": "if you could return to school, what would you study?"}, 
    {id: 11, "topic": "something deeply honest about my life right now"},   
    {id: 11, "topic": "did your degree prepare you well for your career?"}, 
    {id: 13, "topic": "it's hard for me to keep track of _____."},
    {id: 14, "topic": "how long have you known your best friend? where did you meet and what did you have in common?"},
    {id: 15, "topic": "if you could change one thing about your current house to make it more comfortable, what would it be?"},
    {id: 16, "topic": "would you marry someone ten years older than you? how about ten years younger than you?"},
    {id: 17, "topic": "would you ever consider writing your own book?"},
    {id: 18, "topic": "can you talk about three things you dislike about yourself?"},
    {id: 19, "topic": "three cities I would love to visit"},
    {id: 20, "topic": "how important is beauty in your daily life?" },
    {id: 21, "topic": "what things were you taught by your older family members?"},
    {id: 22, "topic": "something I'm eager to do"},
    {id: 23, "topic": "the last time I was furious and what happened"},
    {id: 24, "topic": "a dull meeting I attended recently"}
  ]
  
    const shuffleCards = topics_cards.sort(() => Math.random() - 0.5);
  
  function Topics () {

    const [cards, setCards] = useState(shuffleCards);
  
  
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
        <TopicsHeader />
        <TopicList topiccards={cards} />
      </div>
    );
  }
  
  export default Topics;