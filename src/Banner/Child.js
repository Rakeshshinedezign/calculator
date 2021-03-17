import React, { Component} from 'react';

import AnnouncementBarForm from './input.js';

class Child extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: '' ,
                    position: '',
                    delay : '',
                    background_color :'black',
                    text_color :'white',
                    close:'',
                    hide:'hide',
                    hideafterseconds:'',
                    animate:'',
            };
  
      this.handleChange = this.handleChange.bind(this);
      this.positionChange = this.positionChange.bind(this);
      this.delayonChange = this.delayonChange.bind(this);
      this.backgroundcolorChange = this.backgroundcolorChange.bind(this);
      this.textcolorChange = this.textcolorChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.showannoucementbar = this.showannoucementbar.bind(this);
      this.hideafterseconds = this.hideafterseconds.bind(this);
      this.animate = this.animate.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) { 
        this.setState({title: event.target.value });
        console.log(this.state.title)        
    }
    positionChange(event) {
        this.setState({position: event.target.value   });
        console.log(this.state.position)
    }
    delayonChange(event) { 
        this.setState({delay: event.target.value   });
        console.log(this.state.delay)
    }
    backgroundcolorChange(event) {
        this.setState({background_color: event.target.value   });
        console.log(this.state.background_color)
    }
    textcolorChange(event) {
        this.setState({text_color: event.target.value   });
        console.log(this.state.text_color)
    }
    animate(event) {
        this.setState({animate: event.target.value   });
        console.log(this.state.animate)
    }
    hide(event) {
       
        this.setState({close :'closebar'});
        console.log('hide div');     
    }
    hideafterseconds(event) {       
        this.setState({hideafterseconds :event.target.value});
        console.log('hide after seconds value')  
        console.log(this.state.hideafterseconds)           
    }
    showannoucementbar(event) {       
        this.setState({hide :'show'});
        console.log('Hello show div here');     
    }
    handleClick(e) {
    e.preventDefault();
    this.setState({close: 'closeannouncement'   });
    console.log(this.state.close)
    }

    handleSubmit(event) { 
     
      alert('Title: ' + this.state.title);
      alert('Position: ' + this.state.position);
      alert('Delay: ' + this.state.delay);
      event.preventDefault();
    }
      
    render() {
        
        
      return (
        <>  
            {/* if({this.state.position}){
                <p>HI Rakesh</p>
            } */}
            < AnnouncementBarForm />
            {/* <div className={this.state.hideafterseconds}>
                <div className={this.state.hide}>
                    <div className={this.state.close}> 
                        
                        <div className={this.state.position} style={{background: this.state.background_color}}  >
                            <div class="close" onClick={this.handleClick}>
                                &times;
                            </div>
                            <p width="100%" direction="scroll" direction="right" scrollamount={this.state.delay}>
                                <h1 className={this.state.animate} style={{color: this.state.text_color}}>{this.state.title}</h1>
                            </p>
                                                                    
                        </div>
                    </div> 
                </div>
            </div>    
            <form onSubmit={this.handleSubmit}>
                
                <table>
                    <tr>
                            <td>Title:</td>
                        <td><input type="text" className="title"  value={this.state.title} onChange={this.handleChange} /></td>      
                    </tr>
                    <tr>
                        <td>  Position:</td>
                        <td>
                            <select value={this.state.position} onChange={this.positionChange}>            
                                <option value="top">Top</option>
                                <option value="bottom">Bottom</option>
                                <option value="center">Center</option>
                                <option value="left">Left</option>
                                <option value="right">Right</option>

                            </select>
                        </td>       
                    </tr>
                    <tr>
                        <td>  Delay:</td>
                        <td>
                            <select value={this.state.delay} onChange={this.delayonChange}>            
                                <option value="2">2</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="40">40</option>
                            </select>
                        </td>       
                    </tr>
                    <tr>
                        <td>  Hide After Seconds:</td>
                        <td>
                            <select value={this.state.hideafterseconds} onChange={this.hideafterseconds}>            
                                
                                <option value="hide-after-5sec">5 sec</option>                               
                                <option value="hide-after-10sec">10 sec</option>
                                <option value="no-hide">No Hide</option>
                            </select>
                        </td>       
                    </tr>
                    
                    <tr>
                        <td>  Want Animated element:</td>
                        <td>
                            <select value={this.state.animate}  onChange={this.animate}>animate            
                                <option value="animate">Yes</option>
                                <option value="no-animate">No</option>
                                
                            </select>
                        </td>       
                    </tr>
                    <tr>
                        <td>Background Color</td>
                        <td><input type="color" value={this.state.background_color} onChange={this.backgroundcolorChange} /></td>       
                    </tr>
                    <tr>
                        <td>Text Color</td>
                        <td><input type="color"  value={this.state.text_color} onChange={this.textcolorChange} /></td>       
                    </tr>
                    <tr>
                        <td> <input type="submit" value="Submit" /></td>
                        <td></td>             
                    </tr>
                    
                </table>
            </form> 
            <button onClick={this.showannoucementbar}>Show Changes</button>           */}
        </>
      );
    }
  }

  export default Child;