import React, { Component } from 'react';

class MyClass extends Component {
    constructor(props){
        super(props);
        this.state={name:props.fname};
        this.state={address:'Kotikatu'};
        this.setName=this.setName.bind(this);
        this.setAddress=this.setAddress.bind(this);
        this.updateName=this.updateName.bind(this);
    }
    setName() {
        this.setState({name:"No name"});    
    }
    setAddress(){
        this.setState({address:"Uusikatu"});
    }
    updateName = (event)=>{
        const userValue = event.target.value;
        this.setState({name:userValue}); 
        console.log(userValue);
    };

    render() {
        return (
            <div>
                <h2>MyClass</h2>
                <input  onChange={this.updateName}/>
                <p>Hello {this.state.name}</p>
                <button onClick={this.setName}>Set to NoName</button>
                <p>
                <button onClick={this.setAddress}>Aseta Uusi osoite</button>
                <label>{this.state.address}</label>
                </p>
            </div>
        );
    }
}

export default MyClass;