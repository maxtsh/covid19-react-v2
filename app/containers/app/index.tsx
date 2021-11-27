import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllRoutes from "containers/app/Routes";
import GlobalStyle from "styles/GlobalStyles";
import { Container } from "./styles";
import { RouteType } from "./Routes/types";
import "rsuite/dist/rsuite.min.css";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Routes>
          {AllRoutes.map((route: RouteType) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Container>
      <GlobalStyle />
    </Router>
  );
};
export default App;
