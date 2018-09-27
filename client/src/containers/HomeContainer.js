import { connect } from 'react-redux';
import Home from '../presentation/Home/Home';
import fetchUserAsync from '../actionCreators/async/users/fetchUserAsync';

function mapStateToProps(state){
  return {
    pathName: state.pathName
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    fetchUserAsync: (google_id) => dispatch(fetchUserAsync(google_id))
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;