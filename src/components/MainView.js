import React from "react";
import { Link } from 'react-router-dom';


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
      
    <section className="main-container">
      <ul>
        <li><Link to={process.env.PUBLIC_URL + '/reflection'} type="button" className="main-button">Reflect: Your Year</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/topics'} type="button" className="main-button">Random Topics</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/phrasalverbs'} type="button" className="main-button">Phrasal Verbs</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/expressions'} type="button" className="main-button">Expressions</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/feelings'} type="button" className="main-button">Feeling or Adjective?</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/gerund'} type="button" className="main-button">Gerund or Infinitive?</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/wish-hope'} type="button" className="main-button">Wish or Hope?</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/prefixes'} type="button" className="main-button">Prefixes</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/taboo'} type="button" className="main-button">Taboo</Link></li>
        <li><Link to={process.env.PUBLIC_URL + '/questions'} type="button" className="main-button">Ask Questions</Link></li>
           
      </ul>
    </section>
    )
  }

  export default MainView;