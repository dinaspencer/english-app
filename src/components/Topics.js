import React, { useState, useEffect } from "react";
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

   
  
  function Topics () {

     //TRY WITH API AXIOS CALL

 let [topicCards, setTopicCards] = useState([]);
 

 const fetchData = () => {
  fetch('./data_topics.json')
  .then(response => {
   // console.log(response);
    return response.json()
  })
  .then(data => {
    setTopicCards(data)
  })
 }
 useEffect(() => {
   fetchData()
   }, [])


   //removed shuffle feature - need to revisit
  //  const shuffleCards = topicCards.sort(() => Math.random() - 0.5);

  //  const [cards] = useState(shuffleCards);
  
  
    return (
      <div className="App">
        <TopicsHeader />
        <TopicList topiccards={topicCards} />
      </div>
    );
  }
  
  export default Topics;