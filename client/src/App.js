import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Index";
import SigninPage from "./pages/SignInPage";
import Login from "./components/SignIn";
import Register from "./components/Register";
import Services from "./components/Services";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/signin' element={< SigninPage />}></Route>
        <Route path='/events' element={< Services />}></Route>
        <Route path="/signup" element={<Register />}> </Route>
        <Route path="/login" element={<Login />} >    </Route>
      </Routes>
    </Router>
  );
}


