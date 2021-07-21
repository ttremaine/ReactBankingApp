import './App.css';
import React from "react";
import { BrowserRouter as Link, Route, HashRouter } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/AllData";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import usersReducer from "./reducer";

export const UserContext = React.createContext({
  users: [{isCurrentUser:true, index:0, name:'abel', email:'abel@mit.edu', password:'secret', balance:100}]
});

function App() {
  const initialContext = React.useContext(UserContext);
  const [state, dispatch] = React.useReducer(usersReducer, initialContext);
  const [loginUser, setLoginUser] = React.useState({index:0, name:'abel', email:'abel@mit.edu', password:'secret', balance:100});
  const [userIndex, setUserIndex] = React.useState(0);

  function loginUpdate(login) {
    setLoginUser(login);
  }
  
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={ { state, dispatch, loginUser, setLoginUser, userIndex, setUserIndex, loginUpdate } }>
        <div className="container" style={{padding: "20px"}} state={{state}} dispatch={{dispatch}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );  
}

export default App;
