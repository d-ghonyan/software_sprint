import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Index";
import SignIn from "./components/SignIn";


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/signin' element={< SignIn />}></Route>
      </Routes>
    </Router>
  );
}
