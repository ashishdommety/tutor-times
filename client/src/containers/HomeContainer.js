import { connect } from 'react-redux';
import Home from '../presentation/Home/Home';
import fetchGoogleData from '../actionCreators/async/fetchGoogleData';

function mapStateToProps(state){
  return {
    status: state.status,
    picture: state.picture
  }
}

function mapDispatchToProps(dispatch){  
  return{ 
    fetchGoogleData: (name, photo) => dispatch(fetchGoogleData(name, photo))
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;