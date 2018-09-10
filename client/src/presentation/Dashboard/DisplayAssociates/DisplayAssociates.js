import React, {Component} from "react";
import './DisplayAssociates.css';

class DisplayAssociates extends Component{

  componentDidMount(){
    this.props.fetchAllAssociatesAsync();
  }
  
  render(){
    return(
      <div id="display-associates">
        {!this.props.associates.length ? 'loading...' : this.props.associates.map((x,i) =>{
          return (
            <div className="associate" key={i}>
              <h2>{x.name}</h2>
              <img src={x.photoURL} alt="profile"/>
              <h3>Subjects: </h3>
              <ul>
                  {x.subjects === undefined ? "loading..." : x.subjects.map((y, j) => <li key={j}>{y}</li>)}
              </ul>
            </div>  
          )
        })} 
      </div>
    )
  }
}

export default DisplayAssociates;