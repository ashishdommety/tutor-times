import { connect } from 'react-redux';
import DisplayAssociates from '../presentation/Dashboard/DisplayAssociates/DisplayAssociates';
import fetchAllAssociatesAsync from '../actionCreators/async/fetchAllAssociatesAsync';

function mapStateToProps(state){
  return {
    associates: state.associates
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchAllAssociatesAsync: () => dispatch(fetchAllAssociatesAsync())
  }
}

const DisplayAssociatesContainer  = connect(mapStateToProps, mapDispatchToProps)(DisplayAssociates);

export default DisplayAssociatesContainer;