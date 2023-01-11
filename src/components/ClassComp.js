import React, { Component } from 'react';

class ClassComp extends Component {

    constructor() {
        super();
        this.state = {data: "Class"};
      }
      render() {
        return(
            <div className="Class1">
                <h1>This is created using {this.state.data} Component</h1>
                <p className='card-para'>This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using internal CSS</p>
             </div> 
        )
      }
    
}

export default ClassComp;