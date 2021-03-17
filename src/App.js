import React, { Component} from 'react';
//import './App.css';
import Calculator from './components/calculator';
import Data from './props/Props.js';
import State from './state/Main.js';
import Banner from './Banner/Form.js';
import Register from './Register-login/register.js'

//import ImagesExample from './ImagesExample.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[{
        url:"product2.png",
        active:true,
        index:0
      },{
        url:"product1.png",
        active:true,
        index:1
      },{
        url:"image_4.png",
        active:true,
        index:2
      },{
        url:"image_8.png",
        active:true,
        index:3
      }],
      selected:0,
      first:0,
      last:3,
    
    }
    console.log(this.state.selected)
    this.manageSlider = this.manageSlider.bind(this)
    
  }

  manageSlider(){
    let data = this.state.data[this.state.selected];
    return(
      <div  >
        <a onClick={()=>{
          if(this.state.selected === '0'){
            console.log('rakesh')
            this.setState({
              selected:this.state.last,
            })
            
          }else{
          this.setState({
            selected:this.state.selected-1,
          })
          console.log(this.state.selected)
        }
          
        }} className="previous">&#8249;</a>
          <img src={data.url} alt="Slider Image"/>

        <a onClick={()=>{
          this.setState({
            selected:this.state.selected+1,
          })
          console.log(this.state.selected)

        }
        } className="next">&#8250;</a>
    </div>
    )
  }
  // toggle() {
  //   this.setState({addClass: !this.state.addClass});
  // }
   render(){
    
   return (
     <>
      <div className="mainclass" >
        {/* <div className={image.join(' ')} onClick={this.toggle.bind(this)} >
            <a href="" className="previous ">&#8249;</a>
              <img src="product1.png" alt="BigCo Inc. logo"/>
            <a href="" className="next">&#8250;</a>
        </div>
        <div className= {image2.join(' ')} onClick={this.toggle.bind(this)} >
            <a href="" className="previous">&#8249;</a>
              <img src="product2.png" alt="BigCo Inc. logo"/>
            <a href="" className="next">&#8250;</a>
        </div>
        <div className= {image.join(' ')}   >
            <a href="" className="previous">&#8249;</a>
              <img src="image_4.png" alt="BigCo Inc. logo"/>
            <a href="" className="next">&#8250;</a>
        </div> */}
        {/* <Calculator /> */}
        <Banner />
        
        {/* < Data data={1}/>
        < Data data={2}/>
        <State />
        
        {this.manageSlider()} */}
       
        
      </div>
        
    </>
   )
  }
}


export default App