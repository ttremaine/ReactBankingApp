import React from "react";
import Card from "../Context";

function Home(){
    return (
      <Card
        txtcolor="black"
        header="TaylorBank Home"
        title="Welcome to TaylorBank"
        text="You can move around using the navigation bar."
        body={(<img src="bank.png" className="img-fluid" alt="Responsive"/>)}
      />    
    );  
  }

export default Home;