import { connect } from 'react-redux';
import Associates from '../presentation/Dashboard/Associates/Associates';
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

const AssociatesContainer  = connect(mapStateToProps, mapDispatchToProps)(Associates);

export default AssociatesContainer;