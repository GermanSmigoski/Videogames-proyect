import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/home";
import Landing from "./Components/Landing/landing";
import Create from "./Components/Create/create";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/create" component={Create}></Route>
          <Route exact path="/videogame/:id" component={Detail}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
