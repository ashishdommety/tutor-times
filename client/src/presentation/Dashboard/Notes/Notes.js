import React, {Component} from 'react';
import './Notes.css';

class Notes extends Component{
  componentDidMount(){
    this.props.fetchAllNotesAsync();
  }
  render(){
    return(
      <div id="allNotes">
        {!this.props.notes.length ? 
          "loading..." : this.props.notes.map((x,i) => 
            <div className="noteBlock" key={i}>
              <button>x</button>
              <button>Edit</button>
              <h2>{x.title}</h2>
              <h3>{x.date}</h3>
              <p>{x.content}</p>
            </div>
          )
           }
      </div>
    )
  }
}

export default Notes;