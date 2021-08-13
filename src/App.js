import { ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";
import { clear } from "./store/actions/alertAction";
import theme from "./styles/theme";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>{routes}</Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
