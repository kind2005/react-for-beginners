import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Todos from "./Todos";
import CoinList from "./CoinList";
import Test4 from "./Test4";
import BaseLayout from "./layout/BaseLayout";
import useTitle from "./component/useTitle";

function App() {
  const titleUpdater = useTitle("Loading...");
  
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL+"/"} element={ <BaseLayout /> } >
          <Route path={process.env.PUBLIC_URL+"/"} element={ <Home /> } />
          <Route path={process.env.PUBLIC_URL+"/movie/:id"} element={ <Detail /> } />
          <Route path={process.env.PUBLIC_URL+"/todos"} element={ <Todos /> } />
          <Route path={process.env.PUBLIC_URL+"/coinList"} element={ <CoinList /> } />
          <Route path={process.env.PUBLIC_URL+"/test"} element={ <Test4 /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
