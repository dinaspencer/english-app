import React, { useState } from "react";
import './Card.css';



function TopicsHeader() {
  return (
    <header className="App-header header">
      <a href="/">Main Menu</a>
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
    {id: 10, "topic": "if you could return to school, what would you study?"}, {id: 11, "topic": "something deeply honest about my life right now"},   
    {id: 11, "topic": "did your degree prepare you well for your career?"}, 
    {id: 13, "topic": "it's hard for me to keep track of _____."}]
  
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