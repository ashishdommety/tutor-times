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
              <div className="btns">
                <button className="delete-note btn">x</button>
                <button className="edit-note btn">Edit</button>
              </div>
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