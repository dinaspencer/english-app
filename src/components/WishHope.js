import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';



function WishHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Wish or Hope?</h1>
  </header>
  )
}


const WishCard = ({ wishcard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h3>{wishcard.question}</h3>
              </div>    
              <div className="back">
              <h3>{wishcard.answer}</h3>
              
              </div>
            </div>
        </div>
      
    )
  }

  const WishList = ({ wishcards }) => {

    return (
        <div className="card-container">
            {wishcards.map(wishcard =>{
                return <WishCard wishcard = {wishcard} key={wishcard.id} />
            })}
        </div>
    )
}

const wish_cards = [
    {
        "id": 1,
        "answer": "Something in the world that you hope will change in the future.",
        "question": "Something in the world that you (wish/hope) will change in the future."
      },
      {
        "id": 2,
        "answer": "An activity you hope you can do when you retire.",
        "question": "An activity you (wish/hope) you can do when you retire."
      },
      {
        "id": 3,
        "answer": "An activity you wish you had tried on your last holiday.",
        "question": "An activity you (wish/hope) you had tried on your last holiday."
      },
      {
        "id": 4,
        "answer": "An activity you hope you can try on your next holiday.",
        "question": "An activity you (wish/hope) you can try on your next holiday."
      },
      {
        "id": 5,
        "answer": "A talent you wish you had.",
        "question": "A talent you (wish/hope) you had."
      },
      {
        "id": 6,
        "answer": "An activity or a course you wish you hadn’t given up.",
        "question": "An activity or a course you (wish/hope) you hadn’t given up."
      },
      {
        "id": 7,
        "answer": "Something you wish you had done when you were in high school.",
        "question": "Something you (wish/hope) you had done when you were in high school."
      },
      {
        "id": 8,
        "answer": "Something you wish had never been invented.",
        "question": "Something you (wish/hope) had never been invented."
      },
      {
        "id": 9,
        "answer": "Something you hope will be invented in the future.",
        "question": "Something you (wish/hope) will be invented in the future."
      },
      {
        "id": 10,
        "answer": "An animal you wish you weren’t scared of.",
        "question": "An animal you (wish/hope) you weren’t scared of."
      },
      {
        "id": 11,
        "answer": "Somewhere you hope you can travel in the future.",
        "question": "Somewhere you (wish/hope) you can travel in the future."
      },
      {
        "id": 12,
        "answer": "A job opportunity you wish you had taken.",
        "question": "A job opportunity you (wish/hope) you had taken."
      },
      {
        "id": 13,
        "answer": "A promotion or professional opportunity you hope you will get in the future.",
        "question": "A promotion or professional opportunity you (wish/hope) you will get in the future."
      },
      {
        "id": 14,
        "answer": "A famous person you wish you could meet.",
        "question": "A famous person you (wish/hope) you could meet."
      },
      {
        "id": 15,
        "answer": "Someone you hope you can spend time with soon.",
        "question": "Someone you (wish/hope) you can spend time with soon."
      },
      {
        "id": 16,
        "answer": "Something you wish you had more time for.",
        "question": "Something you (wish/hope) you had more time for."
      }
      
]

const shuffleCards = wish_cards.sort(() => Math.random() - 0.5);
  
  
  function WishHope () {

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
        <WishHeader />
        <WishList wishcards={cards} />
      </div>
    );
  }
  
  export default WishHope;