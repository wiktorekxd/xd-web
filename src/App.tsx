import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './components/login-page/login-page';
import HomePage from './components/home/home-page';
import Dashboard from './components/dashboard/dashboard';
import {ProvideAuth} from './common-components/auth/provide-auth';
import ProtectedRoute from './common-components/auth/protected-route';

function App() {
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <ProtectedRoute path="/dashboard">
              <Dashboard />
            </ProtectedRoute>
            <Route path="*">
              <HomePage />
            </Route>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
