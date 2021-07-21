import React from "react";

function NavBar() {

    return(

      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Bank Home Page" href="#/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create an Account" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a Deposit" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a Withdrawl" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="bottom" title="User Data" href="#/alldata/">All Data</a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }
  
  export default NavBar;