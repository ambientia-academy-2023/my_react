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
            <div className="container">
                <h2>MyClass</h2>
                <p>
                    <input  onChange={this.updateName}/>
                </p>
                <p>
                    Hello {this.state.name}
                </p>
                <p>
                    <button className='btn btn-primary'  onClick={this.setName}>Set to NoName</button>
                </p>
                <p>
                    <button className='btn btn-primary'  onClick={this.setAddress}>Aseta Uusi osoite</button><br/>
                    <label>{this.state.address}</label>
                </p>
            </div>
        );
    }
}

export default MyClass;