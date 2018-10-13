import React, {Component} from 'react';

class SingleAssociate extends Component{
  render(){
    return (
      <div className="associate">
        <h2>{this.props.name}</h2>
        <img src={this.props.photoURL} alt="profile"/>
        <p>{this.props.bio}</p>
      </div>  
    )
  }
}

export default SingleAssociate;