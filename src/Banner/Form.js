import React, { Component} from 'react';
import Child from './Child.js'

class Banner extends React.Component{
    state = {
        numChildren: 0
      }
    
      render () {
        const children = [];
    
        for (var i = 0; i < this.state.numChildren; i += 1) {
          children.push(<Child  />);
        };
    
        return (
          <ParentComponent addChild={this.onAddChild}>
            {children} {this.state.numChildren}
          </ParentComponent>
        );
      }
    
      onAddChild = () => {
        this.setState({
          numChildren: this.state.numChildren + 1
        });
      }
    }
    
    const ParentComponent = props => (
      <div className="card announcement">
         
          <div id='hideMe'>Wait for it...</div>
        <button onClick={props.addChild}>Add Another Child Component</button>
        <div id="children-pane">
          {props.children}
        </div>
      </div>
    );
  export default Banner;