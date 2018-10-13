import { connect } from 'react-redux';
import AllUsers from '../../presentation/Dashboard/Associates/AllUsers/AllUsers';
import fetchAllUsersAsync from '../../actionCreators/async/users/fetchAllUsersAsync';

function mapStateToProps(state){
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchAllUsersAsync: () => dispatch(fetchAllUsersAsync())
  }
}

const AllUsersContainer  = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;