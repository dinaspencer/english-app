
import React, { useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


function PhrasalVerbHeader() {
  return (
    <header className="App-header header">
    <Link to={process.env.PUBLIC_URL + '/'}>Main Menu</Link>
    <h1>Phrasal Verbs</h1>
  </header>
  )
}

const PhrasalVerbCard = ({ phrasalverbcard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h1>{phrasalverbcard.phrasalVerb}</h1>
              </div>    
              <div className="back">
              <h3>{phrasalverbcard.meaning}</h3>
              <h4><em>{phrasalverbcard.example}</em></h4>
              </div>
            </div>
        </div>
      
    )
  }

  const PhrasalVerbList = ({ phrasalverbcards }) => {

    return (
        <div className="card-container">
            {phrasalverbcards.map(phrasalverbcard =>{
                return <PhrasalVerbCard phrasalverbcard = {phrasalverbcard} key={phrasalverbcard.id} />
            })}
        </div>
    )
}

const phrasalverb_cards = [ {
    "id": 1,
    "example": "If you want to keep your job here, you must abide by our rules.",
    "meaning": "To respect or obey a decision, a law or a rule",
    "phrasalVerb": "abide by"
  },
  {
    "id": 2,
    "example": "I hope you can account for the time you were out!",
    "meaning": "To explain, give a reason",
    "phrasalVerb": "account for"
  },
  {
    "id": 3,
    "example": "The facts in the case just don’t add up. Those small purchases really start to add up, making it harder to save money.",
    "meaning": "To make sense, seem reasonable; To take the sum of many small things",
    "phrasalVerb": "add up"
  },
  {
    "id": 4,
    "example": "I advise against walking alone in this neighborhood.",
    "meaning": "To recommend not doing something",
    "phrasalVerb": "advise against"
  },
  {
    "id": 5,
    "example": "I agree with you. I think you should go as well.",
    "meaning": "To have the same opinion as someone else.",
    "phrasalVerb": "agree with"
  },
  {
    "id": 6,
    "example": "We need to allow for unexpected charges along the way.",
    "meaning": "To take into consideration",
    "phrasalVerb": "allow for"
  },
  {
    "id": 7,
    "example": "He appealed to the court to change its decision.\nA vacation of sunbathing doesn’t appeal to me.",
    "meaning": "To plead or make a request\nTo be attractive or interesting",
    "phrasalVerb": "appeal to"
  },
  {
    "id": 8,
    "example": "He applied for a scholarship for next semester.",
    "meaning": "To make a formal request for something (job, permit, loan etc.)",
    "phrasalVerb": "apply for"
  },
  {
    "id": 9,
    "example": "When he saw the bear, he backed away in fright.",
    "meaning": "To move backwards, in fear or dislike",
    "phrasalVerb": "back away"
  },
  {
    "id": 10,
    "example": "Local authorities backed down on their threats to build on that part of the beach.",
    "meaning": "To withdraw, concede defeat",
    "phrasalVerb": "back down"
  },
  {
    "id": 11,
    "example": "I’m going to be very strict with him. I hope you’ll back me up on this?\nYou should back up all your computer files in a secure location.",
    "meaning": "To give support or encouragement\nTo make a copy of (file, program, etc.)",
    "phrasalVerb": "back up"
  },
  {
    "id": 12,
    "example": "I’m banking on you to help with the charity event.",
    "meaning": "To base your hopes on something / someone",
    "phrasalVerb": "bank on"
  },
  {
    "id": 13,
    "example": "Jenna fell in the parking lot and blacked out.",
    "meaning": "To faint, lose consciousness",
    "phrasalVerb": "black out"
  },
  {
    "id": 14,
    "example": "The police blocked off the street after the explosion.",
    "meaning": "To separate using a barrier.",
    "phrasalVerb": "block off"
  },
  {
    "id": 15,
    "example": "Tommy blew up the red balloon.\nDon’t blow up at me. It’s not my fault.",
    "meaning": "To explode\nTo get angry",
    "phrasalVerb": "blow up"
  },
  {
    "id": 16,
    "example": "It all boils down to who has more power.",
    "meaning": "To be summarized as",
    "phrasalVerb": "boil down to"
  },
  {
    "id": 17,
    "example": "You need to boot up your computer before you begin to work.",
    "meaning": "To start a computer by loading an operating system or program",
    "phrasalVerb": "boot up"
  },
  {
    "id": 18,
    "example": "One of the wolves broke away from his pack.",
    "meaning": "To separate from a crowd",
    "phrasalVerb": "break away"
  },
  {
    "id": 19,
    "example": "The washing machine broke down so we had to call in the repair technician.\nJohn broke down when he heard the news.",
    "meaning": "To go out of order, cease to function\nTo lose control of one’s emotions",
    "phrasalVerb": "break down"
  },
  {
    "id": 20,
    "example": "Burglars broke into my car last night.",
    "meaning": "To enter by force",
    "phrasalVerb": "break into"
  },
  {
    "id": 21,
    "example": "Rioting broke out after the government raised the fuel prices again.",
    "meaning": "To start suddenly",
    "phrasalVerb": "break out"
  },
  {
    "id": 22,
    "example": "Several prisoners broke out of jail.",
    "meaning": "To escape from a place by force",
    "phrasalVerb": "break out of"
  },
  {
    "id": 23,
    "example": "She broke up with Daniel after dating him for five years.",
    "meaning": "To come to an end (marriage, relationship)",
    "phrasalVerb": "break up"
  },
  {
    "id": 24,
    "example": "Sara is bringing up her children by herself.",
    "meaning": "To raise (a child)",
    "phrasalVerb": "bring up"
  },
  {
    "id": 25,
    "example": "I must brush up on my French before going to Paris next month.",
    "meaning": "To improve, refresh one’s knowledge of something",
    "phrasalVerb": "brush up on"
  },
  {
    "id": 26,
    "example": "I bumped into Adam at the bank. He says “hello”.",
    "meaning": "To meet by chance or unexpectedly",
    "phrasalVerb": "bump into"
  },
  {
    "id": 27,
    "example": "The light bulb burnt out. Please change it.\nShe needs to work fewer hours. Otherwise she will burn out.",
    "meaning": "stop (something) working\nbecome exhausted from over-working",
    "phrasalVerb": "burn out"
  },
  {
    "id": 28,
    "example": "Could please call back in ten minutes?",
    "meaning": "To return a phone call",
    "phrasalVerb": "call back"
  },
  {
    "id": 29,
    "example": "The game was called off because of bad weather.",
    "meaning": "To cancel",
    "phrasalVerb": "call off"
  },
  {
    "id": 30,
    "example": "It took Kylie several hours to calm down after she saw the accident.",
    "meaning": "To become more relaxed, less angry or upset",
    "phrasalVerb": "calm down"
  },
  {
    "id": 31,
    "example": "The soldiers carried on walking in order to get to their post before dark.",
    "meaning": "To continue",
    "phrasalVerb": "carry on"
  },
  {
    "id": 32,
    "example": "His orders were carried out to the letter.\nThat company does not carry out tests on animals.",
    "meaning": "To do something as specified (a plan, an order, a threat)\nTo perform or conduct (test, experiment)",
    "phrasalVerb": "carry out"
  },
  {
    "id": 33,
    "example": "They said I must check in at least three hours before my flight.",
    "meaning": "To register at a hotel or airport",
    "phrasalVerb": "check in"
  },
  {
    "id": 34,
    "example": "Donna checked out of the hotel this morning.\nI don’t know if this price is correct. I’ll check it out online.",
    "meaning": "To pay one’s bill and leave (a hotel)\nTo investigate",
    "phrasalVerb": "check out"
  },
  {
    "id": 35,
    "example": "When the police started asking questions, the suspect clammed up.",
    "meaning": "To refuse to speak",
    "phrasalVerb": "clam up"
  },
  {
    "id": 36,
    "example": "The local authorities have decided to clamp down on illegal parking in handicapped parking places.",
    "meaning": "To act strictly to prevent something",
    "phrasalVerb": "clamp down on"
  },
  {
    "id": 37,
    "example": "I was cleaning up and came across some old photos of you.\nThe politician came across as a complete fool during the TV interview.",
    "meaning": "To find by chance\nTo appear, seem, make an impression",
    "phrasalVerb": "come across"
  },
  {
    "id": 38,
    "example": "Has the owner of the winning lotto ticket come forward?",
    "meaning": "To present oneself",
    "phrasalVerb": "come forward"
  },
  {
    "id": 39,
    "example": "You can count on me to keep your secret.",
    "meaning": "To rely or depend on (for help)",
    "phrasalVerb": "count on"
  },
  {
    "id": 40,
    "example": "I’ve decided to cut down on the amount of sweets I eat.",
    "meaning": "To reduce in number or size",
    "phrasalVerb": "cut down on"
  },
  {
    "id": 41,
    "example": "She cut out a coupon from the newspaper.\nYou need to cut out all red meat from your diet.",
    "meaning": "To remove using scissors\nTo stop doing something",
    "phrasalVerb": "cut out"
  },
  {
    "id": 42,
    "example": "Catherine is not good at dealing with stress.",
    "meaning": "To handle, take care of (problem, situation)",
    "phrasalVerb": "deal with"
  },
  {
    "id": 43,
    "example": "After the storm died down, we went outside to see the damage it had caused.",
    "meaning": "To calm down, become less strong",
    "phrasalVerb": "die down"
  },
  {
    "id": 44,
    "example": "She didn’t get a salary this month, so she’ll have to do without extra treats.",
    "meaning": "To manage without",
    "phrasalVerb": "do without"
  },
  {
    "id": 45,
    "example": "The suspect’s trial dragged on longer than we had expected!",
    "meaning": "To last longer than expected",
    "phrasalVerb": "drag on"
  },
  {
    "id": 46,
    "example": "They drew up a contract and had me sign it.",
    "meaning": "To write (contract, agreement, document)",
    "phrasalVerb": "draw up"
  },
  {
    "id": 47,
    "example": "Their wedding gave us a chance to dress up and get out of the house.",
    "meaning": "wear elegant clothes",
    "phrasalVerb": "dress up"
  },
  {
    "id": 48,
    "example": "Why don’t you drop in to see us on your way home?",
    "meaning": "To visit, usually on the way somewhere",
    "phrasalVerb": "drop in"
  },
  {
    "id": 49,
    "example": "I’ll drop off the papers later today.\nI often drop off in front of the TV.",
    "meaning": "To deliver someone or something\nTo fall asleep",
    "phrasalVerb": "drop off"
  },
  {
    "id": 50,
    "example": "Zack dropped out of college and joined the army.",
    "meaning": "To leave school without finishing",
    "phrasalVerb": "drop out"
  },
  {
    "id": 51,
    "example": "Traffic usually eases off about 7pm",
    "meaning": "To reduce, become less severe or slow down (pain, traffic, work)",
    "phrasalVerb": "ease off"
  },
  {
    "id": 52,
    "example": "Her marriage ended in divorce.",
    "meaning": "To finish in a certain way; result in",
    "phrasalVerb": "end in"
  },
  {
    "id": 53,
    "example": "If you don’t improve your work habits, you’ll end up being fired.",
    "meaning": "To finally reach a state, place or action",
    "phrasalVerb": "end up"
  },
  {
    "id": 54,
    "example": "His plans to trek through South America fell through when he got sick.",
    "meaning": "To fail; doesn’t happen",
    "phrasalVerb": "fall through"
  },
  {
    "id": 55,
    "example": "He’s trying to figure out how to earn enough money to go on the trip to Spain.",
    "meaning": "To understand, find the answer",
    "phrasalVerb": "figure out"
  },
  {
    "id": 56,
    "example": "Please fill out the enclosed form and return it as soon as possible.",
    "meaning": "To complete (a form/an application)",
    "phrasalVerb": "fill out"
  },
  {
    "id": 57,
    "example": "I’m going to to find out who’s responsible for the power cut.",
    "meaning": "To discover or obtain information",
    "phrasalVerb": "find out"
  },
  {
    "id": 58,
    "example": "Tom had difficultty focusing on work the day before his holiday started.",
    "meaning": "To concentrate on something",
    "phrasalVerb": "focus on"
  },
  {
    "id": 59,
    "example": "It’s important to get along with your team supervisor.",
    "meaning": "To be on good terms; work well with",
    "phrasalVerb": "get along (with)"
  },
  {
    "id": 60,
    "example": "What are you getting at? Do you think I’m to blame?",
    "meaning": "To imply",
    "phrasalVerb": "get at"
  },
  {
    "id": 61,
    "example": "I think we should get away for the weekend.",
    "meaning": "To escape",
    "phrasalVerb": "get away"
  },
  {
    "id": 62,
    "example": "Students without jobs have a hard time getting by.",
    "meaning": "To manage to cope or to survive",
    "phrasalVerb": "get by"
  },
  {
    "id": 63,
    "example": "When did you get in last night?",
    "meaning": "To enter",
    "phrasalVerb": "get in"
  },
  {
    "id": 64,
    "example": "How did you get into your car without the keys?",
    "meaning": "To enter",
    "phrasalVerb": "get into (+noun)"
  },
  {
    "id": 65,
    "example": "You should get off the train in Kings Heath.\nI can’t get the ink stain off my shirt.",
    "meaning": "To leave (bus, train, plane)\nTo remove",
    "phrasalVerb": "get off"
  },
  {
    "id": 66,
    "example": "I’m trying to get on the flight to Brussels.",
    "meaning": "To board (bus, train, plane)",
    "phrasalVerb": "get on"
  },
  {
    "id": 67,
    "example": "After they split up, she had a hard time getting on with her life.",
    "meaning": "To continue to do; make progress",
    "phrasalVerb": "get on with (something)"
  },
  {
    "id": 68,
    "example": "He doesnt get on very well with the other members of the committee.",
    "meaning": "To have a good relationship with",
    "phrasalVerb": "get on (well) with (somebody)"
  },
  {
    "id": 69,
    "example": "He had a hard time getting out of Newark because of the snow?",
    "meaning": "To leave",
    "phrasalVerb": "get out"
  },
  {
    "id": 70,
    "example": "Edna’s trying to get out of working the night shift.",
    "meaning": "To avoid doing something",
    "phrasalVerb": "get out of"
  },
  {
    "id": 71,
    "example": "Has she gotten over the flu?",
    "meaning": "To recover from (illness, disappointment)",
    "phrasalVerb": "get over"
  },
  {
    "id": 72,
    "example": "Mary had the chickenpox last week but she got over it.",
    "meaning": "To recover from (illness, disappointment)",
    "phrasalVerb": "get over"
  },
  {
    "id": 73,
    "example": "Please get rid of that old t-shirt. It’s so ragged.",
    "meaning": "To eliminate",
    "phrasalVerb": "get rid of"
  },
  {
    "id": 74,
    "example": "Let’s get together for your birthday on Saturday.",
    "meaning": "To meet each other",
    "phrasalVerb": "get together"
  },
  {
    "id": 75,
    "example": "Will you please get up? You’ve got a class in 20 minutes.",
    "meaning": "To rise, leave bed",
    "phrasalVerb": "get up"
  },
  {
    "id": 76,
    "example": "We will never give in to the terrorists’ demands.\nI’ll give in my paper tomorrow.",
    "meaning": "To cease opposition; yield\nTo To hand in; submit",
    "phrasalVerb": "give in"
  },
  {
    "id": 77,
    "example": "Morris gave up drinking 10 years ago.",
    "meaning": "To stop doing something",
    "phrasalVerb": "give up"
  },
  {
    "id": 78,
    "example": "Andy went through a lot of pain after his mother died.",
    "meaning": "To experience",
    "phrasalVerb": "go through"
  },
  {
    "id": 79,
    "example": "He’s like Peter Pan. He never really grew up at all.",
    "meaning": "To spend one’s childhood; develop; become an adult",
    "phrasalVerb": "grow up"
  },
  {
    "id": 80,
    "example": "Please hand in your papers before Friday.",
    "meaning": "To submit (report, homework)",
    "phrasalVerb": "hand in"
  },
  {
    "id": 81,
    "example": "Susan volunteered at the shelter where she handed out warm clothes.",
    "meaning": "To distribute",
    "phrasalVerb": "hand out"
  },
  {
    "id": 82,
    "example": "Which pub does the team hang out at after the game?",
    "meaning": "To spend time in a particular place or with a group of friends",
    "phrasalVerb": "hang out"
  },
  {
    "id": 83,
    "example": "If you hang up now, I’ll never speak to you again.",
    "meaning": "To end a phone conversation",
    "phrasalVerb": "hang up"
  },
  {
    "id": 84,
    "example": "I wanted to become an architect, but my bad grades held me back.",
    "meaning": "To prevent someone from doing something",
    "phrasalVerb": "hold back"
  },
  {
    "id": 85,
    "example": "Please hold on and a representative will answer your call.\nShe was so scared on the rollercoaster ride that she held on for dear life.",
    "meaning": "To wait\nTo grip tightly",
    "phrasalVerb": "hold on"
  },
  {
    "id": 86,
    "example": "Hurry up and finish your lunch or we’ll miss the train.",
    "meaning": "To be quick, act speedily",
    "phrasalVerb": "hurry up"
  },
  {
    "id": 87,
    "example": "The two countries met at the conference to iron out their differences.",
    "meaning": "To resolve by discussion, eliminate differences",
    "phrasalVerb": "iron out"
  },
  {
    "id": 88,
    "example": "Yes David, you can join in the discussion any time you like.",
    "meaning": "To participate",
    "phrasalVerb": "join in"
  },
  {
    "id": 89,
    "example": "There was a war on, so some kids were only sixteen when they joined up.\nLet’s separate now and join up later at the restaurant.",
    "meaning": "To engage in, become a member of\nTo meet and unite with",
    "phrasalVerb": "join up"
  },
  {
    "id": 90,
    "example": "If you keep on making that noise I will get annoyed.",
    "meaning": "To continue doing something",
    "phrasalVerb": "keep on"
  },
  {
    "id": 91,
    "example": "I read the paper every day to keep up with the news.",
    "meaning": "To stay at the same level as someone or something",
    "phrasalVerb": "keep up with"
  },
  {
    "id": 92,
    "example": "The rugby match kicked off at 3 o’clock.",
    "meaning": "To begin, start",
    "phrasalVerb": "kick off"
  },
  {
    "id": 93,
    "example": "Please check your form again and make sure nothing is left out.",
    "meaning": "To omit, not mention",
    "phrasalVerb": "leave out"
  },
  {
    "id": 94,
    "example": "I feel so let down because they promised me a puppy but all I got was a doll.",
    "meaning": "To disappoint",
    "phrasalVerb": "let down"
  },
  {
    "id": 95,
    "example": "Andy can you look after your sister until I get back?",
    "meaning": "To take care of",
    "phrasalVerb": "look after"
  },
  {
    "id": 96,
    "example": "She’s such a snob. She always looks down on anyone who is poor.",
    "meaning": "To consider as inferior",
    "phrasalVerb": "look down on"
  },
  {
    "id": 97,
    "example": "If you don’t want to take part in the game you can look on for now.",
    "meaning": "To be a spectator at an event",
    "phrasalVerb": "look on"
  },
  {
    "id": 98,
    "example": "Harry went to the shop to look for a new computer.",
    "meaning": "To try to find something",
    "phrasalVerb": "look for"
  },
  {
    "id": 99,
    "example": "I’m looking forward to my birthday. It’s in two days time.",
    "meaning": "To await or anticipate with pleasure",
    "phrasalVerb": "look forward to"
  },
  {
    "id": 100,
    "example": "I always looked up to my father. He was a great man.",
    "meaning": "To admire",
    "phrasalVerb": "look up to"
  },
  {
    "id": 101,
    "example": "It’s not nice to make fun of people in wheelchairs.",
    "meaning": "To laugh at/ make jokes about",
    "phrasalVerb": "make fun of"
  },
  {
    "id": 102,
    "example": "That’s a good excuse. Did you make up it up yourself?",
    "meaning": "To invent (excuse, story)",
    "phrasalVerb": "make up"
  },
  {
    "id": 103,
    "example": "She had so many cats that she kept mixing up their names.",
    "meaning": "To mistake one thing or person for another",
    "phrasalVerb": "mix up"
  },
  {
    "id": 104,
    "example": "Did you hear? Our new neighbors are moving in this afternoon.",
    "meaning": "To arrive in a new home or office",
    "phrasalVerb": "move in"
  },
  {
    "id": 105,
    "example": "When are you moving out? We need your office for the new guy.",
    "meaning": "To leave your home/office for another one.",
    "phrasalVerb": "move out"
  },
  {
    "id": 106,
    "example": "You were so tired after the game that you nodded off on the couch.",
    "meaning": "To fall asleep",
    "phrasalVerb": "nod off"
  },
  {
    "id": 107,
    "example": "Come on. Own up. We know you did it!",
    "meaning": "To admit or confess something",
    "phrasalVerb": "own up"
  },
  {
    "id": 108,
    "example": "Your grandfather passed away peacefully in his sleep last night.",
    "meaning": "To die",
    "phrasalVerb": "pass away"
  },
  {
    "id": 109,
    "example": "He didn’t drink enough water so he passed out at the end of the race.",
    "meaning": "To faint",
    "phrasalVerb": "pass out"
  },
  {
    "id": 110,
    "example": "I’ll pay you back as soon as I get the loan.",
    "meaning": "To reimburse",
    "phrasalVerb": "pay back"
  },
  {
    "id": 111,
    "example": "Don’t put off until tomorrow, what you can do today.",
    "meaning": "To postpone, arrange a later date",
    "phrasalVerb": "put off"
  },
  {
    "id": 112,
    "example": "It’s very dark in here. Please put on the light on.",
    "meaning": "To turn on, switch on",
    "phrasalVerb": "put on"
  },
  {
    "id": 113,
    "example": "The fire fighters were able to put out the fire in ten minutes.",
    "meaning": "To extinguish",
    "phrasalVerb": "put out"
  },
  {
    "id": 114,
    "example": "I can put you up until the weekend but then I’m going away.",
    "meaning": "To accommodate, give somebody a bed",
    "phrasalVerb": "put up"
  },
  {
    "id": 115,
    "example": "I'm not sure how Paz is able to put up with Janice’s cynical attitude.",
    "meaning": "To tolerate or condone",
    "phrasalVerb": "put up with"
  },
  {
    "id": 116,
    "example": "I’ll pick you up at around 7:00 to take you to the airport.",
    "meaning": "To collect somebody",
    "phrasalVerb": "pick up"
  },
  {
    "id": 117,
    "example": "As I already pointed out, there was a mistake in your calculation.",
    "meaning": "To indicate/direct attention to something",
    "phrasalVerb": "point out"
  },
  {
    "id": 118,
    "example": "You can rely on me. I always arrive on time.",
    "meaning": "To count on, depend on, trust",
    "phrasalVerb": "rely on"
  },
  {
    "id": 119,
    "example": "Since he had a sound alibi, the police ruled him out as a suspect.",
    "meaning": "To eliminate",
    "phrasalVerb": "rule out"
  },
  {
    "id": 120,
    "example": "He ran away from home and joined the circus.",
    "meaning": "To escape from a place or suddenly leave",
    "phrasalVerb": "run away"
  },
  {
    "id": 121,
    "example": "I’m so glad I ran into you. I need to ask you something.",
    "meaning": "To meet by accident or unexpectedly (also: bump into)",
    "phrasalVerb": "run into"
  },
  {
    "id": 122,
    "example": "We’ve run out of milk. I’ll just pop next door to borrow some.",
    "meaning": "To have no more of something.",
    "phrasalVerb": "run out of"
  },
  {
    "id": 123,
    "example": "Let’s set off early to miss the rush hour traffic.",
    "meaning": "To start a journey;",
    "phrasalVerb": "set off"
  },
  {
    "id": 124,
    "example": "They set up their own company when they were still in high school.",
    "meaning": "To start a business",
    "phrasalVerb": "set up"
  },
  {
    "id": 125,
    "example": "Don’t buy that. Let’s shop around and see if we can find something cheaper.",
    "meaning": "To compare prices",
    "phrasalVerb": "shop around"
  },
  {
    "id": 126,
    "example": "Panya didn’t need to shoot so many three-pointers; she was just showing off. ",
    "meaning": "deliberately display abilities or accomplishments in order to impress people",
    "phrasalVerb": "show off"
  },
  {
    "id": 127,
    "example": "I don’t think she’ll show up tonight. Her daughter is sick.",
    "meaning": "To appear/arrive",
    "phrasalVerb": "show up"
  },
  {
    "id": 128,
    "example": "Shut up, you’re spoiling the movie!",
    "meaning": "To be silent, stop talking",
    "phrasalVerb": "shut up (impolite)"
  },
  {
    "id": 129,
    "example": "I think you should sit down. It’s bad news.",
    "meaning": "To take a seat",
    "phrasalVerb": "sit down"
  },
  {
    "id": 130,
    "example": "The whole stadium stood up for the national anthem.",
    "meaning": "To rise from a sitting position",
    "phrasalVerb": "stand up"
  },
  {
    "id": 131,
    "example": "My big brother always stuck up for me when I got into a fight.",
    "meaning": "To defend",
    "phrasalVerb": "stick up for"
  },
  {
    "id": 132,
    "example": "Angie really takes after her grandmother.",
    "meaning": "To resemble, in appearance or character",
    "phrasalVerb": "take after"
  },
  {
    "id": 133,
    "example": "Please take care of my cat when I’m away.",
    "meaning": "To look after",
    "phrasalVerb": "take care of"
  },
  {
    "id": 134,
    "example": "The plane will take off as soon as the fog lifts.",
    "meaning": "To leave the ground",
    "phrasalVerb": "take off"
  },
  {
    "id": 135,
    "example": "I hear they’re taking on extra staff for this event.",
    "meaning": "To hire or engage staff",
    "phrasalVerb": "take on"
  },
  {
    "id": 136,
    "example": "Please take out your mobile phones and turn them off.",
    "meaning": "To remove; extract",
    "phrasalVerb": "take out"
  },
  {
    "id": 137,
    "example": "My sister talked me into going to the Backstreet Boys concert last weekend.",
    "meaning": "To convince someone to do something",
    "phrasalVerb": "talk someone into"
  },
  {
    "id": 138,
    "example": "I tried to talk Susan out of signing up for that multilevel marketing scheme, but she did it anyway.",
    "meaning": "To convince someone not to do something",
    "phrasalVerb": "talk someone out of"
  },
  {
    "id": 139,
    "example": "The coach told her off for not trying hard enough.",
    "meaning": "To reprimand/criticize severely",
    "phrasalVerb": "tell off"
  },
  {
    "id": 140,
    "example": "Take your time and think it over before you decide.",
    "meaning": "To consider",
    "phrasalVerb": "think over"
  },
  {
    "id": 141,
    "example": "May I top off your beverage?",
    "meaning": "To fill something to the top; to complete something in a special or spectacular way",
    "phrasalVerb": "top off"
  },
  {
    "id": 142,
    "example": "Go ahead, try it on and see if it fits?",
    "meaning": "To wear something to see if it suits or fits",
    "phrasalVerb": "try on"
  },
  {
    "id": 143,
    "example": "I asked her out but she turned me down flat.",
    "meaning": "To refuse",
    "phrasalVerb": "turn down"
  },
  {
    "id": 144,
    "example": "Your parents used up all the coffee!",
    "meaning": "To finish a product (so that there’s none left)",
    "phrasalVerb": "use up"
  },
  {
    "id": 145,
    "example": "Watch out! There’s a dog in the road.",
    "meaning": "To be careful",
    "phrasalVerb": "watch out"
  },
  {
    "id": 146,
    "example": "Julie wore out her shoes running the marathons.\nJulie was worn out after all that running.",
    "meaning": "To become unusable\nTo become very tired",
    "phrasalVerb": "wear out"
  },
  {
    "id": 147,
    "example": "You should work out twice a week at the gym.\nCan you work this out? I’m no good at math.",
    "meaning": "To do physical exercise\nTo find a solution or calculate something",
    "phrasalVerb": "work out"
  },
  {
    "id": 148,
    "example": "I’ll wash up if you wipe off the table.",
    "meaning": "To clean (board, table).",
    "phrasalVerb": "wipe off"
  }
]

const shuffleCards = phrasalverb_cards.sort(() => Math.random() - 0.5);

  
  
  function PhrasalVerbs () {

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
        <PhrasalVerbHeader />
        <PhrasalVerbList phrasalverbcards={cards} />
      </div>
    );
  }
  
  export default PhrasalVerbs;