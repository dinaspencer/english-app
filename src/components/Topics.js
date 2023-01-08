import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';


function TopicsHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Random Topics</h1>
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

 const topic_cards = [
  {"id": 1, "topic": "cannabis"},  
  {"id": 2, "topic": "the metaverse"}, 
  {"id": 3, "topic": "a sport I wanted to play when I was younger"}, 
  {"id": 4, "topic": "the best way to invest money"},
  {"id": 5, "topic": "the healthcare system"}, 
  {"id": 6, "topic": "the British royal family"}, 
  {"id": 7, "topic": "a piece of clothing that looks really good on me"},
  {"id": 8, "topic":  "what I wish I had known before having kids (or getting married)"}, 
  {"id": 9, "topic": "if you could return to school, what would you study?"}, 
  {"id": 10, "topic": "did your degree prepare you well for your career?"}, 
  {"id": 11, "topic": "immigration"},
  {"id": 12, "topic": "how long have you known your best friend? where did you meet and what did you have in common?"},
  {"id": 13, "topic": "if you could change one thing about your current house to make it more comfortable, what would it be?"},
  {"id": 14, "topic": "would you marry someone ten years older than you? how about ten years younger than you?"},
  {"id": 15, "topic": "a great book I read"},
  {"id": 16, "topic": "organic food"},
  {"id": 17, "topic": "three cities I would love to visit"},
  {"id": 18, "topic": "what things were you taught by your older family members?"},
  {"id": 19, "topic": "something I'm eager to do"},
  {"id": 20, "topic": "Twitter"},
  {"id": 21, "topic": "Iran"},
  {"id": 22, "topic": "something I can't live without"},
  {"id": 23, "topic": "online/app dating"},
  {"id": 24, "topic": "Vladimir Putin"}
]

     const shuffleCards = topic_cards.sort(() => Math.random() - 0.5);

    
  
  function Topics () {


    const [cards] = useState(shuffleCards); 

//  const fetchData = () => {
//   fetch('./data_topics.json')
//   .then(response => {
//    // console.log(response);
//     return response.json()
//   })
//   .then(data => {
//     setTopicCards(data)
//   })
//  }
//  useEffect(() => {
//    fetchData()
//    }, [])

  
  
    return (
      <div className="App">
        <TopicsHeader />
        <TopicList topiccards={cards} />
      </div>
    );
  }
  
  export default Topics;