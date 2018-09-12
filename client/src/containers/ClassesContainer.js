import { connect } from 'react-redux';
import Classes from '../presentation/Dashboard/Classes/Classes';

function mapStateToProps(state){
  return {
    classes: state.classes
  }
}
const ClassesContainer = connect(mapStateToProps)(Classes);

export default ClassesContainer;