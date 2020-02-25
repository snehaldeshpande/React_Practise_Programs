

import React from "react";
//Accessing child node in componenet
var count = 1;

class Access extends React.Component{

  render(){
    React.Children.map(this.props.Children, ()=>{
      console.log('child',count++)
    })
    return(
      <div>
      <ul>{ this.props.Children}</ul>
      </div>
    )
  }
}

export default Access;
