
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
    "example": "What are some rules you have to abide by at work?",
    "meaning": "To respect or obey a decision, a law or a rule",
    "phrasalVerb": "abide by"
  },
  {
    "id": 2,
    "example": "Have you ever had to account for a discrepancy in your expense reports?",
    "meaning": "To explain, give a reason",
    "phrasalVerb": "account for"
  },
  {
    "id": 3,
    "example": "What small purchases add up, making it hard for you to save money?",
    "meaning": "To make sense, seem reasonable; To take the sum of many small things",
    "phrasalVerb": "add up"
  },
  {
    "id": 4,
    "example": "Tell me something you would advise a new colleague against.",
    "meaning": "To recommend not doing something",
    "phrasalVerb": "advise against"
  },
  {
    "id": 5,
    "example": "Do you ever pretend to agree with someone, rather than share your true opinion?",
    "meaning": "To have the same opinion as someone else.",
    "phrasalVerb": "agree with"
  },
  {
    "id": 6,
    "example": "What possible roadblocks do you have to allow for in your daily work?",
    "meaning": "To take into consideration",
    "phrasalVerb": "allow for"
  },
  {
    "id": 7,
    "example": "What types of vacation destinations really appeal to you?",
    "meaning": "To be attractive or interesting",
    "phrasalVerb": "appeal to"
  },
  {
    "id": 8,
    "example": "What advice would you give someone who's applying for a job at your company?",
    "meaning": "To make a formal request for something (job, permit, loan etc.)",
    "phrasalVerb": "apply for"
  },
  {
    "id": 9,
    "example": "Have you ever backed away from a scary animal or situation?",
    "meaning": "To move backwards, in fear or dislike",
    "phrasalVerb": "back away"
  },
  {
    "id": 10,
    "example": "I wish ______ would back down.",
    "meaning": "To withdraw, concede defeat, or admit being wrong",
    "phrasalVerb": "back down"
  },
  {
    "id": 11,
    "example": "A time when you needed someone to back you up",
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
    "example": "Have you ever blacked out?",
    "meaning": "To faint, lose consciousness",
    "phrasalVerb": "black out"
  },
  {
    "id": 14,
    "example": "How often do you encounter roads that are blocked off during your commute?",
    "meaning": "To separate using a barrier.",
    "phrasalVerb": "block off"
  },
  {
    "id": 15,
    "example": "A time when you blew up at someone and then regretted it",
    "meaning": "To explode or to get angry",
    "phrasalVerb": "blow up"
  },
  {
    "id": 16,
    "example": "Agree or disagree: It all boils down to who has more power.",
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
    "example": "Tell me about a time when something of yours (a machine, car, etc) broke down.",
    "meaning": "To go out of order, cease to function\nTo lose control of one’s emotions",
    "phrasalVerb": "break down"
  },
  {
    "id": 20,
    "example": "Has your house ever been broken into?",
    "meaning": "To enter by force",
    "phrasalVerb": "break into"
  },
  {
    "id": 21,
    "example": "What would you do if violence broke out in your neighborhood?",
    "meaning": "To start suddenly",
    "phrasalVerb": "break out"
  },
  // {
  //   "id": 22,
  //   "example": "Several prisoners broke out of jail.",
  //   "meaning": "To escape from a place by force",
  //   "phrasalVerb": "break out of"
  // },
  {
    "id": 23,
    "example": "Tell me about a person you broke up with, and why.",
    "meaning": "To come to an end (marriage, relationship)",
    "phrasalVerb": "break up"
  },
  {
    "id": 24,
    "example": "What are the hardest things about bringing up kids in today's world?",
    "meaning": "To raise (a child)",
    "phrasalVerb": "bring up"
  },
  {
    "id": 25,
    "example": "A skill you'd like to brush up on this year",
    "meaning": "To improve, refresh one’s knowledge of something",
    "phrasalVerb": "brush up on"
  },
  {
    "id": 26,
    "example": "How often do you bump into acquaintances or friends?",
    "meaning": "To meet by chance or unexpectedly",
    "phrasalVerb": "bump into"
  },
  {
    "id": 27,
    "example": "Have you ever been close to burning out? What do you do to avoid burning out?",
    "meaning": "become exhausted from over-working",
    "phrasalVerb": "burn out"
  },
  {
    "id": 28,
    "example": "How often do you have to call people back during a normal day?",
    "meaning": "To return a phone call",
    "phrasalVerb": "call back"
  },
  {
    "id": 29,
    "example": "A meeting or event that was called off... and were you secretly glad it was called off?",
    "meaning": "To cancel",
    "phrasalVerb": "call off"
  },
  {
    "id": 30,
    "example": "Which member of your family do you help to calm down the most?",
    "meaning": "To become more relaxed, less angry or upset",
    "phrasalVerb": "calm down"
  },
  {
    "id": 31,
    "example": "An activity you plan to carry on doing this year",
    "meaning": "To continue",
    "phrasalVerb": "carry on"
  },
  {
    "id": 32,
    "example": "Does your company carry out testing on animals?",
    "meaning": "To do something as specified (a plan, an order, a threat)\nTo perform or conduct (test, experiment)",
    "phrasalVerb": "carry out"
  },
  {
    "id": 33,
    "example": "Tell me about a negative experience you had when checking in - either to a hotel or a flight.",
    "meaning": "To register at a hotel or airport",
    "phrasalVerb": "check in"
  },
  {
    "id": 34,
    "example": "Have you ever forgotten to check out of a hotel?",
    "meaning": "To pay one’s bill and leave (a hotel)\nTo investigate",
    "phrasalVerb": "check out"
  },
  {
    "id": 35,
    "example": "Have you ever clammed up in an English-speaking meeting?",
    "meaning": "To become nervous and refuse to speak",
    "phrasalVerb": "clam up"
  },
  {
    "id": 36,
    "example": "Something you think the government or police should crack down on.",
    "meaning": "To act strictly to prevent something",
    "phrasalVerb": "crack down on"
  },
  {
    "id": 37,
    "example": "Have you ever come across old photos or objects while cleaning your house?",
    "meaning": "To find by chance\nTo appear, seem, make an impression",
    "phrasalVerb": "come across"
  },
  {
    "id": 38,
    "example": "Have you ever had to come forward in an investigation?",
    "meaning": "To offer to give help or information",
    "phrasalVerb": "come forward"
  },
  {
    "id": 39,
    "example": "Someone you really count on",
    "meaning": "To rely or depend on (for help)",
    "phrasalVerb": "count on"
  },
  {
    "id": 40,
    "example": "Something you always say you're going to cut down on",
    "meaning": "To reduce in number or size",
    "phrasalVerb": "cut down on"
  },
  {
    "id": 41,
    "example": "Do you think humans should cut out meat consumption?",
    "meaning": "To remove using scissors\nTo completely stop doing something",
    "phrasalVerb": "cut out"
  },
  {
    "id": 42,
    "example": "What are some ways you deal with stress?",
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
    "example": "Something you had to do without when you first started your career or lived on your own.",
    "meaning": "To manage without",
    "phrasalVerb": "do without"
  },
  {
    "id": 45,
    "example": "Tell me about a recent meeting that dragged on.",
    "meaning": "To last longer than expected",
    "phrasalVerb": "drag on"
  },
  {
    "id": 46,
    "example": "Do you draw up contracts as part of your normal job?",
    "meaning": "To write (contract, agreement, document)",
    "phrasalVerb": "draw up"
  },
  {
    "id": 47,
    "example": "When was the last time you dressed up? What did you wear?",
    "meaning": "wear elegant clothes",
    "phrasalVerb": "dress up"
  },
  {
    "id": 48,
    "example": "Someone who you like dropping in to visit when you have time",
    "meaning": "To visit, usually on the way somewhere",
    "phrasalVerb": "drop in"
  },
  {
    "id": 49,
    "example": "Do you still have to drop your kids off at school?",
    "meaning": "To deliver someone or something",
    "phrasalVerb": "drop off"
  },
  {
    "id": 50,
    "example": "Do you know anyone who dropped out of school or university? What are they doing now?",
    "meaning": "To leave school without finishing",
    "phrasalVerb": "drop out"
  },
  {
    "id": 51,
    "example": "What time does Madrid traffic start easing off?",
    "meaning": "To reduce, become less severe or slow down (pain, traffic, work)",
    "phrasalVerb": "ease off"
  },
  {
    "id": 52,
    "example": "Do you know anyone whose marriage ended in divorce?",
    "meaning": "To finish in a certain way; result in",
    "phrasalVerb": "end in"
  },
  {
    "id": 53,
    "example": "A person who you ended up becoming friends with, who you didn't expect.",
    "meaning": "To finally reach a state, place or action, usually by surprise or accident",
    "phrasalVerb": "end up"
  },
  {
    "id": 54,
    "example": "Tell me about a time when your travel plans fell through.",
    "meaning": "To fail; doesn’t happen",
    "phrasalVerb": "fall through"
  },
  {
    "id": 55,
    "example": "Something your kids/family figured out much faster than you",
    "meaning": "To understand, find the answer",
    "phrasalVerb": "figure out"
  },
  {
    "id": 56,
    "example": "Do you hate filling out forms? Why or why not?",
    "meaning": "To complete (a form/an application)",
    "phrasalVerb": "fill out"
  },
  {
    "id": 57,
    "example": "Have you found out anything interesting about a neighbor or colleague?",
    "meaning": "To discover or obtain information",
    "phrasalVerb": "find out"
  },
  {
    "id": 58,
    "example": "When is it hard for you to focus on your work?",
    "meaning": "To concentrate on something",
    "phrasalVerb": "focus on"
  },
  {
    "id": 59,
    "example": "A person who you really get along with, and a person you don't get along with",
    "meaning": "To be on good terms; work well with",
    "phrasalVerb": "get along (with)"
  },
  // {
  //   "id": 60,
  //   "example": "What are you getting at? Do you think I’m to blame?",
  //   "meaning": "To imply",
  //   "phrasalVerb": "get at"
  // },
  {
    "id": 61,
    "example": "Your favorite place to get away for a weekend",
    "meaning": "To escape",
    "phrasalVerb": "get away"
  },
  {
    "id": 62,
    "example": "How long do you think you could get by without a job?",
    "meaning": "To be able to live or deal with a situation by having very little of something you need, such as money",
    "phrasalVerb": "get by"
  },
  {
    "id": 63,
    "example": "The first thing you do when you get in the car each day",
    "meaning": "To enter",
    "phrasalVerb": "get in"
  },
  // {
  //   "id": 64,
  //   "example": "How did you get into your car without the keys?",
  //   "meaning": "To enter",
  //   "phrasalVerb": "get into (+noun)"
  // },
  {
    "id": 65,
    "example": "Have you ever forgotten to get off a train or bus at the stop you wanted?",
    "meaning": "To leave (bus, train, plane)",
    "phrasalVerb": "get off"
  },
  {
    "id": 66,
    "example": "Do you switch your phone to airplane mode when you get on a flight?",
    "meaning": "To board (bus, train, plane)",
    "phrasalVerb": "get on"
  },
  // {
  //   "id": 67,
  //   "example": "After they split up, she had a hard time getting on with her life.",
  //   "meaning": "To continue to do; make progress",
  //   "phrasalVerb": "get on with (something)"
  // },
  {
    "id": 68,
    "example": "A group of people you get on well with",
    "meaning": "To have a good relationship with",
    "phrasalVerb": "get on (well) with (somebody)"
  },
  // {
  //   "id": 69,
  //   "example": "He had a hard time getting out of Newark because of the snow.",
  //   "meaning": "To leave",
  //   "phrasalVerb": "get out"
  // },
  {
    "id": 70,
    "example": "A time when you tried to get out of a meeting or responsibility",
    "meaning": "To avoid doing something",
    "phrasalVerb": "get out of"
  },
  {
    "id": 71,
    "example": "The last time you got over an illness",
    "meaning": "To recover from (illness, disappointment)",
    "phrasalVerb": "get over"
  },
  {
    "id": 72,
    "example": "Tell me about a task (medical, or work) you need to get over with.",
    "meaning": "To finish an unpleasant task",
    "phrasalVerb": "get (something) over with"
  },
  {
    "id": 73,
    "example": "How often do you get rid of clothes you don't wear anymore?",
    "meaning": "To eliminate",
    "phrasalVerb": "get rid of"
  },
  {
    "id": 74,
    "example": "Does your entire family get together very often?",
    "meaning": "To meet each other",
    "phrasalVerb": "get together"
  },
  {
    "id": 75,
    "example": "How long do you actually get up after waking up?",
    "meaning": "To rise, leave bed",
    "phrasalVerb": "get up"
  },
  {
    "id": 76,
    "example": "Do you think parents give in too easily to their children's demands?",
    "meaning": "To cease opposition; yield",
    "phrasalVerb": "give in"
  },
  {
    "id": 77,
    "example": "A habit you gave up or you want to give up",
    "meaning": "To stop doing something",
    "phrasalVerb": "give up"
  },
  {
    "id": 78,
    "example": "A tough situation you went through in the last year",
    "meaning": "To experience",
    "phrasalVerb": "go through"
  },
  {
    "id": 79,
    "example": "Agree or disagree: Women grow up faster than men.",
    "meaning": "To spend one’s childhood; develop; become an adult",
    "phrasalVerb": "grow up"
  },
  // {
  //   "id": 80,
  //   "example": "Please hand in your papers before Friday.",
  //   "meaning": "To submit (report, homework)",
  //   "phrasalVerb": "hand in"
  // },
  // {
  //   "id": 81,
  //   "example": "Susan volunteered at the shelter where she handed out warm clothes.",
  //   "meaning": "To distribute",
  //   "phrasalVerb": "hand out"
  // },
  {
    "id": 82,
    "example": "Where is your favorite place to hang out?",
    "meaning": "To spend time in a particular place or with a group of friends",
    "phrasalVerb": "hang out"
  },
  {
    "id": 83,
    "example": "What's the first thing you're going to do after we hang up today?",
    "meaning": "To end a phone conversation",
    "phrasalVerb": "hang up"
  },
  {
    "id": 84,
    "example": "Is there anything holding you back from achieving success?",
    "meaning": "To prevent someone from doing something",
    "phrasalVerb": "hold back"
  },
  // {
  //   "id": 85,
  //   "example": "Please hold on and a representative will answer your call.\nShe was so scared on the rollercoaster ride that she held on for dear life.",
  //   "meaning": "To wait\nTo grip tightly",
  //   "phrasalVerb": "hold on"
  // },
  {
    "id": 86,
    "example": "How often do you have to tell your kids or family to hurry up?",
    "meaning": "To be quick, act speedily",
    "phrasalVerb": "hurry up"
  },
  {
    "id": 87,
    "example": "Some issues your company needs to iron out",
    "meaning": "To remove problems or find solutions",
    "phrasalVerb": "iron out"
  },
  {
    "id": 88,
    "example": "Do you feel nervous joining in a meeting or group conversation in English?",
    "meaning": "To participate",
    "phrasalVerb": "join in"
  },
  {
    "id": 89,
    "example": "A celebrity you think you would hit it off with",
    "meaning": "To have a good relationship from the first moment of meeting someone",
    "phrasalVerb": "hit it off"
  },
  // {
  //   "id": 90,
  //   "example": "If you keep on making that noise I will get annoyed.",
  //   "meaning": "To continue doing something",
  //   "phrasalVerb": "keep on"
  // },
  {
    "id": 91,
    "example": "Do you keep up with the news? Why or why not?",
    "meaning": "To stay at the same level as someone or something",
    "phrasalVerb": "keep up with"
  },
  {
    "id": 92,
    "example": "Use 'kick off' to talk about your work.",
    "meaning": "To begin, start",
    "phrasalVerb": "kick off"
  },
  {
    "id": 93,
    "example": "What information do you (now, or when you were younger) usually leave out when talking to your parents?",
    "meaning": "To omit, not mention",
    "phrasalVerb": "leave out"
  },
  {
    "id": 94,
    "example": "A time when you felt let down",
    "meaning": "To disappoint",
    "phrasalVerb": "let down"
  },
  {
    "id": 95,
    "example": "Do you need to look after older family members? Do you have any help with this?",
    "meaning": "To take care of",
    "phrasalVerb": "look after"
  },
  {
    "id": 96,
    "example": "Is it ever okay to look down on others?",
    "meaning": "To consider as inferior",
    "phrasalVerb": "look down on"
  },
  // {
  //   "id": 97,
  //   "example": "If you don’t want to take part in the game you can look on for now.",
  //   "meaning": "To be a spectator at an event",
  //   "phrasalVerb": "look on"
  // },
  {
    "id": 98,
    "example": "Are you looking for anything new for your house?",
    "meaning": "To try to find something",
    "phrasalVerb": "look for"
  },
  {
    "id": 99,
    "example": "An event or situation you are looking forward to",
    "meaning": "To await or anticipate with pleasure",
    "phrasalVerb": "look forward to"
  },
  {
    "id": 100,
    "example": "Who did you look up to when you were younger? What about now?",
    "meaning": "To admire",
    "phrasalVerb": "look up to"
  },
  {
    "id": 101,
    "example": "Agree or disagree: It’s not nice to make fun of people.",
    "meaning": "To laugh at/ make jokes about",
    "phrasalVerb": "make fun of"
  },
  {
    "id": 102,
    "example": "Have you ever made up an excuse as to why you arrived somewhere late?",
    "meaning": "To invent (excuse, story)",
    "phrasalVerb": "make up"
  },
  // {
  //   "id": 103,
  //   "example": "She had so many cats that she kept mixing up their names.",
  //   "meaning": "To mistake one thing or person for another",
  //   "phrasalVerb": "mix up"
  // },
  {
    "id": 104,
    "example": "When did you move into your current house?",
    "meaning": "To arrive in a new home or office",
    "phrasalVerb": "move in/into"
  },
  {
    "id": 105,
    "example": "Do you think you'll ever move out of your house?",
    "meaning": "To leave your home/office for another one.",
    "phrasalVerb": "move out"
  },
  // {
  //   "id": 106,
  //   "example": "You were so tired after the game that you nodded off on the couch.",
  //   "meaning": "To fall asleep",
  //   "phrasalVerb": "nod off"
  // },
  {
    "id": 107,
    "example": "A habit or investment that has really paid off",
    "meaning": "To yield profits or benefits following an investment (of time, money, energy, etc.).",
    "phrasalVerb": "pay off"
  },
  {
    "id": 108,
    "example": "How many years ago did your grandparents pass away?",
    "meaning": "To die",
    "phrasalVerb": "pass away"
  },
  {
    "id": 109,
    "example": "Have you ever passed out or almost passed out?",
    "meaning": "To faint",
    "phrasalVerb": "pass out"
  },
  // {
  //   "id": 110,
  //   "example": "I’ll pay you back as soon as I get the loan.",
  //   "meaning": "To reimburse",
  //   "phrasalVerb": "pay back"
  // },
  {
    "id": 111,
    "example": "What types of tasks do you usually put off?",
    "meaning": "To postpone, arrange a later date",
    "phrasalVerb": "put off"
  },
  {
    "id": 112,
    "example": "Did you need to put on a coat or jacket this morning?",
    "meaning": "To put a piece of clothing on your body",
    "phrasalVerb": "put on"
  },
  {
    "id": 113,
    "example": "True or false: my job involves putting out fires.",
    "meaning": "To extinguish; to deal with urgent matters",
    "phrasalVerb": "put out"
  },
  {
    "id": 114,
    "example": "When was the last time you put somebody up?",
    "meaning": "To accommodate, give somebody a bed in your house",
    "phrasalVerb": "put up"
  },
  {
    "id": 115,
    "example": "What types of attitudes or behaviors do you refuse to put up with?",
    "meaning": "To tolerate or condone",
    "phrasalVerb": "put up with"
  },
  {
    "id": 116,
    "example": "Do you share responsibilities with your partner for picking up your kids?",
    "meaning": "To collect somebody",
    "phrasalVerb": "pick up"
  },
  {
    "id": 117,
    "example": "A mistake you pointed out, or that somebody else pointed out to you",
    "meaning": "To indicate/direct attention to something",
    "phrasalVerb": "point out"
  },
  // {
  //   "id": 118,
  //   "example": "You can rely on me. I always arrive on time.",
  //   "meaning": "To count on, depend on, trust",
  //   "phrasalVerb": "rely on"
  // },
  {
    "id": 119,
    "example": "Some countries you've ruled out for your travel plans",
    "meaning": "To exclude, eliminate or make impossible",
    "phrasalVerb": "rule out"
  },
  {
    "id": 120,
    "example": "If you ran away from home, where would you go?",
    "meaning": "To escape from a place or suddenly leave",
    "phrasalVerb": "run away"
  },
  // {
  //   "id": 121,
  //   "example": "I’m so glad I ran into you. I need to ask you something.",
  //   "meaning": "To meet by accident or unexpectedly (also: bump into)",
  //   "phrasalVerb": "run into"
  // },
  {
    "id": 122,
    "example": "Something in your kitchen that you're running out of, and who's going to buy more",
    "meaning": "To have no more of something.",
    "phrasalVerb": "run out of"
  },
  // {
  //   "id": 123,
  //   "example": "Let’s set off early to miss the rush hour traffic.",
  //   "meaning": "To start a journey;",
  //   "phrasalVerb": "set off"
  // },
  {
    "id": 124,
    "example": "What kind of company would you set up if you had unlimited funds?",
    "meaning": "To start a business",
    "phrasalVerb": "set up"
  },
  {
    "id": 125,
    "example": "What products do you shop around for?",
    "meaning": "To compare prices",
    "phrasalVerb": "shop around"
  },
  {
    "id": 126,
    "example": "Have you ever met or seen someone who loved to show off?",
    "meaning": "deliberately display abilities or accomplishments in order to impress people",
    "phrasalVerb": "show off"
  },
  {
    "id": 127,
    "example": "Agree or disagree: it's important to show up on time, always.",
    "meaning": "To appear/arrive",
    "phrasalVerb": "show up"
  },
  // {
  //   "id": 128,
  //   "example": "Shut up, you’re spoiling the movie!",
  //   "meaning": "To be silent, stop talking",
  //   "phrasalVerb": "shut up (impolite)"
  // },
  // {
  //   "id": 129,
  //   "example": "I think you should sit down. It’s bad news.",
  //   "meaning": "To take a seat",
  //   "phrasalVerb": "sit down"
  // },
  {
    "id": 130,
    "example": "How often do you stand up from your desk during the day?",
    "meaning": "To rise from a sitting position",
    "phrasalVerb": "stand up"
  },
  // {
  //   "id": 131,
  //   "example": "My big brother always stuck up for me when I got into a fight.",
  //   "meaning": "To defend",
  //   "phrasalVerb": "stick up for"
  // },
  {
    "id": 132,
    "example": "Which of your parents do you take after the most?",
    "meaning": "To resemble, in appearance or character",
    "phrasalVerb": "take after"
  },
  // {
  //   "id": 133,
  //   "example": "Please take care of my cat when I’m away.",
  //   "meaning": "To look after",
  //   "phrasalVerb": "take care of"
  // },
  {
    "id": 134,
    "example": "Do you think your company's newest products will take off?",
    "meaning": "To leave the ground; to remove (clothing); to start to be very successful",
    "phrasalVerb": "take off"
  },
  // {
  //   "id": 135,
  //   "example": "I hear they’re taking on extra staff for this event.",
  //   "meaning": "To hire or engage staff",
  //   "phrasalVerb": "take on"
  // },
  // {
  //   "id": 136,
  //   "example": "Please take out your mobile phones and turn them off.",
  //   "meaning": "To remove; extract",
  //   "phrasalVerb": "take out"
  // },
  {
    "id": 137,
    "example": "Tell me about a time someone talked you into doing something you didn't really want to do.",
    "meaning": "To convince someone to do something",
    "phrasalVerb": "talk someone into"
  },
  {
    "id": 138,
    "example": "Tell me about a time someone talked you out of doing something you were thinking about doing.",
    "meaning": "To convince someone not to do something",
    "phrasalVerb": "talk someone out of"
  },
  {
    "id": 139,
    "example": "In your family, is it considered normal or rude to tell others off?",
    "meaning": "To reprimand/criticize severely",
    "phrasalVerb": "tell off"
  },
  {
    "id": 140,
    "example": "Something you need to think over before you make up your mind",
    "meaning": "To consider",
    "phrasalVerb": "think over"
  },
  {
    "id": 141,
    "example": "Which qualities would you screen out in potential job candidates?",
    "meaning": "To remove (someone or something that is not suitable for a particular purpose) from a group that is being examined.",
    "phrasalVerb": "screen out"
  },
  {
    "id": 142,
    "example": "Do you try on clothes in the shop or do you wait until you get home?",
    "meaning": "To wear something to see if it suits or fits",
    "phrasalVerb": "try on"
  },
  {
    "id": 143,
    "example": "An opportunity you turned down, and do you regret it?",
    "meaning": "To refuse; to decrease the volume",
    "phrasalVerb": "turn down"
  },
  {
    "id": 144,
    "example": "In your house, what happens when the toilet paper is used up?",
    "meaning": "To finish a product (so that there’s none left)",
    "phrasalVerb": "use up"
  },
  {
    "id": 145,
    "example": "Things to watch out for when traveling abroad",
    "meaning": "To be careful",
    "phrasalVerb": "watch out"
  },
  {
    "id": 146,
    "example": "What types of activities wear you out?",
    "meaning": "To become unusable\nTo become very tired",
    "phrasalVerb": "wear out"
  },
  {
    "id": 147,
    "example": "Are you a person who usually thinks that things will work out in the end?",
    "meaning": "To do physical exercise; to end well",
    "phrasalVerb": "work out"
  },
  // {
  //   "id": 148,
  //   "example": "I’ll wash up if you wipe off the table.",
  //   "meaning": "To clean (board, table).",
  //   "phrasalVerb": "wipe off"
  // }
]

const shuffleCards = phrasalverb_cards.sort(() => Math.random() - 0.5);

  
  
  function PhrasalVerbs () {

    const [cards] = useState(shuffleCards);
  
  
    //FETCH DATA FROM JSON

  
    return (
      <div className="App">
        <PhrasalVerbHeader />
        <PhrasalVerbList phrasalverbcards={cards} />
      </div>
    );
  }
  
  export default PhrasalVerbs;