import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from 'Containers/app/Routes';
import GlobalStyle from 'Styles/GlobalStyles';
import { Container } from './styles';

const App: React.FC = () => {
    return (
      <Router>
        <Container>
          <Switch>
            {Routes.map(route => 
              <Route 
                  key={route.name}
                  exact={route.exact} 
                  path={route.path} 
                  component={route.component} 
              />
            )}
          </Switch>
        </Container>
        <GlobalStyle />
      </Router>
    )
}
export default App;