import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';



function MbaHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Business Questions</h1>
  </header>
  )
}


const MbaCard = ({ mbacard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h1>?</h1>
              </div>    
              <div className="back">
              <h2>{mbacard.topic}</h2>
              
              </div>
            </div>
        </div>
      
    )
  }

  const MbaList = ({ mbacards }) => {

    return (
        <div className="card-container">
            {mbacards.map(mbacard =>{
                return <MbaCard mbacard = {mbacard} key={mbacard.id} />
            })}
        </div>
    )
}

const mba_cards = [
    {id: 1, "topic": "how do you measure the value of innovation?"},  
    {id: 2, "topic": "how could your company or team be more agile?"}, 
    {id: 3, "topic": "what is your product's competitive advantage?"}, 
    {id: 4, "topic": "what is scalability? what opportunities does your business have to scale?"},
    {id: 5, "topic": "can you explain the intrinsic and extrinsic value of your business?"}, 
    {id: 6, "topic": "explain your organization's strategic business units"}, 
    {id: 7, "topic": "which of these competitive variables (cost, quality, service, flexibility, innovation) are your company's strengths?"},
    {id: 8, "topic":  "a habit that has really paid off"}, 
    {id: 9, "topic":  "think of an example of a disruptive innovation or company"}, 
    {id: 10, "topic": "let's do a SWOT (DAFO) analysis of your business."},   
    {id: 11, "topic": "how do you create value for your customers?"}, 
    {id: 13, "topic": "how does the pareto (80/20) principle work in your life?"},
    {id: 14, "topic": "customer perceived value: what is it?"},
    {id: 15, "topic": "how do you measure customer satisfaction?"},
    {id: 16, "topic": "how do you respond to your customers' needs?"},  
    {id: 17, "topic":  "how do you prioritize your stakeholders/interest groups?"},
    {id: 18, "topic": "is it possible to satisfy all stakeholders at the same time?"},
    {id: 19, "topic": "how do you determine added value?"},
    {id: 20, "topic": "how would you define success in a business?"},

    
  ]

    const shuffleCards = mba_cards.sort(() => Math.random() - 0.5);
  
  
  function Mba () {

    const [cards] = useState(shuffleCards);
  
  

    return (
      <div className="App">
        <MbaHeader />
        <MbaList mbacards={cards} />
      </div>
    );
  }
  
  export default Mba;