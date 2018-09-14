import { connect } from 'react-redux';
import Notes from '../presentation/Dashboard/Notes/Notes';

function mapStateToProps(state){
  return {
    notes: state.notes
  }
}

const NotesContainer = connect(mapStateToProps)(Notes);
export default NotesContainer; 