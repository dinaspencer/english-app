import React, { useState } from "react";
import './Card.css';
import { Link } from 'react-router-dom';



function ExpressionsHeader() {
  return (
    <header className="App-header header">
      <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Casual English Expressions</h1>
  </header>
  )
}


const ExpressionCard = ({ expressioncard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
                <div className="front">
                  <h2>{expressioncard.phrase}</h2>
                </div>    
                <div className="back">
                  <h3>{expressioncard.definition}</h3>
                </div>
            </div>
        </div>
      
    )
  }

  const ExpressionList = ({ expressioncards }) => {

    return (
        <div className="card-container">
            {expressioncards.map(expressioncard =>{
                return <ExpressionCard expressioncard = {expressioncard} key={expressioncard.id} />
            })}
        </div>
    )
}

const expression_cards = [
    {
        "id": 1,
        "phrase": "to make (one's) day",
        "definition": "To cause one to feel very happy; to be a very positive highlight of one's day"
      },
      {
        "id": 2,
        "phrase": "to feel out of it",
        "definition": "To be sedate, confused, or disoriented; to be, feel, or seem disconnected from reality"
      },
      {
        "id": 3,
        "phrase": "to be pumped up",
        "definition": "To increase someone's or one's own excitement, confidence, or mental preparation"
      },
      {
        "id": 4,
        "phrase": "it drives me up the wall",
        "definition": "make somebody very annoyed; drive somebody crazy"
      },
      {
        "id": 5,
        "phrase": "to freak out",
        "definition": "To suddenly express anger or excitement in a very visible way / To startle or frighten someone"
      },
      {
        "id": 6,
        "phrase": "sketchy",
        "definition": "Of dubious safety or legal integrity"
      },
      {
        "id": 7,
        "phrase": "off the charts",
        "definition": "Quite a lot more or better than is usual or was expected."
      },
      {
        "id": 8,
        "phrase": "only a matter of time",
        "definition": "it is certain to happen but you do not know when it will happen"
      },
      {
        "id": 9,
        "phrase": "(doesn't) stand a chance",
        "definition": "someone can't win or won't survive"
      },
      {
        "id": 10,
        "phrase": "the ball is in (someone's) court",
        "definition": "One has the responsibility for further action, especially after someone else previously held responsibility."
      },
      {
        "id": 11,
        "phrase": "to let off steam",
        "definition": "to work or play off excess energy or stress"
      },
      {
        "id": 12,
        "phrase": "to draw a blank",
        "definition": "to fail to remember something"
      },
      {
        "id": 13,
        "phrase": "play it by ear",
        "definition": "To decide how to deal with a situation as it develops, rather than acting according to plans made earlier"
      },
      {
        "id": 14,
        "phrase": "a pain in the neck",
        "definition": "Very irritating, aggravating, or obnoxious"
      },
      {
        "id": 15,
        "phrase": "out of the blue",
        "definition": "From an unexpected or unforeseen source / At a completely unexpected time"
      },
      {
        "id": 16,
        "phrase": "out of sight, out of mind",
        "definition": "a person stops thinking about something or someone if he or she does not see that thing or person for a period of time"
      },
      {
        "id": 17,
        "phrase": "burn one's bridges",
        "definition": "to act unpleasantly in a situation that you are leaving, ensuring that you'll never be welcome to return"
      },
      {
        "id": 18,
        "phrase": "on the back burner",
        "definition": "temporarily not being dealt with or considered, especially because it is not urgent or important"
      },
      {
        "id": 19,
        "phrase": "a gut feeling",
        "definition": "An intuition or instinct, as opposed to an opinion based on a logical analysis"
      },
      {
        "id": 20,
        "phrase": "call the shots",
        "definition": "take the initiative in deciding how something should be done"
      },
      {
        "id": 21,
        "phrase": "miss the point",
        "definition": "fail to understand the essential or important part of something"
      },
      {
        "id": 22,
        "phrase": "the icing on the cake",
        "definition": "An additional benefit or positive aspect to something that is already considered positive or beneficial"
      },
      {
        "id": 23,
        "phrase": "bite one's tongue",
        "definition": "To stop oneself from saying something (often something potentially inappropriate, hurtful, or offensive)"
      },
      {
        "id": 24,
        "phrase": "easier said than done",
        "definition": "Not as easy as it appears to be"
      },
      {
        "id": 25,
        "phrase": "mean well",
        "definition": "To intend to be helpful, but unintentionally cause problems instead (usually followed by but...)"
      },
      {
        "id": 26,
        "phrase": "take the plunge",
        "definition": "To commit oneself to a course of action that is momentous or challenging"
      },
      {
        "id": 27,
        "phrase": "the best of both worlds",
        "definition": "Being able to enjoy two different opportunities at the same time"
      },
      {
        "id": 28,
        "phrase": "to keep an eye on",
        "definition": "To watch someone or something carefully; to be attentive to someone or something"
      },
      {
        "id": 29,
        "phrase": "a blessing in disguise",
        "definition": "something that seems bad or unlucky at first, but results in something good happening later"
      },
      
      {
        "id": 31,
        "phrase": "back to square one",
        "definition": "start working on a plan from the beginning because your previous attempt failed completely"
      },
      {
        "id": 32,
        "phrase": "to crack (someone) up",
        "definition": "To cause someone to laugh very hard"
      },
      {
        "id": 33,
        "phrase": "don't count your chickens before they hatch",
        "definition": "Don't make plans based on future events, outcomes, or successes that might not come to pass"
      },
      {
        "id": 34,
        "phrase": "down to the wire",
        "definition": "To the last minute; to the very end"
      },
      {
        "id": 35,
        "phrase": "elephant in the room",
        "definition": "An important topic, question, or controversial issue that is obvious or that everyone knows about but no one wants to discuss"
      },
      {
        "id": 36,
        "phrase": "go the extra mile",
        "definition": "to do more than one is required to do to reach a goal"
      },
      {
        "id": 37,
        "phrase": "great minds think alike",
        "definition": "when someone has the same idea or thought as someone else in roughly the same time period"
      },
      {
        "id": 38,
        "phrase": "off the hook",
        "definition": "To be relieved of or free from a commitment, duty, pressure, or responsibility"
      },
      {
        "id": 39,
        "phrase": "have a knack for",
        "definition": "to be naturally good at something"
      },
      {
        "id": 40,
        "phrase": "to sweep (something) under the rug",
        "definition": "to hide a problem or try to keep it secret instead of dealing with it"
      }]

    const shuffleCards = expression_cards.sort(() => Math.random() - 0.5);
  
  
  function Expressions () {

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
        <ExpressionsHeader />
        <ExpressionList expressioncards={cards} />
      </div>
    );
  }
  
  export default Expressions;