import React, {Component} from 'react';
import './Dashboard.css';
import {Switch, Route} from 'react-router-dom';
import NavigationContainer from '../../containers/NavigationContainer';
import LandingContainer from '../../containers/LandingContainer';
import AssociatesContainer from '../../containers/AssociateContainers/AssociatesContainer';
import NotesContainer from '../../containers/NoteContainers/NotesContainer';
import AllUsersContainer from '../../containers/UserContainers/AllUsersContainer';
import QuizProfile from '../../containers/QuizContainers/QuizProfile';
import CreateQuizContainer from '../../containers/QuizContainers/CreateQuizContainer';
import QuizBeginContainer from '../../containers/QuizContainers/QuizBeginContainer';
import NewQuestionContainer from '../../containers/QuizContainers/NewQuestionContainer';
import QuizReview from "./Quiz/QuizReview/QuizReview";
import EditOneQuestion from "./Quiz/QuizReview/EditOneQuestion/EditOneQuestion";
// import NewQuestion from './Quiz/CreateQuiz/NewQuestion/NewQuestion';
// import QuizBegin from './Quiz/QuizBegin/QuizBegin';

class Dashboard extends Component{

  componentDidMount(){
    this.props.fetchUserAsync(localStorage.google_id);
  }
  
  determineOpposite(title){
    return title === "tutor" ? "students" : "tutors";
  }

  render(){
    return (
        <div className="dash">
        <NavigationContainer title={this.determineOpposite(this.props.title)}/>
        {!localStorage.length ? 
          <h1 className="error-message">Please log in</h1>:
          <Switch>
            <Route exact={true} path={this.props.match.path + "/"} component={LandingContainer}/>
            <Route exact={true} path={this.props.match.path + "/" + this.determineOpposite(this.props.title)} component={AssociatesContainer}/>
            <Route exact={true} path={this.props.match.path + "/notes"} component={NotesContainer}/>
            <Route exact={true} path={this.props.match.path + "/display-users"} component={AllUsersContainer}/>
            <Route exact={true} path={this.props.match.path + "/quiz"} component={QuizProfile}/>
            <Route exact={true} path={this.props.match.path + "/quiz/:name"} component={QuizBeginContainer}/>
            <Route exact={true} path={this.props.match.path + "/quiz/create/new" } component={CreateQuizContainer}/>
            <Route exact={true} path={this.props.match.path + "/quiz/create/new/new-question"} component={NewQuestionContainer}/>
            <Route exact={true} path={this.props.match.path + "/quiz/review/:name"} component={QuizReview}/>
            <Route exact={true} path={this.props.match.path + "/quiz/review/:name/edit/:num"} component={EditOneQuestion}/>
          </Switch>
        }
        </div>
    )
  }
}


export default Dashboard;