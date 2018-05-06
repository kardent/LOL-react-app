import React from "react";

export default class LolProfile extends React.Component {
    constructor(){
      super();
      
      this.state = {
          level: 57,
          iconUrl: './assets/profileicon/603.png',
        };
    }

    setProfile(){
        fetch('https://crossorigin.me/https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Gandalf%20The%20Gay?api_key=RGAPI-3524d293-82d4-4589-9ce1-2b2ff5af6116')
        .then(blob => blob.json())
        .then(data => {

            const iconUrl = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/" + data.profileIconId + ".png"

            this.setState({level: data.summonerLevel});
            //this.setState({iconUrl: iconUrl});
            
            console.log(this.state);
            return data;
        })
        .catch(e => {
            console.log(e);
            return e;
        });
    }
    
    componentWillMount(){
        this.setProfile();        
    }
        //setProfile();4
        //var iconPath = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon" + {this.state.iconID};

    render(){
        return(
            <div className="inline-wrapper profile">
                <div className="left">
                    <img src={this.state.iconUrl} />
                </div>
                
                <div className="right">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Summoner Level:</th>
                                <td>{this.state.level}</td>
                            </tr>
                            <tr>
                                <th>Icon Url:</th>
                                <td>{this.state.iconUrl}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}