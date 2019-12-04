import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./component/user/listUserComponent";
import AddUserComponent from "./component/user/addUserComponent";
import EditUserComponent from "./component/user/editUserComponent";
import Header from './component/header';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <Router>
          <div className="col-md-6">
            <Switch>
              <Route path="/" exact component={ListUserComponent} />
              <Route path="/users" component={ListUserComponent} />
              <Route path="/add-user" component={AddUserComponent} />
              <Route path="/edit-user" component={EditUserComponent} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
