import { connect } from 'react-redux';
import Classes from '../presentation/Dashboard/Classes/Classes';
import { fetchAllClassesAsync } from '../actionCreators/async';

function mapStateToProps(state){
  return {
    classes: state.classes
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchAllClassesAsync: () => dispatch(fetchAllClassesAsync())
  }
}
const ClassesContainer = connect(mapStateToProps, mapDispatchToProps)(Classes);

export default ClassesContainer;