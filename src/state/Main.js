import React from 'react';


class State extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"mukesh" ,
            age :"20"    
        }
    }
   
    changedata = () => {
        this.setState({name: "sunny" , age :"30"});        
    }
    handleClick= (e)=> {
        e.preventDefault();
        console.log('The link was clicked.');
        this.setState({name: "rohit" , age :"300"});  
      }
    
    render(){
        return(
            <>
                <p>Hi , {this.state.name} age is {this.state.age}</p>
                <button type="button" onClick={this.changedata} > Click to change the age</button>
                <a href="#" onClick={this.handleClick}> Click me  </a>
            </>
        )
    }
    
  
}
export default State;