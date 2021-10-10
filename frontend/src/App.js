import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//page & layout imports
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';

import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <Router>
    <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/details/:id">
            <ReviewDetails />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
