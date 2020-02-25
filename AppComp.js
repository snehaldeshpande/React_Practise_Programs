import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class AppComp extends React.Component {
       render() {
               return(<React.Fragment>
                       <h1 style={{color:'green'}}>Welcome to React</h1>
                       <button className="btn btn-success">Submit</button>
               </React.Fragment>)
       }
}
export default AppComp;