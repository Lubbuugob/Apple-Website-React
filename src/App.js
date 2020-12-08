
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
// import Youtube from "./Components/Youtube/Youtube"

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";

// import general css
import "./Assets/css/styles.css";
import Navigation from "./Components/Nav/Nav";
// import { Route, Switch, Router } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} />
          <Route path="/iphone" exact component={Iphone} />
          <Route path="/iphone/:pid" exact component={Productpage} />
          <Route path="/" component={Four04} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Main />
//       <Youtube />
//       <Footer />
//     </div>
//   );
// }

// export default App;
