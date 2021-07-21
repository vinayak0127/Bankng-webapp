import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import NavBar from "./component/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./component/NotFound";
import AddUser from "./component/users/AddUser";
import Transfer from "./component/users/Transfer";
import View from "./component/users/View";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/users/add" component={AddUser} />
            <Route path="/users/transfer/:id" component={Transfer} />
            <Route path="/users/view/:id" component={View} />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
