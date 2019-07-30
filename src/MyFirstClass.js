import React from 'react';

export default class MyFirstClass extends React.Component{
    constructor() {
        super();
        this.state={UserDetails:'.....', Displayed: false};
      }
     
    render(){
        return <p onClick={() =>{
            this.setState({Displayed: true});
            this.setState({UserDetails:'name,age'});
        }}>User Details:{this.state.UserDetails}{this.state.Displayed}</p>
      
        
    }
}