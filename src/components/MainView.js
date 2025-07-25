import React from "react";
import { Link } from 'react-router-dom';
import './MainView.css';


// function MyLinkButton() {
//   const navigate = useNavigate()
//   return (
//       <button onClick={() => navigate("/home")}>
//         Go Home
//       </button>
//   );
// }



function MainView() {
    return (
      <>
    <div className="main-container">
      
      <ul>
       
        <li><Link to={process.env.PUBLIC_URL + '/topics'} type="button" className="main-button">Random Topics</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/mba'} type="button" className="main-button">Business Questions</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/reflection'} type="button" className="main-button">Reflection Questions</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/phrasalverbs'} type="button" className="main-button">Phrasal Verbs</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/confusedwords'} type="button" className="main-button">Commonly Confused Words</Link></li>
        
        <li><Link to={process.env.PUBLIC_URL + '/feelings'} type="button" className="main-button">Feeling or Adjective?</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/gerund'} type="button" className="main-button">Gerund or Infinitive?</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/wish-hope'} type="button" className="main-button">Wish or Hope?</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/questions'} type="button" className="main-button">Create Questions</Link></li>
       
        <li><Link to={process.env.PUBLIC_URL + '/taboo'} type="button" className="main-button">Taboo</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/falsefriends'} type="button" className="main-button">False Friends</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/expressions'} type="button" className="main-button">Expressions</Link></li>

        <li><Link to={process.env.PUBLIC_URL + '/prefixes'} type="button" className="main-button">Prefixes</Link></li>
           
      </ul>
    </div>
    {/* <div className="main-container column-container">
      
      <ul>
      <li><Link to={process.env.PUBLIC_URL + '/falsefriends'} type="button" className="main-button">False Friends</Link></li>

    <li><Link to={process.env.PUBLIC_URL + '/expressions'} type="button" className="main-button">Expressions</Link></li>

    <li><Link to={process.env.PUBLIC_URL + '/prefixes'} type="button" className="main-button">Prefixes</Link></li>
      </ul>
    </div> */}
    </>
    )
  }

  export default MainView;