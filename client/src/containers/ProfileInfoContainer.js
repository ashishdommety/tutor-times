import {connect} from 'react-redux';
import ProfileInfo from '../presentation/Dashboard/Landing/ProfileInfo/ProfileInfo';

function mapStateToProps(state){
  return{
    profile: state.profile
  }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;