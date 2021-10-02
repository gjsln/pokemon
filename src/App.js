import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Theme from './Theme';
import Header from './Components/Header';
import Main from './Components/MainComponents';
import DetailsComponent from './Components/DetailsComponent';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/details/:id' component={DetailsComponent} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
