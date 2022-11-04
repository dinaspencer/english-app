
import React, { useState } from 'react';
import './Card.css';

function TabooHeader() {
    return (
      <header className="App-header header">
      <a href="/">Main Menu</a>
      <h1>Taboo</h1>
    </header>
    )
  }

const TabooCard = ({ taboocard }) => {

    const [flip, setFlip] = useState(false);
  
    return (
        <div className="card-container">
            <div className= {`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
              <div className="front">
              <h1>{taboocard.word}</h1>
              </div>    
              <div className="back">
                <h3>Can't Say:</h3>
              <h3>{taboocard.cant_say}</h3>
              </div>
            </div>
        </div>
      
    )
  }

  const TabooList = ({ taboocards }) => {

    return (
        <div className="card-container">
            {taboocards.map(taboocard =>{
                return <TabooCard taboocard = {taboocard} key={taboocard.id} />
            })}
        </div>
    )
}

const taboo_cards = [ {
    "id": 1,
    "word": "double",
    "cant_say": "\ntwice\nnumber\ntriple\namount"
  },
  {
    "id": 2,
    "word": "myth",
    "cant_say": "\nGreek\nlegend\nhistory\nculture"
  },
  {
    "id": 3,
    "word": "grave",
    "cant_say": "\nbury\ncemetery\ndig\nfuneral"
  },
  {
    "id": 4,
    "word": "surgeon",
    "cant_say": "\ndoctor\nsurgery\noperation\nhospital"
  },
  {
    "id": 5,
    "word": "survey",
    "cant_say": "\nask\nquestions\nopinion\nfill out"
  },
  {
    "id": 6,
    "word": "ankle",
    "cant_say": "\nsprain\nleg\nfoot\nbreak"
  },
  {
    "id": 7,
    "word": "cooperate",
    "cant_say": "\ntogether\neveryone\nunite\nwork"
  },
  {
    "id": 8,
    "word": "fragile",
    "cant_say": "delicate\nbreak\nglass\ncareful"
  },
  {
    "id": 9,
    "word": "",
    "cant_say": ""
  },
  {
    "id": 10,
    "word": "polite",
    "cant_say": "\nnice\nsmile\nmanners\nfriendly"
  },
  {
    "id": 11,
    "word": "nun",
    "cant_say": "\nCatholic\nwoman\npriest\nsister"
  },
  {
    "id": 12,
    "word": "click",
    "cant_say": "\nmouse\nselect\ntap\nnoise"
  },
  {
    "id": 13,
    "word": "adult",
    "cant_say": "\nchild\ngrown up\nresponsibilities\nmature"
  },
  {
    "id": 14,
    "word": "hen",
    "cant_say": "\nrooster\nchicken\nfarm\neggs"
  },
  {
    "id": 15,
    "word": "grill",
    "cant_say": "\nbarbecue\ncook\nfire\nmeat"
  },
  {
    "id": 16,
    "word": "chart",
    "cant_say": "\ngraph\nnumbers\nvisual\ndata"
  },
  {
    "id": 17,
    "word": "",
    "cant_say": ""
  },
  {
    "id": 18,
    "word": "save",
    "cant_say": "\nmoney\ntime\nlater\nbank"
  },
  {
    "id": 19,
    "word": "team",
    "cant_say": "\nsport\nplay\nnational\ntogether"
  },
  {
    "id": 20,
    "word": "sky",
    "cant_say": "\nblue\nclouds\nbirds\nsun"
  },
  {
    "id": 21,
    "word": "blood",
    "cant_say": "red\ncut\nvein\nheart"
  },
  {
    "id": 22,
    "word": "lawyer",
    "cant_say": "\ncourt\nsue\ntrial\njudge"
  },
  {
    "id": 23,
    "word": "heavy",
    "cant_say": "\nlight\nmetal\nweight\nlift"
  },
  {
    "id": 24,
    "word": "travel",
    "cant_say": "\nvacation\nvisit\nplane\ncountry"
  },
  {
    "id": 25,
    "word": "celebrate",
    "cant_say": "\nparty\nbirthday\nanniversary\nfriends"
  },
  {
    "id": 26,
    "word": "wine",
    "cant_say": "\ngrapes\nwhite\nred\nalcohol"
  },
  {
    "id": 27,
    "word": "weak",
    "cant_say": "\nstrong\nmuscle\nsmall\nstrength"
  },
  {
    "id": 28,
    "word": "kiss",
    "cant_say": "\nlips\nlove\ncheek\nromantic"
  },
  {
    "id": 29,
    "word": "stairs",
    "cant_say": "\nup\ndown\nclimb\nhouse"
  },
  {
    "id": 30,
    "word": "t-shirt",
    "cant_say": "wear\ncasual\njeans\nwhite"
  },
  {
    "id": 31,
    "word": "refrigerator",
    "cant_say": "food\nkitchen\ncold\nfreezer"
  },
  {
    "id": 32,
    "word": "late",
    "cant_say": "\nearly\nmeeting\ntime\narrive"
  },
  {
    "id": 33,
    "word": "finish",
    "cant_say": "\nstop\nstart\ndone\ntask"
  },
  {
    "id": 34,
    "word": "bus",
    "cant_say": "\nride\ntransportation\nstop\npublic"
  },
  {
    "id": 35,
    "word": "vacation",
    "cant_say": "trip\nwork\ntravel\nbeach"
  },
  {
    "id": 36,
    "word": "advertising",
    "cant_say": "\ncommercial\nmarketing\npromote\nproduct"
  },
  {
    "id": 37,
    "word": "CEO",
    "cant_say": "\nleader\nBoard of Directors\nin-charge\nexecutive"
  },
  {
    "id": 38,
    "word": "salesperson",
    "cant_say": "sell\nproduct\ncommission\nproduct"
  },
  {
    "id": 39,
    "word": "president",
    "cant_say": "\nleader\nexecutive\ncountry\ncompany"
  },
  {
    "id": 40,
    "word": "promotion",
    "cant_say": "\nmarketing\nadvertising\nsale\noffer"
  },
  {
    "id": 41,
    "word": "client",
    "cant_say": "\ncustomer\nservices\nprofessional\nlawyer"
  },
  {
    "id": 42,
    "word": "budget",
    "cant_say": "\nmoney\nplan\nspend\nperiod"
  },
  {
    "id": 43,
    "word": "inventory",
    "cant_say": "supply\ngoods\ncount\nquantity"
  },
  {
    "id": 44,
    "word": "lend",
    "cant_say": "borrow\nbank\nreturn\ninterest"
  },
  {
    "id": 45,
    "word": "feedback",
    "cant_say": "\nmanager\nsurvey\npositive\nnegative"
  },
  {
    "id": 46,
    "word": "encourage",
    "cant_say": "\nmotivate\ninspire\nsupport\nmanager"
  },
  {
    "id": 47,
    "word": "convince",
    "cant_say": "\npersuade\nbelieve\nwant\ntalk into"
  },
  {
    "id": 48,
    "word": "debt",
    "cant_say": "\nmoney\nowe\nloan\nborrow"
  },
  {
    "id": 49,
    "word": "arrest",
    "cant_say": "\njail\ncriminal\npolice\nhandcuffs"
  },
  {
    "id": 50,
    "word": "measurement",
    "cant_say": "unit\nheight\ndistance\nlength"
  },
  {
    "id": 51,
    "word": "makeup",
    "cant_say": "\nwomen\nlipstick\npretty\nput on"
  },
  {
    "id": 52,
    "word": "suburb",
    "cant_say": "\ncity\noutside\nquiet\nlive"
  },
  {
    "id": 53,
    "word": "corruption",
    "cant_say": "\npolitician\nbribe\ngovernment\nscandal"
  },
  {
    "id": 54,
    "word": "workout",
    "cant_say": "gym\nweight\ntrain\nexercise"
  },
  {
    "id": 55,
    "word": "mansion",
    "cant_say": "house\nhome\nlive\nexpensive"
  },
  {
    "id": 56,
    "word": "hike",
    "cant_say": "\nwalk\nwoods\nmountain\nbackpack"
  },
  {
    "id": 57,
    "word": "owl",
    "cant_say": "\nnight\nbird\nhoot\ntree"
  },
  {
    "id": 58,
    "word": "tornado",
    "cant_say": "\nstorm\nwind\ndamage\nhurricane"
  },
  {
    "id": 59,
    "word": "allergy",
    "cant_say": "\nsneeze\nitch\nspring\nseason"
  },
  {
    "id": 60,
    "word": "cash",
    "cant_say": "\nmoney\ncheck\npayment\ndollar"
  },
  {
    "id": 61,
    "word": "mustache",
    "cant_say": "\nhair\nbeard\nman\nshave"
  },
  {
    "id": 62,
    "word": "married",
    "cant_say": "\nsingle\nhusband\nwife\nwedding"
  },
  {
    "id": 63,
    "word": "invite",
    "cant_say": "\nguest\nattend\nparty\nwedding"
  },
  {
    "id": 64,
    "word": "teacher",
    "cant_say": "\nstudent\nclass\nexplain\nschool"
  },
  {
    "id": 65,
    "word": "discover",
    "cant_say": "\nscientist\nresearch\nfind\nnew"
  },
  {
    "id": 66,
    "word": "nurse",
    "cant_say": "\ncare\npatient\nsick\nhospital"
  },
  {
    "id": 67,
    "word": "weekend",
    "cant_say": "\nwork\nfree\nSaturday\nSunday"
  },
  {
    "id": 68,
    "word": "desert",
    "cant_say": "\ndry\nhot\nSahara\nsand"
  },
  {
    "id": 69,
    "word": "fire",
    "cant_say": "\nhot\nred\nfighter\ncamping"
  },
  {
    "id": 70,
    "word": "border",
    "cant_say": "\nbetween\ncountry\nlimit\nline"
  },
  {
    "id": 71,
    "word": "private",
    "cant_say": "\npersonal\nsecret\ninformation\npublic"
  },
  {
    "id": 72,
    "word": "dirty",
    "cant_say": "\nclean\nclothes\nshower\nsoap"
  },
  {
    "id": 73,
    "word": "blanket",
    "cant_say": "\nwarm\nbed\nsheet\ncover"
  },
  {
    "id": 74,
    "word": "smart",
    "cant_say": "\nintelligent\nnerd\nbrain\nknowledge"
  },
  {
    "id": 75,
    "word": "dance",
    "cant_say": "\nmove\nmusic\nsong\nballet"
  },
  {
    "id": 76,
    "word": "religion",
    "cant_say": "\nGod\nbelief\nculture\nfaith"
  },
  {
    "id": 77,
    "word": "apple",
    "cant_say": "\nred\nfruit\npie\neat"
  },
  {
    "id": 78,
    "word": "cheese",
    "cant_say": "\nmilk\nwhite\npizza\nsandwich"
  },
  {
    "id": 79,
    "word": "Human Resources",
    "cant_say": "hire\nworkforce\npeople\nresume"
  },
  {
    "id": 80,
    "word": "resign",
    "cant_say": "\nquit\ngive notice\nwork\nletter"
  },
  {
    "id": 81,
    "word": "salary",
    "cant_say": "\npayment\nwage\nraise\nemployer"
  },
  {
    "id": 82,
    "word": "brand",
    "cant_say": "\nproduct\nlogo\nadvertising\nawareness"
  },
  {
    "id": 83,
    "word": "label",
    "cant_say": "\nproduct\nlogo\ninformation\nbrand"
  },
  {
    "id": 84,
    "word": "guarantee",
    "cant_say": "\nassure\nproblem\ndefective\ndocument"
  },
  {
    "id": 85,
    "word": "refund",
    "cant_say": "\nreturn\ngive back\npay\ncomplain"
  },
  {
    "id": 86,
    "word": "refuse",
    "cant_say": "\nno\nreject\ndeny\naccept"
  },
  {
    "id": 87,
    "word": "sugggest",
    "cant_say": "\nrecommend\nconsider\nopinion\nimprovement"
  },
  {
    "id": 88,
    "word": "competitor",
    "cant_say": "\nsame\nproduct\nadvantage\nmarket"
  },
  {
    "id": 89,
    "word": "tragedy",
    "cant_say": "\nterrible\nsad\nvictim\ndisaster"
  },
  {
    "id": 90,
    "word": "prescription",
    "cant_say": "\ndoctor\npaper\nmedicine\npharmacy"
  },
  {
    "id": 91,
    "word": "minimum",
    "cant_say": "\nmaximum\nlowest\nwage\namount"
  },
  {
    "id": 92,
    "word": "retired",
    "cant_say": "work\nrelax\nold\npension"
  },
  {
    "id": 93,
    "word": "spread",
    "cant_say": "\ndisease\nvirus\ninfection\nprevent"
  },
  {
    "id": 94,
    "word": "chew",
    "cant_say": "\ngum\nfood\neat\nteeth"
  },
  {
    "id": 95,
    "word": "crowd",
    "cant_say": "\npeople\nmany\nherd\nstreet"
  },
  {
    "id": 96,
    "word": "lottery",
    "cant_say": "win\nmoney\nticket\ngambling"
  },
  {
    "id": 97,
    "word": "float",
    "cant_say": "boat\nwater\nsurface\ntop"
  },
  {
    "id": 98,
    "word": "microwave",
    "cant_say": "heat\nfood\nfast\ncook"
  },
  {
    "id": 99,
    "word": "toast",
    "cant_say": "bread\nbutter\nbreakfast\njam"
  },
  {
    "id": 100,
    "word": "museum",
    "cant_say": "art\nhistory\nquiet\nnational"
  },
  {
    "id": 101,
    "word": "war",
    "cant_say": "violence\narmy\nworld\nweapons"
  },
  {
    "id": 102,
    "word": "star",
    "cant_say": "\nsun\nbright\nyellow\nnight"
  },
  {
    "id": 103,
    "word": "busy",
    "cant_say": "\nwork\ntime\nschool\nrush"
  },
  {
    "id": 104,
    "word": "poor",
    "cant_say": "\nrich\nmoney\nbuy\npay"
  },
  {
    "id": 105,
    "word": "camera",
    "cant_say": "picture\ntake\ndigital\nvideo"
  },
  {
    "id": 106,
    "word": "coach",
    "cant_say": "\nteam\nplayer\nleader\nsport"
  },
  {
    "id": 107,
    "word": "mountain",
    "cant_say": "\nclimb\nEverest\ntall\nsnow"
  },
  {
    "id": 108,
    "word": "wake up",
    "cant_say": "morning\nbed\nearly\nget up"
  },
  {
    "id": 109,
    "word": "knife",
    "cant_say": "\nfork\nspoon\ncut\nsharp"
  },
  {
    "id": 110,
    "word": "bear",
    "cant_say": "\nwoods\nbrown\nblack\nanimal"
  },
  {
    "id": 111,
    "word": "raw",
    "cant_say": "sushi\ncook\neat\nmeat"
  },
  {
    "id": 112,
    "word": "dessert",
    "cant_say": "\ncake\npie\nsweet\ncookie"
  },
  {
    "id": 113,
    "word": "send",
    "cant_say": "\nemail\nletter\nreceive\npackage"
  },
  {
    "id": 114,
    "word": "couch",
    "cant_say": "\nsit\nliving room\nTV\nrelax"
  },
  {
    "id": 115,
    "word": "negotiate",
    "cant_say": "\nagreement\ncompromise\nconvince\ndiscussion"
  },
  {
    "id": 116,
    "word": "bonus",
    "cant_say": "\nmoney\nreward\nperk\npayment"
  },
  {
    "id": 117,
    "word": "launch",
    "cant_say": "release\nproduct\nready\nintroduce"
  },
  {
    "id": 118,
    "word": "agenda",
    "cant_say": "schedule\nplan\nmeeting\ndo"
  },
  {
    "id": 119,
    "word": "complaint",
    "cant_say": "\ncustomer service\nproblem\nunhappy\nunacceptable"
  },
  {
    "id": 120,
    "word": "deadline",
    "cant_say": "submit\nfinish\nextension\ntask"
  },
  {
    "id": 121,
    "word": "raise",
    "cant_say": "salary\nwage\nperformance\nprice"
  },
  {
    "id": 122,
    "word": "growth",
    "cant_say": "expand\nincrease\nsuccess\nbigger"
  }
]

const shuffleCards = taboo_cards.sort(() => Math.random() - 0.5); 



  function Taboo () {

    
    const [cards, setCards] = useState(shuffleCards);
   
  
    return (
      <div className="App">
        <TabooHeader />
        <TabooList taboocards={cards} />
      </div>
    );
  }
  
  export default Taboo;