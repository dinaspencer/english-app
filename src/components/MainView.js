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
        <li><Link to="/taboo" type="button" className="main-button">Taboo</Link></li>
        <li><Link to="/prefixes" type="button" className="main-button">Prefixes</Link></li>
        <li><Link to="phrasalverbs" type="button" className="main-button">Phrasal Verbs</Link></li>
        <li><Link to="/topics" type="button" className="main-button">Topics</Link></li>
        <li><Link to="/questions" type="button" className="main-button">Questions</Link></li>
        <li><Link to="/gerund" type="button" className="main-button">Gerund or Infinitive?</Link></li>
        {/* <li><button className="main-button">Presentations</button></li>
        <li><button className="main-button">Emails</button></li>
        <li><button className="main-button">Random Expressions</button></li> */}
      </ul>
    </section>
    )
  }

  export default MainView;