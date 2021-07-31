import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './component/Home'
import FormUser from './component/FormUser'

const App = () => {
  return (
    <Router>
      <div className="content">
        <div className="container">
          <div>
            <h2>User Dashboard</h2>
          </div>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add' exact component={FormUser} />
            <Route path='/update/:id' exact component={FormUser} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;