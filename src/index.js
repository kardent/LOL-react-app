import React from "react";
import ReactDOM from "react-dom";

import LolProfile from "./components/LolProfile.js";
import LolItem from "./components/LolItem.js";

class Layout extends React.Component {
constructor(){
  super();
  this.summerName = "Gandalf The Gay"
}

  render(){
    return(
      <div>
        <h2>Summoner Name: {this.summerName}</h2>
        <LolProfile summerName={this.summerName} />
        <LolItem id="3751" />
        <LolItem id="3031" />
        <LolItem id="3742" />     
      </div>
    );
  }
}

const app = document.getElementById('root');

ReactDOM.render(<Layout/>, app);