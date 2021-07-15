import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <>
     <Switch>
        <Route exact path="/user-info" component={ UserInfo } />
        <Route exact path="/login" component={LoginForm} />
        <Redirect from="/" to="/login" component={ UserInfo } />
      </Switch>
    </>
  );
}

export default App;
