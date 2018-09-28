import React, {Component} from "react";
import './Associates.css';
import SingleAssociate from './SingleAssociate/SingleAssociate';

class Associates extends Component{

  componentDidMount(){
    this.props.fetchAllAssociatesAsync();
  }
  
  render(){
    return(
      <div id="display-associates">
        {!this.props.associates.length ? 'loading...' : this.props.associates.map((x,i) =>
          <SingleAssociate
          key={i}
          name={x.name}
          photoURL={x.photoURL}
          bio="This is a bio about the user in the db"
          />
        )} 
      </div>
    )
  }
}

export default Associates;