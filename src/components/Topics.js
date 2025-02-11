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
  {"id": 1, "topic": "fitfluencers / influencers"},  
  {"id": 2, "topic": "chatGPT"}, 
  {"id": 3, "topic": "a TV series I enjoyed"}, 
  {"id": 4, "topic": "something worth investing in"},
  {"id": 5, "topic": "the healthcare system"}, 
  {"id": 6, "topic": "a guilty pleasure"}, 
  {"id": 7, "topic": "global warming"},
  {"id": 8, "topic": "the best way to save or invest money"},
  {"id": 9, "topic": "the Spanish monarchy"},
  {"id": 11, "topic": "immigration"},
  {"id": 12, "topic": "social media"},
  {"id": 13, "topic": "my dream house"},
  {"id": 14, "topic": "the US president"},
  {"id": 15, "topic": "a great book I read"},
  {"id": 16, "topic": "something that should be banned"},
  {"id": 17, "topic": "three cities I would love to visit"},
  {"id": 19, "topic": "something I'm eager to do"},
  {"id": 20, "topic": "inflation"},
  {"id": 21, "topic": "TikTok and other Chinese tech companies"},
  {"id": 22, "topic": "something I can't live without"},
  {"id": 23, "topic": "online/app dating"},
  {"id": 24, "topic": "Nadal or Alcaraz?"}
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