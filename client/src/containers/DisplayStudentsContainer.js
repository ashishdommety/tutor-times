import { connect } from 'react-redux';
import DisplayStudents from '../presentation/Dashboard/DisplayStudents/DisplayStudents';
import { fetchAllStudentsAsync } from '../actionCreators/async';
// import ajax call to back-end

function mapStateToProps(state){
  return {
    associates: state.associates
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchAllStudentsAsync: () => dispatch(fetchAllStudentsAsync())
  }
}

const DisplayStudentsContainer  = connect(mapStateToProps, mapDispatchToProps)(DisplayStudents);

export default DisplayStudentsContainer;