import React , {Component} from 'react';

export default class Result extends Component {
    render(){
        return(
            <>
            <h1>Calculator</h1>
            
            <input  type="text" value = { this.props.result }  /><br></br>
            {/* <input  type="text" value={this.props.output}  readOnly/> */}
            {/* value 1<input type="text" />
            value 2<input type="text" /> */}
            </>
            )
    }
    
}