import { connect } from 'react-redux';
import Notes from '../presentation/Dashboard/Notes/Notes';
import fetchAllNotesAsync from '../actionCreators/async/fetchAllNotesAsync';

function mapStateToProps(state){
  return {
    notes: state.notes
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchAllNotesAsync: () => dispatch(fetchAllNotesAsync())
  }
}

const NotesContainer = connect(mapStateToProps, mapDispatchToProps)(Notes);
export default NotesContainer; 