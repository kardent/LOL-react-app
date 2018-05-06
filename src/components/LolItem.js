import React from "react";

export default class LolItem extends React.Component {
    constructor(){
      super();
      
      this.state = {
          itemName:'',
          description: '',
          iconUrl: '',
          cost: '',
        };
    }

    setProfile(){
        const iconPath = './assets/item/' + this.props.id + '.png';
        this.setState({iconUrl: iconPath});

        fetch('./assets/item.json')
        .then(blob => blob.json())
        .then(data => {

            this.setState({itemName: data.data[this.props.id].name});
            this.setState({description: data.data[this.props.id].plaintext});
            this.setState({cost: data.data[this.props.id].gold.total});
            
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
    
    render(){
        return(
            <div className="inline-wrapper item">
                <div className="left">
                    <p><h3>{this.state.itemName}</h3></p>
                    <p><i>{this.props.id}</i></p>
                    <img src={this.state.iconUrl} />
                </div>
                
                <div className="right">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Cost:</th>
                                <td>{this.state.cost}</td>
                            </tr>
                            <tr>
                                <th>Item Name:</th>
                                <td>{this.state.itemName}</td>
                            </tr>
                            <tr>
                                <th>Item Description:</th>
                                <td>{this.state.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}