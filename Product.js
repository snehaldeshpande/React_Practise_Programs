  
  import React from 'react';
  
  
  class Product extends React.Component{
      constructor(){
        super();
        this.state = {
          counter : 1        
          }
      }
  handleClick = (e) => {
    this.setState({counter:this.state.counter+1})
}
     render(){
    return(
     <div>
     <h2> Seconds Elapsed: {this.state.counter} </h2>
            <button onClick = {this.handleClick}> Increment Counter </button>
      </div>
    )
  }
  }
export default Product;